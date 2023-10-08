import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_age: '',
        user_password: '',
        user_role_user_ro_id: '',
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
        onRegister(formData);
    };

    return (
        <div>
            <h2>Registro</h2>
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
                <label>Edad:</label>
                    <input
                        type="number"
                        name="user_age"
                        value={formData.user_age}
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
                <div>
                <label>Rol de Usuario:</label>
                    <input
                        type="text"
                        name="user_role_user_ro_id"
                        value={formData.user_role_user_ro_id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default RegisterForm;