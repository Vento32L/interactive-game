const connection = require('../../database/connection')
//const game_has_game_type = require('../controllers/game_has_game_type.controller')

var Models = {
    getGame_GameType: (callback) => {
        if(connection){
            let sql = `select * from game_has_game_type`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    }
}

module.exports = Models
//module.exports = game_has_game_type
