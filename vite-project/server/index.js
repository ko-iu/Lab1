import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

let products = [
  { id: 1, title: "Товар 1", description: "Описание товара 1", price: "100" }
];

let users = [
  { 
    id: 1, 
    firstName: "Admin", 
    lastName: "Admin", 
    email: "admin@example.com", 
    phone: "+79143000000", 
    role: "admin", 
    password: "admin123" 
  }
];

app.use(cors());
app.use(express.json());

// Middleware для проверки аутентификации
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ error: "Требуется авторизация" });
  }
  next();
};

// GET запрос для получения всех товаров
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST запрос для добавления нового товара
app.post("/api/products", authenticate, (req, res) => {
  try {
    const { title, description, price } = req.body;
    
    if (!title || !description || !price) {
      return res.status(400).json({ error: "Все поля обязательны для заполнения" });
    }
    
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      title,
      description,
      price
    };
    
    products.push(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Ошибка при добавлении товара:", error);
    res.status(500).json({ error: "Ошибка сервера при добавлении товара" });
  }
});

// Регистрация пользователя
app.post("/api/register", (req, res) => {
  try {
    const { firstName, lastName, email, phone, role, password } = req.body;
    
    // Валидация данных
    if (!firstName || !lastName || !email || !phone || !role || !password) {
      return res.status(400).json({ error: "Все поля обязательны для заполнения" });
    }
    
    if (!/^[a-zA-Zа-яА-Я]+$/.test(firstName) || !/^[a-zA-Zа-яА-Я]+$/.test(lastName)) {
      return res.status(400).json({ error: "Имя и фамилия должны содержать только буквы" });
    }
    
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      return res.status(400).json({ error: "Некорректный email" });
    }
    
    if (!/^\+?\d{10,15}$/.test(phone)) {
      return res.status(400).json({ error: "Некорректный номер телефона" });
    }
    
    if (!["admin", "user"].includes(role)) {
      return res.status(400).json({ error: "Некорректно" });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ error: "Пароль должен содержать минимум 6 символов" });
    }
    
    // Проверка на существующего пользователя
    if (users.some(user => user.email === email)) {
      return res.status(400).json({ error: "Пользователь с таким email уже существует" });
    }
    
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      firstName,
      lastName,
      email,
      phone,
      role,
      password
    };
    
    users.push(newUser);
    res.status(201).json({ message: "Пользователь успешно зарегистрирован" });
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    res.status(500).json({ error: "Ошибка сервера при регистрации" });
  }
});

// Авторизация пользователя
app.post("/api/login", (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email и пароль обязательны" });
    }
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return res.status(401).json({ error: "Неверные учетные данные" });
    }
   
    res.json({ 
      message: "Успешная авторизация",
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Ошибка при авторизации:", error);
    res.status(500).json({ error: "Ошибка сервера при авторизации" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});