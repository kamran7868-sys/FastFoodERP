export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    status: 'online',
    system: 'BiteFlow Fast Food & Café ERP Backend API',
    version: '1.0.0',
    endpoints: [
      'POST /api/login',
      'GET /api/users',
      'GET /api'
    ],
    timestamp: new Date().toISOString()
  });
}
