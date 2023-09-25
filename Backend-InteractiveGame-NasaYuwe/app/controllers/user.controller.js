const Models = require ('../models/user.model')

function getUsers(req, res){
    Models.getUsers((data, error) => {

        res.json(data)
    })
}

function getOneUser(req, res){
    console.log("id: ", req, params)
    const {user_id} =req.params
    Models.getOneUser(user_id, (data, error) =>{
        res.json(data)
    })
}

function addUser(req, res){
    const {user_name, user_age, user_password, user_role_user_ro_id} = req.body
    console.log(`user: ${user_name}, ${user_age}, ${user_password}, ${user_role_user_ro_id}`)
    Models.addUser({user_name, user_age, user_password, user_role_user_ro_id}, (data, error) =>{
        res.json(data)
    })
}

function deleteUser(req, res){
    const {user_id} = req.params
    Models.deleteUser(user_id, (data, error) =>{
        res.json(data)
    })
}

module.exports = {
    getUsers,
    getOneUser,
    addUser,
    deleteUser
    /*editUser,
    */

}