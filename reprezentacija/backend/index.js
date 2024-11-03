const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
require("dotenv").config;

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   charset: 'utf8mb4_unicode_ci',
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
});

app.delete("/reviews/:id", (req, res) => {
    const reviewId = req.params.id;
 
    pool.query("DELETE FROM reviews WHERE id = ?", [reviewId], (err, result) => {
       if (err) {
          console.error("Klaida šalinant atsiliepimą:", err.message);
          return res.status(500).json({ success: false, error: "Klaida šalinant atsiliepimą" });
       }
 
       if (result.affectedRows === 0) {
          return res.status(404).json({ success: false, error: "Atsiliepimas nerastas" });
       }
 
       res.json({ success: true, message: "Atsiliepimas sėkmingai pašalintas" });
    });
 });

app.listen(port, () => {
   console.log(`Serveris veikia ant ${port}.`);
});

pool.getConnection((err, connection) => {
   if (err) {
     console.error('Klaida jungiantis prie duomenų bazės:', err.message);
   } else {
     console.log('Prisijungta prie duomenų bazės!');
     connection.release();
   }
});

