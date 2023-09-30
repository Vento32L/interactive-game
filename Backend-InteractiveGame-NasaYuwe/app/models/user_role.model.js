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
                if(error) {
                    console.error('Error al insertar el usuario rol', error)
                    return callback({ error: 'No se puedo crear el usuario rol'})
                }
                callback({message : 'Usuario rol creado satisfactoriamente'})
            })
        } else {
            console.error('La conexión a la base de datos no está disponible')
        }
    }
}

module.exports = Models