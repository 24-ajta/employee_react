import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogoutComponent = () => {
  const [logoutStatus, setLogoutStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function logout() {
      try {
        const token = localStorage.getItem('adminToken'); // Retrieve the token from localStorage
        console.log("token", token);
        if (!token) {
          console.error('Token not found. User might not be logged in.');
          return;
        }

        // Perform logout request to the backend
        const response = await axios.post('http://localhost:3000/logout', null, {
          headers: {
            Authorization: `Bearer ${token}` // Attach the token in the Authorization header
          }
        });

        // Clear the token from localStorage after successful logout
        localStorage.removeItem('adminToken'); // Adjust this based on your storage method

        // Redirect to the home page after logout
        if (response.data.message === 'Logout successful') {
          setLogoutStatus('Logout Successful');
          navigate('/'); // Redirect to the home component
        } else {
          setLogoutStatus('Logout Failed');
        }
      } catch (error) {
        console.error('Logout failed:', error.response ? error.response.data : error.message);
        setLogoutStatus('Logout Failed');
        // Handle logout failure or error response here
      }
    }

    logout();
  }, [navigate]);

  return (
    <>
      <div>
        {logoutStatus ? (
          <p>{logoutStatus}</p>
        ) : (
          <p>Logging out...</p>
        )}
      </div>
    </>
  );
};

export default LogoutComponent;
