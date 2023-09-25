const Models = require ('../models/words.model')

function getWords(req, res){
    Models.get ((data, error) => {

        res.json(data)
    })
}
function getOneWords(req, res){
    console.log("id: ", req, params)
    const {word_id} =req.params
    Models.getOneWords(word_id, (data, error) =>{
        res.json(data)
    })
}

function addWords(req, res){
    const {word_description, word_sound, word_play, word_spanish_meaning, word_graph} = req.body
    console.log(`words: ${word_description}, ${word_sound}, ${word_play, word_spanish_meaning, word_graph}`)
    Models.addWords({word_description, word_sound, word_play, word_spanish_meaning, word_graph}, (data, error) =>{
        res.json(data)
    })
}

module.exports = {
    getWords,
    getOneWords,
    addWords
    /*editUser,
    */

}