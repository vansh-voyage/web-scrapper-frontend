

// // Showing Alert two times

// /* eslint-disable no-unused-vars */
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { toast } from 'react-toastify'; // Import toast

// const PrivateRoute = ({ children }) => {
//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) {
//       toast.info("Please log in to access this page."); // Show toast notification
//       navigate('/login'); // Redirect to login
//     }
//   }, [token, navigate]);

//   return token ? children : null;
// };

// PrivateRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PrivateRoute;





//Appwrite Authentication Logic

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { Client, Account } from 'appwrite';

// const client = new Client();
// client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6718e0ec0026a7ad41cb");

// const account = new Account(client);

// const PrivateRoute = ({ children }) => {
//     const navigate = useNavigate();
//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         const checkSession = async () => {
//             try {
//                 await account.get();  // Fetch user session from Appwrite
//                 setIsAuthenticated(true); // Session exists
//             } catch (error) {
//                 console.error("No active session found:", error);
//                 alert('Please log in to access this page.');
//                 navigate('/login');  // Redirect to login page
//             }
//         };

//         checkSession();
//     }, [navigate]);

//     return isAuthenticated ? children : null;
// };

// PrivateRoute.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default PrivateRoute;

/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Client, Account } from 'appwrite';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6718e0ec0026a7ad41cb");

const account = new Account(client);

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null initially to indicate "checking"

  useEffect(() => {
    const checkSession = async () => {
      const localToken = localStorage.getItem('token');

      if (localToken) {
        setIsAuthenticated(true); // Local token found, authentication confirmed
      } else {
        try {
          await account.get(); // Attempt to fetch Appwrite session
          setIsAuthenticated(true); // Appwrite session confirmed
        } catch (error) {
          console.error("No active session found:", error);
          setIsAuthenticated(false); // No session, prompt for login
        }
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    // Only navigate if explicitly unauthenticated, with no session found
    if (isAuthenticated === false) {
      toast.info("Please log in to access this page.");
      navigate('/login'); // Redirect to login only if not authenticated
    }
  }, [isAuthenticated, navigate]);

  // Render nothing until authentication check completes
  return isAuthenticated ? children : null;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;



 












































