const sqlite3 = require('sqlite3').verbose()
const md5 = require('md5')

const DBSOURCE = "data/city-council.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }
});


module.exports = db
