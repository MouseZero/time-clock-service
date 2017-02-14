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

/*
takes
subject = this can be anything that classifies what this time blongs to such as
  youtube, codeing, cleaning, a project, or a client name
description = which is a description about what was done
*/
app.post('/punch', function(req, res){
  res.json({
    success: true,
    subject: req.body.subject,
    description: req.body.description
  })
})

app.listen(3333, function(){
  console.log('started server');
})
