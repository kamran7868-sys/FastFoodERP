/* ============================================================
   BiteFlow — Fast Food & Café Management System · shared JS
   Navigation, dummy data (PKR), reusable UI components
   ============================================================ */

/* ---------------- Utilities ---------------- */
function formatPKR(amount) {
  return 'Rs ' + Number(amount).toLocaleString('en-PK');
}

function todayStr() {
  return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

function nowTime() {
  return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

function showToast(message, type) {
  const bg = type === 'danger' ? 'text-bg-danger' : type === 'warning' ? 'text-bg-warning' : 'text-bg-success';
  const icon = type === 'danger' ? 'fa-circle-xmark' : type === 'warning' ? 'fa-triangle-exclamation' : 'fa-circle-check';
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed top-0 end-0 p-3';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast align-items-center border-0 ' + bg;
  toast.setAttribute('role', 'alert');
  toast.innerHTML =
    '<div class="d-flex"><div class="toast-body"><i class="fa-solid ' + icon + ' me-2"></i>' + message +
    '</div><button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button></div>';
  container.appendChild(toast);
  const bs = new bootstrap.Toast(toast, { delay: 2600 });
  bs.show();
  toast.addEventListener('hidden.bs.toast', () => toast.remove());
}

function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

/* ============================================================
   Shared helpers: badges, modals, chart, order detail, print
   ============================================================ */

/* badge helpers */
function statusBadge(status) {
  const map = {
    completed: 'badge-completed', preparing: 'badge-preparing', pending: 'badge-pending', ready: 'badge-ready',
    cancelled: 'badge-cancelled', refunded: 'badge-refunded', hold: 'badge-hold',
    paid: 'badge-paid', unpaid: 'badge-unpaid',
    active: 'badge-active', inactive: 'badge-inactive',
    available: 'badge-available', occupied: 'badge-occupied',
    low: 'badge-low', out_of_stock: 'badge-outofstock', outofstock: 'badge-outofstock',
    in: 'badge-in', out: 'badge-out'
  };
  return '<span class="badge ' + (map[status] || 'badge-inactive') + '">' +
    status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, ' ') + '</span>';
}

function typeBadge(type) {
  return '<span class="badge badge-' + String(type || 'takeaway').toLowerCase() + '">' + (type || 'Takeaway') + '</span>';
}

function stockPill(type) {
  const labels = { in: 'Stock In', out: 'Stock Out', adjust: 'Adjustment', waste: 'Wastage' };
  return '<span class="stock-pill ' + type + '">' + (labels[type] || type) + '</span>';
}

function emptyRow(colspan, title, sub) {
  return '<tr><td colspan="' + colspan + '"><div class="empty-state">' +
    '<div class="es-icon"><i class="fa-regular fa-folder-open"></i></div>' +
    '<h6>' + (title || 'Nothing here yet') + '</h6><p>' + (sub || '') + '</p></div></td></tr>';
}

/* confirmation modal */
function confirmAction(message, onConfirm, confirmText) {
  const el = document.getElementById('confirmModal');
  if (!el) return;
  document.getElementById('confirmMsg').innerHTML = message;
  document.getElementById('confirmYesBtn').textContent = confirmText || 'Yes, continue';
  const modal = bootstrap.Modal.getOrCreateInstance(el);
  document.getElementById('confirmYesBtn').onclick = function () {
    modal.hide();
    onConfirm && onConfirm();
  };
  modal.show();
}

/* chart builder */
function barChart(elId, groups) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = '';
  groups.forEach(function (g) {
    const div = document.createElement('div');
    div.className = 'bar-group';
    let bars = '';
    g.bars.forEach(function (b) {
      bars += '<div class="bar ' + (b.cls || '') + '" style="height:' + b.h + '%" title="' + b.title + '"></div>';
    });
    div.innerHTML = '<div class="bar-pair">' + bars + '</div><div class="bar-label">' + g.label + '</div>';
    el.appendChild(div);
  });
}

