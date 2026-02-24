
const fs = require('fs');
const https = require('https');
const express = require('express');

const app = express();

// Load SSL certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Basic route
app.get('/', (req, res) => {
  res.send('Secure Voting App is running over HTTPS!');
});

// Start HTTPS server
https.createServer(options, app).listen(443, () => {
  console.log('Server running securely on https://localhost');
});
