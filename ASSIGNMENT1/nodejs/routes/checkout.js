const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('checkout');
    cart = []; // Clear the cart after checkout
});

module.exports = router;
