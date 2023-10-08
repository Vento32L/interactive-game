/*//import './App.css';
import React from 'react'
//import Login from './login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//import Signup from './signup'

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
*/
// src/App.js
import React, { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [token, setToken] = useState('');

    const handleLogin = async (formData) => {
        // Realiza una solicitud de inicio de sesión al servidor
        try {
            const response = await fetch('/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setLoggedIn(true);
                setToken(data.token);
            } else {
                console.error('Error al iniciar sesión');
            }
        } catch (error) {
            console.error('Error al iniciar sesión', error);
        }
    };

    const handleRegister = async (formData) => {
        // Realiza una solicitud de registro al servidor
        try {
            const response = await fetch('/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Registro exitoso');
            } else {
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al registrar usuario', error);
        }
    };

    return (
        <div className="App">
            {loggedIn ? (
                <div>
                    <h1>Bienvenido</h1>
                    <p>Tu token de autenticación: {token}</p>
                </div>
            ) : (
                <div>
                    <LoginForm onLogin={handleLogin} />
                    <RegisterForm onRegister={handleRegister} />
                </div>
            )}
        </div>
    );
}

export default App;


