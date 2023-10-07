import React, {useState}from 'react'
import { Link } from 'react-router-dom'
import validation from './signupValidation';

function Signup() {
    const [values, setValues] = useState({
        user_name: '',
        user_age: '',
        user_password: '',
        user_role_user_ro_id: ''
    })

    const [errors, setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.user_name === "" && errors.user_age === "" && errors.user_role_user_ro_id ==="" && errors.user_password){

        }
    }

  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2>Sing-Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="user_name"><strong>Alias</strong></label>
                <input type="text" placeholder='Enter Alias' name='user_name'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.alias && <span className='text-danger'> {errors.user_name}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="user_age"><strong>Edad</strong></label>
                <input type="text" placeholder='Enter Edad' name='user_age'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.edad && <span className='text-danger'> {errors.user_age}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="user_role_user_ro_id"><strong>Rol</strong></label>
                <input type="text" placeholder='Enter Rol' name='user_role_user_ro_id'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.edad && <span className='text-danger'> {errors.user_role_user_ro_id}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="user_password"><strong>Contraseña</strong></label>
                <input type="password" placeholder='Enter Contraseña' name='user_password'
                onChange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'> {errors.user_password}</span>}
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