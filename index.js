const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const apiRoutes = express.Router()
const routes = require('./src/routes/api')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.json({
    hey: 'test',
    nameis: req.query.name
  })
})

routes(apiRoutes)
app.use('/api', apiRoutes)

app.listen(3333, function () {
  console.log('started server')
})
