const Models = require('../models/user_role.model')
//const dbconnection = require('../../database/dbconnection')

function getUser_roles(req, res){
    Models.getUser_roles ((data, error) => {

        res.json(data)

    } ) 
}

function getOneUser_role(req, res){
    console.log("id: ", req, params)
    const {user_ro_id} =req.params
    Models.getOneUser_role(user_ro_id, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getUser_roles,
    getOneUser_role,
    /*addUser,
    editUser,
    deleteUser*/

}