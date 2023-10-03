const connection = require('../../database/connection')

var Models = {
    getWords: (callback) => {
        if(connection){
            let sql = `select * from words`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneWords: (data, callback) => {
        console.log("el id: ", data)
        if(connection){
            let sql = `select *from words where word_id = ${connection.escape(data)}`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addWords: (data, callback) => {
        if(connection){
            let sql = `insert into words (word_description, word_sound, word_play, word_spanish_meaning, word_graph) values (${connection.escape(data.word_description)},
            ${connection.escape(data.word_sound)},
            ${connection.escape(data.word_play)},
            ${connection.escape(data.word_spanish_meaning)},
            ${connection.escape(data.word_graph)})`

            connection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Palabras creadas satisfactoriamente'})
            })
        }
    }
}

module.exports = Models