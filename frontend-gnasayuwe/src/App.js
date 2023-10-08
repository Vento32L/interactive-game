//import './App.css';
import React, {useState} from 'react'
import LoginForm from './components/LoginForm'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import Dashboard from './components/Dashboard'
import gamePage from './components/gamePage'

function App() {
    const [isLoggedIn ] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={isLoggedIn ? <Navigate to='/api/user/dashboard'/>: <LoginForm />}/>   
        <Route path='/register' element={<RegisterForm />}> </Route>
        <Route path='/api/user/dashboard' element={<Dashboard/>}></Route>
        <Route path="/gamePage" element={<gamePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

