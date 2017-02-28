const poolConfig = require('../dbPoolConfig')
const Pool = require('pg').Pool
const pool = new Pool(poolConfig)
const times = require('../persistence/times')(pool)

module.exports = function api (apiRoutes) {
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
}
