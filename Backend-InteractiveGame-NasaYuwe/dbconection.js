//const express = require('express');
const mysql = require('mysql2');

//const app = express();

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '182215',
  database:'interactivegame_nasayuwe'
});

connection.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error', err)
    }else{
        console.log('base de datos conectado')
    }
}) 