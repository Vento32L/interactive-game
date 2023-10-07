import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import validation from './signupValidation';

function Signup() {
    const [values, setValues] = useState({
        alias: '',
        edad: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(validation(values));
    }

  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sing-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="alias"><strong>Alias</strong></label>
                <input type="text" placeholder='Enter Alias' name='alias'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.alias && <span className='text-danger'> {errors.alias}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="age"><strong>Edad</strong></label>
                <input type="text" placeholder='Enter Edad' name='edad'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.edad && <span className='text-danger'> {errors.edad}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password"><strong>Contraseña</strong></label>
                <input type="password" placeholder='Enter Contraseña' name='password'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-success w-100 rounded-0'> Sign up</button>
            <p>Si ya tienes una cuenta, inicia sesión</p>
            <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
    </div>
</div>
  )
}

export default Signup