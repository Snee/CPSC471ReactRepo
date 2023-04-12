const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();
const mysql = require('mysql');


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "lakersdb"
});


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to DB");
})


app.get('/', (req, res) => {
    const sqlSelect = 'SELECT * FROM user;';
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'An error occurred while fetching users from the database' });
      } else {
        res.json(result);
      }
    });
  });

  


// app.post("/", (req, res) => { 

//     const sqlInsert = "INSERT INTO user (UserName, Password) VALUES ('user1', 'user1');"
//     db.query(sqlInsert, (err, result) => { 
//         console.log("hello world");
//     })
// });


app.post("/api/insert", (req, res) => {

    const UserName = req.body.UserName
    const Password = req.body.Password

    const sqlInsert = "INSERT INTO lakersdb.user (UserName, Password) VALUES (?,?)"
    db.query(sqlInsert, [UserName, Password], (err, result) => {
        console.log(result);
    })
    res.end();
})

app.post('/api/login', (req, res) => {
    const UserName = req.body.UserName;
    const Password = req.body.Password;
    console.log(UserName, Password);
    const sqlSelect = 'SELECT UserName, Password FROM user WHERE UserName = ? AND Password = ?';
    db.query(sqlSelect, [UserName, Password], (err, result) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'An error occurred while fetching the user data from the database' });
      } else {
        console.log(result);
        res.json(result);
      }
    });
  });

app.get('/api/selectAllPlayers', (req, res) => {
    // const UserName = req.body.UserName;
    // const Password = req.body.Password;
    // console.log(UserName, Password);
    const sqlSelect = 'SELECT * FROM player';
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'An error occurred while fetching player data from the database' });
      } else {
        res.json(result);
      }
    });
  });  

  app.get('/api/getPlayerStats', (req, res) => {
    // const UserName = req.body.UserName;
    // const Password = req.body.Password;
    // console.log(UserName, Password);
    const sqlSelect = 'SELECT * FROM player';
    db.query(sqlSelect, (err, result) => {
      if (err) {
        console.error('Error querying the database:', err);
        res.status(500).json({ error: 'An error occurred while fetching player data from the database' });
      } else {
        res.json(result);
      }
    });
  });  


app.listen(3001, () => {
    console.log("running on port 3001");
});