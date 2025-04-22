import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4"> 
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-x-4 md:space-x-8">
        <div>
          <p>&copy; 2025 IVT-22-1</p>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </nav>
        <div>
          <Link to="#" className="hover:underline">Политика конфиденциальности</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;