const express = require('express')
const route = require('express').Router()

const {getUsers, getOneUser, registerUser, loginUser, deleteUser}
 = require('../controllers/user.controller')

route.route('/users').get(getUsers)
route.route('/users/:user_id').get(getOneUser)
route.route('/users/register').post(registerUser)
route.route('/users/login').post(loginUser)
route.route('/users/:user_id').delete(deleteUser)


module.exports = route