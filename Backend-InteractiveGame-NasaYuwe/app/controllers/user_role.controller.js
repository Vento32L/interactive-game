const Models = require('../models/user_role.model')
//const connection = require('../../database/connection')

function getUser_roles(req, res){
    Models.getUser_roles((data, error) => {

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

function addUser_role(req, res){
    const {user_ro_description} = req.body
    console.log(`user_role: ${user_ro_description}`)
    Models.addUser_role({user_ro_description}, (data, error) => {
        res.json(data)
    })
}

function deleteUser_role(req, res){
    const {user_ro_id} = req.params
    Models.deleteUser_role(user_ro_id, (data, error) =>{
        res.json(data)
    })
}

module.exports = {
    getUser_roles,
    getOneUser_role,
    addUser_role,
    //editUser,
    deleteUser_role

}