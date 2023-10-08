const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.route');

//Initialitions
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser-json());


//routes
app.use(require('./routes/user_role.route'))
//app.use(require('./routes/user.route')) 
app.use('/api/user', userRoutes);
app.use(require('./routes/game_type.route'))
app.use(require('./routes/game.route'))
app.use(require('./routes/game_has_game_type.route'))
app.use(require('./routes/words.route'))
app.use(require('./routes/words_has_game.route'))

module.exports = app