const dbconnection = require('../../database/dbconnection')

var Models = {
    getUser_roles: (callback) => {
        if(dbconnection) {
            let sql = `select * from user_role`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    getOneUser_role: (data, callback) => {
        console.log("el id: ", data)
        if (dbconnection){
            let sql = `select * from user_role where user_ro_id = ${dbconnection.escape(data)}`
            dbconnection.query(sql, (error, rows) => { 
                if(error) throw error
                callback(rows)
            })
        }
    },

    addUser_role: (data, callback) => {
        if(dbconnection){
            let sql = `insert into user_role (user_ro_description) values (${dbconnection.escape(data.user_ro_description)})`

            dbconnection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Usuario rol creado satisfactoriamente'})
            })
        }
    },
}

module.exports = Models