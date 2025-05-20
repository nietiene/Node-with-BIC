import mysql from "mysql2";
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected Successfully");
});

// const sql = "CREATE DATABASE nodejs";
// connection.query(sql, (err) => {
//     if (err) throw err;
//     console.log("Database created")
// });
// const sql = "ALTER Table nodejs ADD COLUMN name VARCHAR(100)";
// connection.query(sql, (err) => {
//     if (err) throw err;
//     console.log("Table created");
// });

export default connection;