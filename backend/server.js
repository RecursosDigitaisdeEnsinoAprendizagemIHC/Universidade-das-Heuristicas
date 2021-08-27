const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({status: true});
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);