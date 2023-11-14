import express from 'express'
import renderer from './helpers/renderer'

const app = express()

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.send(renderer())
})

app.listen(4320, () => {
  console.log('=== Listening on port 4320...')
})
