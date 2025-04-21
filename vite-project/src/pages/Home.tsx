import React, { useState } from 'react';
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';
import { Container } from '../components/Container';
import ItemCard from '../components/ItemCard';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([
    { title: "Товар 1", description: "Качественный товар", price: "5000" }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    price: ""
  });

  const handleAddItem = () => {
    if (newItem.title && newItem.description && newItem.price) {
      setItems([...items, newItem]);
      setNewItem({ title: "", description: "", price: "" });
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex items-center justify-center min-h-screen"> 
      <Container>
        <Text className="text-4xl font-bold mb-8 text-center">Добро пожаловать!</Text>
        
        <div className="flex items-center justify-center mb-8">
          <Input
            type="text"
            name="title"
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
          </div>
        </div>
        
        <img src="1.jpeg" alt="Image" className="rounded-lg shadow-lg w-64 h-64 mx-auto mt-8" />
        <div className="flex justify-center mt-8">
          <Button 
            title="Добавить товар" 
            className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg" 
            onClick={() => setIsModalOpen(true)} 
          />
        </div>
        <div className="mt-8">
          <Text className="text-2xl font-bold mb-4 text-center">Наши товары</Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <ItemCard 
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
   
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg w-96">
              <Text className="text-2xl font-bold mb-4">Добавить новый товар</Text>
              
              <Input
                type="text"
                name="title"
                placeholder="Название"
                className="border border-gray-300 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newItem.title}
                onChange={handleInputChange}
              />
              
              <Input
                type="text"
                name="description"
                placeholder="Описание"
                className="border border-gray-300 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newItem.description}
                onChange={handleInputChange}
              />
              
              <Input
                type="text"
                name="price"
                placeholder="Цена"
                className="border border-gray-300 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newItem.price}
                onChange={handleInputChange}
              />
              
              <div className="flex justify-end">
                <Button
                  title="Отмена"
                  className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded-lg mr-2"
                  onClick={() => setIsModalOpen(false)}
                />
                <Button
                  title="Добавить"
                  className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
                  onClick={handleAddItem}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
  );
};

export default Home;