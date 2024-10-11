const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // Use res.locals.cart to access the cart
    res.render('cart', { cart: res.locals.cart });
});

router.post('/update/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const quantity = parseInt(req.body.quantity);
    const book = res.locals.cart.find(item => item.id === bookId);

    if (quantity > 0) {
        book.quantity = quantity;
    } else {
        res.send('Quantity must be greater than zero.');
    }

    res.redirect('/cart');
});

router.post('/remove/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    res.locals.cart = res.locals.cart.filter(item => item.id !== bookId);
    res.redirect('/cart');
});

module.exports = router;
