const dbconnection = require('../../database/connection')

var Models = {
    getGames: (callback) => {
        if(dbconnection){
            let sql = `select * from game`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneGame: (data, callback) => {
        console.log("el id: ", data)
        if(dbconnection){
            let sql = `select *from game where game_id = ${dbconnection.escape(data)}`
            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addGame: (data, callback) => {
        if(dbconnection){
            let sql = `insert into game (game_punctuation, gmae_time, game_level, user_user_id) values (${dbconnection.escape(data.game_punctuation)},
            ${dbconnection.escape(data.game_time)},
            ${dbconnection.escape(data.game_level)},
            ${dbconnection.escape(data.user_user_id)})`

            dbconnection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Juego creado satisfactoriamente'})
            })
        }
    }
}

module.exports = Models