const queryPersistence = require('./query')

function times (pool) {
  const query = queryPersistence(pool)

  function getTimesList () {
    return query(`select * from times;`)
  }

  return {
    getTimesList
  }
}

module.exports = times
