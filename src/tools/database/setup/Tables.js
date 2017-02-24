const pg = require('pg');
const config = require('../../../dpPoolConfig.js');

const pool = new pg.Pool(config);

pool.connect( (err, client, done) => {
  if(err) return console.log('Error: ', err);
  console.log('connected!!!!');
  done();
});
