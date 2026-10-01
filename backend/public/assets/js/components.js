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
    group: 'MAIN MENU',
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
        html += '<a class="sb-item' + (isActive ? ' is-active' : '') + '" href="' + item.href + '" title="' + item.label + '">' +
          '<span class="sb-item-indicator"></span>' +
          '<span class="sb-item-icon">' + svg(item.icon) + '</span>' +
          '<span class="sb-item-label">' + item.label + '</span>' +
          '</a>';
      } else {
        html += '<div class="sb-parent' + (isOpen ? ' is-open' : '') + '">' +
          '<button class="sb-item sb-toggle" type="button" aria-expanded="' + (isOpen ? 'true' : 'false') + '" title="' + item.label + '">' +
            '<span class="sb-item-indicator"></span>' +
            '<span class="sb-item-icon">' + svg(item.icon) + '</span>' +
            '<span class="sb-item-label">' + item.label + '</span>' +
            '<span class="sb-chevron">' + svg('chevR', 14) + '</span>' +
          '</button>' +
          '<div class="sb-children" style="' + (isOpen ? '' : 'max-height:0;') + '">' +
          item.children.map(function(c) {
            return '<a class="sb-child' + (c.href === activeFile ? ' is-active' : '') + '" href="' + c.href + '" title="' + c.label + '">' +
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
  if (page === 'login') return; // Standalone login page

  /* Auth check: if logged out, redirect to login */
  var auth = localStorage.getItem('bf_auth');
  if (auth === 'false') {
    location.href = 'login.html';
    return;
  }

  var activeFile = page + '.html';
  var titleMap   = buildTitleMap();
  var pageTitle  = titleMap[activeFile] || 'Dashboard';

  /* Read collapse state from localStorage */
  var collapsed = localStorage.getItem('bf_sb_collapsed') === '1';

  /* ── Background Decoration (Faint Food ERP Doodles & Curve) ── */
  var decorHTML =
    '<div class="bf-bg-decor" aria-hidden="true">' +
      '<svg class="bf-decor-curve-tl" viewBox="0 0 220 120" fill="none">' +
        '<path d="M-10 10 Q 50 80 120 40 T 210 110" stroke="#FF6B1F" stroke-width="2" fill="none"/>' +
        '<path d="M-10 25 Q 60 95 130 55 T 220 125" stroke="#FF8A00" stroke-width="1.5" stroke-dasharray="4 4" fill="none"/>' +
      '</svg>' +
      '<svg class="bf-decor-corner-doodle" viewBox="0 0 64 64" fill="none" stroke="#FF6B1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M12 28 C 12 16, 52 16, 52 28 Z"/>' +
        '<rect x="10" y="28" width="44" height="6" rx="3" fill="none"/>' +
        '<path d="M12 36 Q 16 42, 20 36 Q 24 42, 28 36 Q 32 42, 36 36 Q 40 42, 44 36 Q 48 42, 52 36"/>' +
        '<path d="M12 40 C 12 48, 52 48, 52 40 Z"/>' +
      '</svg>' +
    '</div>';

  /* ── Sidebar (240px / 72px collapsed, LIGHT warm-white #FFFFFF) ── */
  var sidebarHTML =
    '<aside class="bf-sidebar' + (collapsed ? ' is-collapsed' : '') + '" id="bfSidebar" role="navigation" aria-label="Main navigation">' +
      '<nav class="bf-sb-nav" id="bfNav">' +
        buildNav(activeFile) +
      '</nav>' +
      '<div class="bf-sb-foot">' +
        '<div class="bf-sb-promo-card">' +
          '<div class="bf-promo-badge">⚡ Shift Action</div>' +
          '<div class="bf-promo-title">Today\'s Summary</div>' +
          '<div class="bf-promo-desc">Review shift totals & reconcile cash register</div>' +
          '<a href="reports-profit.html" class="bf-promo-btn">Daily Closing</a>' +
        '</div>' +
        '<div class="bf-sb-version">BiteFlow v2.0 • Lahore</div>' +
      '</div>' +
    '</aside>' +
    '<div class="bf-overlay" id="bfOverlay" aria-hidden="true"></div>';

  /* ── Topbar (Full-width 64px Orange Gradient Header) ── */
  var topbarHTML =
    '<header class="bf-topbar" id="bfTopbar">' +
      '<div class="bf-hdr-left">' +
        '<button class="bf-hdr-toggle" id="bfCollapseBtn" title="Toggle navigation (Ctrl+B)" aria-label="Toggle navigation">' +
          '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
        '</button>' +
        '<a href="index.html" class="bf-hdr-brand" title="BiteFlow Home">' +
          '<div class="bf-hdr-logo" aria-hidden="true">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M12 4V3"/><circle cx="12" cy="3" r="1" fill="currentColor"/><path d="M4 17h16a8 8 0 0 0-16 0z"/><path d="M2 20h20"/>' +
            '</svg>' +
          '</div>' +
          '<div class="bf-hdr-title">' +
            '<span class="bf-brand-bite">Bite</span><span class="bf-brand-flow">Flow</span>' +
          '</div>' +
        '</a>' +
      '</div>' +

      '<div class="bf-hdr-center">' +
        '<button class="bf-hdr-search" id="bfSearchBtn" title="Search pages & features (Ctrl+K)" aria-label="Search">' +
          '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
          '<span class="bf-search-hint">Search pages, menu, orders…</span>' +
          '<kbd class="bf-search-kbd">Ctrl K</kbd>' +
        '</button>' +
      '</div>' +

      '<div class="bf-hdr-right">' +
        '<div class="bf-date-chip" title="Today">' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
          '<span data-today></span>' +
        '</div>' +
        '<button class="bf-hdr-icon-btn" id="bfBellBtn" title="Notifications" aria-label="Notifications">' +
          '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>' +
          '<span class="bf-notif-dot" aria-hidden="true"></span>' +
        '</button>' +
        '<div class="bf-tb-user-wrap">' +
          '<div class="bf-hdr-user" id="bfUserBtn" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">' +
            '<div class="bf-hdr-avatar" id="bfTopAvatar">AK</div>' +
            '<div class="bf-hdr-userinfo">' +
              '<span class="bf-hdr-uname" id="bfTopName">Aamir Khan</span>' +
              '<span class="bf-hdr-urole" id="bfTopRole">Owner</span>' +
            '</div>' +
            '<svg class="bf-hdr-ucaret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' +
          '</div>' +
          '<div class="bf-user-dropdown" id="bfUserDropdown" role="menu" aria-hidden="true">' +
            '<div class="bf-udp-head">' +
              '<div class="bf-udp-avatar" id="bfDdAvatar">AK</div>' +
              '<div>' +
                '<div class="bf-udp-name" id="bfDdName">Aamir Khan</div>' +
                '<div class="bf-udp-role" id="bfDdRole">Owner • BiteFlow</div>' +
              '</div>' +
            '</div>' +
            '<div class="bf-udp-divider"></div>' +
            '<button class="bf-udp-item" id="bfSwitchAccBtn" role="menuitem">' +
              '<span class="bf-udp-icon">' + svg('users', 15) + '</span>' +
              'Switch Account' +
              '<span class="bf-udp-arrow">›</span>' +
            '</button>' +
            '<div class="bf-udp-divider"></div>' +
            '<a class="bf-udp-item" href="settings-users.html" role="menuitem">' +
              '<span class="bf-udp-icon">' + svg('settings', 15) + '</span>' +
              'Settings' +
            '</a>' +
            '<div class="bf-udp-divider"></div>' +
            '<button class="bf-udp-item bf-udp-item--danger" id="bfLogoutBtn" role="menuitem">' +
              '<span class="bf-udp-icon">' + svg('logout', 15) + '</span>' +
              'Sign out' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</header>' +
    '<div class="bf-search-overlay" id="bfSearchOverlay" role="dialog" aria-modal="true" aria-label="Search">' +
      '<div class="bf-search-modal">' +
        '<div class="bf-search-input-wrap">' +
          '<span class="bf-search-icon">' + svg('search', 18) + '</span>' +
          '<input type="text" class="bf-search-input" id="bfSearchInput" placeholder="Search pages, menu, ingredients…" autocomplete="off">' +
          '<button class="bf-search-esc" id="bfSearchClose" aria-label="Close search"><kbd>Esc</kbd></button>' +
        '</div>' +
        '<div class="bf-search-results" id="bfSearchResults"></div>' +
        '<div class="bf-search-footer">Navigate with ↑↓ · Select with Enter · Close with Esc</div>' +
      '</div>' +
    '</div>' +
    '<div class="bf-switch-overlay" id="bfSwitchOverlay" role="dialog" aria-modal="true" aria-label="Switch Account">' +
      '<div class="bf-switch-modal">' +
        '<div class="bf-switch-header">' +
          '<span>Switch Account</span>' +
          '<button class="bf-switch-close" id="bfSwitchClose" aria-label="Close">' + svg('x', 16) + '</button>' +
        '</div>' +
        '<div class="bf-switch-body" id="bfSwitchBody"></div>' +
        '<div class="bf-switch-footer">' +
          '<button class="bf-switch-add" id="bfAddAccBtn">' + svg('users', 15) + ' Add another account</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.body.insertAdjacentHTML('afterbegin', decorHTML + sidebarHTML + topbarHTML);

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

  /* ── Sidebar Toggle (Mobile drawer <992px, Desktop collapse >=992px) ── */
  var sidebar     = document.getElementById('bfSidebar');
  var collapseBtn = document.getElementById('bfCollapseBtn');
  var overlay     = document.getElementById('bfOverlay');

  function openDrawer() {
    if (!sidebar || !overlay) return;
    sidebar.classList.add('is-open');
    overlay.classList.add('is-visible');
    if (collapseBtn) collapseBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!sidebar || !overlay) return;
    sidebar.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    if (collapseBtn) collapseBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function toggleSidebar() {
    if (window.innerWidth < 992) {
      if (sidebar.classList.contains('is-open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    } else {
      var isCol = sidebar.classList.toggle('is-collapsed');
      document.body.classList.toggle('has-collapsed-sidebar', isCol);
      localStorage.setItem('bf_sb_collapsed', isCol ? '1' : '0');
    }
  }

  if (collapseBtn) collapseBtn.addEventListener('click', toggleSidebar);
  if (overlay) overlay.addEventListener('click', closeDrawer);

  /* Set initial collapsed state on desktop */
  if (collapsed && window.innerWidth >= 992) {
    sidebar.classList.add('is-collapsed');
    document.body.classList.add('has-collapsed-sidebar');
  }

  /* ── Search data — all navigable pages ── */
  var SEARCH_PAGES = [];
  NAV_STRUCTURE.forEach(function(g) {
    g.items.forEach(function(item) {
      if (item.href) SEARCH_PAGES.push({ label: item.label, href: item.href, group: g.group, icon: item.icon });
      (item.children || []).forEach(function(c) {
        SEARCH_PAGES.push({ label: c.label, href: c.href, group: item.label, icon: item.icon });
      });
    });
  });

  /* ── Accounts store (localStorage) ── */
  function getAccounts() {
    try { return JSON.parse(localStorage.getItem('bf_accounts') || '[]'); } catch(e) { return []; }
  }
  function saveAccounts(arr) {
    localStorage.setItem('bf_accounts', JSON.stringify(arr));
  }
  function getActiveAccount() {
    try { return JSON.parse(localStorage.getItem('bf_active_account') || 'null'); } catch(e) { return null; }
  }
  function setActiveAccount(acc) {
    localStorage.setItem('bf_active_account', JSON.stringify(acc));
  }

  /* Default account if none */
  var DEFAULT_ACC = { id: 'acc_1', name: 'Aamir Khan', role: 'Owner', initials: 'AK', color: '#EA580C' };
  if (!getAccounts().length) saveAccounts([DEFAULT_ACC]);
  if (!getActiveAccount()) setActiveAccount(DEFAULT_ACC);

  /* Apply active account to topbar */
  function applyAccount(acc) {
    setActiveAccount(acc);
    var fn = function(id, val) { var e = document.getElementById(id); if(e) e.textContent = val; };
    fn('bfTopAvatar',  acc.initials);
    fn('bfTopName',    acc.name);
    fn('bfTopRole',    acc.role);
    fn('bfDdAvatar',   acc.initials);
    fn('bfDdName',     acc.name);
    fn('bfDdRole',     acc.role + ' • BiteFlow');
    var avatarEls = document.querySelectorAll('#bfTopAvatar, #bfDdAvatar, .bf-sb-avatar');
    avatarEls.forEach(function(el) { el.style.background = acc.color || '#EA580C'; });
    /* Sync sidebar footer */
    var sbName = document.querySelector('.bf-sb-user-name');
    var sbRole = document.querySelector('.bf-sb-user-role');
    var sbAv   = document.querySelector('.bf-sb-avatar');
    if (sbName) sbName.textContent = acc.name;
    if (sbRole) sbRole.textContent = acc.role;
    if (sbAv)   { sbAv.textContent = acc.initials; sbAv.style.background = acc.color || '#EA580C'; }
  }

  /* Render switch modal body */
  function renderSwitchBody() {
    var accounts = getAccounts();
    var active   = getActiveAccount() || DEFAULT_ACC;
    var body     = document.getElementById('bfSwitchBody');
    if (!body) return;
    body.innerHTML = accounts.map(function(acc) {
      var isActive = acc.id === active.id;
      return '<div class="bf-switch-acc' + (isActive ? ' is-active' : '') + '" data-id="' + acc.id + '">' +
        '<div class="bf-switch-acc-av" style="background:' + (acc.color || '#EA580C') + '">' + acc.initials + '</div>' +
        '<div class="bf-switch-acc-info">' +
          '<div class="bf-switch-acc-name">' + acc.name + '</div>' +
          '<div class="bf-switch-acc-role">' + acc.role + '</div>' +
        '</div>' +
        (isActive ? '<span class="bf-switch-acc-check">✓</span>' : '') +
        (!isActive ? '<button class="btn btn-sm btn-ghost bf-switch-acc-btn" data-accid="' + acc.id + '">Switch</button>' : '') +
        '<button class="bf-switch-acc-del" data-delid="' + acc.id + '" title="Remove account" aria-label="Remove account">×</button>' +
      '</div>';
    }).join('');

    /* Attach switch/delete handlers */
    body.querySelectorAll('.bf-switch-acc-btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var id  = btn.dataset.accid;
        var acc = getAccounts().find(function(a) { return a.id === id; });
        if (acc) { applyAccount(acc); closeSwitchModal(); closeUserDropdown(); }
      });
    });
    body.querySelectorAll('.bf-switch-acc-del').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var id       = btn.dataset.delid;
        var accounts = getAccounts().filter(function(a) { return a.id !== id; });
        if (!accounts.length) { alert('You must have at least one account.'); return; }
        saveAccounts(accounts);
        var active = getActiveAccount();
        if (active && active.id === id) applyAccount(accounts[0]);
        renderSwitchBody();
      });
    });
  }

  /* ── User Dropdown ── */
  var userBtn      = document.getElementById('bfUserBtn');
  var userDropdown = document.getElementById('bfUserDropdown');

  function openUserDropdown() {
    if (!userDropdown) return;
    userDropdown.classList.add('is-open');
    userBtn && userBtn.setAttribute('aria-expanded', 'true');
  }
  function closeUserDropdown() {
    if (!userDropdown) return;
    userDropdown.classList.remove('is-open');
    userBtn && userBtn.setAttribute('aria-expanded', 'false');
  }

  if (userBtn) {
    userBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      userDropdown.classList.contains('is-open') ? closeUserDropdown() : openUserDropdown();
    });
    userBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); userBtn.click(); }
    });
  }

  /* Close on outside click */
  document.addEventListener('click', function(e) {
    if (userDropdown && !userDropdown.contains(e.target) && userBtn && !userBtn.contains(e.target)) {
      closeUserDropdown();
    }
  });

  /* Logout */
  function doLogout() {
    if (confirm('Sign out of BiteFlow?')) {
      localStorage.setItem('bf_auth', 'false');
      localStorage.removeItem('bf_active_account');
      location.href = 'login.html';
    }
  }
  var logoutBtn = document.getElementById('bfLogoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', doLogout);

  var sbLogoutBtn = document.getElementById('bfSbLogoutBtn');
  if (sbLogoutBtn) sbLogoutBtn.addEventListener('click', doLogout);

  /* ── Switch Account Modal ── */
  var switchOverlay = document.getElementById('bfSwitchOverlay');
  var switchAccBtn  = document.getElementById('bfSwitchAccBtn');
  var switchClose   = document.getElementById('bfSwitchClose');

  function openSwitchModal() {
    if (!switchOverlay) return;
    renderSwitchBody();
    switchOverlay.classList.add('is-open');
    closeUserDropdown();
  }
  function closeSwitchModal() {
    if (!switchOverlay) return;
    switchOverlay.classList.remove('is-open');
  }

  if (switchAccBtn) switchAccBtn.addEventListener('click', openSwitchModal);
  if (switchClose)  switchClose.addEventListener('click', closeSwitchModal);
  if (switchOverlay) {
    switchOverlay.addEventListener('click', function(e) {
      if (e.target === switchOverlay) closeSwitchModal();
    });
  }

  /* Add account */
  var addAccBtn = document.getElementById('bfAddAccBtn');
  if (addAccBtn) {
    addAccBtn.addEventListener('click', function() {
      var name = prompt('Enter full name for new account:');
      if (!name || !name.trim()) return;
      var role = prompt('Enter role (e.g. Manager, Cashier, Waiter):') || 'Staff';
      var colors = ['#EA580C','#0891B2','#16A34A','#7C3AED','#D97706','#DC2626'];
      var accs   = getAccounts();
      var initials = name.trim().split(' ').map(function(w) { return w[0]; }).join('').slice(0,2).toUpperCase();
      var newAcc = {
        id: 'acc_' + Date.now(),
        name: name.trim(),
        role: role.trim(),
        initials: initials,
        color: colors[accs.length % colors.length]
      };
      accs.push(newAcc);
      saveAccounts(accs);
      renderSwitchBody();
    });
  }

  /* Apply saved account on load */
  var savedAcc = getActiveAccount();
  if (savedAcc) applyAccount(savedAcc);

  /* ── Search Overlay ── */
  var searchOverlay = document.getElementById('bfSearchOverlay');
  var searchInput   = document.getElementById('bfSearchInput');
  var searchResults = document.getElementById('bfSearchResults');
  var searchClose   = document.getElementById('bfSearchClose');
  var searchActive  = -1;

  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(function() { if(searchInput) searchInput.focus(); }, 50);
    renderSearchResults('');
  }
  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
    if (searchInput) searchInput.value = '';
    searchActive = -1;
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    var q = query.trim().toLowerCase();
    var filtered = q
      ? SEARCH_PAGES.filter(function(p) { return p.label.toLowerCase().includes(q) || p.group.toLowerCase().includes(q); })
      : SEARCH_PAGES.slice(0, 8);

    if (!filtered.length) {
      searchResults.innerHTML = '<div class="bf-sr-empty">No results for &ldquo;' + query + '&rdquo;</div>';
      return;
    }
    searchResults.innerHTML = filtered.map(function(p, i) {
      return '<a class="bf-sr-item" href="' + p.href + '" data-idx="' + i + '">' +
        '<span class="bf-sr-icon">' + svg(p.icon, 16) + '</span>' +
        '<span class="bf-sr-label">' + p.label + '</span>' +
        '<span class="bf-sr-group">' + p.group + '</span>' +
        '</a>';
    }).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      searchActive = -1;
      renderSearchResults(searchInput.value);
    });
    searchInput.addEventListener('keydown', function(e) {
      var items = searchResults ? searchResults.querySelectorAll('.bf-sr-item') : [];
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchActive = Math.min(searchActive + 1, items.length - 1);
        items.forEach(function(el, i) { el.classList.toggle('is-active', i === searchActive); });
        if (items[searchActive]) items[searchActive].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchActive = Math.max(searchActive - 1, 0);
        items.forEach(function(el, i) { el.classList.toggle('is-active', i === searchActive); });
        if (items[searchActive]) items[searchActive].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter' && searchActive >= 0 && items[searchActive]) {
        items[searchActive].click();
      }
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener('click', function(e) {
      if (e.target === searchOverlay) closeSearch();
    });
  }
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  var searchBtn = document.getElementById('bfSearchBtn');
  if (searchBtn) searchBtn.addEventListener('click', openSearch);

  /* ── Keyboard shortcuts ── */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSearch();
      closeDrawer();
      closeSwitchModal();
      closeUserDropdown();
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      openSearch();
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'b' || e.key === 'B')) {
      e.preventDefault();
      toggleSidebar();
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