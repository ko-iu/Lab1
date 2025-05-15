import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (email, password, navigate) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password
      });
      
      setUser(response.data.user);
      setIsAuthenticated(true);
      if (navigate) navigate('/');
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.error || "Ошибка авторизации" 
      };
    }
  };

  const register = async (userData, navigate) => {
    try {
      await axios.post('http://localhost:5000/api/register', userData);
      if (navigate) navigate('/login');
      return { success: true };
    } catch (error) {
      return { 
        success: false, 
        message: error.response?.data?.error || "Ошибка регистрации" 
      };
    }
  };

  const logout = (navigate) => {
    setUser(null);
    setIsAuthenticated(false);
    if (navigate) navigate('/login');
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        loading, 
        login, 
        register, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);