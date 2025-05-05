import express from "express";
import cors from "cors";

const app = express();
const port = 5000;
 
let products = [
  { id: 1, title: "Товар 1", description: "Описание товара 1", price: "100" }
];

app.use(cors());
app.use(express.json());

// GET запрос для получения всех товаров
app.get("/api/products", (req, res) => {
  res.json(products);
});

// POST запрос для добавления нового товара
app.post("/api/products", (req, res) => {
  try {
    const { title, description, price } = req.body;
    
    // Валидация данных
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

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});