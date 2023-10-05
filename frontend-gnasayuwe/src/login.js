import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25 '>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFor="nombre">Alias</label>
                    <input type="nombre" placeholder='Enter alias' className='form-control rounde'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='Enter password'className='form-control'/>
                </div>
                <button className='btn btn-success'>Login</button>
                <p></p>
                <button className='btn btn-default border'>Crear cuenta</button>
            </form>
        </div>
    </div>
  )
}

export default Login