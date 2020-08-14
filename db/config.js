
require('dotenv').config();
const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);

const envObj={
  database: process.env.DB_NAME,
  port: 5432,
  host: 'localhost',
}

if(process.env.NODE_ENV!=='production'){
  envObj.user=process.env.NAME;
  envObj.password=process.env.PASSWORD;
}
module.exports = pgp(envObj);
