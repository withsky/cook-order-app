package com.cookorder.app

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Environment
import android.provider.MediaStore
import android.view.View
import android.view.WindowManager
import android.webkit.*
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import androidx.core.content.FileProvider
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import java.io.File
import java.io.FileOutputStream

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var fileUploadCallback: ValueCallback<Array<Uri>>? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // 沉浸式状态栏
        WindowCompat.setDecorFitsSystemWindows(window, false)
        val controller = WindowInsetsControllerCompat(window, window.decorView)
        controller.hide(WindowInsetsCompat.Type.systemBars())
        controller.systemBarsBehavior =
            WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE

        // 全屏
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        webView = WebView(this)
        setContentView(webView)

        // WebView 配置
        webView.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            allowUniversalAccessFromFileURLs = true
            allowFileAccessFromFileURLs = true
            mixedContentMode = WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
            cacheMode = WebSettings.LOAD_DEFAULT
            useWideViewPort = true
            loadWithOverviewMode = true
            setSupportZoom(false)
            builtInZoomControls = false
            displayZoomControls = false
            defaultTextEncodingName = "UTF-8"
            databaseEnabled = true
        }

        // WebViewClient 处理链接和错误
        webView.webViewClient = object : WebViewClient() {
            override fun onReceivedError(view: WebView, errorCode: Int, description: String, failingUrl: String) {
                android.util.Log.e("WebView", "Error: $errorCode - $description - $failingUrl")
            }

            // 处理下载请求
            override fun shouldOverrideUrlLoading(view: WebView, request: WebResourceRequest): Boolean {
                val url = request.url.toString()
                if (url.startsWith("blob:") || url.startsWith("data:")) {
                    return false
                }
                return super.shouldOverrideUrlLoading(view, request)
            }
        }

        // WebChromeClient 处理文件选择和控制台
        webView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(message: ConsoleMessage?): Boolean {
                message?.let {
                    android.util.Log.d("WebView", "${it.message()} -- ${it.sourceId()}:${it.lineNumber()}")
                }
                return true
            }

            // 处理文件选择（图片上传）
            override fun onShowFileChooser(
                webView: WebView,
                filePathCallback: ValueCallback<Array<Uri>>,
                fileChooserParams: FileChooserParams
            ): Boolean {
                // 如果有之前的回调，先取消
                fileUploadCallback?.onReceiveValue(null)
                fileUploadCallback = filePathCallback

                // 创建文件选择 Intent
                val intent = Intent(Intent.ACTION_GET_CONTENT)
                intent.addCategory(Intent.CATEGORY_OPENABLE)
                intent.type = "*/*"

                // 支持图片选择
                val mimeTypes = arrayOf("image/*", "video/*")
                intent.putExtra(Intent.EXTRA_MIME_TYPES, mimeTypes)

                try {
                    fileChooserLauncher.launch(intent)
                } catch (e: Exception) {
                    android.util.Log.e("WebView", "File chooser error: ${e.message}")
                    fileUploadCallback = null
                    return false
                }

                return true
            }
        }

        // 禁用长按选择文字
        webView.setOnLongClickListener { true }
        webView.isHapticFeedbackEnabled = false

        // 添加 JavaScript 接口，用于导出文件
        webView.addJavascriptInterface(FileExportInterface(), "FileExport")

        // 加载本地 HTML
        webView.loadUrl("file:///android_asset/index.html")
    }

    // 文件选择器回调
    private val fileChooserLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == Activity.RESULT_OK) {
            val resultData = result.data
            // 处理单个或多个文件
            val results: Array<Uri>? = if (resultData?.data != null) {
                arrayOf(resultData.data!!)
            } else {
                null
            }
            fileUploadCallback?.onReceiveValue(results)
        } else {
            fileUploadCallback?.onReceiveValue(null)
        }
        fileUploadCallback = null
    }

    // 文件导出接口
    inner class FileExportInterface {
        @JavascriptInterface
        fun exportFile(filename: String, data: String) {
            try {
                // 保存到下载目录
                val downloadsDir = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS)
                val file = File(downloadsDir, filename)
                
                FileOutputStream(file).use { fos ->
                    fos.write(data.toByteArray())
                }

                runOnUiThread {
                    Toast.makeText(this@MainActivity, "文件已保存到: ${file.absolutePath}", Toast.LENGTH_LONG).show()
                    
                    // 打开文件管理器显示文件
                    val intent = Intent(Intent.ACTION_VIEW)
                    intent.setDataAndType(Uri.fromFile(downloadsDir), "resource/folder")
                    try {
                        startActivity(intent)
                    } catch (e: Exception) {
                        // 如果无法打开，打开下载目录
                    }
                }
            } catch (e: Exception) {
                android.util.Log.e("FileExport", "Export error: ${e.message}")
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "导出失败: ${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }

        @JavascriptInterface
        fun shareFile(filename: String, data: String) {
            try {
                // 创建临时文件
                val tempFile = File(cacheDir, filename)
                FileOutputStream(tempFile).use { fos ->
                    fos.write(data.toByteArray())
                }

                // 分享文件
                val uri = FileProvider.getUriForFile(
                    this@MainActivity,
                    "${packageName}.fileprovider",
                    tempFile
                )

                val shareIntent = Intent(Intent.ACTION_SEND)
                shareIntent.type = "application/json"
                shareIntent.putExtra(Intent.EXTRA_STREAM, uri)
                shareIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)

                runOnUiThread {
                    startActivity(Intent.createChooser(shareIntent, "分享备份文件"))
                }
            } catch (e: Exception) {
                android.util.Log.e("FileExport", "Share error: ${e.message}")
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "分享失败: ${e.message}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }

    override fun onDestroy() {
        webView.destroy()
        super.onDestroy()
    }
}
