const Models = require('../models/game_has_game_type.model')
//const dbconnection = require('../../database/dbconnection')

function getGame_GameType(req, res){
    Models.getGame_GameType((data, error) =>{

        res.json(data)
    })
}

module.exports = {
    getGame_GameType
}