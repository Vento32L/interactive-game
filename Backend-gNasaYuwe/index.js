const express = require('express');

const app = require('./app/app');
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../frontend-gnasayuwe/src/App';

//database
require('./database/connection');

ReactDOM.render(<App />, document.getElementById('root'));

app.listen(app.get('port'), () => {
    console.log('Server running on port:', 3000);
})
