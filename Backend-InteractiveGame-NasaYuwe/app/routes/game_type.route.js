const express = require('express')
const route = require('express').Router()

const {getGame_Types, getOneGame_Type, addGame_Type}
 = require('../controllers/game_type.controller')

route.route('/users').get(getGame_Types)
route.route('/users/:user_id').get(getOneGame_Type)
route.route('/users').post(addGame_Type)



module.exports = route