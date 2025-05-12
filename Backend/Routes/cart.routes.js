const express = require('express');
const router = express.Router();

const cart = require('../Controllers/cart.controller');


router.post('/add-to-cart', cart.addToCart);
router.get('/get-cart/:userId', cart.getCart);
router.put('/update-product-quantity', cart.updateProductQuantity);
router.put('/remove-product-from-cart', cart.removeProductFromCart);



module.exports = router;