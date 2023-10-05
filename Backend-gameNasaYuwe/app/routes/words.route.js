const express = require('express')
const route = require('express').Router()

const {getWords, getOneWords, addWords}
 = require('../controllers/words.controller')

route.route('/words').get(getWords)
route.route('/words/:word_id').get(getOneWords)
route.route('/words').post(addWords)


module.exports = route