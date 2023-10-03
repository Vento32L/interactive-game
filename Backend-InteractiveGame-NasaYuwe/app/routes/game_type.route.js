const express = require('express')
const route = require('express').Router()

const {getGame_Types, getOneGame_Type, addGame_Type}
 = require('../controllers/game_type.controller')

route.route('/game_types').get(getGame_Types)
route.route('/game_types/:game_ty_id').get(getOneGame_Type)
route.route('/game_types').post(addGame_Type)

module.exports = route