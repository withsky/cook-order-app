// ===== 菜单数据（默认） =====
const defaultMenuData = [
    {
        id: 'homestyle', name: '家常小炒', icon: 'homeFood', image: '',
        items: [
            { id: 1, name: '红烧肉', emoji: '🥩', image: '', desc: '肥而不腻，入口即化，经典妈妈味', price: 28, sales: 326, tags: ['招牌', '必点'], orderCount: 0, comments: [] },
            { id: 2, name: '可乐鸡翅', emoji: '🍗', image: '', desc: '甜香入味，色泽诱人，小朋友最爱', price: 22, sales: 258, tags: ['人气'], orderCount: 0, comments: [] },
            { id: 3, name: '糖醋排骨', emoji: '🍖', image: '', desc: '酸甜适口，外酥里嫩，回味无穷', price: 32, sales: 189, tags: ['招牌'], orderCount: 0, comments: [] },
            { id: 4, name: '蒜蓉虾', emoji: '🦐', image: '', desc: '鲜嫩弹牙，蒜香四溢，海鲜必点', price: 38, sales: 145, tags: ['海鲜'], orderCount: 0, comments: [] },
            { id: 5, name: '番茄炒蛋', emoji: '🍅', image: '', desc: '国民家常菜，酸甜下饭，永远的神', price: 12, sales: 520, tags: ['下饭'], orderCount: 0, comments: [] },
            { id: 6, name: '青椒肉丝', emoji: '🫑', image: '', desc: '清爽脆嫩，肉丝滑嫩，简单美味', price: 16, sales: 287, tags: ['快手菜'], orderCount: 0, comments: [] },
            { id: 7, name: '麻婆豆腐', emoji: '🫘', image: '', desc: '麻辣鲜香，豆腐嫩滑，米饭杀手', price: 14, sales: 312, tags: ['辣', '下饭'], orderCount: 0, comments: [] },
            { id: 8, name: '干煸四季豆', emoji: '🥬', image: '', desc: '焦香入味，咸鲜可口，素菜之王', price: 13, sales: 198, tags: ['素菜'], orderCount: 0, comments: [] },
            { id: 9, name: '鱼香肉丝', emoji: '🌶️', image: '', desc: '酸甜微辣，鱼香四溢，川味经典', price: 18, sales: 276, tags: ['川味', '辣'], orderCount: 0, comments: [] },
            { id: 10, name: '地三鲜', emoji: '🍆', image: '', desc: '土豆茄子青椒，东北经典家常味', price: 15, sales: 203, tags: ['素菜'], orderCount: 0, comments: [] },
        ]
    },
    {
        id: 'staple', name: '主食', icon: 'rice', image: '',
        items: [
            { id: 11, name: '蛋炒饭', emoji: '🍳', image: '', desc: '粒粒分明，蛋香浓郁，简单满足', price: 10, sales: 445, tags: ['人气'], orderCount: 0, comments: [] },
            { id: 12, name: '葱油拌面', emoji: '🍜', image: '', desc: '葱香扑鼻，面条劲道，上海味道', price: 12, sales: 198, tags: ['面食'], orderCount: 0, comments: [] },
            { id: 13, name: '馒头', emoji: '🫓', image: '', desc: '松软白馒头，配菜绝配', price: 2, sales: 380, tags: ['主食'], orderCount: 0, comments: [] },
            { id: 14, name: '白米饭', emoji: '🍚', image: '', desc: '东北五常大米，颗颗饱满', price: 3, sales: 890, tags: ['必备'], orderCount: 0, comments: [] },
        ]
    },
    {
        id: 'soup', name: '汤品', icon: 'soup', image: '',
        items: [
            { id: 15, name: '番茄蛋花汤', emoji: '🍲', image: '', desc: '酸甜开胃，蛋花轻盈，暖心暖胃', price: 10, sales: 267, tags: ['清淡'], orderCount: 0, comments: [] },
            { id: 16, name: '紫菜蛋汤', emoji: '🍵', image: '', desc: '鲜美清爽，简单快捷，营养满分', price: 8, sales: 189, tags: ['清淡'], orderCount: 0, comments: [] },
            { id: 17, name: '玉米排骨汤', emoji: '🌽', image: '', desc: '慢炖两小时，汤鲜味美，滋补佳品', price: 22, sales: 134, tags: ['滋补'], orderCount: 0, comments: [] },
        ]
    },
    {
        id: 'drink', name: '饮品', icon: 'drink', image: '',
        items: [
            { id: 18, name: '柠檬蜂蜜水', emoji: '🍋', image: '', desc: '新鲜柠檬+蜂蜜，酸甜解腻', price: 8, sales: 234, tags: ['自制'], orderCount: 0, comments: [] },
            { id: 19, name: '酸梅汤', emoji: '🫙', image: '', desc: '古法熬制，冰镇更好喝', price: 6, sales: 312, tags: ['冰镇'], orderCount: 0, comments: [] },
            { id: 20, name: '热豆浆', emoji: '🥛', image: '', desc: '现磨浓香，温暖每一天', price: 5, sales: 178, tags: ['热饮'], orderCount: 0, comments: [] },
        ]
    },
    {
        id: 'dessert', name: '甜品', icon: 'cake', image: '',
        items: [
            { id: 21, name: '红糖糍粑', emoji: '🍡', image: '', desc: '外酥里糯，红糖浓郁，甜蜜暴击', price: 12, sales: 198, tags: ['甜蜜'], orderCount: 0, comments: [] },
            { id: 22, name: '水果沙拉', emoji: '🥗', image: '', desc: '新鲜时令水果，健康又美味', price: 15, sales: 145, tags: ['健康'], orderCount: 0, comments: [] },
            { id: 23, name: '双皮奶', emoji: '🍮', image: '', desc: '顺德正宗，奶香浓厚，丝滑口感', price: 10, sales: 167, tags: ['顺德'], orderCount: 0, comments: [] },
        ]
    }
];

// ===== 状态管理 =====
let menuData = [];
let cart = {};
let currentCategory = 0;
let searchQuery = '';
let currentPage = 'menu';
let editingDishId = null;
let nextDishId = 100;
let customBackground = '';
let customAvatar = '';

// ===== 数据持久化 =====
function loadMenuData() {
    const saved = localStorage.getItem('cookMenuData');
    if (saved) {
        menuData = JSON.parse(saved);
        nextDishId = menuData.reduce((max, cat) => {
            const catMax = cat.items.reduce((m, item) => Math.max(m, item.id), 0);
            return Math.max(max, catMax);
        }, 100) + 1;
    } else {
        menuData = JSON.parse(JSON.stringify(defaultMenuData));
        saveMenuData();
    }
}

