const express = require('express')
const route = require('express').Router()

const {getGame_Type_has_Game} 
 = require('../controllers/game_type_has_game.controller')

route.route('/game_type_has_game').get(getGame_Type_has_Game)
