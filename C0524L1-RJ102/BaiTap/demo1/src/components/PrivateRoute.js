import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, role } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if (role !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
};

export default PrivateRoute;
