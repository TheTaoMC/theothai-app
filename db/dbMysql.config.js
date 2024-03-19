import mysql from 'mysql2/promise';

let pool;

try {
    pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        connectionLimit: 10,
        connectTimeout: 60000
    });
} catch (err) {
    console.error('Error creating connection pool:', err);
    process.exit(1);
}

process.on('SIGINT', () => {
    pool.end(() => {
        console.log('Connection pool closed');
        process.exit(0);
    });
});

module.exports = pool;