const express = require('express');
const bodyParser = require('body-parser');
const bmicalc = require('./src/bmicalc');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}));

// Get Methods
app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});
app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmicalculator.html');
});

// Post Methods
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('ok, kid');
})
app.post('/bmicalculator', (req, res) => {
  const weight = parseFloat(req.body.weight) || "";
  const height = parseFloat(req.body.height) || "";
  console.log(weight, height);

  const bmi = bmicalc(weight, height);
  res.send(`Your BMI is: ${bmi}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
