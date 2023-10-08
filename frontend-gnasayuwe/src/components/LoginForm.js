import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
    const [formData, setFormData] = useState({
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
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(formData);
    };

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre de Usuario:</label>
                    <input
                        type="text"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                    />
                </div>
                <div>                    
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="user_password"
                        value={formData.user_password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default LoginForm;