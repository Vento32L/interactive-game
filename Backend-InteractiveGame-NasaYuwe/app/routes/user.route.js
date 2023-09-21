const express = require('express')
const route = require('express').Router()

const {getUsers, getUser}
 = require('../controllers/user.controller')

route.route('/users').get(getUsers)
route.route('/user').get(getUser)