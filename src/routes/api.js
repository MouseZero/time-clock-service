module.exports = function api (apiRoutes) {
  apiRoutes.post('/punch', function (req, res) {
    res.json({
      success: true,
      project: req.body.project,
      description: req.body.description
    })
  })
}
