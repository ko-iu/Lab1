import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { Container } from '../components/Container';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    const result = await login(email, password, navigate);
    
    if (!result.success) {
      setError(result.message);
    }
    
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Вход | Мой Сайт</title>
      </Helmet>
      <main className="flex items-center justify-center min-h-screen bg-gray-900">
        <Container className="max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">Вход в систему</h1>
          
          {error && (
            <div className="bg-red-500 text-white p-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
                placeholder="Введите ваш email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Пароль
              </label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full"
                placeholder="Введите ваш пароль"
              />
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              {loading ? 'Вход...' : 'Войти'}
            </Button>
          </form>
          
          <div className="mt-4 text-center">
            <p className="text-gray-300">
              Нет аккаунта?{' '}
              <Link to="/register" className="text-purple-400 hover:underline">
                Зарегистрируйтесь
              </Link>
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

export default Login;