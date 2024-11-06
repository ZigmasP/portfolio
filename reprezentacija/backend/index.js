require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const helmet = require("helmet");
const sanitizeHtml = require("sanitize-html");

const app = express();
const port = process.env.PORT || 3000;

// CORS nustatymai
app.use(cors({ origin: "http://localhost:5173" })); // Nustatykite į frontend'o adresą
app.use(bodyParser.json());
app.use(helmet());

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

// Įrašyti atsiliepimą
app.post("/reviews", (req, res) => {
    const { name, comment, rating } = req.body;

    const sanitizedComment = sanitizeHtml(comment);
    const sanitizedName = sanitizeHtml(name);

    // SQL užklausa įrašyti į duomenų bazę
    const sql = "INSERT INTO reviews (Vardas, Vertinimas, Atsiliepimas, Data) VALUES (?, ?, ?, NOW())"; // Naudokite NOW() vietoj 2
    const values = [sanitizedName, sanitizedComment, rating];

    pool.query(sql, values, (err, result) => {
        if (err) {
            console.error("Klaida įrašant atsiliepimą:", err.message);
            return res.status(500).json({ success: false, error: "Klaida įrašant atsiliepimą" });
        }
        res.json({ success: true, message: "Atsiliepimas sėkmingai įrašytas" });
    });
});

// Ištrinti atsiliepimą
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

// Pradėti serverį
app.listen(port, () => {
    console.log(`Serveris veikia ant ${port}.`);
});

// Patikrinti prisijungimą prie duomenų bazės
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Klaida jungiantis prie duomenų bazės:', err.message);
    } else {
        console.log('Prisijungta prie duomenų bazės!');
        connection.release();
    }
});
