const express = require('express')
const route = require('express').Router()

const {getWords_has_Game}
 = require('../controllers/words_has_game.controller')

route.route('/words_has_game').get(getWords_has_Game)

module.exports = route