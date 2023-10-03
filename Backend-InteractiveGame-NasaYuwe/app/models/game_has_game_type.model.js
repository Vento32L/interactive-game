const connection = require('../../database/connection')

var Models = {
    getGame_has_Game_Type: (callback) => {
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