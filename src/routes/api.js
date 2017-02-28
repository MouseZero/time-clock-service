const poolConfig = require('../dbPoolConfig')
const Pool = require('pg').Pool
const pool = new Pool(poolConfig)
const times = require('../persistence/times')(pool)
const jwt = require('jsonwebtoken')

module.exports = function api (apiRoutes, secret) {
  apiRoutes.post('/punch', function (req, res) {
    times.getTimesList()
    .then(function (data) {
      res.json({
        success: true,
        project: req.body.project,
        description: req.body.description,
        stuff: data
      })
    })
  })

  apiRoutes.post('/authenticate', function (req, res) {
    const token = jwt.sign({id: '.myId'}, secret, {
      expiresIn: 86400
    })
    res.json({
      success: true,
      msg: 'test',
      token: token
    })
  })
}
