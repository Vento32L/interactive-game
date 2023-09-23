const express = require('express')
const route = require('express').Router()

const {getGame_has_Game_Type} = require('../controllers/game_has_game_type.controller')

route.route('/users').get(getGame_has_Game_Type)
