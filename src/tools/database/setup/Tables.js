const pg = require('pg');
const config = require('../../../dpPoolConfig.js');

const pool = new pg.Pool(config);

pool.connect( (err, client, done) => {
  if(err) return console.log('Error: ', err)

  client.query(
    `
    CREATE TABLE public.projects
    (
      id SERIAL UNIQUE,
      name character(100) NOT NULL,
      note character(500),
      CONSTRAINT id UNIQUE (id)
    )
    WITH (
      OIDS=FALSE
    );
    ALTER TABLE public.projects
    OWNER TO dev;
    `,
    [],
    err => console.error(err))
  .then(function(){
    return client.query(
      `
      CREATE TABLE public.times
      (
        id SERIAL UNIQUE,
        note character(150),
        project_id integer,
        time_stamp timestamp without time zone DEFAULT now(),
        CONSTRAINT times_id_fkey FOREIGN KEY (id)
            REFERENCES public.projects (id) MATCH SIMPLE
            ON UPDATE NO ACTION ON DELETE NO ACTION
      )
      WITH (
        OIDS=FALSE
      );
      ALTER TABLE public.times
    OWNER TO dev;
      `,
      [],
      err => console.error(err))
  })
  .then(function(){
    process.exit()
  })

})
