const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.json({
      hey: 'test'
  })
})

app.get('/punch', function(req, res){
  res.json({
    success: true,
    message: 'punched'
  })
})

app.listen(3333, function(){
  console.log('started server');
})
