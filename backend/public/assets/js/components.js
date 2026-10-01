/* ================================================================
   BiteFlow — components.js v4.0
   Sidebar · Topbar · Keyboard
   ================================================================ */

/* ── Icon library (Lucide-style inline SVG, 18 × 18, stroke 1.75) ── */
const IC = {
  grid:         'M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z',
  bag:          'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0',
  layout:       'M3 3h18v18H3z M3 9h18 M9 21V9',
  book:         'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  box:          'M16.5 9.4 7.5 4.21 M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96 12 12.01 20.73 6.96 M12 22.08V12',
  truck:        'M1 3h15v13H1z M16 8h4l3 3v5h-7V8z M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  users:        'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  card:         'M1 4h22v16H1z M1 10h22',
  chart:        'M18 20V10 M12 20V4 M6 20v-6',
  settings:     'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  chevR:        'M9 18l6-6-6-6',
  chevsL:       'M11 17l-5-5 5-5 M18 17l-5-5 5-5',
  menu:         'M3 12h18 M3 6h18 M3 18h18',
  search:       'M21 21l-4.35-4.35 M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z',
  bell:         'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 0 1-3.46 0',
  logout:       'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
  x:            'M18 6 6 18 M6 6l12 12',
};

function svg(key, size) {
  size = size || 18;
  var d = IC[key] || '';
  // Handle multi-path icons (separated by space-M)
  var paths = d.split(' M ');
  var inner = '';
  if (paths.length > 1) {
    inner = '<path d="' + paths[0] + '"/>';
    for (var i = 1; i < paths.length; i++) {
      inner += '<path d="M ' + paths[i] + '"/>';
    }
  } else {
    inner = '<path d="' + d + '"/>';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
    '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"' +
    ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>';
}

/* ── Nav data ── */
var NAV_STRUCTURE = [
  {
    group: 'MAIN',
    items: [
      { label: 'Dashboard', icon: 'grid', href: 'index.html' },
      { label: 'Sales',     icon: 'bag',  href: null,
        children: [
          { label: 'POS / New Sale', href: 'pos.html' },
          { label: 'Orders',         href: 'orders.html' }
        ]
      },
      { label: 'Tables', icon: 'layout', href: 'tables.html' }
    ]
  },
  {
    group: 'OPERATIONS',
    items: [
      { label: 'Menu', icon: 'book', href: null,
        children: [
          { label: 'Categories',       href: 'menu-categories.html' },
          { label: 'Menu Items',       href: 'menu-items.html' },
          { label: 'Add-ons',          href: 'menu-addons.html' }
        ]
      },
      { label: 'Inventory', icon: 'box', href: null,
        children: [
          { label: 'Ingredients', href: 'inventory-ingredients.html' },
          { label: 'Stock',       href: 'inventory-stock.html' },
          { label: 'Recipes',     href: 'recipes.html' }
        ]
      },
      { label: 'Purchases', icon: 'truck', href: null,
        children: [
          { label: 'Suppliers', href: 'suppliers.html' },
          { label: 'Purchases', href: 'purchases.html' }
        ]
      },
      { label: 'Customers', icon: 'users', href: 'customers.html' },
      { label: 'Expenses',  icon: 'card',  href: 'expenses.html'  }
    ]
  },
  {
    group: 'INSIGHTS & SYSTEM',
    items: [
      { label: 'Reports', icon: 'chart', href: null,
        children: [
          { label: 'Sales Report',     href: 'reports-sales.html' },
          { label: 'Purchase Report',  href: 'reports-purchases.html' },
          { label: 'Expense Report',   href: 'reports-expenses.html' },
          { label: 'Stock Report',     href: 'reports-stock.html' },
          { label: 'Best Selling',     href: 'reports-best.html' },
          { label: 'Profit Summary',   href: 'reports-profit.html' }
        ]
      },
      { label: 'Settings', icon: 'settings', href: null,
        children: [
          { label: 'Users',             href: 'settings-users.html' },
          { label: 'Business Settings', href: 'settings-business.html' }
        ]
      }
    ]
  }
];

/* ── Build title map ── */
function buildTitleMap() {
  var m = {};
  NAV_STRUCTURE.forEach(function(g) {
    g.items.forEach(function(item) {
      if (item.href) m[item.href] = item.label;
      (item.children || []).forEach(function(c) { m[c.href] = c.label; });
    });
  });
  return m;
}

/* ── Build nav HTML ── */
function buildNav(activeFile) {
  var html = '';
  NAV_STRUCTURE.forEach(function(g) {
    html += '<div class="sb-group">';
    html += '<div class="sb-group-label">' + g.group + '</div>';

    g.items.forEach(function(item) {
      var hasChildren = item.children && item.children.length > 0;
      var isActive = item.href === activeFile;
      var childActive = hasChildren && item.children.some(function(c) { return c.href === activeFile; });
      var isOpen = childActive; // auto-open if a child is active

      if (!hasChildren) {
        html += '<a class="sb-item' + (isActive ? ' is-active' : '') + '" href="' + item.href + '">' +
          '<span class="sb-item-indicator"></span>' +
          '<span class="sb-item-icon">' + svg(item.icon) + '</span>' +
          '<span class="sb-item-label">' + item.label + '</span>' +
          '</a>';
      } else {
        html += '<div class="sb-parent' + (isOpen ? ' is-open' : '') + '">' +
          '<button class="sb-item sb-toggle" type="button" aria-expanded="' + (isOpen ? 'true' : 'false') + '">' +
            '<span class="sb-item-indicator"></span>' +
            '<span class="sb-item-icon">' + svg(item.icon) + '</span>' +
            '<span class="sb-item-label">' + item.label + '</span>' +
            '<span class="sb-chevron">' + svg('chevR', 14) + '</span>' +
          '</button>' +
          '<div class="sb-children" style="' + (isOpen ? '' : 'max-height:0;') + '">' +
          item.children.map(function(c) {
            return '<a class="sb-child' + (c.href === activeFile ? ' is-active' : '') + '" href="' + c.href + '">' +
              '<span class="sb-child-dot"></span>' + c.label + '</a>';
          }).join('') +
          '</div></div>';
      }
    });

    html += '</div>';
  });
  return html;
}

/* ── Main inject ── */
function injectLayout() {
  var page       = document.body.dataset.page || '';
  var activeFile = page + '.html';
  var titleMap   = buildTitleMap();
  var pageTitle  = titleMap[activeFile] || 'Dashboard';

  /* Read collapse state from localStorage */
  var collapsed = localStorage.getItem('bf_sb_collapsed') === '1';

  /* ── Sidebar ── */
  var sidebarHTML =
    '<aside class="bf-sidebar' + (collapsed ? ' is-collapsed' : '') + '" id="bfSidebar" role="navigation" aria-label="Main navigation">' +
      '<div class="bf-sb-brand">' +
        '<div class="bf-sb-logo" aria-hidden="true">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' +
        '</div>' +
        '<span class="bf-sb-name">BiteFlow</span>' +
        '<button class="bf-sb-collapse" id="bfCollapseBtn" title="Collapse sidebar" aria-label="Collapse sidebar">' +
          svg('chevsL', 16) +
        '</button>' +
      '</div>' +

      '<nav class="bf-sb-nav" id="bfNav">' +
        buildNav(activeFile) +
      '</nav>' +

      '<div class="bf-sb-foot">' +
        '<div class="bf-sb-user">' +
          '<div class="bf-sb-avatar">AK</div>' +
          '<div class="bf-sb-user-info">' +
            '<span class="bf-sb-user-name">Aamir Khan</span>' +
            '<span class="bf-sb-user-role">Owner</span>' +
          '</div>' +
          '<button class="bf-sb-logout" title="Logout" aria-label="Logout">' + svg('logout', 15) + '</button>' +
        '</div>' +
        '<div class="bf-sb-version">BiteFlow v2.0</div>' +
      '</div>' +
    '</aside>' +
    '<div class="bf-overlay" id="bfOverlay" aria-hidden="true"></div>';

  /* ── Topbar ── */
  var topbarHTML =
    '<header class="bf-topbar" id="bfTopbar">' +
      '<div class="bf-tb-left">' +
        '<button class="bf-tb-menu" id="bfMenuBtn" aria-label="Open navigation" aria-expanded="false">' + svg('menu', 18) + '</button>' +
        '<div class="bf-tb-title">' +
          '<h1 class="bf-tb-page" id="pageTitle">' + pageTitle + '</h1>' +
          '<nav class="bf-tb-crumb" aria-label="Breadcrumb">' +
            '<span>Home</span><span class="bf-crumb-sep">/</span><span id="crumbActive">' + pageTitle + '</span>' +
          '</nav>' +
        '</div>' +
      '</div>' +
      '<div class="bf-tb-right">' +
        '<button class="bf-tb-search" id="bfSearchBtn" title="Search (Ctrl K)" aria-label="Search">' +
          svg('search', 15) +
          '<span class="bf-search-hint">Search…</span>' +
          '<kbd class="bf-kbd">Ctrl K</kbd>' +
        '</button>' +
        '<span class="bf-tb-date" data-today></span>' +
        '<button class="bf-tb-icon" aria-label="Notifications">' +
          svg('bell', 17) +
          '<span class="bf-notif-dot" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="bf-tb-user">' +
          '<div class="bf-tb-avatar">AK</div>' +
          '<div class="bf-tb-userinfo">' +
            '<span class="bf-tb-uname">Aamir Khan</span>' +
            '<span class="bf-tb-urole">Owner</span>' +
          '</div>' +
          '<svg class="bf-tb-ucaret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</div>' +
      '</div>' +
    '</header>';

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML + topbarHTML);

  /* ── Date stamp ── */
  document.querySelectorAll('[data-today]').forEach(function(el) { el.textContent = todayStr(); });

  /* ── Submenu toggles ── */
  document.querySelectorAll('.sb-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var parent   = btn.closest('.sb-parent');
      var children = parent.querySelector('.sb-children');
      var open     = parent.classList.contains('is-open');

      if (open) {
        children.style.maxHeight = children.scrollHeight + 'px';
        requestAnimationFrame(function() { children.style.maxHeight = '0'; });
        parent.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        parent.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        children.style.maxHeight = children.scrollHeight + 'px';
        children.addEventListener('transitionend', function once() {
          children.style.maxHeight = 'none';
          children.removeEventListener('transitionend', once);
        });
      }
    });
  });

  /* ── Collapse toggle (desktop) ── */
  var sidebar     = document.getElementById('bfSidebar');
  var collapseBtn = document.getElementById('bfCollapseBtn');
  if (collapseBtn) {
    collapseBtn.addEventListener('click', function() {
      var c = sidebar.classList.toggle('is-collapsed');
      localStorage.setItem('bf_sb_collapsed', c ? '1' : '0');
      updateTopbarLeft();
    });
  }

  function updateTopbarLeft() {
    var topbar = document.getElementById('bfTopbar');
    var main   = document.querySelector('.main-content');
    if (!topbar || !main) return;
    if (sidebar.classList.contains('is-collapsed')) {
      topbar.style.left = 'var(--sb-w-col)';
      main.style.marginLeft = 'var(--sb-w-col)';
    } else {
      topbar.style.left = '';
      main.style.marginLeft = '';
    }
  }
  /* Apply on load */
  if (collapsed) updateTopbarLeft();

  /* ── Mobile drawer ── */
  var menuBtn = document.getElementById('bfMenuBtn');
  var overlay = document.getElementById('bfOverlay');

  function openDrawer() {
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openDrawer);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDrawer();
    /* Ctrl+K / Cmd+K → focus search */
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      var s = document.getElementById('bfSearchBtn');
      if (s) s.click();
    }
  });

  /* Close drawer when a nav link is clicked (mobile) */
  document.querySelectorAll('.sb-item[href], .sb-child[href]').forEach(function(a) {
    a.addEventListener('click', function() {
      if (window.innerWidth < 992) closeDrawer();
    });
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', injectLayout);