/* order detail modal (shared across pages) */
function openOrderDetail(id) {
  const o = DB.orders.find(x => x.id === id);
  if (!o) return;
  const el = document.getElementById('orderDetailModal');
  if (!el) { alert('Order detail modal is not available on this page.'); return; }
  document.getElementById('odNo').textContent = '#' + o.id;
  document.getElementById('odCustomer').textContent = o.customer;
  document.getElementById('odTable').textContent = o.table;
  document.getElementById('odType').textContent = o.type;
  document.getElementById('odPayment').textContent = o.payment === '—' ? 'Not paid yet' : o.payment;
  document.getElementById('odDate').textContent = o.date + ' · ' + o.time;
  document.getElementById('odStatusBadge').innerHTML = statusBadge(o.status);
  document.getElementById('odSubtotal').textContent = formatPKR(o.subtotal);
  document.getElementById('odDiscount').textContent = '-' + formatPKR(o.discount);
  document.getElementById('odTax').textContent = formatPKR(o.tax);
  document.getElementById('odTotal').textContent = formatPKR(o.total);

  const tbody = document.getElementById('odItems');
  tbody.innerHTML = '';
  o.items.forEach(function (it) {
    const tr = document.createElement('tr');
    tr.innerHTML = '<td>' + esc(it.name) + '</td><td class="text-center">' + it.qty + '</td>' +
      '<td class="text-end">' + formatPKR(it.price) + '</td><td class="text-end fw-semibold">' + formatPKR(it.price * it.qty) + '</td>';
    tbody.appendChild(tr);
  });

  const statusSel = document.getElementById('odStatus');
  if (statusSel) {
    statusSel.value = o.status;
    statusSel.onchange = function () {
      o.status = statusSel.value;
      document.getElementById('odStatusBadge').innerHTML = statusBadge(o.status);
      showToast('Order #' + o.id + ' marked as ' + o.status + '.', 'success');
      if (window.refreshOrdersTable) window.refreshOrdersTable();
    };
  }

  document.getElementById('odPrintBtn').onclick = function () {
    openReceiptModal(o.id);
  };

  bootstrap.Modal.getOrCreateInstance(el).show();
}

/* ---------------- Cash receipt modal (shared) ---------------- */
let currentReceiptOrder = null;

function openReceiptModal(id) {
  const o = DB.orders.find(x => x.id === id);
  if (!o) return;
  const b = DB.business;
  currentReceiptOrder = o;
  document.getElementById('rcBrand').textContent = b.name.toUpperCase();
  document.getElementById('rcAddr').textContent = b.address;
  document.getElementById('rcPhone').textContent = 'Tel: ' + b.phone;
  document.getElementById('rcNo').textContent = '#' + o.id;
  document.getElementById('rcDate').textContent = o.date;
  document.getElementById('rcTime').textContent = o.time;
  document.getElementById('rcType').textContent = o.type;
  document.getElementById('rcCustomer').textContent = o.customer;
  document.getElementById('rcTable').textContent = o.table || '—';
  document.getElementById('rcSubtotal').textContent = formatPKR(o.subtotal);
  document.getElementById('rcTaxRate').textContent = b.taxRate;
  document.getElementById('rcTax').textContent = formatPKR(o.tax);
  document.getElementById('rcTotal').textContent = formatPKR(o.total);
  document.getElementById('rcPayment').textContent = o.payment === '—' ? 'Not Paid' : o.payment;
  document.getElementById('rcFoot').innerHTML = 'Thank you for visiting ' + esc(b.name) + '!<br>For delivery orders call:<br>' + esc(b.phone) + '<br><br>Shukriya — Phir tashreef laayein!';
  document.getElementById('rcItems').innerHTML = o.items.map(function (it) {
    return '<div class="rp-item"><span class="ri-name">' + esc(it.name) + '</span>' +
      '<span class="ri-qty">' + it.qty + '</span>' +
      '<span class="ri-total">' + formatPKR(it.qty * it.price) + '</span></div>';
  }).join('');
  document.getElementById('rcPrintBtn').onclick = printReceipt;
  bootstrap.Modal.getOrCreateInstance(document.getElementById('receiptModal')).show();
}

