const dbconnection = require('../../database/dbconnection')

var Models = {
    getGame_has_Game_Type: (callback) => {
        if(dbconnection){
            let sql = `select * from game_has_game_type`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    }
}

module.exports = Models