import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import validation from'../loginValidation'

function Login() {
    const [values, setValues] = useState({
        user_name: '',
        user_password: ''
    })

    const [errors, setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setValues(validation(values));
    }

  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sing-In</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="user_name"><strong>Alias</strong></label>
                    <input type="alias" placeholder='Enter Alias' name='user_name'
                    onChange={handleInput} required className='form-control rounded-0'/>
                    {errors.alias && <span className='text-danger'> {errors.user_name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="user_password"><strong>Contraseña</strong></label>
                    <input type="password" placeholder='Enter Contraseña' name='user_password'
                    onChange={handleInput} required className='form-control rounded-0'/>
                    {errors.password && <span className='text-danger'> {errors.user_password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
                <p>Si no tiene una cuenta registrate</p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Crear cuenta</Link>
            </form>
        </div>
    </div>
  )
}

export default Login


/*import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al backend para la autenticación
    console.log('Datos de inicio de sesión:', formData);
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;*/

