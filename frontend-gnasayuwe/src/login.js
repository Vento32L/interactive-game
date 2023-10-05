import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function login() {
  return (
    <div className='d-flex justify-content-center aling-items-center bg-primary'>
        <div className='p-3 bg-white w-25 '>
            <form action=''>
                <div className='mb-3'>
                    <label htmlFore="nombre">Alias</label>
                    <input type="nombre" placeholder='Enter alias' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFore="password">Password</label>
                    <input type="password" placeholder='Enter password'className='form-control'/>
                </div>
                <button className='btn-btn-success'>Iniciar sesión</button>
            </form>
        </div>
    </div>
  )
}

export default login