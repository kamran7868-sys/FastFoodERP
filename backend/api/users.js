export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const users = [
    { name: 'Aamir Khan', username: 'Aamir Khan', role: 'Owner', password: '12345678' },
    { name: 'Ali Hassan', username: 'Ali Hassan', role: 'Manager', password: '12345678' },
    { name: 'Naveed Akhtar', username: 'Naveed Akhtar', role: 'Cashier', password: '12345678' },
    { name: 'Kamran Shah', username: 'Kamran Shah', role: 'Waiter', password: '12345678' },
    { name: 'Rizwan Ahmed', username: 'Rizwan Ahmed', role: 'Chef', password: '12345678' }
  ];

  return res.status(200).json(users);
}
