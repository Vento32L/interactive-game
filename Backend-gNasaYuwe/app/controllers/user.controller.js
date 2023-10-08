const Models = require ('../models/user.model')
const jwt =require ('jsonwebtoken')
function getUsers(req, res){
    Models.getUsers((data, error) => {

        res.json(data)
    })
}

function getOneUser(req, res){
    console.log("id: ", req.params.user_id)
    const userId =req.params.user_id
    Models.getOneUser(userId, (data, error) =>{
        if(error){
            res.status(500).json({ error: 'Error al obtener el usuario' });
            return;
        }
        res.json(data)
    })
}

function registerUser(req, res){
    const {user_name, user_age, user_password, user_role_user_ro_id} = req.body
    //console.log(`user: ${user_name}, ${user_age}, ${user_password}, ${user_role_user_ro_id}`)
    Models.addUser({user_name, user_age, user_password, user_role_user_ro_id}, 
        (data, error) =>{
            if (error) {
                res.status(500).json({ error: 'Error al crear el usuario' });
            }else{
                res.json(data);
            }
        }
    );
}

function loginUser(req, res) {
    const { user_name, user_password } = req.body;

    Models.findUserByUsernameAndPassword(user_name, user_password, (user, error) => {
        if (error) {
            res.status(401).json({ error: 'Error al crear el usuario' });
        } else {
            // Genera un token JWT para la autenticación
            const token = jwt.sign({ user_id: user.user_id }, 'secreto', {
                expiresIn: '1h', // Cambia la expiración según tus necesidades
            });

            res.json({ token });
        }
    });
}

function deleteUser(req, res){
    console.log("id: ", req.params.user_id)
    const {userId} = req.params.user_id
    Models.deleteUser(userId, (data, error) =>{
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el usuario' });
            return;
          }
        res.json(data)
    })
}

module.exports = {
    getUsers,
    getOneUser,
    registerUser,
    loginUser,
    deleteUser

}