const dbconnection = require('../../database/connection')

var Models = {
    getWords_has_Game: (callback) => {
        if(dbconnection){
            let sql = `select * from words_has_game`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    }
}

module.exports = Models