const Models = require('../models/game_type_has_game.model')
//const dbconnection = require('../../database/dbconnection')

function getGame_Type_has_Game(req, res){
    Models.getGame_Type_has_Game((data, error) =>{

        res.json(data)
    })
}

module.exports = {
    getGame_Type_has_Game
}