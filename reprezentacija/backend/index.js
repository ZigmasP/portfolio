require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const helmet = require("helmet");
const sanitizeHtml = require("sanitize-html");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

// CORS nustatymai
app.use(cors({ 
    origin: "http://localhost:5173",
    methods: "GET, POST, DELETE",
    credentials: true
})); // Nustatykite į frontend'o adresą
app.use(bodyParser.json());
app.use(helmet());
app.use(express.static(path.join(__dirname, "..", "dist")));

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

app.post("/admin/login", async (req, res) => {
   const { username, password } = req.body;

   const adminUsername = process.env.ADMIN_USERNAME;
   const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

   if (username !== adminUsername) {
     return res.status(401).json({ success: false, error: "Neteisingi prisijungimo duomenys" });
   }

   const match = await bcrypt.compare(password, adminPasswordHash);
   if (!match) {
     return res.status(401).json({ success: false, error: "Neteisingas slaptažodis" });
   }

   const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: '1h' });
   res.json({ success: true, token });
});

// Mdlleware funkcija autentifikacijai
function authenticateToken(req, res, next) {
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ success: false, error, error: "Nepateiktas tokenas" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
     if (err) return res.status(403).json({ success: false, error: "Neteisingas arba pasibaigęs tokenas" });

     if(user.role !== "admin") return res.status(403).json({ success: false, error: "Prieiga atmesta" });

     req.user = user;
     next();
  });
}

// Įrašyti atsiliepimą
app.post("/reviews", (req, res) => {
    const { name, comment, rating } = req.body;

    const sanitizedComment = sanitizeHtml(comment);
    const sanitizedName = sanitizeHtml(name);

    // SQL užklausa įrašyti į duomenų bazę
    const sql = "INSERT INTO atsiliepimai (Vardas, Vertinimas, Atsiliepimas, Data) VALUES (?, ?, ?, NOW())"; // Naudokite NOW() vietoj 2
    const values = [sanitizedName, rating, sanitizedComment];

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

    pool.query("DELETE FROM atsiliepimai WHERE id = ?", [reviewId], (err, result) => {
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
