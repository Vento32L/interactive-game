const mysql = require('mysql2');
const myConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "76A*6uyrT%",
    database: "interactivegame_nasayuwe"
})

myConn.connect((err)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida')
})

module.exports = myConn

connection.end()