function printReceipt() {
  const preview = document.querySelector('#receiptModal .receipt-preview');
  if (!preview || !currentReceiptOrder) return;
  let area = document.getElementById('printArea');
  if (!area) {
    area = document.createElement('div');
    area.id = 'printArea';
    document.body.appendChild(area);
  }
  area.innerHTML = '<div class="receipt">' + preview.innerHTML + '</div>';
  document.body.classList.add('printing-invoice');
  const cleanupPrint = function () { document.body.classList.remove('printing-invoice'); };
  window.addEventListener('afterprint', cleanupPrint, { once: true });
  window.print();
  setTimeout(cleanupPrint, 3000);
}

/* invoice print */
function printOrder(o) {
  const meta = {
    id: o.id, date: o.date, time: o.time, type: o.type,
    customer: o.customer, table: o.table, payment: o.payment
  };
  const totals = { subtotal: o.subtotal, discount: o.discount, tax: o.tax, total: o.total };
  printInvoice(meta, o.items, totals);
}

function printInvoice(meta, items, totals) {
  let area = document.getElementById('printArea');
  if (!area) {
    area = document.createElement('div');
    area.id = 'printArea';
    document.body.appendChild(area);
  }
  const rows = items.map(function (it) {
    return '<div class="inv-item">' +
      '<span class="inv-item-name">' + esc(it.name) + '</span>' +
      '<span class="inv-item-meta">' + it.qty + ' × ' + formatPKR(it.price) + '</span>' +
      '<span class="inv-item-total">' + formatPKR(it.price * it.qty) + '</span></div>';
  }).join('');
  const b = DB.business;
  area.innerHTML =
    '<div class="receipt">' +
    '<div class="inv-head">' +
    '<div class="inv-brand">' + esc(b.name) + '</div>' +
    '<div class="inv-sub">' + esc(b.address) + '</div>' +
    '<div class="inv-sub">Tel: ' + esc(b.phone) + '</div>' +
    '</div>' +
    '<div class="inv-dash"></div>' +
    '<div class="inv-meta"><span>Invoice #' + meta.id + '</span><span>' + meta.date + '</span></div>' +
    '<div class="inv-meta"><span>' + meta.time + '</span><span>' + esc(meta.type) + '</span></div>' +
    '<div class="inv-meta"><span>Customer</span><span>' + esc(meta.customer) + '</span></div>' +
    '<div class="inv-meta"><span>Table / Area</span><span>' + esc(meta.table) + '</span></div>' +
    '<div class="inv-dash"></div>' +
    rows +
    '<div class="inv-dash"></div>' +
    '<div class="inv-meta"><span>Subtotal</span><span>' + formatPKR(totals.subtotal) + '</span></div>' +
    (totals.discount ? '<div class="inv-meta"><span>Discount</span><span>− ' + formatPKR(totals.discount) + '</span></div>' : '') +
    '<div class="inv-meta"><span>Tax (' + b.taxRate + '%)</span><span>' + formatPKR(totals.tax) + '</span></div>' +
    '<div class="inv-total"><span>TOTAL</span><span>' + formatPKR(totals.total) + '</span></div>' +
    '<div class="inv-meta"><span>Paid By</span><span>' + (meta.payment === '—' ? 'Not Paid' : esc(meta.payment)) + '</span></div>' +
    '<div class="inv-dash"></div>' +
    '<div class="inv-foot">' + esc(b.invoiceFooter) + '<br>Shukriya — Phir tashreef laayein!</div>' +
    '</div>';
  document.body.classList.add('printing-invoice');
  const cleanupPrint = function () { document.body.classList.remove('printing-invoice'); };
  window.addEventListener('afterprint', cleanupPrint, { once: true });
  window.print();
  setTimeout(cleanupPrint, 3000);
}

/* search a table by input */
function bindSearch(inputId, renderFn) {
  const inp = document.getElementById(inputId);
  if (inp) inp.addEventListener('keyup', renderFn);
}

/* fill .print-date elements with current date/time (report print headers) */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.print-date').forEach(function (el) {
    const d = new Date();
    el.textContent = d.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' }) +
      ', ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  });
});
