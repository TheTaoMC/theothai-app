//const mysql = require('mysql2/promise');
import mysql from 'mysql2/promise';
const fs = require('fs');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 10,
    ssl: {
        //rejectUnauthorized: false
        ca: fs.readFileSync('@/ssl/ca')
    }
});

module.exports = pool;