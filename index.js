const express = require("express");
const mysql = require("mysql");

const app = express();

//create DB
app.get('/create_db', (req, res) =>{
    let sql = 'CREATE DATABASE second_database';
    db.query(sql, (err, result) => {
        if (err) console.log(err.message)
        console.log(result);
        res.send('Database created')
    })
})

//creating database
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'Harrified',
  password : '10042001',
//   database : 'second_database'
});
//connecting database
db.connect((error) => {
    if (error) {
        console.log(error.message)
    } else {
        console.log('mysql server running ..')
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`))