import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import validation from './signupValidation';
//import axios from 'axios'

const RegisterForm = () => {
    const [values, setValues, formData, setFormData] = useState({
        user_name: '',
        user_age: '', 
        user_role_user_ro_id: '',
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
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues(validation(values));
    };

    return (
        <div className='d-flex justify-content-end aling-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Registrar usuario</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="user_name"><strong>Alias</strong></label>
                        <input
                            type="text"
                            placeholder='Enter Alias'
                            name="user_name"
                            //value={formData.user_name}
                            onChange={handleInput}
                            required className='form-control rounded-0'
                        />
                        {errors.user_name && <span className='text-danger'> {errors.user_name}</span>}
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="user_age"><strong>Edad:</strong></label>
                        <input
                            type="number"
                            placeholder='Enter Edad'
                            id="user_age"
                            name="user_age"
                            //value={formData.user_age}
                            onChange={handleInput}
                            required className='form-control rounded-0'
                        />
                        {errors.user_age && <span className='text-danger'> {errors.user_age}</span>}
                    </div>
                    <div className='mb-3'>
                    <label htmlFor="user_role_user_ro_id"><strong>Rol de Usuario:</strong></label>
                        <select
                            id='user_role_user_ro_id'
                            name="user_role_user_ro_id"
                            //value={formData.user_role_user_ro_id}
                            onChange={handleInput}
                            required className='form-control rounded-0'>
                        <option value="student"></option>
                        <option value="student">Estudiante</option>
                        <option value="teacher">Profesor</option>
                        <option value="admin">Administrador</option>
                        </select>
                        {errors.user_role_user_ro_id && <span className='text-danger'> {errors.user_role_user_ro_id}</span>}
                    </div>
                    <div>
                    <label htmlFor="user_password"><strong>Contraseña</strong></label>
                        <input
                            type="password"
                            placeholder='Enter Contraseña'
                            name="user_password"
                            //value={formData.user_password}
                            onChange={handleInput}
                            className='form-control rounded-0'
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'> Registar usuario</button>
                    <p>Si ya tienes una cuenta</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Inicia sesión</Link>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;