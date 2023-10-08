import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import validation from './loginValidation'
//import { eventNames } from '../../../Backend-gNasaYuwe/app/app';

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData, setValues] = useState({
        user_name: '',
        user_password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [errors, setErrors] = useState({})
    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(formData);
        setValues(validation(values));
    };

    return (
        <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Iniciar Sesión</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="user_name"><strong>Alias:</strong></label>
                        <input
                            type="text"
                            placeholder='Enter Alias'
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            required className='form-control rounded-0'
                        />
                        {errors.alias && <span className='text-danger'> {errors.user_name}</span>}
                    </div>
                    <div className='mb-3'>                    
                        <label htmlFor="user_password"><strong>Contraseña:</strong></label>
                        <input
                            type="password"
                            placeholder='Enter Contraseña'
                            name="user_password"
                            value={formData.user_password}
                            onChange={handleChange}
                            required className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'> {errors.user_password}</span>}
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Iniciar Sesión</button>
                    <p>Si no tiene una cuenta registrate</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Crear cuenta</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;