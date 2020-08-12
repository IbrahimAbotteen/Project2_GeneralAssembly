const DB_NAME = 'management';
require('dotenv').config();
const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);

module.exports = pgp({
  database: DB_NAME,
  port: 5432,
  host: 'localhost',
  name:process.env.NAME,
  password:process.env.PASSWORD

});