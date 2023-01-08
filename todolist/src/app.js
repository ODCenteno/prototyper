require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { redirect } = require('next/dist/server/api-utils');

const PORT = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const taskList = ['Sunday'];

app.get('/', (req, res) => {
  const today = new Date();
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  const currentDay = today.toLocaleDateString('es-MX', options);

  res.render('list', {
    dayToDisplay: currentDay || 'Error getting the current day',
    taskList: taskList
  });
});

app.post('/', (req, res) => {
  console.log(req.body.newTask);
  const newTask = req.body.newTask;
  if (newTask === ""){
    console.log('error: empty string');
  } else { taskList.push(newTask) };
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
