import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-500 p-4">
      <nav className="flex justify-center"> {}
        <Link to="/" className="text-white mr-4">Home</Link>
        <Link to="/about" className="text-white mr-4">About</Link>
        <Link to="/blog" className="text-white">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;