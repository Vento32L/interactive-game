const connection = require('../../database/connection')

var Models = {
    getUsers: (callback) => {
        if(connection){
            let sql = `select * from user`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneUser: (data, callback) => {
        console.log("el id: ", data)
        if(connection){
            let sql = `select *from user where user_id = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addUser: (data, callback) => {
        if(connection){
            let sql = `insert into user (user_name, user_age, user_password, user_role_user_ro_id) values (${connection.escape(data.user_name)},
            ${connection.escape(data.user_age)},
            ${connection.escape(data.user_password)},
            ${connection.escape(data.user_role_user_ro_id)})`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'Usuario creado satisfactoriamente'})
            })
        }
    },
    
    deleteUser: (data, callback) =>{
        if(connection){
            let sql = `delete from user where user_id = ${connection.escape(data)}`
            connection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message: 'usuario eliminado'})
            })  
        }
    }
}

module.exports = Models