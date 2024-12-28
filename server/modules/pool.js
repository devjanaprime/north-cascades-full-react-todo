const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 5433,
    database: 'react-to-do', 
});

module.exports = pool;
