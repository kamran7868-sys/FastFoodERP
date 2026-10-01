/* ============================================================
   BiteFlow — Component System v3.0
   Sidebar, Topbar, Navigation
   ============================================================ */

/* ── Navigation Structure ── */
const NAV_STRUCTURE = [
  {
    groupLabel: 'MAIN',
    items: [
      { label: 'Dashboard',  icon: 'grid',         href: 'index.html',    items: [] },
      { label: 'Sales',      icon: 'shopping-bag',  href: null,
        items: [
          { href: 'pos.html',    label: 'POS / New Sale' },
          { href: 'orders.html', label: 'Orders' }
        ]
      },
      { label: 'Tables',     icon: 'layout',       href: 'tables.html',   items: [] },
    ]
  },
  {
    groupLabel: 'OPERATIONS',
    items: [
      { label: 'Menu',      icon: 'book-open', href: null,
        items: [
          { href: 'menu-categories.html', label: 'Categories' },
          { href: 'menu-items.html',      label: 'Menu Items' },
          { href: 'menu-addons.html',     label: 'Add-ons / Variants' }
        ]
      },
      { label: 'Inventory', icon: 'package', href: null,
        items: [
          { href: 'inventory-ingredients.html', label: 'Ingredients' },
          { href: 'inventory-stock.html',        label: 'Stock' },
          { href: 'recipes.html',                label: 'Recipes' }
        ]
      },
      { label: 'Purchases', icon: 'truck', href: null,
        items: [
          { href: 'suppliers.html',  label: 'Suppliers' },
          { href: 'purchases.html',  label: 'Purchases' }
        ]
      },
      { label: 'Customers', icon: 'users',   href: 'customers.html', items: [] },
      { label: 'Expenses',  icon: 'credit-card', href: 'expenses.html',  items: [] },
    ]
  },
  {
    groupLabel: 'INSIGHTS & SYSTEM',
    items: [
      { label: 'Reports', icon: 'bar-chart-2', href: null,
        items: [
          { href: 'reports-sales.html',     label: 'Sales Report' },
          { href: 'reports-purchases.html', label: 'Purchase Report' },
          { href: 'reports-expenses.html',  label: 'Expense Report' },
          { href: 'reports-stock.html',     label: 'Stock Report' },
          { href: 'reports-best.html',      label: 'Best Selling Items' },
          { href: 'reports-profit.html',    label: 'Profit Summary' }
        ]
      },
      { label: 'Settings', icon: 'settings', href: null,
        items: [
          { href: 'settings-users.html',    label: 'Users' },
          { href: 'settings-business.html', label: 'Business Settings' }
        ]
      }
    ]
  }
];

/* ── Lucide icon SVG paths (subset) ── */
const ICONS = {
  'grid':         '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  'shopping-bag': '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  'layout':       '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>',
  'book-open':    '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  'package':      '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>',
  'truck':        '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  'users':        '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'credit-card':  '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>',
  'bar-chart-2':  '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  'settings':     '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  'chevron-right':'<polyline points="9 18 15 12 9 6"/>',
  'menu':         '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'x':            '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  'search':       '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  'bell':         '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  'chevrons-left':'<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>',
  'log-out':      '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>',
  'user':         '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
};

function icon(name, size) {
  size = size || 18;
  const path = ICONS[name] || '';
  return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + path + '</svg>';
}

/* ── Build sidebar HTML ── */
function buildNav(activeFile) {
  let html = '';

  NAV_STRUCTURE.forEach(function (group) {
    html += '<div class="nav-group">';
    html += '<div class="nav-group-label">' + group.groupLabel + '</div>';

    group.items.forEach(function (item) {
      const isSingle = !item.items || item.items.length === 0;
      const isActive = item.href === activeFile;
      const groupOpen = isActive || (item.items && item.items.some(function(i) { return i.href === activeFile; }));

      if (isSingle) {
        html += '<a class="nav-item' + (isActive ? ' active' : '') + '" href="' + item.href + '">' +
          '<span class="nav-indicator"></span>' +
          '<span class="nav-icon">' + icon(item.icon) + '</span>' +
          '<span class="nav-label">' + item.label + '</span>' +
          '</a>';
      } else {
        html += '<div class="nav-group-item' + (groupOpen ? ' open' : '') + '">' +
          '<button class="nav-item nav-parent" type="button">' +
            '<span class="nav-indicator"></span>' +
            '<span class="nav-icon">' + icon(item.icon) + '</span>' +
            '<span class="nav-label">' + item.label + '</span>' +
            '<span class="nav-chevron">' + icon('chevron-right', 14) + '</span>' +
          '</button>' +
          '<div class="nav-children">' +
            item.items.map(function (child) {
              return '<a class="nav-child' + (child.href === activeFile ? ' active' : '') + '" href="' + child.href + '">' +
                '<span class="nav-child-dot"></span>' +
                child.label +
                '</a>';
            }).join('') +
          '</div>' +
          '</div>';
      }
    });

    html += '</div>';
  });

  return html;
}

