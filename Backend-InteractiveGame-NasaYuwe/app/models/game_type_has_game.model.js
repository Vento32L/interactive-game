const dbconnection = require('../../database/dbconnection')

var Models = {
    getGame_Type_has_Game: (callback) => {
        if(dbconnection){
            let sql = `select * from game_type_has_game`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    }
}

module.exports = Models