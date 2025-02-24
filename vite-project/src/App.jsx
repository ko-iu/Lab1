import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog'; 
import Header from './components/Header'; 
import Footer from './components/Footer'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-gray-500 flex flex-col min-h-screen"> {}
        <Header /> {}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} /> {}
        </Routes>
        <Footer /> {}
      </div>
    </BrowserRouter>
  );
}
export default App;
