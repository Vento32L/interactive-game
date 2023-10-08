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

    getOneUser_role: (userRoleId, callback) => {
        console.log("id: ", userRoleId)
        if (connection){
            let sql = `select * from user_role where user_ro_id = ?`
            connection.query(sql, [userRoleId], (error, rows) => { 
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
    },

    deleteUser_role: (userRoleId, callback) =>{
        if(connection){
            let sql = `delete from user_role where user_ro_id = ?`
            connection.query(sql, [userRoleId], (error, rows) =>{
                if(error) throw error
                callback({message: 'usuario rol eliminado'})
            })  
        }
    }
}

module.exports = Models