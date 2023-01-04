const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
// app.get('/', (req, res) => {
//   res.send('Server is running.');
// })
// app.post('/', (req, res) => {
//   console.log('Ok babe');
//   res.send();
// });

app.post('/', (req, res) => {
  const query = req.body.cityName;
  const APIkey = "8efc029005d60718d71ec3f66749d837";
  const endpointURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIkey}&units=metric`;
  const iconBaseURL = "http://openweathermap.org/img/wn/";

  console.log(query);
  console.log(query);

  https.get(endpointURL, (response) => {
    console.log(response.statusCode);

    response.on('data', (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const city = weatherData.name;
      const iconCode = weatherData.weather[0].icon;

      console.log(iconCode);
      res.write(`<h1>The weather in ${city} is ${temp} ºC, ${description}.</h1>`);
      res.write(`<img src="${iconBaseURL}${iconCode}@2x.png">`);
      res.send();
    });
  });
})

app.listen(port, () => {
  console.log('this is working');
});
