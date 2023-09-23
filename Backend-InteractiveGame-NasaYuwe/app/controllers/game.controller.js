const Models = require('../models/user_role.model')
//const dbconnection = require('../../database/dbconnection')

function getGames(req, res){
    Models.getGames ((data, error) => {

        res.json(data)

    } ) 
}

function getOneGame(req, res){
    console.log("id: ", req, params)
    const {game_id} =req.params
    Models.getOneGame(game_id, (data, error) => {
        res.json(data)
    })
}

function addGame(req, res){
    const {game_punctuation, game_time, game_level, user_user_id} = req.body
    console.log(`game: ${game_punctuation}, ${game_time}, ${game_level}, ${user_user_id}`)
    Models.addGame({game_punctuation, game_time, game_level, user_user_id})
}

module.exports = {
    getGames,
    getOneGame,
    addGame
    /*editUser,
    deleteUser*/

}