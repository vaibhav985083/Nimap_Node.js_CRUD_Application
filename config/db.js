import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Vaibhav@2025",
    database: "nimapapp",
    waitForConnections: true,
    connectionLimit: 10
});

export default pool.promise();
