const { Pool } = require("pg");
const { DB_PASSWORD, CONNECTION_STRING } = require("../config");

const connectionString = CONNECTION_STRING;

module.exports = new Pool({
    connectionString,
    DB_PASSWORD,
});
