const dbconnection = require('../../database/dbconnection')

var Models = {
    getUser: (callback) => {
        if(dbconnection){
            let sql = 'select * from user'

            dbconnection.query(sql, (error, eows) => {
                if(error) throw error
                callback(rows);
            })
        }
    }
}

module.exports = Models