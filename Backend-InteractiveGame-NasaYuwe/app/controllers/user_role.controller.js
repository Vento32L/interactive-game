const Models = require('../models/user_role.model')
//const dbconnection = require('../../database/dbconnection')

function getUser_role(req, res){
    Models.getUser_role ((data, error) => {

        res.json(data)

    } ) 
}

module.exports = {
    getUser_role,
    /*getOneUser,
    addUser,
    editUser,
    deleteUser*/

}