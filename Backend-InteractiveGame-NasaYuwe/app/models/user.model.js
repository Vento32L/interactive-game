const dbconnection = require('../../database/dbconnection')

var Models = {
    getUsers: (callback) => {
        if(dbconnection){
            let sql = 'select * from user'

            dbconnection.query(sql, (error, eows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getUser: (data, callback) => {
        console.log("el id: ", data)
        if(dbconnection){
            let sql
        }
    }

    getOneUser_role: (data, callback) => {
        console.log("el id: ", data)
        if (dbconnection){
            let sql = 'select * from user_role where user_ro_id = ${dbconnection.escape(data)}'
            dbconnection.query(sql, (error, rows) => { 
                if(error) throw error
                callback(rows)
            })
        }
    },
}

module.exports = Models