const connection = require('../../database/connection')


var Models = {
    getGames: (callback) => {
        if(connection){
            let sql = `select * from game`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneGame: (data, callback) => {
        console.log("el id: ", data)
        if(connection){
            let sql = `select *from game where game_id = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addGame: (data, callback) => {
        data.game_time = new Date();
        if(connection){
            let sql = `insert into game (game_punctuation, gmae_time, game_level, user_user_id) values (${connection.escape(data.game_punctuation)},
            ${connection.escape(data.game_time)},
            ${connection.escape(data.game_level)},
            ${connection.escape(data.user_user_id)})`

            connection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Juego creado satisfactoriamente'})
            })
        }
    }
}

module.exports = Models