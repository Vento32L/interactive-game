const connection = require('../../database/connection')

var Models = {
    getUser_roles: (callback) => {
        if(connection) {
            let sql = `select * from user_role`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    getOneUser_role: (data, callback) => {
        console.log("el id: ", data)
        if (connection){
            let sql = `select * from user_role where user_ro_id = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => { 
                if(error) throw error
                callback(rows)
            })
        }
    },

    addUser_role: (data, callback) => {
        if(connection){
            let sql = `insert into user_role (user_ro_description) values (${connection.escape(data.user_ro_description)})`

            connection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Usuario rol creado satisfactoriamente'})
                //callback();
                //console.log('Usuario rol creado satisfactoriamente')
            })
        }
    }
}

module.exports = Models