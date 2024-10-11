const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Global cart variable
let cart = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Pass cart to every route
app.use((req, res, next) => {
    res.locals.cart = cart;
    next();
});

// Routes
const browseRoute = require('./routes/browse');
const cartRoute = require('./routes/cart');
const checkoutRoute = require('./routes/checkout');

app.use('/', browseRoute);
app.use('/cart', cartRoute);
app.use('/checkout', checkoutRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
