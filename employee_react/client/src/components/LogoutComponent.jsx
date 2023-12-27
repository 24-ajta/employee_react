import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LogoutComponent() {
  const [logoutStatus, setLogoutStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      try {
        const response = await axios.post(`http://localhost:3000/logout`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
          },
        });

        setLogoutStatus(response.data.message);
        console.log("response.data.message",response.data.message)

        navigate('/'); 
      } catch (error) {
        console.error('Logout failed:', error);
        setLogoutStatus('Logout failed');
      }
    }

    logout(); 
  }, [navigate]);

  return (
    <div>
      {logoutStatus ? (
        <p>{logoutStatus}</p>
      ) : (
        <p>Logging out...</p>
      )}
    </div>
  );
}

export default LogoutComponent;
