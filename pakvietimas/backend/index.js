const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Duomenų bazės prijungimas
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Pranešimas apie sėkmingą prisijungimą prie duomenų bazės
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Klaida jungiantis prie DB:', err);
    return;
  }
  console.log('Sėkmingai prisijungta prie DB');
  connection.release(); // Atleidžiame prijungtą jungtį
});

// Middleware norint priimti JSON duomenis
app.use(express.json());
app.use(cors());

// Gauti svečių sąrašą
app.get('/guests', (req, res) => {
  pool.query('SELECT * FROM guests', (err, results) => {
    if (err) {
      console.error('Klaida užklausos vykdyme:', err);
      return res.status(500).json({ error: 'Įvyko klaida gaunant duomenis' });
    }
    res.json(results);
  });
});

// Įrašyti svečio duomenis
app.post('/guests', (req, res) => {
  const { name, adults, children, phone } = req.body;
  
  const sql = 'INSERT INTO guests (name, adults, children, phone) VALUES (?, ?, ?, ?)';
  pool.query(sql, [name, adults, children, phone], (err, results) => {
    if (err) {
      console.error('Klaida įrašant duomenis:', err);
      return res.status(500).json({ error: 'Įvyko klaida įrašant duomenis' });
    }
    res.status(201).json({ id: results.insertId, name, adults, children, phone });
  });
});

// Klausom port 3000
app.listen(port, () => {
  console.log(`Serveris veikia ant ${port}`);
});
