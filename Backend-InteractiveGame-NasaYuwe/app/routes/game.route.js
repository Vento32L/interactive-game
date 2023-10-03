const express = require('express')
const route = require('express').Router()

const {getGames, getOneGame, addGame}
 = require('../controllers/game.controller')

route.route('/games').get(getGames)
route.route('/games/:game_id').get(getOneGame)
route.route('/Games').post(addGame)

module.exports = route