function saveMenuData() {
    localStorage.setItem('cookMenuData', JSON.stringify(menuData));
}

function getUserConfig() {
    return JSON.parse(localStorage.getItem('cookUserConfig') || '{"nickname":"","totalOrders":0,"avatar":""}');
}

function saveUserConfig(config) {
    localStorage.setItem('cookUserConfig', JSON.stringify(config));
}

// ===== 主题管理 =====
const themes = [
    { id: 'sunset', name: '暖阳橙', class: 'theme-sunset' },
    { id: 'sakura', name: '樱花粉', class: 'theme-sakura' },
    { id: 'mint', name: '薄荷绿', class: 'theme-mint' },
    { id: 'galaxy', name: '星空紫', class: 'theme-galaxy' },
    { id: 'ocean', name: '深海蓝', class: 'theme-ocean' },
    { id: 'matcha', name: '抹茶绿', class: 'theme-matcha' },
    { id: 'peach', name: '蜜桃橙', class: 'theme-peach' },
    { id: 'dark', name: '暗夜模式', class: 'theme-dark' }
];

const patterns = [
    { id: 'none', name: '无' },
    { id: 'dots', name: '圆点' },
    { id: 'waves', name: '波浪' },
    { id: 'circles', name: '光晕' }
];

let currentTheme = 'sunset';
let currentPattern = 'none';

function loadTheme() {
    const saved = localStorage.getItem('cookTheme');
    if (saved) {
        const config = JSON.parse(saved);
        currentTheme = config.theme || 'sunset';
        currentPattern = config.pattern || 'none';
    }
    applyTheme();
}

function saveTheme() {
    localStorage.setItem('cookTheme', JSON.stringify({
        theme: currentTheme,
        pattern: currentPattern
    }));
}

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    document.body.className = currentPattern !== 'none' ? `pattern-${currentPattern}` : '';
}

function setTheme(themeId) {
    currentTheme = themeId;
    applyTheme();
    saveTheme();
}

function setPattern(patternId) {
    currentPattern = patternId;
    applyTheme();
    saveTheme();
}

// ===== 背景图片管理 =====
function loadBackgroundImage() {
    const saved = localStorage.getItem('cookBackground');
    if (saved) {
        customBackground = saved;
        applyBackgroundImage();
    }
}

function applyBackgroundImage() {
    const layer = document.getElementById('bgImageLayer');
    if (layer) {
        if (customBackground) {
            layer.style.backgroundImage = `url(${customBackground})`;
            layer.classList.add('has-image');
        } else {
            layer.style.backgroundImage = '';
            layer.classList.remove('has-image');
        }
    }
}

function setBackgroundImage(imageData) {
    customBackground = imageData;
    localStorage.setItem('cookBackground', imageData);
    applyBackgroundImage();
}

function clearBackgroundImage() {
    customBackground = '';
    localStorage.removeItem('cookBackground');
    applyBackgroundImage();
}

// ===== 头像管理 =====
function loadAvatar() {
    const config = getUserConfig();
    customAvatar = config.avatar || '';
}

function setAvatar(imageData) {
    const config = getUserConfig();
    config.avatar = imageData;
    saveUserConfig(config);
    customAvatar = imageData;
}

function clearAvatar() {
    const config = getUserConfig();
    config.avatar = '';
    saveUserConfig(config);
    customAvatar = '';
}

// ===== 图片搜索 =====
async function searchFoodImages(query) {
    // 使用免费图片 API
    const encodedQuery = encodeURIComponent(query + ' 美食 菜品');
    const url = `https://api.unsplash.com/search/photos?query=${encodedQuery}&per_page=10&client_id=demo`;
    
    // 备用：使用 Lorem Picsum 的搜索
    const fallbackUrl = `https://source.unsplash.com/featured/200x200/?${encodedQuery}`;
    
    return [
        { url: `https://source.unsplash.com/200x200/?${encodedQuery}`, source: 'Unsplash' }
    ];
}

// ===== 页面切换 =====
const pageTitles = {
    menu: { title: '男友私厨', subtitle: '想吃什么，告诉我就好' },
    orders: { title: '订单记录', subtitle: '查看历史订单' },
    manage: { title: '菜单管理', subtitle: '管理菜品信息' },
    profile: { title: '我的', subtitle: '个人信息设置' }
};

function switchPage(page) {
    if (currentPage === page) return;
    currentPage = page;

    document.querySelectorAll('.page').forEach(p => p.classList.remove('page-active'));
    document.getElementById(`page-${page}`).classList.add('page-active');

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');

    const info = pageTitles[page];
    document.getElementById('pageTitle').textContent = info.title;
    document.getElementById('pageSubtitle').textContent = info.subtitle;

    if (page === 'orders') renderOrderPage();
    if (page === 'manage') renderManagePage();
    if (page === 'profile') renderProfilePage();
}

// ===== DOM 元素 =====
const categorySidebar = document.getElementById('categorySidebar');
const foodList = document.getElementById('foodList');
const cartBadge = document.getElementById('cartBadge');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartFloatBtn = document.getElementById('cartFloatBtn');
const cartModal = document.getElementById('cartModal');
const cartModalBody = document.getElementById('cartModalBody');
const cartModalTotal = document.getElementById('cartModalTotal');
const orderModal = document.getElementById('orderModal');
const orderSummary = document.getElementById('orderSummary');
const orderNote = document.getElementById('orderNote');
const doneModal = document.getElementById('doneModal');
const doneOrderInfo = document.getElementById('doneOrderInfo');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');

// ===== 初始化 =====
function init() {
    loadMenuData();
    loadTheme();
    loadBackgroundImage();
    loadAvatar();
    setupIcons();
    renderCategories();
    renderFoodList();
    bindEvents();
}

// ===== 图标设置 =====
function setupIcons() {
    document.getElementById('navIconMenu').innerHTML = getIcon('home', 24);
    document.getElementById('navIconOrders').innerHTML = getIcon('clipboard', 24);
    document.getElementById('navIconManage').innerHTML = getIcon('settings', 24);
    document.getElementById('navIconProfile').innerHTML = getIcon('user', 24);
    document.getElementById('headerIcon').innerHTML = getIcon('chef', 32);
    document.getElementById('searchIcon').innerHTML = getIcon('search', 16);
    document.getElementById('searchClear').innerHTML = getIcon('x', 14);
    document.getElementById('cartFloatIcon').innerHTML = getIcon('cart', 24);
    document.querySelectorAll('.modal-close').forEach(btn => {
        if (!btn.innerHTML) btn.innerHTML = getIcon('x', 18);
    });
    document.getElementById('orderSuccessIcon').innerHTML = getIcon('check', 48);
    document.getElementById('doneIcon').innerHTML = getIcon('chef', 64);
}

