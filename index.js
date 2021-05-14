const express = require('express')
const app = express();
const port = 8000;

const staticPath ="/Public/index.html";
app.use(express.static(staticPath));

// app.use(express.static(path));
console.log();
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/Public/index.html');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/Public/index1.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/Public/about.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/Public/contact.html');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
