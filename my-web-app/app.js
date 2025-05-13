const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

// Helper function to get the server's IP address
function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (let iface of Object.values(interfaces)) {
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'unknown';
}

app.get('/', (req, res) => {
  const ip = getLocalIp();
  res.send(`Hello from Dockerized Node.js App! Server IP: ${ip}`);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

// Ensure the app listens on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
