/*const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

var corsOptions = {
    origin: "http://localhost:8081" 
}

app.use(cors(corsOptions))

const db = require("./app/models");
db.sequelize.sync();

app.use(bodyparser.json())

app.use(bodyparser.urlencoded({extended: true}))

app.get("/", (req, resp) => {
    resp.json({message: "The server is working..."})
})

const PORT = 8081
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`)
})
*/

/*
const express = require('express');
const mysql = require('mysql');
const { body, validationResult } = require('express-validator');
const app = express();

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get('/init', (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
});

app.post('/subscribe', 
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    (req, res) => {
        const errors = validationResult(req);

        if (errors.array().length > 0) {
            res.send(errors.array());
        } else {
            const subscriber = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email
            };
    
            const sqlQuery = 'INSERT INTO emails SET ?';
    
            database.query(sqlQuery, subscriber, (err, row) => {
                if (err) throw err;
    
                res.send('Subscribed successfully!');
            });
        }
});

app.get('/', (req, res) => {
    const sqlQuery = 'SELECT * FROM emails';

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'emails': result });
    });
});
*/

const express = require('express');
const app = express();

const routes = require('./src/routes/routes');

app.use(express.json());
app.use(routes);

app.listen(8585, () => {
    console.log('Server running!');
});