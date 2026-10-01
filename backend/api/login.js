export default function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  // Parse body (supports JSON or parsed body)
  let body = req.body;
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }
  body = body || {};

  const username = String(body.username || '').trim();
  const password = String(body.password || '').trim();

  const users = [
    {
      id: 1,
      name: 'Aamir Khan',
      username: 'Aamir Khan',
      handle: 'aamir',
      password: '12345678',
      role: 'Owner',
      initials: 'AK',
      color: '#EA580C',
      permission: 'Full access'
    },
    {
      id: 2,
      name: 'Ali Hassan',
      username: 'Ali Hassan',
      handle: 'ali',
      password: '12345678',
      role: 'Manager',
      initials: 'AH',
      color: '#0891B2',
      permission: 'All except settings'
    },
    {
      id: 3,
      name: 'Naveed Akhtar',
      username: 'Naveed Akhtar',
      handle: 'naveed',
      password: '12345678',
      role: 'Cashier',
      initials: 'NA',
      color: '#16A34A',
      permission: 'POS, orders, customers'
    },
    {
      id: 4,
      name: 'Kamran Shah',
      username: 'Kamran Shah',
      handle: 'kamran',
      password: '12345678',
      role: 'Waiter',
      initials: 'KS',
      color: '#7C3AED',
      permission: 'POS, tables, orders'
    },
    {
      id: 5,
      name: 'Rizwan Ahmed',
      username: 'Rizwan Ahmed',
      handle: 'rizwan',
      password: '12345678',
      role: 'Chef',
      initials: 'RA',
      color: '#D97706',
      permission: 'Menu, recipes, stock'
    }
  ];

  const userLower = username.toLowerCase();
  const matched = users.find(u =>
    u.name.toLowerCase() === userLower ||
    u.username.toLowerCase() === userLower ||
    u.handle.toLowerCase() === userLower ||
    (userLower === 'admin' && u.role === 'Owner')
  );

  if (!matched || (password !== '12345678' && password !== '123')) {
    return res.status(401).json({
      success: false,
      message: 'Invalid username or password. Password is 12345678'
    });
  }

  const safeUser = { ...matched };
  delete safeUser.password;

  return res.status(200).json({
    success: true,
    message: 'Login successful',
    user: safeUser
  });
}
