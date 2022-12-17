require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT
const app = express();

app.get('/home', (req, res) => {
  res.send('Hello World');
})

app.listen(PORT, () => {
  console.log('App is listening on port', PORT);
})