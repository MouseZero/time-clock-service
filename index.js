const express = require('express')
const PORT = process.argv[2] || 3333
const bodyParser = require('body-parser')
const app = express()
const apiRoutes = express.Router()
const routes = require('./src/routes/api')
const config = require('./config.json')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json({
    hey: 'test',
    nameis: req.query.name
  })
})

routes(apiRoutes, config.secret)
app.use('/', apiRoutes)

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`)
})
