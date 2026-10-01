/* ---------------- Navigation ---------------- */
const NAV_GROUPS = [
  {
    label: 'Dashboard', icon: 'fa-gauge-high', href: 'index.html', items: []
  },
  {
    label: 'Sales', icon: 'fa-cash-register', items: [
      { href: 'pos.html', label: 'POS / New Sale' },
      { href: 'orders.html', label: 'Orders' }
    ]
  },
  {
    label: 'Menu', icon: 'fa-burger', items: [
      { href: 'menu-categories.html', label: 'Categories' },
      { href: 'menu-items.html', label: 'Menu Items' },
      { href: 'menu-addons.html', label: 'Add-ons / Variants' }
    ]
  },
  {
    label: 'Tables', icon: 'fa-chair', href: 'tables.html', items: []
  },
  {
    label: 'Inventory', icon: 'fa-boxes-stacked', items: [
      { href: 'inventory-ingredients.html', label: 'Ingredients' },
      { href: 'inventory-stock.html', label: 'Stock' },
      { href: 'recipes.html', label: 'Recipes' }
    ]
  },
  {
    label: 'Purchases', icon: 'fa-cart-shopping', items: [
      { href: 'suppliers.html', label: 'Suppliers' },
      { href: 'purchases.html', label: 'Purchases' }
    ]
  },
  { label: 'Customers', icon: 'fa-users', href: 'customers.html', items: [] },
  { label: 'Expenses', icon: 'fa-coins', href: 'expenses.html', items: [] },
  {
    label: 'Reports', icon: 'fa-chart-column', items: [
      { href: 'reports-sales.html', label: 'Sales Report' },
      { href: 'reports-purchases.html', label: 'Purchase Report' },
      { href: 'reports-expenses.html', label: 'Expense Report' },
      { href: 'reports-stock.html', label: 'Stock Report' },
      { href: 'reports-best.html', label: 'Best Selling Items' },
      { href: 'reports-profit.html', label: 'Profit Summary' }
    ]
  },
  {
    label: 'Settings', icon: 'fa-gear', items: [
      { href: 'settings-users.html', label: 'Users' },
      { href: 'settings-business.html', label: 'Business Settings' }
    ]
  }
];

function injectLayout() {
  const page = document.body.dataset.page || '';
  const activeFile = page + '.html';

  let nav = '';
  NAV_GROUPS.forEach(function (g) {
    const isSingle = g.items.length === 0;
    const isActive = g.href === activeFile;
    const groupOpen = isActive || g.items.some(i => i.href === activeFile);

    if (isSingle) {
      nav += '<a class="nav-link-item' + (isActive ? ' active' : '') + '" href="' + g.href + '">' +
        '<i class="fa-solid ' + g.icon + '"></i><span>' + g.label + '</span></a>';
      return;
    }

    const items = g.items.map(function (i) {
      return '<a class="nav-link-item' + (i.href === activeFile ? ' active' : '') + '" href="' + i.href + '">' +
        '<span>' + i.label + '</span></a>';
    }).join('');

    nav +=
      '<div class="nav-section' + (groupOpen ? '' : ' collapsed') + '">' +
      '<button type="button" class="nav-section-title">' +
      '<span><i class="fa-solid ' + g.icon + '" style="width:18px;font-size:12px;margin-right:8px"></i>' + g.label + '</span>' +
      '<i class="fa-solid fa-chevron-down"></i></button>' +
      '<div class="nav-section-items">' + items + '</div></div>';
  });

  const sidebar =
    '<aside class="sidebar" id="sidebar">' +
    '<div class="sidebar-brand">' +
    '<div class="logo-mark"><i class="fa-solid fa-utensils"></i></div>' +
    '<div><div class="brand-name">BiteFlow</div><div class="brand-sub">Fast Food &amp; Café Management System</div></div>' +
    '</div>' +
    '<nav class="sidebar-nav">' + nav + '</nav>' +
    '<div class="sidebar-footer"><i class="fa-solid fa-circle-check me-1"></i> v2.0 · Lahore</div>' +
    '</aside>' +
    '<div class="sidebar-overlay" id="sidebarOverlay"></div>';

  const topbar =
    '<header class="topbar">' +
    '<div class="topbar-left">' +
    '<button class="menu-toggle" id="menuToggle"><i class="fa-solid fa-bars"></i></button>' +
    '<div class="page-title-block"><h4 id="pageTitle">ERP</h4><nav class="breadcrumb"><span class="breadcrumb-item">Home</span><span class="breadcrumb-item active" id="crumbActive">Dashboard</span></nav></div>' +
    '</div>' +
    '<div class="topbar-right">' +
    '<div class="search-box"><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search orders, items, customers..."></div>' +
    '<span class="badge badge-available d-none d-md-inline-flex align-items-center gap-1"><i class="fa-regular fa-calendar"></i><span data-today></span></span>' +
    '<button class="icon-btn" title="Notifications"><i class="fa-regular fa-bell"></i><span class="badge-count">3</span></button>' +
    '<div class="user-chip"><div class="avatar">AK</div><div><div class="u-name">Aamir Khan</div><div class="u-role">Owner</div></div></div>' +
    '</div></header>';

  document.body.insertAdjacentHTML('afterbegin', sidebar + topbar);

  const titleMap = {};
  NAV_GROUPS.forEach(function (g) {
    titleMap[g.href] = g.label;
    (g.items || []).forEach(function (i) { titleMap[i.href] = i.label; });
  });
  const t = titleMap[activeFile] || 'Dashboard';
  document.getElementById('pageTitle').textContent = t;
  document.getElementById('crumbActive').textContent = t;

  document.querySelectorAll('.nav-section-title').forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.closest('.nav-section').classList.toggle('collapsed');
    });
  });

  const toggle = document.getElementById('menuToggle');
  const sb = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (toggle && sb) {
    toggle.addEventListener('click', function () {
      sb.classList.toggle('open');
      overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function () {
      sb.classList.remove('open');
      overlay.classList.remove('show');
    });
  }

  document.querySelectorAll('[data-today]').forEach(function (el) { el.textContent = todayStr(); });
}


/* ---------------- Init ---------------- */
document.addEventListener('DOMContentLoaded', function () {
  injectLayout();
});