// ===== 渲染分类（含常点） =====
function getCategoriesWithFrequent() {
    const orders = JSON.parse(localStorage.getItem('cookOrders') || '[]');
    const dishCount = {};
    
    orders.forEach(order => {
        order.items.forEach(item => {
            if (!dishCount[item.id]) dishCount[item.id] = { ...item, count: 0 };
            dishCount[item.id].count += item.qty;
        });
    });
    
    const topDishes = Object.values(dishCount)
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    
    if (topDishes.length === 0) return menuData;
    
    // 创建"常点的菜"分类
    const frequentCategory = {
        id: 'frequent',
        name: '常点的菜',
        icon: 'trending',
        image: '',
        items: topDishes.map(d => ({
            ...d,
            tags: [...(d.tags || []), `已点${d.count}次`]
        }))
    };
    
    return [frequentCategory, ...menuData];
}

function renderCategories() {
    const categories = getCategoriesWithFrequent();
    categorySidebar.innerHTML = categories.map((cat, i) => {
        const iconHtml = cat.image 
            ? `<img src="${cat.image}" class="category-icon-img" alt="${cat.name}">`
            : `<span class="category-icon">${getIcon(cat.icon || 'tag', 24)}</span>`;
        
        return `
            <div class="category-item ${i === currentCategory ? 'active' : ''}" data-index="${i}">
                ${iconHtml}
                ${cat.name}
            </div>
        `;
    }).join('');
}

// ===== 渲染菜品列表 =====
function renderFoodList() {
    const categories = getCategoriesWithFrequent();
    let filteredData = categories;
    
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filteredData = categories.map(cat => ({
            ...cat,
            items: cat.items.filter(item =>
                item.name.includes(q) ||
                item.desc.includes(q) ||
                item.tags.some(t => t.includes(q))
            )
        })).filter(cat => cat.items.length > 0);
    }

    if (filteredData.length === 0) {
        foodList.innerHTML = `
            <div class="no-result">
                <div class="no-result-icon">${getIcon('search', 48)}</div>
                <div class="no-result-text">没有找到 "${searchQuery}" 相关的菜品</div>
            </div>`;
        return;
    }

    foodList.innerHTML = filteredData.map(cat => `
        <div class="food-section" data-category="${cat.id}">
            <div class="food-section-title">${cat.name}</div>
            ${cat.items.map(item => renderFoodCard(item)).join('')}
        </div>
    `).join('');
}

// ===== 渲染单个菜品卡片 =====
function renderFoodCard(item) {
    const qty = cart[item.id] || 0;
    const isSignature = item.tags && item.tags.includes('招牌');
    
    const imageHtml = item.image 
        ? `<img src="${item.image}" class="food-image" alt="${item.name}">`
        : `<div class="food-emoji">${item.emoji}</div>`;
    
    const tagsHtml = (item.tags || []).map(t => {
        const cls = t === '招牌' || t === '必点' || t === '人气' ? 'hot' : '';
        return `<span class="food-tag ${cls}">${t}</span>`;
    }).join('');
    
    const orderCountHtml = item.orderCount > 0 ? `<span class="food-order-count">已点${item.orderCount}次</span>` : '';

    return `
        <div class="food-card ${isSignature ? 'signature' : ''}" data-id="${item.id}">
            <div class="food-image-wrap" data-action="detail" data-id="${item.id}">
                ${imageHtml}
            </div>
            <div class="food-info">
                <div>
                    <div class="food-name" data-action="detail" data-id="${item.id}">
                        ${item.name}
                        ${isSignature ? '<span class="signature-badge">招牌</span>' : ''}
                    </div>
                    <div class="food-desc">${item.desc}</div>
                    <div class="food-tags">${tagsHtml}${orderCountHtml}</div>
                </div>
                <div class="food-bottom">
                    <div>
                        <span class="food-price">${item.price}</span>
                        <span class="food-sales">月售${item.sales}</span>
                    </div>
                    <div class="qty-control">
                        ${qty > 0 ? `<button class="qty-btn minus" data-id="${item.id}">−</button>` : ''}
                        ${qty > 0 ? `<span class="qty-num" data-id="${item.id}">${qty}</span>` : ''}
                        <button class="qty-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
            </div>
        </div>`;
}

// ===== 绑定事件 =====
function bindEvents() {
    document.getElementById('bottomNav').addEventListener('click', (e) => {
        const navItem = e.target.closest('.nav-item');
        if (navItem) switchPage(navItem.dataset.page);
    });

    categorySidebar.addEventListener('click', (e) => {
        const item = e.target.closest('.category-item');
        if (!item) return;
        const index = parseInt(item.dataset.index);
        currentCategory = index;
        searchQuery = '';
        searchInput.value = '';
        searchClear.style.display = 'none';
        renderCategories();
        renderFoodList();
        scrollToCategory(index);
    });

    foodList.addEventListener('click', (e) => {
        const plusBtn = e.target.closest('.qty-btn.plus');
        const minusBtn = e.target.closest('.qty-btn.minus');
        const detailEl = e.target.closest('[data-action="detail"]');

        if (plusBtn) addToCart(parseInt(plusBtn.dataset.id));
        else if (minusBtn) removeFromCart(parseInt(minusBtn.dataset.id));
        else if (detailEl) openDishDetail(parseInt(detailEl.dataset.id));
    });

    cartFloatBtn.addEventListener('click', () => {
        if (getCartCount() > 0) openCartModal();
    });

    checkoutBtn.addEventListener('click', () => {
        if (getCartCount() > 0) openCartModal();
    });

    document.getElementById('cartModalClose').addEventListener('click', closeCartModal);
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
    });

    document.getElementById('cartModalCheckout').addEventListener('click', () => {
        closeCartModal();
        openOrderModal();
    });

    document.getElementById('orderConfirmBtn').addEventListener('click', confirmOrder);
    document.getElementById('orderCancelBtn').addEventListener('click', () => {
        orderModal.style.display = 'none';
    });
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) orderModal.style.display = 'none';
    });

    document.getElementById('doneCloseBtn').addEventListener('click', () => {
        doneModal.style.display = 'none';
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        searchClear.style.display = searchQuery ? 'flex' : 'none';
        renderFoodList();
    });
    searchClear.addEventListener('click', () => {
        searchQuery = '';
        searchInput.value = '';
        searchClear.style.display = 'none';
        renderFoodList();
    });

    foodList.addEventListener('scroll', handleFoodListScroll);

    document.getElementById('dishDetailClose').addEventListener('click', () => {
        document.getElementById('dishDetailModal').style.display = 'none';
    });
    document.getElementById('dishDetailModal').addEventListener('click', (e) => {
        if (e.target.id === 'dishDetailModal') e.target.style.display = 'none';
    });

    document.getElementById('dishEditClose').addEventListener('click', closeDishEditModal);
    document.getElementById('dishEditCancel').addEventListener('click', closeDishEditModal);
    document.getElementById('dishEditSave').addEventListener('click', saveDishEdit);
    document.getElementById('dishEditModal').addEventListener('click', (e) => {
        if (e.target.id === 'dishEditModal') closeDishEditModal();
    });

    document.getElementById('nicknameModalClose').addEventListener('click', () => {
        document.getElementById('nicknameModal').style.display = 'none';
    });
    document.getElementById('nicknameSaveBtn').addEventListener('click', saveNickname);
    document.getElementById('nicknameModal').addEventListener('click', (e) => {
        if (e.target.id === 'nicknameModal') e.target.style.display = 'none';
    });
}

