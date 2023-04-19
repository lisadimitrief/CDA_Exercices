const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
const port = process.env.PORT || 6969;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'euro_fit_lisa'
});

// app.use(bodyParser.json)
module.exports = {app, port, connection};