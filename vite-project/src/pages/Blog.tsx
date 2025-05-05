import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container } from '../components/Container';

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Мой блог | Мой Сайт</title>
        <meta name="description" content="Личный блог с записями." />
        <meta name="keywords" content="блог, записи, мысли, статьи" />
      </Helmet>
    <main className="container mx-auto p-8">
       <Container>
        <h1 className="text-3xl font-bold mb-4 text-center text-white">Мой блог</h1>
        <p className="text-lg text-white mb-8 text-center">
          Пока что блог пуст.
        </p>
       </Container> 
     
    </main>
    </>
  );
};

export default Blog;
