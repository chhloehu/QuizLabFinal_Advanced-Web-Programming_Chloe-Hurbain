// app.js

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3000;

// To read the JSON data in the POST and PUT
app.use(express.json());

// Connection to the MySQL database
const dbCon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "canada"  // name of your database created in phpMyAdmin
});

dbCon.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connection is DONE!");
});

// --- CREATE ---
// Add a new province
app.post('/add', (req, res) => {
    const { nom, capitale, population, superficie } = req.body;
    const sql = `INSERT INTO provinces (nom, capitale, population, superficie) VALUES (?, ?, ?, ?)`;
    dbCon.query(sql, [nom, capitale, population, superficie], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Province ajoutée !');
    });
});

// --- READ ALL ---
// Retrieve all the provinces
app.get('/provinces', (req, res) => {
    const sql = `SELECT * FROM provinces`;
    dbCon.query(sql, (err, records) => {
        if (err) throw err;
        console.log(records);
        res.json(records);
    });
});

// --- READ ONE ---
// Retrieve a province by ID
app.get('/provinces/:id', (req, res) => {
    const sql = `SELECT * FROM provinces WHERE id = ?`;
    dbCon.query(sql, [req.params.id], (err, record) => {
        if (err) throw err;
        console.log(record);
        res.json(record);
    });
});

// --- UPDATE ---
// Modify a province by ID
app.put('/provinces/:id', (req, res) => {
    const { nom, capitale, population, superficie } = req.body;
    const sql = `UPDATE provinces SET nom = ?, capitale = ?, population = ?, superficie = ? WHERE id = ?`;
    dbCon.query(sql, [nom, capitale, population, superficie, req.params.id], (err, record) => {
        if (err) throw err;
        console.log(record);
        res.send('Province udapted !');
    });
});

// --- DELETE ---
// Delete a province by ID
app.delete('/provinces/:id', (req, res) => {
    const sql = `DELETE FROM provinces WHERE id = ?`;
    dbCon.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Province deleted!');
    });
});

// Launch the server
app.listen(PORT, () => {
    console.log(`Express App Server listening on port ${PORT} http://localhost:${PORT}/`);
});

// Route home page
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to the TP Provinces of Canada</h1>
        <ul>
            <li><a href="/provinces">See all provinces</a></li>
            <li><a href="/provinces/1">See the province with ID 1</a></li>
            <li><a href="#" onclick="alert('To add, update or delete, use Postman or your HTTP tool.')">CRUD POST/PUT/DELETE</a></li>
        </ul>
    `);
});

