const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "182215",
    database: "interactivegame_nasayuwe"
})

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida')
})

module.exports = connection

connection.end()