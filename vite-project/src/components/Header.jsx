import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-500 to-purple-500 p-4 shadow-md"> 
      <nav className="container mx-auto flex justify-between items-center"> 
        <Link to="/" className="text-white font-bold text-2xl">Мой Сайт</Link> 
        <ul className="flex space-x-6"> 
          <li><Link to="/" className="text-white hover:underline">Home</Link></li>
          <li><Link to="/about" className="text-white hover:underline">About</Link></li>
          <li><Link to="/blog" className="text-white hover:underline">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
