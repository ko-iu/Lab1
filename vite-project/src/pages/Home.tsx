import React, { useState } from 'react';
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';
import { Container } from '../components/Container';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <main className="flex items-center justify-center min-h-screen"> 
      <Container>
        <Text className="text-4xl font-bold mb-8 text-center">Добро пожаловать!</Text>
        <div className="flex items-center justify-center mb-8">
          <Input
            type="text"
            placeholder="Введите текст"
            className="border border-gray-300 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="ml-4">
            <Button
              title="Отправить"
              className="bg-purple-500 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
              onClick={() => alert(inputValue)}
            />
            <Button title="Отмена" className="bg-gray-400 text-white px-6 py-2 rounded-lg ml-2" onClick={() => {}} />
          </div>
        </div>
        <img src="1.jpeg" alt="Image" className="rounded-lg shadow-lg w-64 h-64 mx-auto mt-8" />
      </Container>
    </main>
  );
};

export default Home;

