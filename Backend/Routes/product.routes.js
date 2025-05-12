const express = require('express');
const router = express.Router();

const product = require('../Controllers/product.controller');
const upload = require('../Middlewares/multer.middleware');



router.post('/create-product', upload.array('files', 5),product.createProduct);
router.put('/update-product/:id', product.updateProduct);
router.get('/get-product/:id', product.getProductById);
router.put('/like-product/:id', product.likeProduct);
router.delete('/delete-product/:id', product.deleteProduct);
router.get('/all-products', product.getAllProducts);



module.exports = router;