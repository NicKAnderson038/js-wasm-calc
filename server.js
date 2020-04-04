const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get(/^(.+)$/, (req, res) => {
  console.log(`static file request : ${req.params}`)
  res.sendFile(__dirname + req.params[0])
})

app.listen(port, () => {
  console.log(`server listening at ${port}`)
})
