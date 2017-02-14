const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
  res.json({
      hey: 'test',
      nameis: req.query.name
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
