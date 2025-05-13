const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Helper function to get the EC2 instance private IP from metadata
async function getEc2PrivateIp() {
  try {
    const response = await axios.get('http://169.254.169.254/latest/meta-data/local-ipv4', {
      timeout: 1000
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching EC2 IP:', error.message);
    return 'unknown';
  }
}

app.get('/', async (req, res) => {
  const ip = await getEc2PrivateIp();
  console.log(ip);
  res.send(`Hello from Dockerized Node.js App! EC2 IP: ${ip}`);
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
