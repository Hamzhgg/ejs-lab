const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


const RESTAURANT = {
  name: "Hamzh restaurant",
  isOpen: true,
  address: "manama ,block num 714, st 1408",
  phone: "666334",
  menu: [
    { id: 1, name: 'Quantum Quinoa Mushroom Burger', price: 13.00, rating: 4, category: 'mains', details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.' },
    { id: 2, name: 'Binary Berry Cheesecake', price: 10.11, rating: 3, category: 'desserts', details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.' },
    { id: 3, name: 'Recursive Rigatoni', price: 17.00, rating: 5, category: 'mains', details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.' },
    { id: 4, name: 'Pumpkin Pi Squared', price: 3.14, rating: 5, category: 'desserts', details: 'A delightful pumpkin dessert, squared and spiced to perfection.' },
    { id: 5, name: 'Fibonacci String Bean Fries', price: 11.23, rating: 5, category: 'sides', details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.' }
  ]
};


app.get('/', (req, res) => {
  res.render('home', { RESTAURANT });
});


app.get('/hello', (req, res) => {
  res.send('Hello There!');
});


app.get('/menu', (req, res) => {
  res.render('menu', { menu: RESTAURANT.menu });
});


app.get('/menu/:category', (req, res) => {
  const category = req.params.category;
  const menuItems = RESTAURANT.menu.filter(item => item.category === category);
  res.render('category', { category, menuItems });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
