const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/new-year-res', (req, res) => {
  res.send(`
  1. Create a professional video game in 2023.
  2. Achieve 1,000 followers on Twitter by the end of 2023.
  3. Join a blockchain development course in 2023 and learn to build dApps.
  4. Become an expert in AI technologies by the end of 2023.
  5. Develop an app for mobile devices by 2023.
  `);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
