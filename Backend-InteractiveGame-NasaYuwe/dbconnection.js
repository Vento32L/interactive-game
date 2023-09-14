const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '182215',
  database:'interactivegame_nasayuwe'
});

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion a la base de datos establecida');
});

connection.query('SELECT * from user', (err, rows) =>{
    if(err) throw err
        console.log('los datos de la tabla son estos:')
        console.log(rows)
    
})

connection.end()