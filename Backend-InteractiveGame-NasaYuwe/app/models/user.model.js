const dbconnection = require('../../database/dbconnection')

var Models = {
    getUsers: (callback) => {
        if(dbconnection){
            let sql = `select * from user`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneUser: (data, callback) => {
        console.log("el id: ", data)
        if(dbconnection){
            let sql = `select *from user where user_id = ${dbconnection.escape(data)}`
            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addUser: (data, callback) => {
        if(dbconnection){
            let sql = `insert into user (user_name, user_age, user_password, user_role_user_ro_id) values (${dbconnection.escape(data.user_name)},
            ${dbconnection.escape(data.user_age)},
            ${dbconnection.escape(data.user_password)},
            ${dbconnection.escape(data.user_role_user_ro_id)})`

            dbconnection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Usuario creado satisfactoriamente'})
            })
        }
    },
    
    deleteUser: (data, callback) =>{
        if(dbconnection){
            let sql = `delete from user where user_id = ${dbconnection.escape(data)}`
            dbconnection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message: 'usuario eliminado'})
            })  
        }
    }
}

module.exports = Models