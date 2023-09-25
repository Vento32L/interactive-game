const express = require('express')
const route = require('express').Router()

const {getUsers, getOneUser, addUser, deleteUser}
 = require('../controllers/user.controller')

route.route('/users').get(getUsers)
route.route('/users/:user_id').get(getOneUser)
route.route('/user').post(addUser)
route.route('/:user_id').delete(deleteUser)


module.exports = route