// ===== 购物车操作 =====
function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    updateUI();
    animateCartIcon();
}

function removeFromCart(id) {
    if (cart[id] > 1) cart[id]--;
    else delete cart[id];
    updateUI();
}

function getCartCount() {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function getCartTotal() {
    let total = 0;
    for (const [id, qty] of Object.entries(cart)) {
        const item = findItem(parseInt(id));
        if (item) total += item.price * qty;
    }
    return total;
}

function findItem(id) {
    for (const cat of menuData) {
        for (const item of cat.items) {
            if (item.id === id) return item;
        }
    }
    return null;
}

// ===== UI 更新 =====
function updateUI() {
    const count = getCartCount();
    const total = getCartTotal();

    if (count > 0) {
        cartFloatBtn.style.display = 'flex';
        cartBadge.textContent = count;
        cartTotalPrice.textContent = `¥${total.toFixed(2)}`;
    } else {
        cartFloatBtn.style.display = 'none';
    }
    checkoutBtn.disabled = count === 0;

    const scrollTop = foodList.scrollTop;
    renderFoodList();
    foodList.scrollTop = scrollTop;
}

function animateCartIcon() {
    cartFloatBtn.style.transform = 'scale(1.1)';
    setTimeout(() => { cartFloatBtn.style.transform = 'scale(1)'; }, 200);
}

function scrollToCategory(index) {
    const sections = foodList.querySelectorAll('.food-section');
    if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

let scrollTimer = null;
function handleFoodListScroll() {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
        const sections = foodList.querySelectorAll('.food-section');
        const scrollTop = foodList.scrollTop;
        let activeIndex = 0;
        sections.forEach((section, i) => {
            if (section.offsetTop - 50 <= scrollTop) activeIndex = i;
        });
        if (activeIndex !== currentCategory) {
            currentCategory = activeIndex;
            renderCategories();
            const activeItem = categorySidebar.querySelector('.category-item.active');
            if (activeItem) activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 100);
}

// ===== 购物车弹窗 =====
function openCartModal() {
    const items = Object.entries(cart).map(([id, qty]) => {
        const item = findItem(parseInt(id));
        return { ...item, qty };
    });
    
    if (items.length === 0) {
        cartModalBody.innerHTML = `<div class="empty-cart"><div class="empty-cart-icon">${getIcon('cart', 48)}</div><div class="empty-cart-text">购物车空空如也~</div></div>`;
    } else {
        cartModalBody.innerHTML = items.map(item => `
            <div class="cart-modal-item">
                ${item.image ? `<img src="${item.image}" class="cart-modal-item-img" alt="${item.name}">` : `<div class="cart-modal-item-emoji">${item.emoji}</div>`}
                <div class="cart-modal-item-info">
                    <div class="cart-modal-item-name">${item.name}</div>
                    <div class="cart-modal-item-price">¥${item.price} × ${item.qty}</div>
                </div>
                <div class="qty-control">
                    <button class="qty-btn minus" data-id="${item.id}">−</button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn plus" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');
    }
    cartModalTotal.textContent = `¥${getCartTotal().toFixed(2)}`;
    cartModal.style.display = 'flex';

    cartModalBody.querySelectorAll('.qty-btn.plus').forEach(btn => {
        btn.addEventListener('click', () => { addToCart(parseInt(btn.dataset.id)); openCartModal(); });
    });
    cartModalBody.querySelectorAll('.qty-btn.minus').forEach(btn => {
        btn.addEventListener('click', () => { removeFromCart(parseInt(btn.dataset.id)); openCartModal(); });
    });
}

function closeCartModal() {
    cartModal.style.display = 'none';
}

// ===== 下单确认弹窗 =====
function openOrderModal() {
    const items = Object.entries(cart).map(([id, qty]) => {
        const item = findItem(parseInt(id));
        return { ...item, qty };
    });
    orderSummary.innerHTML = items.map(item => `
        <div class="order-summary-item">
            <span>
                <span class="name">${item.name}</span>
                <span class="qty">×${item.qty}</span>
            </span>
            <span class="price">¥${(item.price * item.qty).toFixed(2)}</span>
        </div>
    `).join('') + `
        <div class="order-summary-total">
            <span>合计</span>
            <span class="price">¥${getCartTotal().toFixed(2)}</span>
        </div>`;
    orderNote.value = '';
    orderModal.style.display = 'flex';
}

// ===== 确认下单 =====
function confirmOrder() {
    const items = Object.entries(cart).map(([id, qty]) => {
        const item = findItem(parseInt(id));
        return { ...item, qty };
    });
    const total = getCartTotal();
    const note = orderNote.value.trim();
    const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    const date = new Date().toLocaleDateString('zh-CN');

    items.forEach(item => {
        const menuItem = findItem(item.id);
        if (menuItem) {
            menuItem.orderCount = (menuItem.orderCount || 0) + item.qty;
        }
    });
    saveMenuData();

    const config = getUserConfig();
    config.totalOrders = (config.totalOrders || 0) + 1;
    saveUserConfig(config);

    doneOrderInfo.innerHTML = `
        <div class="info-row"><span class="info-label">下单时间</span><span class="info-value">${date} ${time}</span></div>
        <div class="info-row"><span class="info-label">菜品数量</span><span class="info-value">${getCartCount()}道</span></div>
        <div class="info-row"><span class="info-label">合计金额</span><span class="info-value" style="color: var(--primary); font-weight: 700;">¥${total.toFixed(2)}</span></div>
        ${note ? `<div class="info-row"><span class="info-label">备注</span><span class="info-value">${note}</span></div>` : ''}
    `;
    orderModal.style.display = 'none';
    doneModal.style.display = 'flex';

    cart = {};
    updateUI();
    saveOrder(items, total, note, time, date);

    const orderDetail = items.map(i => `${i.emoji} ${i.name} × ${i.qty}  ¥${(i.price * i.qty).toFixed(2)}`).join('\n');
    const desp = `## 订单详情\n${orderDetail}\n\n---\n**合计：¥${total.toFixed(2)}**\n\n${note ? `📝 备注：${note}\n\n` : ''}⏰ 下单时间：${date} ${time}`;
    sendServerChanNotification('🍳 新订单来了！', desp);
}

function saveOrder(items, total, note, time, date) {
    const order = {
        id: Date.now(),
        time,
        date,
        items: items.map(i => ({ id: i.id, name: i.name, emoji: i.emoji, image: i.image, price: i.price, qty: i.qty })),
        total,
        note,
        status: 'completed'
    };
    const orders = JSON.parse(localStorage.getItem('cookOrders') || '[]');
    orders.unshift(order);
    if (orders.length > 100) orders.length = 100;
    localStorage.setItem('cookOrders', JSON.stringify(orders));
}

// ===== Server酱 =====
const SERVERCHAN_SENDKEY = 'sctp2328tpdeahhmyorblp1cubnffun';
const SERVERCHAN_UID = '2328';

async function sendServerChanNotification(title, desp) {
    const url = `https://${SERVERCHAN_UID}.push.ft07.com/send/${SERVERCHAN_SENDKEY}.send`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, desp })
        });
        const result = await response.json();
        console.log('Server酱推送结果:', result);
        return result;
    } catch (error) {
        console.error('Server酱推送失败:', error);
    }
}

