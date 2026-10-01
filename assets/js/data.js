/* ---------------- Dummy data ---------------- */
const DB = {
  business: {
    name: 'BiteFlow', phone: '0300-1234567', address: 'Shop #12, Main Boulevard, Gulberg III, Lahore',
    email: 'info@biteflow.pk', currency: 'PKR (Rs)', taxRate: 5,
    invoiceFooter: 'Thank you for visiting BiteFlow! For delivery orders call: 0300-1234567'
  },

  users: [
    { id: 1, name: 'Aamir Khan', username: 'Aamir Khan', handle: 'aamir', email: 'aamir@biryanibits.pk', role: 'Owner', permission: 'Full access', status: 'active', password: '12345678' },
    { id: 2, name: 'Ali Hassan', username: 'Ali Hassan', handle: 'ali', email: 'ali@biryanibits.pk', role: 'Manager', permission: 'All except settings', status: 'active', password: '12345678' },
    { id: 3, name: 'Naveed Akhtar', username: 'Naveed Akhtar', handle: 'naveed', email: 'naveed@biryanibits.pk', role: 'Cashier', permission: 'POS, orders, customers', status: 'active', password: '12345678' },
    { id: 4, name: 'Kamran Shah', username: 'Kamran Shah', handle: 'kamran', email: 'kamran@biryanibits.pk', role: 'Waiter', permission: 'POS, tables, orders', status: 'active', password: '12345678' },
    { id: 5, name: 'Rizwan Ahmed', username: 'Rizwan Ahmed', handle: 'rizwan', email: 'rizwan@biryanibits.pk', role: 'Chef', permission: 'Menu, recipes, stock', status: 'inactive', password: '12345678' }
  ],

  categories: [
    { id: 1, name: 'Burgers', emoji: '🍔', status: 'active' },
    { id: 2, name: 'Sandwiches', emoji: '🥪', status: 'active' },
    { id: 3, name: 'Pizza', emoji: '🍕', status: 'active' },
    { id: 4, name: 'BBQ', emoji: '🍢', status: 'active' },
    { id: 5, name: 'Sides', emoji: '🍟', status: 'active' },
    { id: 6, name: 'Beverages', emoji: '🥤', status: 'active' },
    { id: 7, name: 'Desserts', emoji: '🍫', status: 'active' },
    { id: 8, name: 'Rolls', emoji: '🌯', status: 'active' }
  ],

  addons: [
    { id: 1, name: 'Extra Cheese', price: 100, status: 'active' },
    { id: 2, name: 'Extra Patty', price: 150, status: 'active' },
    { id: 3, name: 'Extra Garlic Sauce', price: 50, status: 'active' },
    { id: 4, name: 'Cheese Slice', price: 60, status: 'active' },
    { id: 5, name: 'Jalapenos', price: 80, status: 'active' },
    { id: 6, name: 'Extra Fries', price: 120, status: 'active' },
    { id: 7, name: 'Raita', price: 60, status: 'active' },
    { id: 8, name: 'Garlic Mayo', price: 40, status: 'active' },
    { id: 9, name: 'Extra Espresso Shot', price: 100, status: 'active' },
    { id: 10, name: 'Whipped Cream', price: 80, status: 'active' },
    { id: 11, name: 'Ice Cream Scoop', price: 100, status: 'active' }
  ],

  menu: [
    { id: 1, name: 'Zinger Burger', category: 'Burgers', emoji: '🍔', status: 'available', desc: 'Crispy fried chicken, mayo, lettuce & bun.', baseCost: 280,
      variants: [{ size: 'Regular', price: 450, cost: 280 }, { size: 'Large', price: 650, cost: 400 }],
      addons: [1, 2, 4, 8] },
    { id: 2, name: 'Chicken Shawarma', category: 'Burgers', emoji: '🌯', status: 'available', desc: 'Spiced chicken, garlic sauce & salad in shawarma bread.', baseCost: 210,
      variants: [{ size: 'Single', price: 350, cost: 210 }, { size: 'Double', price: 550, cost: 340 }],
      addons: [3] },
    { id: 3, name: 'Club Sandwich', category: 'Sandwiches', emoji: '🥪', status: 'available', desc: 'Triple-layer chicken club with fries.', baseCost: 230,
      variants: [{ size: 'Regular', price: 380, cost: 230 }, { size: 'Combo + Fries', price: 550, cost: 320 }],
      addons: [4, 6, 8] },
    { id: 4, name: 'Chicken Tikka Pizza', category: 'Pizza', emoji: '🍕', status: 'available', desc: 'Hand-tossed base, tikka chunks & mozzarella.', baseCost: 620,
      variants: [{ size: 'Small (9")', price: 700, cost: 450 }, { size: 'Medium (12")', price: 950, cost: 620 }, { size: 'Large (16")', price: 1450, cost: 950 }],
      addons: [1, 5] },
    { id: 5, name: 'Fajita Pizza', category: 'Pizza', emoji: '🍕', status: 'out_of_stock', desc: 'Grilled chicken fajita, onions, peppers.', baseCost: 720,
      variants: [{ size: 'Small (9")', price: 820, cost: 540 }, { size: 'Medium (12")', price: 1100, cost: 720 }, { size: 'Large (16")', price: 1650, cost: 1080 }],
      addons: [1, 5] },
    { id: 6, name: 'Beef Seekh Kabab', category: 'BBQ', emoji: '🍢', status: 'available', desc: 'Char-grilled minced beef seekh with naan.', baseCost: 360,
      variants: [{ size: 'Half Plate', price: 550, cost: 360 }, { size: 'Full Plate', price: 950, cost: 620 }],
      addons: [7] },
    { id: 7, name: 'Chicken Malai Boti', category: 'BBQ', emoji: '🍗', status: 'available', desc: 'Creamy malai chicken, mild & juicy.', baseCost: 400,
      variants: [{ size: 'Half Plate', price: 600, cost: 400 }, { size: 'Full Plate', price: 1050, cost: 700 }],
      addons: [7] },
    { id: 8, name: 'French Fries', category: 'Sides', emoji: '🍟', status: 'available', desc: 'Crispy golden fries with ketchup.', baseCost: 80,
      variants: [{ size: 'Regular', price: 220, cost: 80 }, { size: 'Large', price: 300, cost: 110 }],
      addons: [1, 8] },
    { id: 9, name: 'Chicken Nuggets', category: 'Sides', emoji: '🐔', status: 'available', desc: 'Golden fried chicken bites.', baseCost: 140,
      variants: [{ size: '6 pcs', price: 280, cost: 140 }, { size: '9 pcs', price: 380, cost: 190 }],
      addons: [8] },
    { id: 10, name: 'Cold Coffee', category: 'Beverages', emoji: '🥤', status: 'available', desc: 'Iced coffee with milk & sugar.', baseCost: 120,
      variants: [{ size: 'Regular', price: 280, cost: 120 }, { size: 'Large', price: 380, cost: 165 }],
      addons: [9, 10] },
    { id: 11, name: 'Fresh Lime Soda', category: 'Beverages', emoji: '🍋', status: 'available', desc: 'Chilled lime with sparkling soda.', baseCost: 60,
      variants: [{ size: 'Regular', price: 180, cost: 60 }],
      addons: [] },
    { id: 12, name: 'Mango Smoothie', category: 'Beverages', emoji: '🥭', status: 'available', desc: 'Fresh mango blended with milk.', baseCost: 160,
      variants: [{ size: 'Regular', price: 320, cost: 160 }, { size: 'Large', price: 420, cost: 210 }],
      addons: [10] },
    { id: 13, name: 'Chocolate Brownie', category: 'Desserts', emoji: '🍫', status: 'available', desc: 'Warm fudgy brownie.', baseCost: 140,
      variants: [{ size: 'Single', price: 300, cost: 140 }, { size: 'With Ice Cream', price: 400, cost: 190 }],
      addons: [11] },
    { id: 14, name: 'Gulab Jamun', category: 'Desserts', emoji: '🍮', status: 'available', desc: 'Classic desi sweet in syrup.', baseCost: 60,
      variants: [{ size: '2 pcs', price: 150, cost: 60 }, { size: '4 pcs', price: 280, cost: 115 }],
      addons: [] },
    { id: 15, name: 'Egg Roll', category: 'Rolls', emoji: '🌮', status: 'available', desc: 'Egg + veggies wrapped in paratha.', baseCost: 110,
      variants: [{ size: 'Regular', price: 200, cost: 110 }],
      addons: [8] },
    { id: 16, name: 'Chicken Cheese Roll', category: 'Rolls', emoji: '🌯', status: 'available', desc: 'Crispy roll with chicken & cheese.', baseCost: 170,
      variants: [{ size: 'Regular', price: 280, cost: 170 }, { size: 'Large', price: 380, cost: 230 }],
      addons: [1] }
  ],

  tables: [
    { id: 'T1', name: 'Table 01', capacity: 2, status: 'available', order: null },
    { id: 'T2', name: 'Table 02', capacity: 2, status: 'occupied', order: 1012 },
    { id: 'T3', name: 'Table 03', capacity: 4, status: 'available', order: null },
    { id: 'T4', name: 'Table 04', capacity: 4, status: 'occupied', order: 1010 },
    { id: 'T5', name: 'Table 05', capacity: 6, status: 'hold', order: 1013 },
    { id: 'T6', name: 'Table 06', capacity: 6, status: 'available', order: null },
    { id: 'T7', name: 'Table 07', capacity: 8, status: 'available', order: null },
    { id: 'T8', name: 'Table 08', capacity: 8, status: 'occupied', order: 1011 }
  ],

  orders: [
    { id: 1014, type: 'Dine-in', customer: 'Walk-in Customer', table: 'T2', time: '2:05 PM', date: '09 Aug 2024',
      items: [{ name: 'Zinger Burger (Regular)', qty: 2, price: 450 }, { name: 'Cold Coffee (Large)', qty: 1, price: 380 }],
      subtotal: 1280, discount: 0, tax: 64, total: 1344, payment: 'Cash', status: 'pending' },
    { id: 1013, type: 'Dine-in', customer: 'Usman Ali', table: 'T5', time: '1:40 PM', date: '09 Aug 2024',
      items: [{ name: 'Beef Seekh Kabab (Full Plate)', qty: 1, price: 950 }, { name: 'Fresh Lime Soda (Regular)', qty: 2, price: 180 }],
      subtotal: 1310, discount: 100, tax: 60, total: 1270, payment: '—', status: 'hold' },
    { id: 1012, type: 'Dine-in', customer: 'Sana Javed', table: 'T2', time: '1:15 PM', date: '09 Aug 2024',
      items: [{ name: 'Chicken Tikka Pizza (Medium)', qty: 1, price: 950 }, { name: 'Mango Smoothie (Regular)', qty: 1, price: 320 }],
      subtotal: 1270, discount: 0, tax: 63, total: 1333, payment: 'Card', status: 'preparing' },
    { id: 1011, type: 'Takeaway', customer: 'Bilal Hussain', table: 'Counter', time: '12:50 PM', date: '09 Aug 2024',
      items: [{ name: 'Zinger Burger (Large)', qty: 2, price: 650 }, { name: 'French Fries (Large)', qty: 1, price: 300 }],
      subtotal: 1600, discount: 150, tax: 72, total: 1522, payment: 'JazzCash', status: 'preparing' },
    { id: 1010, type: 'Dine-in', customer: 'Ayesha Siddiqui', table: 'T4', time: '12:25 PM', date: '09 Aug 2024',
      items: [{ name: 'Chicken Malai Boti (Full Plate)', qty: 1, price: 1050 }, { name: 'Gulab Jamun (4 pcs)', qty: 1, price: 280 }],
      subtotal: 1330, discount: 0, tax: 66, total: 1396, payment: 'EasyPaisa', status: 'completed' },
    { id: 1009, type: 'Delivery', customer: 'Ahmed Raza', table: 'Delivery', time: '12:00 PM', date: '09 Aug 2024',
      items: [{ name: 'Chicken Shawarma (Double)', qty: 2, price: 550 }, { name: 'Cold Coffee (Regular)', qty: 2, price: 280 }],
      subtotal: 1660, discount: 100, tax: 78, total: 1638, payment: 'Card', status: 'completed' },
    { id: 1008, type: 'Takeaway', customer: 'Walk-in Customer', table: 'Counter', time: '11:30 AM', date: '09 Aug 2024',
      items: [{ name: 'Club Sandwich (Combo + Fries)', qty: 2, price: 550 }, { name: 'Fresh Lime Soda (Regular)', qty: 2, price: 180 }],
      subtotal: 1460, discount: 0, tax: 73, total: 1533, payment: 'Cash', status: 'completed' },
    { id: 1007, type: 'Delivery', customer: 'Fatima Khan', table: 'Delivery', time: '11:05 AM', date: '09 Aug 2024',
      items: [{ name: 'Chicken Tikka Pizza (Medium)', qty: 1, price: 950 }, { name: 'Cold Coffee (Regular)', qty: 2, price: 280 }],
      subtotal: 1510, discount: 150, tax: 68, total: 1428, payment: 'JazzCash', status: 'completed' },
    { id: 1006, type: 'Dine-in', customer: 'Walk-in Customer', table: 'T3', time: '10:40 AM', date: '09 Aug 2024',
      items: [{ name: 'Chicken Nuggets (9 pcs)', qty: 1, price: 380 }, { name: 'Fresh Lime Soda (Regular)', qty: 1, price: 180 }],
      subtotal: 560, discount: 0, tax: 28, total: 588, payment: 'Cash', status: 'completed' },
    { id: 1005, type: 'Takeaway', customer: 'Usman Ali', table: 'Counter', time: '10:15 AM', date: '09 Aug 2024',
      items: [{ name: 'Egg Roll (Regular)', qty: 2, price: 200 }, { name: 'French Fries (Regular)', qty: 1, price: 220 }],
      subtotal: 620, discount: 0, tax: 31, total: 651, payment: 'Cash', status: 'cancelled' },
    { id: 1004, type: 'Delivery', customer: 'Bilal Hussain', table: 'Delivery', time: '8:05 PM', date: '08 Aug 2024',
      items: [{ name: 'Chicken Cheese Roll (Large)', qty: 2, price: 380 }, { name: 'Mango Smoothie (Large)', qty: 1, price: 420 }],
      subtotal: 1180, discount: 100, tax: 54, total: 1134, payment: 'Card', status: 'completed' },
    { id: 1003, type: 'Dine-in', customer: 'Fatima Khan', table: 'T7', time: '7:30 PM', date: '08 Aug 2024',
      items: [{ name: 'Chicken Tikka Pizza (Large)', qty: 1, price: 1450 }, { name: 'Cold Coffee (Large)', qty: 2, price: 380 }],
      subtotal: 2210, discount: 0, tax: 110, total: 2320, payment: 'Card', status: 'completed' },
    { id: 1002, type: 'Takeaway', customer: 'Sana Javed', table: 'Counter', time: '6:45 PM', date: '08 Aug 2024',
      items: [{ name: 'Zinger Burger (Regular)', qty: 3, price: 450 }, { name: 'Chicken Nuggets (6 pcs)', qty: 1, price: 280 }],
      subtotal: 1630, discount: 200, tax: 71, total: 1501, payment: 'EasyPaisa', status: 'completed' },
    { id: 1001, type: 'Dine-in', customer: 'Ayesha Siddiqui', table: 'T8', time: '6:00 PM', date: '08 Aug 2024',
      items: [{ name: 'Chicken Malai Boti (Half Plate)', qty: 2, price: 600 }, { name: 'Gulab Jamun (2 pcs)', qty: 2, price: 150 }],
      subtotal: 1500, discount: 0, tax: 75, total: 1575, payment: 'Cash', status: 'completed' }
  ],

  ingredients: [
    { id: 1, name: 'Chicken Boneless', category: 'Meat', unit: 'kg', qty: 18, minQty: 10, cost: 550, supplier: 'Karachi Meat Mart' },
    { id: 2, name: 'Beef', category: 'Meat', unit: 'kg', qty: 6, minQty: 8, cost: 980, supplier: 'Karachi Meat Mart' },
    { id: 3, name: 'Burger Buns', category: 'Bakery', unit: 'pack', qty: 25, minQty: 15, cost: 320, supplier: 'Metro Cash & Carry' },
    { id: 4, name: 'Pizza Cheese', category: 'Dairy', unit: 'kg', qty: 4, minQty: 5, cost: 1150, supplier: 'Nestle Distributor' },
    { id: 5, name: 'Cooking Oil', category: 'Pantry', unit: 'litre', qty: 30, minQty: 10, cost: 390, supplier: 'Habib Oil Mills' },
    { id: 6, name: 'Potatoes', category: 'Produce', unit: 'kg', qty: 12, minQty: 20, cost: 90, supplier: 'Sunday Bazaar Produce' },
    { id: 7, name: 'Flour', category: 'Pantry', unit: 'kg', qty: 40, minQty: 25, cost: 140, supplier: 'Metro Cash & Carry' },
    { id: 8, name: 'Coca Cola 1.5L', category: 'Beverages', unit: 'crate', qty: 8, minQty: 5, cost: 1050, supplier: 'Coca-Cola Distributor' },
    { id: 9, name: 'Milk', category: 'Dairy', unit: 'litre', qty: 15, minQty: 10, cost: 210, supplier: 'Nestle Distributor' },
    { id: 10, name: 'Coffee Beans', category: 'Beverages', unit: 'kg', qty: 0, minQty: 4, cost: 2200, supplier: 'Metro Cash & Carry' }
  ],

  stockMoves: [
    { id: 1, item: 'Chicken Boneless', type: 'in', qty: 10, note: 'Purchase PO-2024-006', date: '09 Aug 2024', by: 'Ali Hassan' },
    { id: 2, item: 'Beef', type: 'in', qty: 8, note: 'Purchase PO-2024-006', date: '09 Aug 2024', by: 'Ali Hassan' },
    { id: 3, item: 'Potatoes', type: 'out', qty: 6, note: 'Fries production', date: '09 Aug 2024', by: 'Imran (Chef)' },
    { id: 4, item: 'Pizza Cheese', type: 'out', qty: 1.5, note: 'Pizza prep', date: '09 Aug 2024', by: 'Imran (Chef)' },
    { id: 5, item: 'Coffee Beans', type: 'adjust', qty: -2, note: 'Count correction', date: '09 Aug 2024', by: 'Aamir Khan' },
    { id: 6, item: 'Cooking Oil', type: 'waste', qty: -4, note: 'Spilled during fryer change', date: '08 Aug 2024', by: 'Rizwan (Chef)' },
    { id: 7, item: 'Milk', type: 'waste', qty: -1, note: 'Expired stock', date: '08 Aug 2024', by: 'Ali Hassan' },
    { id: 8, item: 'Flour', type: 'in', qty: 15, note: 'Purchase PO-2024-005', date: '08 Aug 2024', by: 'Ali Hassan' }
  ],

  recipes: [
    { id: 1, name: 'Zinger Burger', output: 1, price: 450, cost: 280, ingredients: [['Chicken Boneless', 0.25, 'kg'], ['Burger Buns', 1, 'pack'], ['Cooking Oil', 0.15, 'litre'], ['Flour', 0.08, 'kg']] },
    { id: 2, name: 'Chicken Tikka Pizza (Large)', output: 1, price: 1450, cost: 950, ingredients: [['Pizza Cheese', 0.35, 'kg'], ['Flour', 0.3, 'kg'], ['Chicken Boneless', 0.4, 'kg'], ['Cooking Oil', 0.1, 'litre']] },
    { id: 3, name: 'French Fries (Large)', output: 1, price: 300, cost: 110, ingredients: [['Potatoes', 0.5, 'kg'], ['Cooking Oil', 0.2, 'litre']] },
    { id: 4, name: 'Cold Coffee', output: 1, price: 280, cost: 120, ingredients: [['Milk', 0.25, 'litre'], ['Coffee Beans', 0.02, 'kg']] },
    { id: 5, name: 'Chicken Shawarma (Double)', output: 1, price: 550, cost: 340, ingredients: [['Chicken Boneless', 0.3, 'kg'], ['Flour', 0.1, 'kg'], ['Cooking Oil', 0.08, 'litre']] },
    { id: 6, name: 'Chocolate Brownie', output: 12, price: 300, cost: 140, ingredients: [['Flour', 0.5, 'kg'], ['Milk', 0.3, 'litre'], ['Cooking Oil', 0.2, 'litre']] }
  ],

  suppliers: [
    { id: 1, name: 'Karachi Meat Mart', contact: 'Abdul Qadir', phone: '0300-1112233', email: 'kmeat@example.com', address: 'Shahrah-e-Faisal, Karachi', category: 'Meat', status: 'active' },
    { id: 2, name: 'Metro Cash & Carry', contact: 'Metro Desk', phone: '042-111333555', email: 'sales@metro.pk', address: 'MM Alam Road, Lahore', category: 'Grocery', status: 'active' },
    { id: 3, name: 'Habib Oil Mills', contact: 'Rashid Habib', phone: '0321-4455667', email: 'info@habiboil.pk', address: 'Ferozepur Road, Lahore', category: 'Pantry', status: 'active' },
    { id: 4, name: 'Coca-Cola Distributor', contact: 'Faisal Brothers', phone: '0333-7788990', email: 'orders@faisalbros.pk', address: 'Walton Road, Lahore', category: 'Beverages', status: 'active' },
    { id: 5, name: 'Nestle Distributor', contact: 'Sajid Mehmood', phone: '0345-2233445', email: 'nestle.pk@example.com', address: 'Ring Road, Lahore', category: 'Dairy', status: 'active' },
    { id: 6, name: 'Sunday Bazaar Produce', contact: 'Ghulam Nabi', phone: '0311-6677889', email: 'sbazaar@example.com', address: 'Sunday Bazaar, Model Town', category: 'Produce', status: 'inactive' }
  ],

  purchases: [
    { id: 'PO-2024-006', date: '09 Aug 2024', supplier: 'Karachi Meat Mart', amount: 12500, status: 'paid', note: 'Chicken 10kg, beef 8kg', items: 2 },
    { id: 'PO-2024-005', date: '08 Aug 2024', supplier: 'Metro Cash & Carry', amount: 18400, status: 'paid', note: 'Flour, buns & pantry restock', items: 5 },
    { id: 'PO-2024-004', date: '07 Aug 2024', supplier: 'Habib Oil Mills', amount: 9750, status: 'pending', note: 'Cooking oil 25L', items: 1 },
    { id: 'PO-2024-003', date: '06 Aug 2024', supplier: 'Coca-Cola Distributor', amount: 8400, status: 'paid', note: 'Cola 8 crates', items: 1 },
    { id: 'PO-2024-002', date: '05 Aug 2024', supplier: 'Nestle Distributor', amount: 14200, status: 'pending', note: 'Milk, cheese & dairy', items: 3 },
    { id: 'PO-2024-001', date: '04 Aug 2024', supplier: 'Karachi Meat Mart', amount: 15800, status: 'paid', note: 'Chicken 15kg, beef 7kg', items: 2 }
  ],

  customers: [
    { id: 1, name: 'Ahmed Raza', phone: '0300-1234567', location: 'Gulberg III, Lahore', orders: 14, spent: 25600, balance: 1200, lastOrder: '09 Aug 2024' },
    { id: 2, name: 'Fatima Khan', phone: '0321-7654321', location: 'Model Town, Lahore', orders: 9, spent: 18300, balance: 0, lastOrder: '09 Aug 2024' },
    { id: 3, name: 'Usman Ali', phone: '0333-9876543', location: 'Johar Town, Lahore', orders: 5, spent: 6700, balance: 0, lastOrder: '09 Aug 2024' },
    { id: 4, name: 'Sana Javed', phone: '0345-2468101', location: 'DHA Phase 5, Lahore', orders: 16, spent: 24100, balance: 3500, lastOrder: '09 Aug 2024' },
    { id: 5, name: 'Bilal Hussain', phone: '0311-1122334', location: 'Iqbal Town, Lahore', orders: 4, spent: 5900, balance: 0, lastOrder: '08 Aug 2024' },
    { id: 6, name: 'Ayesha Siddiqui', phone: '0301-5566778', location: 'Shadman, Lahore', orders: 10, spent: 16900, balance: 800, lastOrder: '08 Aug 2024' }
  ],

  expenseCategories: ['Rent', 'Utilities', 'Supplies', 'Marketing', 'Maintenance', 'Fuel', 'Transport', 'Misc'],

  expenses: [
    { id: 1, date: '09 Aug 2024', category: 'Rent', description: 'Shop rent (August)', amount: 60000, method: 'Bank Transfer' },
    { id: 2, date: '09 Aug 2024', category: 'Utilities', description: 'Electricity bill (July)', amount: 12500, method: 'Bank Transfer' },
    { id: 3, date: '09 Aug 2024', category: 'Supplies', description: 'Packaging & napkins', amount: 4200, method: 'Cash' },
    { id: 4, date: '08 Aug 2024', category: 'Utilities', description: 'Gas cylinder refill', amount: 3600, method: 'Cash' },
    { id: 5, date: '08 Aug 2024', category: 'Marketing', description: 'Facebook ad boost', amount: 2500, method: 'Card' },
    { id: 6, date: '08 Aug 2024', category: 'Maintenance', description: 'Fryer repair', amount: 4500, method: 'Cash' },
    { id: 7, date: '07 Aug 2024', category: 'Supplies', description: 'Cleaning materials', amount: 2100, method: 'Cash' },
    { id: 8, date: '07 Aug 2024', category: 'Fuel', description: 'Delivery bike fuel', amount: 1800, method: 'Cash' },
    { id: 9, date: '06 Aug 2024', category: 'Transport', description: 'Vegetable pickup', amount: 900, method: 'Cash' },
    { id: 10, date: '06 Aug 2024', category: 'Misc', description: 'Printer paper & cartridges', amount: 1500, method: 'Cash' }
  ]
};
