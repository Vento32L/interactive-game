const express = require ('express')

const route = require('express').Router()


const {getUser_roles, getOneUser_role, addUser_role, deleteUser_role}
 = require('../controllers/user_role.controller')

route.route('/user_roles').get(getUser_roles)
route.route('/user_roles/:user_ro_id').get(getOneUser_role)
route.route('/user_roles').post(addUser_role)
route.route('/user_roles/:user_ro_id').delete(deleteUser_role)

module.exports = route