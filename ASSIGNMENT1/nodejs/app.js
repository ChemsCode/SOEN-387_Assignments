// app.js

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Session configuration
app.use(session({
    secret: 'your-secret-key', // Replace with a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static files middleware
app.use('/public', express.static(path.join(__dirname, 'public')));

// Book data (this could be replaced with a database)
const books = [
    { id: 1, title: 'Book 1', price: 10 },
    { id: 2, title: 'Book 2', price: 15 },
    { id: 3, title: 'Book 3', price: 20 },
];

// Middleware to initialize cart
app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

// Route to display browse page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'browse.html'));
});

// Route to get books data in JSON (for client-side rendering)
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to add item to cart
app.post('/add-to-cart/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);
    if (book) {
        const cartItem = req.session.cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            req.session.cart.push({ ...book, quantity: 1 });
        }
    }
    res.redirect('/');
});

// Route to display cart page
app.get('/cart', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'cart.html'));
});

// Route to get cart data in JSON
app.get('/cart-data', (req, res) => {
    res.json(req.session.cart);
});

// Route to update cart item quantity
app.post('/cart/update/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const quantity = parseInt(req.body.quantity);
    const cartItem = req.session.cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity = quantity;
    }
    res.redirect('/cart');
});

// Route to remove item from cart
app.post('/cart/remove/:id', (req, res) => {
    const id = parseInt(req.params.id);
    req.session.cart = req.session.cart.filter(item => item.id !== id);
    res.redirect('/cart');
});

// Route to handle checkout
app.get('/checkout', (req, res) => {
    req.session.destroy();
    res.sendFile(path.join(__dirname, 'views', 'checkout.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