// ===================== 订单历史页面 =====================
function renderOrderPage() {
    const orders = JSON.parse(localStorage.getItem('cookOrders') || '[]');
    const container = document.getElementById('orderPageContent');

    if (orders.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">${getIcon('clipboard', 48)}</div>
                <div class="empty-state-text">还没有订单记录</div>
                <div class="empty-state-hint">快去点餐吧~</div>
            </div>`;
        return;
    }

    const grouped = {};
    orders.forEach(order => {
        const d = order.date || '未知日期';
        if (!grouped[d]) grouped[d] = [];
        grouped[d].push(order);
    });

    container.innerHTML = Object.entries(grouped).map(([date, orders]) => `
        <div class="order-date-group">
            <div class="order-date-header">${date}</div>
            ${orders.map(order => `
                <div class="order-card" data-id="${order.id}">
                    <div class="order-card-header">
                        <span class="order-card-time">${order.time}</span>
                        <span class="order-card-status">已完成</span>
                        <button class="order-delete-btn" data-id="${order.id}">${getIcon('trash', 14)} 删除</button>
                    </div>
                    <div class="order-card-items">
                        ${order.items.map(i => `
                            <div class="order-card-item">
                                <span>${i.image ? `<img src="${i.image}" class="order-item-img">` : i.emoji} ${i.name} × ${i.qty}</span>
                                <span class="order-card-item-price">¥${(i.price * i.qty).toFixed(2)}</span>
                            </div>
                        `).join('')}
                    </div>
                    ${order.note ? `<div class="order-card-note">📝 ${order.note}</div>` : ''}
                    <div class="order-card-footer">
                        <span class="order-card-total">合计 ¥${order.total.toFixed(2)}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('');

    container.querySelectorAll('.order-delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            deleteOrder(parseInt(btn.dataset.id));
        });
    });
}

function deleteOrder(orderId) {
    if (!confirm('确定删除这条订单吗？')) return;
    let orders = JSON.parse(localStorage.getItem('cookOrders') || '[]');
    orders = orders.filter(o => o.id !== orderId);
    localStorage.setItem('cookOrders', JSON.stringify(orders));
    renderOrderPage();
}

// ===================== 菜品详情 + 评论 =====================
function openDishDetail(dishId) {
    const item = findItem(dishId);
    if (!item) return;

    document.getElementById('dishDetailTitle').textContent = item.name;

    const comments = item.comments || [];
    const avgRating = comments.length > 0
        ? (comments.reduce((s, c) => s + c.rating, 0) / comments.length).toFixed(1)
        : 0;

    const body = document.getElementById('dishDetailBody');
    body.innerHTML = `
        <div class="dish-detail-info">
            <div class="dish-detail-image-large">
                ${item.image ? `<img src="${item.image}" alt="${item.name}">` : `<span class="dish-detail-emoji">${item.emoji}</span>`}
            </div>
            <div class="dish-detail-meta">
                <span class="dish-detail-price">¥${item.price}</span>
                <span class="dish-detail-sales">月售${item.sales}</span>
                <span class="dish-detail-order-count">已点${item.orderCount || 0}次</span>
            </div>
            <div class="dish-detail-desc">${item.desc}</div>
            <div class="dish-detail-tags">
                ${(item.tags || []).map(t => `<span class="food-tag">${t}</span>`).join('')}
            </div>
        </div>
        <div class="dish-detail-comments">
            <div class="comments-header">
                <span>评论 (${comments.length})</span>
                ${avgRating > 0 ? `<span class="comments-avg">⭐ ${avgRating}</span>` : ''}
            </div>
            <div class="comment-input-area">
                <div class="comment-rating" id="commentRating">
                    ${[1,2,3,4,5].map(n => `<span class="star" data-rating="${n}">☆</span>`).join('')}
                </div>
                <textarea id="commentInput" class="comment-input" placeholder="说说这道菜怎么样..." rows="2"></textarea>
                <div class="comment-actions">
                    <button class="comment-submit-btn" data-id="${item.id}">发表评论</button>
                </div>
            </div>
            <div class="comments-list" id="commentsList">
                ${comments.length === 0 ? '<div class="no-comments">暂无评论，来写第一条评论吧~</div>' :
                    comments.map(c => `
                        <div class="comment-item">
                            <div class="comment-header">
                                <span class="comment-nickname">${c.nickname || '匿名'}</span>
                                <span class="comment-stars">${'★'.repeat(c.rating)}${'☆'.repeat(5 - c.rating)}</span>
                                <span class="comment-time">${c.time}</span>
                            </div>
                            <div class="comment-text">${c.text}</div>
                        </div>
                    `).join('')}
            </div>
        </div>`;

    document.getElementById('dishDetailModal').style.display = 'flex';

    let currentRating = 0;
    body.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            currentRating = parseInt(star.dataset.rating);
            body.querySelectorAll('.star').forEach(s => {
                s.textContent = parseInt(s.dataset.rating) <= currentRating ? '★' : '☆';
                s.classList.toggle('active', parseInt(s.dataset.rating) <= currentRating);
            });
        });
    });

    body.querySelector('.comment-submit-btn').addEventListener('click', () => {
        submitComment(item.id, currentRating);
    });
}

function submitComment(dishId, rating) {
    const text = document.getElementById('commentInput').value.trim();
    if (!text) { alert('请输入评论内容'); return; }
    if (rating === 0) { alert('请选择评分'); return; }

    const config = getUserConfig();
    if (!config.nickname) {
        document.getElementById('nicknameModal').style.display = 'flex';
        document.getElementById('nicknameModal')._pendingComment = { dishId, rating, text };
        return;
    }

    addComment(dishId, config.nickname, rating, text);
}

function addComment(dishId, nickname, rating, text) {
    const item = findItem(dishId);
    if (!item) return;
    if (!item.comments) item.comments = [];

    const time = new Date().toLocaleString('zh-CN');
    item.comments.unshift({ id: Date.now(), nickname, rating, text, time });
    saveMenuData();
    openDishDetail(dishId);
}

function saveNickname() {
    const name = document.getElementById('nicknameInput').value.trim();
    if (!name) { alert('请输入昵称'); return; }
    const config = getUserConfig();
    config.nickname = name;
    saveUserConfig(config);
    document.getElementById('nicknameModal').style.display = 'none';

    const pending = document.getElementById('nicknameModal')._pendingComment;
    if (pending) {
        addComment(pending.dishId, name, pending.rating, pending.text);
        document.getElementById('nicknameModal')._pendingComment = null;
    }
}

// ===================== 菜单管理页面 =====================
function renderManagePage() {
    const container = document.getElementById('managePageContent');
    container.innerHTML = `
        <div class="manage-actions">
            <button class="manage-add-btn" id="addCategoryBtn">${getIcon('plus', 18)} 添加分类</button>
            <button class="manage-add-btn" id="addDishBtn" style="margin-top:10px">${getIcon('plus', 18)} 添加菜品</button>
        </div>
        ${menuData.map(cat => `
            <div class="manage-category-group">
                <div class="manage-category-header">
                    <span class="manage-category-name">
                        ${cat.image ? `<img src="${cat.image}" class="manage-category-img">` : getIcon(cat.icon || 'tag', 20)}
                        ${cat.name}
                    </span>
                    <span class="manage-category-count">${cat.items.length}道菜</span>
                </div>
                <div class="manage-dish-list">
                    ${cat.items.map(item => `
                        <div class="manage-dish-item" data-id="${item.id}">
                            ${item.image ? `<img src="${item.image}" class="manage-dish-img">` : `<span class="manage-dish-emoji">${item.emoji}</span>`}
                            <div class="manage-dish-info">
                                <span class="manage-dish-name">${item.name} ${item.tags?.includes('招牌') ? '<span class="signature-badge">招牌</span>' : ''}</span>
                                <span class="manage-dish-price">¥${item.price}</span>
                                <span class="manage-dish-order-count">已点${item.orderCount || 0}次</span>
                            </div>
                            <div class="manage-dish-actions">
                                <button class="manage-edit-btn" data-id="${item.id}">${getIcon('edit', 14)}</button>
                                <button class="manage-delete-btn" data-id="${item.id}">${getIcon('trash', 14)}</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('')}`;

    document.getElementById('addCategoryBtn').addEventListener('click', () => openCategoryEditModal(null));
    document.getElementById('addDishBtn').addEventListener('click', () => openDishEditModal(null));

    container.querySelectorAll('.manage-edit-btn').forEach(btn => {
        btn.addEventListener('click', () => openDishEditModal(parseInt(btn.dataset.id)));
    });

    container.querySelectorAll('.manage-delete-btn').forEach(btn => {
        btn.addEventListener('click', () => deleteDish(parseInt(btn.dataset.id)));
    });
}

function openCategoryEditModal(catId) {
    const isEdit = catId !== null;
    const cat = isEdit ? menuData.find(c => c.id === catId) : null;
    
    const modal = document.getElementById('dishEditModal');
    document.getElementById('dishEditTitle').textContent = isEdit ? '编辑分类' : '添加分类';
    
    const body = document.getElementById('dishEditBody');
    body.innerHTML = `
        <div class="edit-form">
            <div class="edit-field">
                <label>分类名称</label>
                <input type="text" id="editCatName" value="${cat ? cat.name : ''}" placeholder="请输入分类名称">
            </div>
            <div class="edit-field">
                <label>分类图标</label>
                <input type="text" id="editCatIcon" value="${cat ? cat.icon : 'tag'}" placeholder="图标名称">
            </div>
            <div class="edit-field">
                <label>分类图片</label>
                <input type="file" id="editCatImage" accept="image/*">
                ${cat?.image ? `<img src="${cat.image}" class="edit-preview-img">` : ''}
            </div>
        </div>`;
    
    modal.style.display = 'flex';
    modal._editType = 'category';
    modal._editId = catId;
    
    document.getElementById('editCatImage').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                body.querySelector('.edit-preview-img')?.remove();
                const img = document.createElement('img');
                img.src = event.target.result;
                img.className = 'edit-preview-img';
                e.target.parentNode.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

function openDishEditModal(dishId) {
    editingDishId = dishId;
    const isEdit = dishId !== null;
    const item = isEdit ? findItem(dishId) : null;

    document.getElementById('dishEditTitle').textContent = isEdit ? '编辑菜品' : '添加菜品';
    const body = document.getElementById('dishEditBody');

    body.innerHTML = `
        <div class="edit-form">
            <div class="edit-field">
                <label>菜品名称</label>
                <input type="text" id="editName" value="${item ? item.name : ''}" placeholder="请输入菜品名称">
            </div>
            <div class="edit-field">
                <label>Emoji</label>
                <input type="text" id="editEmoji" value="${item ? item.emoji : '🍽️'}" placeholder="如 🍖">
            </div>
            <div class="edit-field">
                <label>菜品图片</label>
                <div class="image-upload-group">
                    <input type="file" id="editImage" accept="image/*">
                    <button type="button" class="search-image-btn" id="searchImageBtn">${getIcon('search', 14)} 搜索图片</button>
                </div>
                ${item?.image ? `<img src="${item.image}" class="edit-preview-img">` : ''}
                <div id="imageSearchResults" class="image-search-results" style="display:none"></div>
            </div>
            <div class="edit-field">
                <label>描述</label>
                <textarea id="editDesc" rows="2" placeholder="请输入菜品描述">${item ? item.desc : ''}</textarea>
            </div>
            <div class="edit-field">
                <label>价格 (元)</label>
                <input type="number" id="editPrice" value="${item ? item.price : ''}" placeholder="请输入价格">
            </div>
            <div class="edit-field">
                <label>标签 (逗号分隔)</label>
                <input type="text" id="editTags" value="${item ? (item.tags || []).join(', ') : ''}" placeholder="如: 招牌, 必点">
            </div>
            <div class="edit-field">
                <label>分类</label>
                <select id="editCategory">
                    ${menuData.map(cat => `<option value="${cat.id}" ${item && cat.items.some(i => i.id === dishId) ? 'selected' : ''}>${cat.name}</option>`).join('')}
                </select>
            </div>
        </div>`;

    document.getElementById('dishEditModal').style.display = 'flex';
    document.getElementById('dishEditModal')._editType = 'dish';
    
    // 图片搜索功能
    document.getElementById('searchImageBtn').addEventListener('click', async () => {
        const name = document.getElementById('editName').value.trim();
        if (!name) { alert('请先输入菜品名称'); return; }
        
        const resultsDiv = document.getElementById('imageSearchResults');
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = '<div class="loading-text">搜索中...</div>';
        
        // 使用多个免费图片源
        const queries = [name + ' 美食', name + ' food', name + ' dish'];
        const images = [];
        
        queries.forEach(q => {
            for (let i = 1; i <= 3; i++) {
                images.push(`https://source.unsplash.com/200x200/?${encodeURIComponent(q)}&sig=${Date.now()}${i}`);
            }
        });
        
        resultsDiv.innerHTML = images.slice(0, 9).map((url, i) => `
            <div class="image-search-item" data-url="${url}">
                <img src="${url}" onerror="this.parentElement.style.display='none'" alt="搜索结果${i+1}">
            </div>
        `).join('');
        
        resultsDiv.querySelectorAll('.image-search-item').forEach(item => {
            item.addEventListener('click', () => {
                document.getElementById('editImage')._selectedUrl = item.dataset.url;
                body.querySelector('.edit-preview-img')?.remove();
                const img = document.createElement('img');
                img.src = item.dataset.url;
                img.className = 'edit-preview-img';
                document.getElementById('editImage').parentNode.appendChild(img);
                resultsDiv.style.display = 'none';
            });
        });
    });
    
    // 本地图片上传
    document.getElementById('editImage').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                body.querySelector('.edit-preview-img')?.remove();
                const img = document.createElement('img');
                img.src = event.target.result;
                img.className = 'edit-preview-img';
                e.target.parentNode.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });
}

