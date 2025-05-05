import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import axios, { AxiosResponse } from 'axios';
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';
import { Container } from '../components/Container';
import ItemCard from '../components/ItemCard';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
}

const Home = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, 'id'>>({
    title: "",
    description: "",
    price: ""
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Ошибка загрузки товаров:', error);
        setError('Не удалось загрузить товары');
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!newProduct.title.trim() || !newProduct.description.trim() || !newProduct.price.trim()) {
        throw new Error("Все поля обязательны для заполнения");
      }

      console.log('Отправляемые данные:', newProduct); // Логирование перед отправкой

      const response = await axios.post<Product>(
        'http://localhost:5000/api/products',
        newProduct,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Ответ сервера:', response.data); // Логирование ответа

      setProducts(prevProducts => [...prevProducts, response.data]);
      setNewProduct({ title: "", description: "", price: "" });
      setIsModalOpen(false);
    } catch (error: any) {
      console.error('Ошибка добавления товара:', error);
      setError(error.response?.data?.error || error.message || "Ошибка при добавлении товара");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
    <Helmet>
      <title>Главная страница | Мой Сайт</title>
      <meta name="description" content="Добро пожаловать на главную страницу." />
      <meta name="keywords" content="главная, товары, магазин, приветствие" />
    </Helmet>
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
            {products.map((product) => (
              <ItemCard 
                key={product.id}
                title={product.title}
                description={product.description}
                price={product.price}
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
                value={newProduct.title}
                onChange={handleInputChange}
              />
              
              <Input
                type="text"
                name="description"
                placeholder="Описание"
                className="border border-gray-300 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newProduct.description}
                onChange={handleInputChange}
              />
              
              <Input
                type="text"
                name="price"
                placeholder="Цена"
                className="border border-gray-300 bg-gray-100 text-gray-900 px-4 py-2 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={newProduct.price}
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
                  onClick={handleAddProduct}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </main>
    </>
  );
};

export default Home;