const dbconnection = require('../../database/connection')

var Models = {
    getWords: (callback) => {
        if(dbconnection){
            let sql = `select * from words`

            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows);
            })
        }
    },

    getOneWords: (data, callback) => {
        console.log("el id: ", data)
        if(dbconnection){
            let sql = `select *from words where word_id = ${dbconnection.escape(data)}`
            dbconnection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },

    addWords: (data, callback) => {
        if(dbconnection){
            let sql = `insert into words (word_description, word_sound, word_play, word_spanish_meaning, word_graph) values (${dbconnection.escape(data.word_description)},
            ${dbconnection.escape(data.word_sound)},
            ${dbconnection.escape(data.word_play)},
            ${dbconnection.escape(data.word_spanish_meaning)},
            ${dbconnection.escape(data.word_graph)})`

            dbconnection.query(sql, (error, rows) =>{
                if(error) throw error
                callback({message : 'Palabras creadas satisfactoriamente'})
            })
        }
    }
}

module.exports = Models