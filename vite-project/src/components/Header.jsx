import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout(navigate);
  };

  return (
    <header className="bg-gradient-to-r from-gray-500 to-purple-500 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center"> 
        <Link to="/" className="text-white font-bold text-2xl">Мой Сайт</Link> 
        <ul className="flex space-x-6"> 
          {isAuthenticated ? (
            <>
              <li><Link to="/" className="text-white hover:underline">Home</Link></li>
              <li><Link to="/about" className="text-white hover:underline">About</Link></li>
              <li><Link to="/blog" className="text-white hover:underline">Blog</Link></li>
              <li>
                <span className="text-white mr-2">{user?.firstName}</span>
                <button 
                  onClick={handleLogout}
                  className="text-white hover:underline"
                >
                  Выйти
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="text-white hover:underline">Вход</Link></li>
              <li><Link to="/register" className="text-white hover:underline">Регистрация</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;