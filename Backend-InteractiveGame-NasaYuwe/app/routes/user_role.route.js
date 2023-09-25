const express = require ('express')
const route = require('express').Router()

const {getUser_roles, getOneUser_role, addUser_role}
 = require('../controllers/user_role.controller')

route.route('/user_roles').get(getUser_roles)
route.route('/user_role/:user_ro_id').get(getOneUser_role)
route.route('/user_role').post(addUser_role)

module.exports = route