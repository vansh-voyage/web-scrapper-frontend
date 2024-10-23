

// Showing Alert two times

/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            alert('Please log in to access this page.');  // Show alert
            navigate('/login');  // Redirect to login page smoothly
        }
    }, [token, navigate]);

    return token ? children : null;  // If no token, render nothing (handled by useEffect)
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;






































