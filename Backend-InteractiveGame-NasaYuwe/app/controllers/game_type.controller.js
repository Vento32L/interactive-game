const Models = require('../models/game_type.model')
//const dbconnection = require('../../database/dbconnection')

function getGame_Types(req, res){
    Models.getGame_Types ((data, error) => {

        res.json(data)

    } ) 
}

function getOneGame_Type(req, res){
    console.log("id: ", req, params)
    const {Game_ty_id} =req.params
    Models.getOneGame_Type(game_ty_id, (data, error) => {
        res.json(data)
    })
}

function addGame_Type(req, res){
    const {Game_ty_description} = req.body
    console.log(`Game_Type: ${game_ty_description}`)
    Models.addGame_Type({game_ty_description})
}

module.exports = {
    getGame_Types,
    getOneGame_Type,
    addGame_Type
    /*editUser,
    deleteUser*/

}