const express = require('express');
const app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
  res.send('DaaS service is running!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'daas', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`DaaS service listening on port ${port}`);
});
