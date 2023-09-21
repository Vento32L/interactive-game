const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "76A*6uyrT%",
    database: "interactivegame_nasayuwe"
})

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida')
})

module.exports = connection

connection.end()