const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const books = [
        { id: 1, title: 'Book 1', price: 10 },
        { id: 2, title: 'Book 2', price: 15 },
        { id: 3, title: 'Book 3', price: 20 },
    ];
    res.render('index', { books, cart: res.locals.cart });
});

router.post('/add-to-cart/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const quantity = parseInt(req.body.quantity || 1);

    const book = res.locals.cart.find(item => item.id === bookId);
    if (book) {
        book.quantity += quantity;
    } else {
        res.locals.cart.push({ id: bookId, title: `Book ${bookId}`, price: bookId * 10, quantity });
    }
    res.redirect('/');
});

module.exports = router;