function closeDishEditModal() {
    document.getElementById('dishEditModal').style.display = 'none';
    editingDishId = null;
}

function saveDishEdit() {
    const modal = document.getElementById('dishEditModal');
    
    if (modal._editType === 'category') {
        // 保存分类
        const name = document.getElementById('editCatName').value.trim();
        const icon = document.getElementById('editCatIcon').value.trim() || 'tag';
        const imgInput = document.getElementById('editCatImage');
        const img = imgInput._selectedUrl || '';
        
        if (!name) { alert('请输入分类名称'); return; }
        
        if (modal._editId !== null) {
            const cat = menuData.find(c => c.id === modal._editId);
            if (cat) {
                cat.name = name;
                cat.icon = icon;
                if (img) cat.image = img;
            }
        } else {
            menuData.push({
                id: 'cat_' + Date.now(),
                name,
                icon,
                image: img,
                items: []
            });
        }
        
        saveMenuData();
        closeDishEditModal();
        renderManagePage();
        renderCategories();
        return;
    }
    
    // 保存菜品
    const name = document.getElementById('editName').value.trim();
    const emoji = document.getElementById('editEmoji').value.trim();
    const desc = document.getElementById('editDesc').value.trim();
    const price = parseFloat(document.getElementById('editPrice').value);
    const tags = document.getElementById('editTags').value.split(',').map(t => t.trim()).filter(Boolean);
    const categoryId = document.getElementById('editCategory').value;
    const imgInput = document.getElementById('editImage');
    const image = imgInput._selectedUrl || '';

    if (!name || !emoji || isNaN(price) || price <= 0) {
        alert('请填写完整信息');
        return;
    }

    if (editingDishId !== null) {
        for (const cat of menuData) {
            const idx = cat.items.findIndex(i => i.id === editingDishId);
            if (idx !== -1) {
                const oldItem = cat.items[idx];
                const newItem = { ...oldItem, name, emoji, desc, price, tags };
                if (image) newItem.image = image;
                
                if (cat.id !== categoryId) {
                    cat.items.splice(idx, 1);
                    const newCat = menuData.find(c => c.id === categoryId);
                    newCat.items.push(newItem);
                } else {
                    cat.items[idx] = newItem;
                }
                break;
            }
        }
    } else {
        const newCat = menuData.find(c => c.id === categoryId);
        newCat.items.push({
            id: nextDishId++,
            name, emoji, image, desc, price, tags,
            orderCount: 0, comments: [], sales: 0
        });
    }

    saveMenuData();
    closeDishEditModal();
    renderManagePage();
    renderFoodList();
}

