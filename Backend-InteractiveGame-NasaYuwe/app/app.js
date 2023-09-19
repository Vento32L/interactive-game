const express = require('express');

//Initialitions
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/user_role.route'))

module.exports = app