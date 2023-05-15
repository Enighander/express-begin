const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('This about page')
})

app.get('/contact', (req, res) => {
  res.send('This contact page')
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('<h1>404 Webpage not found</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})