const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req, res) => {
  // send index.html form current directory file to user
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(2000, () => {
  console.log('=== Listening on port 2000...')
})
