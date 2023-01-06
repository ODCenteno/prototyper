require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const currentDay = today.getDay();

  res.render('list', {dayToDisplay: daysOfWeek[currentDay] || 'Error getting the current day'});
});

app.post('/', (req, res) => {
  console.log('this is fine');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
