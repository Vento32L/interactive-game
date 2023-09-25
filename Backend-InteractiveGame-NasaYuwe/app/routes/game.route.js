const express = require('express')
const route = require('express').Router()

const {getGames, getOneGame, addGame}
 = require('../controllers/game.controller')

route.route('/Games').get(getGames)
route.route('/Game/:game_id').get(getOneGame)
route.route('/Game').post(addGame)

module.exports = route