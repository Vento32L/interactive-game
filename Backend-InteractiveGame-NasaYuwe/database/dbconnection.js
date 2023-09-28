const mysql = require('mysql2');

const myConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "76A*6uyrT%",
    database: "interactivegame_nasayuwe"
})

//conectar a la base datos MySQL
myConn.connect((err)=>{
    if(err){
        console.error('Error al conectar a la base de datos' + err.message);
        return;
    }
    console.log('conexion a la base de datos establecida')
})

module.exports = myConn
