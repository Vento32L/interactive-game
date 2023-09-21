const Models = require ('../models/user_role.model')

function getUsers(req, res){
    Models.get ((data, error) => {

        res.json(data)
    })
}

module.exports = {
    getUsers,
    /*getOneUser_role,
    addUser_role,
    editUser,
    deleteUser*/

}