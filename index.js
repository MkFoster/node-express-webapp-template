const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from node-express-webapp-template');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});