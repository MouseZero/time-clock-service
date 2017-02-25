const pg = require('pg');
const config = require('../../../dpPoolConfig.js');

const pool = new pg.Pool(config);

pool.connect( (err, client, done) => {
  if(err) return console.log('Error: ', err);

  client.query(
    `
    CREATE TABLE public.times
    (
      id SERIAL,
      note character(150),
      project_id integer,
      time_stamp timestamp without time zone DEFAULT now()
    )
    WITH (
      OIDS=FALSE
    );
    ALTER TABLE public.times
    OWNER TO dev;
    `,
    [],
    function (err){
      return console.error(err);
    }
  )
  done();
});
