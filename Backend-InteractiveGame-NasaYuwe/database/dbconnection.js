const mysql = require('mysql2');
const dbconnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "76A*6uyrT%",
    database: "interactivegame_nasayuwe"
})

dbconnection.connect((err)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida')
})

module.exports = dbconnection

dbconnection.end()