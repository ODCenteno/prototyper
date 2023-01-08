require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { redirect } = require('next/dist/server/api-utils');

const PORT = process.env.PORT;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

const taskList = [];
const taskWork = [];

const today = new Date();
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
}
const currentDay = today.toLocaleDateString('es-MX', options);

app.get('/', (req, res) => {
  res.render('list', {
    pageView: 'list',
    dayToDisplay: currentDay || 'Error getting the current day',
    taskList: taskList
  });
});

app.get('/work', (req, res) => {
  res.render('work', {
    pageView: 'work',
    dayToDisplay: currentDay || 'Error getting the current day',
    taskWork: taskWork
  })
});

app.post('/', (req, res) => {
  console.log(req.body.newTask);
  const pageBtn = req.body.pageView;
  console.log(pageBtn);
  const newTask = req.body.newTask;

  if (newTask === ""){
    console.log('error: empty string');
  } else if (pageBtn === 'list') {
    taskList.push(newTask);
    res.redirect('/');
  } else if (pageBtn === '') {
    taskWork.push(newTask);
    res.redirect('/work');
  };
});

app.post('/work', (req, res) => {
  const pageBtn = req.body.pageView;
  console.log(pageBtn);
  const newTask = req.body.newTask;

  if (newTask === ""){
    console.log('error: empty string');
  } else if (pageBtn === 'list') {
    taskList.push(newTask);
    res.redirect('/');
  } else if (pageBtn === 'work') {
    taskWork.push(newTask);
    res.redirect('/work');
  };
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});
