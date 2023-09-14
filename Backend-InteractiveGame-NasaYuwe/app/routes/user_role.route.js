const express = require ('express')
const route = require('express').Router()
const {getUser_role/*, getOneUser_role, addUser_role*/}
 = require('../controllers/user.controller')

route.route('/user_role').get(getUser_role)
//route.route('/user/:user_id').get(getOneUser)
//route.route('/user').post(addUser)

module.exports = route