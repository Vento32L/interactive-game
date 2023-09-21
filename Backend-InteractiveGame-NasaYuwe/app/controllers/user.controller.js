const Models = require ('../models/user_role.model')

function getUsers(req, res){
    Models.get ((data, error) => {

        res.json(data)
    })
}
function getUser(req, res){
    console.log("id: ", req, params)
    const {user_id} =req.params
    Models.getUser(user_id, (data, error) =>{
        res.json(data)
    })
}

module.exports = {
    getUsers,
    getUser
    /*addUser_role,
    editUser,
    deleteUser*/

}