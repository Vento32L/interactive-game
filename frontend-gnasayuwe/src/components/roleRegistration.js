
import React, {useState} from 'react'
import axios from 'axios';

function roleRegistration() {
    const [userRole, setUserRole] = useState({
        user_ro_description: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserRole({
          ...userRole,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Realiza una solicitud POST al servidor para registrar el nuevo rol de usuario
        axios.post('/api/user_roles', userRole)
          .then((response) => {
            // Maneja la respuesta del servidor, por ejemplo, muestra un mensaje de éxito
            console.log('Rol de usuario registrado exitosamente:', response.data);
    
            // Limpia el formulario o realiza otras acciones necesarias
            setUserRole({
              user_ro_description: '',
            });
          })
          .catch((error) => {
            // Maneja los errores, por ejemplo, muestra un mensaje de error
            console.error('Error al registrar el rol de usuario:', error);
          });
      };
  return (
    <div>
        <h2>Registro de Rol de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="user_ro_description">Descripción del Rol:</label>
          <input
            type="text"
            id="user_ro_description"
            name="user_ro_description"
            value={userRole.user_ro_description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Registrar Rol de Usuario</button>
        </div>
      </form>
    </div>
  )
}

export default roleRegistration