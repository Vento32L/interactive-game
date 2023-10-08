// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Aquí debes hacer una solicitud al servidor para obtener los datos del usuario autenticado.
    const fetchUserData = async () => {
      try {
        const response = await axios.get('/api/user/dashboard'); // Reemplaza con la ruta correcta
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <div>
          <p>Username: {user.user_name}</p>
          <p>Age: {user.user_age}</p>
          <p>Role: {user.user_role_user_ro_id}</p>
        </div>
      ) : ( 
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default Dashboard;
