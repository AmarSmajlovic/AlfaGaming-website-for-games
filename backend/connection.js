const mysql = require('mysql');

const connection = mysql.createConnection({
          localhost : 'localhost',
          user: 'root',
          password:'amarpassword',
          database:'zavrsni'
});

connection.connect((err)=>{
    if(err) throw err;
    console.log(`Susscessfully connect to the MySql Server!`);
});


module.exports = connection;