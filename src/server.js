const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'myroot@7', // Your MySQL password
    database: 'WashWagon' // Your database name
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// API endpoint to get delivery details
app.get('/api/deliveries', (req, res) => {
    const query = 'SELECT * FROM deliveries';
    connection.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(),Server,running, at, http;//localhost:${port});
});