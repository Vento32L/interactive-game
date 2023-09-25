const express = require('express')
const route = require('express').Router()

const {getGame_has_Game_Type} 
 = require('../controllers/game_has_game_type.controller')

route.route('/game_has_game_type').get(getGame_has_Game_Type)
