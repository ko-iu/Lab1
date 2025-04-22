import React from 'react';

const About = () => {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Обо мне</h1>
      <p className="text-lg text-white mb-8 text-center">
        Я студентка IVT-22-1, Корнилова Юлиана Андреевна
      </p>
      <ul className="list-disc list-inside text-white text-center">
        <li>Увлечения: Веб, чтение, дизайн, творчество, языки</li>
      </ul>
    </main>
  );
};

export default About;