/* ── Main inject function ── */
function injectLayout() {
  const page = document.body.dataset.page || '';
  const activeFile = page + '.html';

  /* ── Topbar title map ── */
  const titleMap = {};
  NAV_STRUCTURE.forEach(function(g) {
    g.items.forEach(function(item) {
      if (item.href) titleMap[item.href] = item.label;
      (item.items || []).forEach(function(child) {
        titleMap[child.href] = child.label;
      });
    });
  });
  const pageTitle = titleMap[activeFile] || 'Dashboard';

  /* ── Sidebar HTML ── */
  const sidebarHTML =
    '<aside class="sidebar" id="sidebar">' +
      '<div class="sidebar-brand">' +
        '<div class="sidebar-logo">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>' +
        '</div>' +
        '<span class="sidebar-brand-name">BiteFlow</span>' +
        '<button class="sidebar-collapse-btn" id="sidebarCollapseBtn" title="Collapse sidebar">' +
          icon('chevrons-left', 16) +
        '</button>' +
      '</div>' +
      '<nav class="sidebar-nav" id="sidebarNav">' +
        buildNav(activeFile) +
      '</nav>' +
      '<div class="sidebar-bottom">' +
        '<div class="sidebar-user">' +
          '<div class="sidebar-avatar">AK</div>' +
          '<div class="sidebar-user-info">' +
            '<div class="sidebar-user-name">Aamir Khan</div>' +
            '<div class="sidebar-user-role">Owner</div>' +
          '</div>' +
          '<button class="sidebar-logout-btn" title="Logout">' + icon('log-out', 15) + '</button>' +
        '</div>' +
        '<div class="sidebar-version">BiteFlow v2.0 · Lahore</div>' +
      '</div>' +
    '</aside>' +
    '<div class="sidebar-overlay" id="sidebarOverlay"></div>';

  /* ── Topbar HTML ── */
  const topbarHTML =
    '<header class="topbar" id="topbar">' +
      '<div class="topbar-left">' +
        '<button class="topbar-menu-btn" id="menuToggle" title="Toggle menu">' + icon('menu', 18) + '</button>' +
        '<div class="topbar-title-block">' +
          '<h1 class="topbar-page-title" id="pageTitle">' + pageTitle + '</h1>' +
          '<nav class="topbar-breadcrumb">' +
            '<span>Home</span>' +
            '<span class="bc-sep">/</span>' +
            '<span id="crumbActive">' + pageTitle + '</span>' +
          '</nav>' +
        '</div>' +
      '</div>' +
      '<div class="topbar-right">' +
        '<button class="topbar-search-btn" id="searchTrigger" title="Search (⌘K)">' +
          icon('search', 16) +
          '<span class="topbar-search-label">Search...</span>' +
          '<kbd class="topbar-kbd">⌘K</kbd>' +
        '</button>' +
        '<span class="topbar-date" data-today></span>' +
        '<button class="topbar-icon-btn" title="Notifications">' +
          icon('bell', 17) +
          '<span class="topbar-notif-dot"></span>' +
        '</button>' +
        '<div class="topbar-user">' +
          '<div class="topbar-avatar">AK</div>' +
          '<div class="topbar-user-info">' +
            '<div class="topbar-user-name">Aamir Khan</div>' +
            '<div class="topbar-user-role">Owner</div>' +
          '</div>' +
          '<svg class="topbar-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</div>' +
      '</div>' +
    '</header>';

  document.body.insertAdjacentHTML('afterbegin', sidebarHTML + topbarHTML);

  /* ── Update date badges ── */
  document.querySelectorAll('[data-today]').forEach(function(el) { el.textContent = todayStr(); });

  /* ── Nav parent (submenu) toggles ── */
  document.querySelectorAll('.nav-parent').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const groupItem = btn.closest('.nav-group-item');
      groupItem.classList.toggle('open');
    });
  });

  /* ── Sidebar collapse toggle ── */
  const sb = document.getElementById('sidebar');
  const collapseBtn = document.getElementById('sidebarCollapseBtn');
  const mainContent = document.querySelector('.main-content');

  if (collapseBtn && sb) {
    collapseBtn.addEventListener('click', function() {
      sb.classList.toggle('collapsed');
      if (mainContent) mainContent.classList.toggle('sidebar-collapsed');
    });
  }

  /* ── Mobile menu toggle ── */
  const menuToggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('sidebarOverlay');
  if (menuToggle && sb) {
    menuToggle.addEventListener('click', function() {
      sb.classList.toggle('mobile-open');
      overlay.classList.toggle('show');
    });
  }
  if (overlay) {
    overlay.addEventListener('click', function() {
      sb.classList.remove('mobile-open');
      overlay.classList.remove('show');
    });
  }
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', function() {
  injectLayout();
});