import React from 'react';

const Home = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Добро пожаловать!</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        Здесь вы найдете информацию обо мне, мои проекты и статьи в блоге.
      </p>
      <div className="flex justify-center">
        <img src="1.jpeg" alt="Your Image" className="rounded-lg shadow-lg w-64 h-64"/> {}
      </div>
    </main>
  );
};

export default Home;