function deleteDish(dishId) {
    if (!confirm('确定删除这道菜吗？')) return;
    for (const cat of menuData) {
        const idx = cat.items.findIndex(i => i.id === dishId);
        if (idx !== -1) {
            cat.items.splice(idx, 1);
            break;
        }
    }
    saveMenuData();
    renderManagePage();
    renderFoodList();
}

// ===================== 我的页面 =====================
function renderProfilePage() {
    const config = getUserConfig();
    const orders = JSON.parse(localStorage.getItem('cookOrders') || '[]');

    const dishCount = {};
    orders.forEach(order => {
        order.items.forEach(item => {
            if (!dishCount[item.name]) dishCount[item.name] = { count: 0, emoji: item.emoji, image: item.image };
            dishCount[item.name].count += item.qty;
        });
    });
    const topDishes = Object.entries(dishCount)
        .sort((a, b) => b[1].count - a[1].count)
        .slice(0, 5);

    const container = document.getElementById('profilePageContent');
    container.innerHTML = `
        <div class="profile-section">
            <div class="profile-avatar-wrap">
                ${config.avatar 
                    ? `<img src="${config.avatar}" class="profile-avatar-img" id="profileAvatar">` 
                    : `<div class="profile-avatar" id="profileAvatar">${config.nickname ? config.nickname.charAt(0) : getIcon('user', 32)}</div>`
                }
                <input type="file" id="avatarInput" accept="image/*" style="display:none">
                <button class="avatar-change-btn" id="changeAvatarBtn">更换头像</button>
            </div>
            <div class="profile-name" id="profileNickname">${config.nickname || '未设置昵称'}</div>
            <button class="profile-edit-btn" id="editNicknameBtn">修改昵称</button>
        </div>
        <div class="profile-stats">
            <div class="stat-item">
                <div class="stat-value">${config.totalOrders || 0}</div>
                <div class="stat-label">总下单次数</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${orders.length}</div>
                <div class="stat-label">订单总数</div>
            </div>
        </div>
        <div class="theme-selector">
            <div class="theme-selector-title">🎨 选择主题</div>
            <div class="theme-grid">
                ${themes.map(t => `
                    <div class="theme-item ${t.class} ${currentTheme === t.id ? 'active' : ''}" data-theme="${t.id}">
                        <span class="theme-name">${t.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="pattern-selector">
            <div class="theme-selector-title">✨ 背景图案</div>
            <div class="pattern-grid">
                ${patterns.map(p => `
                    <div class="pattern-item ${currentPattern === p.id ? 'active' : ''}" data-pattern="${p.id}">
                        ${p.name}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="bg-image-section">
            <div class="theme-selector-title">🖼️ 自定义背景</div>
            <div class="bg-image-preview" style="background-image: ${customBackground ? `url(${customBackground})` : 'none'}">
                ${customBackground ? '' : '<span>暂无背景图片</span>'}
            </div>
            <div class="bg-image-actions">
                <input type="file" id="bgImageInput" accept="image/*" style="display:none">
                <button class="bg-image-btn" id="setBgBtn">选择图片</button>
                ${customBackground ? `<button class="bg-image-btn danger" id="clearBgBtn">清除</button>` : ''}
            </div>
        </div>
        ${topDishes.length > 0 ? `
        <div class="profile-section">
            <div class="profile-section-title">最常点的菜</div>
            <div class="top-dishes-list">
                ${topDishes.map(([name, data], i) => `
                    <div class="top-dish-item">
                        <span class="top-dish-rank">${i + 1}</span>
                        ${data.image ? `<img src="${data.image}" class="top-dish-img">` : `<span class="top-dish-emoji">${data.emoji}</span>`}
                        <span class="top-dish-name">${name}</span>
                        <span class="top-dish-count">${data.count}次</span>
                    </div>
                `).join('')}
            </div>
        </div>` : ''}
        <div class="profile-section">
            <div class="profile-section-title">数据备份与恢复</div>
            <div class="backup-actions">
                <input type="file" id="importFileInput" accept=".json" style="display:none">
                <button class="backup-btn" id="backupBtn">导出数据</button>
                <button class="backup-btn" id="importBtn">导入数据</button>
            </div>
        </div>
        <div class="profile-section">
            <div class="profile-section-title">数据管理</div>
            <button class="profile-danger-btn" id="clearDataBtn">清除所有数据</button>
        </div>`;

    // 头像上传
    document.getElementById('changeAvatarBtn').addEventListener('click', () => {
        document.getElementById('avatarInput').click();
    });
    
    document.getElementById('avatarInput').addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setAvatar(event.target.result);
                renderProfilePage();
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('editNicknameBtn').addEventListener('click', () => {
        document.getElementById('nicknameInput').value = config.nickname || '';
        document.getElementById('nicknameModal').style.display = 'flex';
        document.getElementById('nicknameModal')._pendingComment = null;
    });

    document.getElementById('clearDataBtn').addEventListener('click', () => {
        if (confirm('确定清除所有数据吗？此操作不可恢复！')) {
            localStorage.removeItem('cookOrders');
            localStorage.removeItem('cookMenuData');
            localStorage.removeItem('cookUserConfig');
            localStorage.removeItem('cookTheme');
            localStorage.removeItem('cookBackground');
            loadMenuData();
            loadTheme();
            loadBackgroundImage();
            renderProfilePage();
            alert('数据已清除');
        }
    });

    // 主题选择
    container.querySelectorAll('.theme-item').forEach(item => {
        item.addEventListener('click', () => {
            setTheme(item.dataset.theme);
            renderProfilePage();
        });
    });

    // 图案选择
    container.querySelectorAll('.pattern-item').forEach(item => {
        item.addEventListener('click', () => {
            setPattern(item.dataset.pattern);
            renderProfilePage();
        });
    });

    // 背景图片
    document.getElementById('setBgBtn')?.addEventListener('click', () => {
        document.getElementById('bgImageInput').click();
    });

    document.getElementById('bgImageInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setBackgroundImage(event.target.result);
                renderProfilePage();
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('clearBgBtn')?.addEventListener('click', () => {
        clearBackgroundImage();
        renderProfilePage();
    });

    // 备份
    document.getElementById('backupBtn')?.addEventListener('click', backupData);
    document.getElementById('importBtn')?.addEventListener('click', () => {
        document.getElementById('importFileInput').click();
    });
    document.getElementById('importFileInput')?.addEventListener('change', (e) => {
        if (e.target.files[0]) importData(e.target.files[0]);
    });
}

// ===== 备份/导入功能 =====
function backupData() {
    const config = getUserConfig();
    const data = {
        version: '1.0',
        exportTime: new Date().toISOString(),
        menuData: menuData,
        orders: JSON.parse(localStorage.getItem('cookOrders') || '[]'),
        userConfig: config,
        theme: JSON.parse(localStorage.getItem('cookTheme') || '{}'),
        background: localStorage.getItem('cookBackground') || ''
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cook-order-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    alert('备份完成！');
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (!data.version || !data.menuData) {
                alert('无效的备份文件');
                return;
            }
            if (!confirm('导入将覆盖当前所有数据，确定继续吗？')) return;

            localStorage.setItem('cookMenuData', JSON.stringify(data.menuData));
            if (data.orders) localStorage.setItem('cookOrders', JSON.stringify(data.orders));
            if (data.userConfig) localStorage.setItem('cookUserConfig', JSON.stringify(data.userConfig));
            if (data.theme) localStorage.setItem('cookTheme', JSON.stringify(data.theme));
            if (data.background) localStorage.setItem('cookBackground', data.background);

            loadMenuData();
            loadTheme();
            loadBackgroundImage();
            renderProfilePage();
            alert('导入成功！');
        } catch (err) {
            alert('导入失败：文件格式错误');
            console.error(err);
        }
    };
    reader.readAsText(file);
}

// ===== 启动 =====
init();
