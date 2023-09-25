const express = require('express')
const route = require('express').Router()

const {getGame_has_Game_Type} = require('../controllers/game_has_game_type.controller')

route.route('/Game_has_Game_Type').get(getGame_has_Game_Type)
