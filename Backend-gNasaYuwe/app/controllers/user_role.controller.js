const Models = require('../models/user_role.model')
//const connection = require('../../database/connection')

function getUser_roles(req, res){
    Models.getUser_roles((data, error) => {

        res.json(data)
    } ) 
}

function getOneUser_role(req, res){
    console.log("id: ", req.params.user_ro_id)
    const userRoleId =req.params.user_ro_id
    Models.getOneUser_role(userRoleId, (data, error) => {
        if(error){
            res.status(500).json({ error: 'Error al obtener el rol usuario' });
            return;
        }
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
    console.log("id: ", req.params.user_ro_id)
    const userRoleId = req.params.user_ro_id
    Models.deleteUser_role(userRoleId, (data, error) =>{
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el rol usuario' });
            return;
          }
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