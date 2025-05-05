import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../components/Container';

const About = () => {
  return (
    <>
    <Helmet>
      <title>Обо мне | Мой Сайт</title>
      <meta name="description" content="Страница с информацией обо мне, моих увлечениях и интересах." />
      <meta name="keywords" content="обо мне, биография, увлечения" />
    </Helmet>
    <main className="container mx-auto p-8">
      <Container>
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Обо мне</h1>
        <p className="text-lg text-white mb-8 text-center">
          Я студентка IVT-22-1, Корнилова Юлиана Андреевна
        </p>
        <ul className="list-disc list-inside text-white text-center">
          <li>Увлечения: Веб, чтение, дизайн, творчество, языки</li>
        </ul>
      </Container>
      
    </main>
    </>
  );
};

export default About;
