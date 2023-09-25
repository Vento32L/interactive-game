const Models = require('../models/game_has_game_type.model')
//const dbconnection = require('../../database/dbconnection')

function getGame_has_Game_Type(req, res){
    Models.getGame_has_Game_Type((data, error) =>{

        res.json(data)
    })
}

module.exports = {
    getGame_has_Game_Type
}