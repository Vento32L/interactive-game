const express = require('express')
const route = require('express').Router()

const {getUser}
 = require('../controllers/user.controller')

route.route('/user')