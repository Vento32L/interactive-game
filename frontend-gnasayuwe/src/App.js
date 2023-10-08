//import './App.css';
import React, {useState, useEffect} from 'react'
import LoginForm from './components/LoginForm'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import Dashboard from './components/Dashboard'
import gamePage from './components/gamePage'
import axios from 'axios'
import roleRegistration from './components/roleRegistration'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      // Realiza una solicitud para verificar si el usuario está autenticado
      axios.get('/').then((response) => {
        if (response.data.isAuthenticated) {
          setIsLoggedIn(true);
        }
      });
    }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={isLoggedIn ? <Navigate to='/api/user/dashboard'/>: <LoginForm />}/>   
        <Route path='/register' element={<RegisterForm />}> </Route>
        <Route path='/api/user/dashboard' element={<Dashboard/>}></Route>
        <Route path="/gamePage" element={<gamePage/>}></Route>
        <Route path='/register-role' element={<roleRegistration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

