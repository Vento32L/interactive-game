const Models = require('../models/game.model')
//const dbconnection = require('../../database/dbconnection')

function getGames(req, res){
    Models.getGames((data, error) => {

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
    const {game_punctuation, game_level, user_user_id} = req.body
    //const formattedGameTime = data.game_time.toISOString().slice(0, 19).replace('T', ' ')
    const game_time = new Date();

    console.log(`game: ${game_punctuation}, ${game_time}, ${game_level}, ${user_user_id}`)
    Models.addGame({game_punctuation, game_time, game_level, user_user_id}, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getGames,
    getOneGame,
    addGame
    /*editUser,
    deleteUser*/

}