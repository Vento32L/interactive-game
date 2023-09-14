const app = require('./app/app');

//database
require('./database/connection')

app.listen(app.get('port'), () => {
    console.log('Server running on port:', 4000);
})