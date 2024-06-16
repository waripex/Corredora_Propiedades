const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const bcrypt = require('bcrypt');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Conectar a la base de datos SQLite
let db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Conectado a la base de datos.');
        // Crear tabla de usuarios si no existe
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        )`, (err) => {
            if (err) {
                console.error('Error al crear la tabla de usuarios:', err.message);
            } else {
                console.log('Tabla de usuarios creada o ya existe.');
            }
        });
    }
});

// Rutas
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Manejar registro de usuario
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }

        db.run(`INSERT INTO users (username, password) VALUES (?, ?)`, [username, hash], function(err) {
            if (err) {
                return res.status(400).send('Error al registrar usuario');
            }
            res.redirect('/login');
        });
    });
});

// Manejar inicio de sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.get(`SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
        if (err) {
            return res.status(500).send('Error en el servidor');
        }
        if (!row) {
            return res.status(400).send('Usuario o contraseña incorrectos');
        }

        bcrypt.compare(password, row.password, (err, result) => {
            if (result) {
                res.sendFile(path.join(__dirname, 'public', 'index.html'));
            } else {
                res.status(400).send('Usuario o contraseña incorrectos');
            }
        });
    });
});
