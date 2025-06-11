const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Red Dress", price: 49900, image: "/images/Red 2.jpeg" },
  { id: 2, name: "Coat", price: 68760, image: "/images/coat 6.jpeg" },
  { id: 3, name: "Jacket", price: 27500, image: "/images/jacket 7.jpeg" },
  { id: 4, name: "Sweater", price: 19350, image: "/images/sweater 1.jpeg" }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
