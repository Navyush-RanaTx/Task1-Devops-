const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // Default to port 3000

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App!');
});

app.get('/health', (req, res) => {
  res.send('OK');
});

// Ensure the app listens on all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
