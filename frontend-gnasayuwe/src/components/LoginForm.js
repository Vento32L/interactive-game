import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import validation from './loginValidation'
import { useNavigate} from 'react-router-dom';
//import { object} from 'react-router-dom';

const LoginForm = ()=> {

    const history = useNavigate();

    const [values,  setValues, formData, setFormData, object] = useState({
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

    const handleButtonClick = () => {
        // Aquí puedes agregar la lógica que necesites antes de la navegación
        if(object && object.user_name === 'user_name' && object.user_password ==='user_password'){
            history.push('/Dashboard');
        }else{
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }

      };

    const [errors, setErrors] = useState({})

    const handleInput = (event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setValues(validation(values));
        //const validationErrors = validation(values);

    };

    return (
        <div className='d-flex justify-content-end aling-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Iniciar Sesión</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="user_name"><strong>Alias:</strong></label>
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
                        <label htmlFor="user_password"><strong>Contraseña:</strong></label>
                        <input
                            type="password"
                            placeholder='Enter Contraseña'
                            name="user_password"
                            //value={formData.user_password}
                            onChange={handleInput}
                            required className='form-control rounded-0'
                        />
                        {errors.password && <span className='text-danger'> {errors.user_password}</span>}
                    </div>
                    
                    <button type="submit" className='btn btn-success w-100 rounded-0' onClick={handleButtonClick}>Iniciar Sesión</button>
                    
                    <p>Si no tiene una cuenta registrate</p>
                    <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Crear cuenta</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;