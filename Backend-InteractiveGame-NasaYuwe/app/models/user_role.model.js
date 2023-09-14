const connection = require('../../database/dbconnection')

var Models = {
    getUser_role: (callback) => {
        if(connection) {
            let sql = `SELECT * from user_role`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    }
}
/*connection.query('SELECT * from user', (err, rows)=>{
    if(err) throw err
    console.log('los datos solicitados son: ')
    console.log (rows)
})*/

module.exports = Models