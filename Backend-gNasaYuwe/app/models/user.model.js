const connection = require('../../database/connection')
const bcrypt = require('bcrypt')

function  getUsers(callback) {
    if(connection){
        let sql = `select * from user`
        connection.query(sql, (error, rows) => {
            if(error) throw error
                callback(rows);
        });
    }
}
function getOneUser(userId, callback) {
    console.log("id: ", userId)
    if(connection){
        let sql = `select *from user where user_id = ?`
        connection.query(sql, [userId], (error, rows) => {
            if(error) throw error
        callback(rows)
        });
    }
}
async function addUser(data, callback) {
    if(connection){
        const hashedPassword = await bcrypt.hash(data.user_password, 10) 
        let sql = `insert into user (user_name, user_age, user_password, user_role_user_ro_id) values (?, ?, ?, ?)`
        connection.query(
            sql,
            [data.user_name, data.user_age, hashedPassword, data.user_role_user_ro_id], 
            (error, rows) => {
                if(error){
                    callback({error : 'Error al crear el usuario'})
                }else{
                    callback({message : 'Usuario creado satisfactoriamente'})
                }
                
            });
    }
}

async function findUserByUsernameAndPassword(username, password, callback) {
    if (connection) {
        let sql = `select * from user where user_name = ?`;
        connection.query(sql, [username], async (error, rows) => {
            if (error) throw error;

            if (rows.length === 0) {
                callback(null, 'Usuario no encontrado');
            } else {
                const user = rows[0];
                const isPasswordValid = await bcrypt.compare(password, user.user_password);

                if (isPasswordValid) {
                    callback(user, null);
                } else {
                    callback(null, 'Contraseña incorrecta');
                }
            }
                

        });
    }
}

function deleteUser(userId, callback){
        if(connection){
            let sql = `delete from user where user_id = ?`
            connection.query(sql, [userId], (error, rows) =>{
                if(error) throw error
                callback({message: 'usuario eliminado'})
            })  
        }
}

module.exports = {
    getUsers,
    getOneUser,
    addUser,
    findUserByUsernameAndPassword,
    deleteUser
};