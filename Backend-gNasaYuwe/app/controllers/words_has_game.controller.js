const Models = require ('../models/words_has_game.model')

function getWords_has_Game(req, res){
    Models.getWords_has_Game((data, error) => {

        res.json(data)
    })
}

module.exports = {
    getWords_has_Game
}