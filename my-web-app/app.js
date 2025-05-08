const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;  // <- default to port 3000

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Node.js App!');
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
