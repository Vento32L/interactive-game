const connection = require('../../database/connection')

var Models = {
    getWords_has_Game: (callback) => {
        if(connection){
            let sql = `select * from words_has_game`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    }
}

module.exports = Models