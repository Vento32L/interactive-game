const dbconnection = require('../../database/connection')

var Models = {
    getGame_Types: (callback) => {
        if(dbconnection){
            let sql = `select * from game_type`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneGame_Type: (data, callback) => {
        console.log("el id: ", data)
        if(dbconnection){
            let sql = `select *from game_type where game_ty_id = ${dbconnection.escape(data)}`
            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addGame_Type: (data, callback) => {
        if(dbconnection){
            let sql = `insert into game_type (game_ty_description) values (${dbconnection.escape(data.game_ty_description)})`

            dbconnection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Tipo de juego creado satisfactoriamente'})
            })
        }
    }
}

module.exports = Models