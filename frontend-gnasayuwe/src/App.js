//import './App.css';
import React from 'react'
import Login from './login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/users' element={<Signup />}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App;

/*import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './signup';
import Login from './login';
//import Game from './components/Game';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/game">Game</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/signup" component={Register} />
          <Route path="/login" component={Login} />
        
          <Route path="/" render={() => (
            user ? (
              <div>
                <h2>Welcome, {user.username}!</h2>
                <button onClick={() => setUser(null)}>Logout</button>
              </div>
            ) : (
              <h2>Home</h2>
            )
          )} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/

