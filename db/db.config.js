// db/db.config.js
const sql = require('mssql');

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    connectionTimeout: 30000, // Set connection timeout to 30 seconds
    options: {
        trustServerCertificate: true,
    },
};

const pool = new sql.ConnectionPool(config);

module.exports = {
    pool,
};