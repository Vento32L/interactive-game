const connection = require('../../database/connection')

var Models = {
    getGame_Types: (callback) => {
        if(connection){
            let sql = `select * from game_type`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneGame_Type: (data, callback) => {
        console.log("el id: ", data)
        if(connection){
            let sql = `select *from game_type where game_ty_id = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addGame_Type: (data, callback) => {
        if(connection){
            let sql = `insert into game_type (game_ty_description) values (${connection.escape(data.game_ty_description)})`

            connection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Tipo de juego creado satisfactoriamente'})
            })
        }
    }
}

module.exports = Models