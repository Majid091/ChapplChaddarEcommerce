const express = require('express');
const router = express.Router();

const category = require('../Controllers/category.controller');



router.post('/create-category', category.createCategory);
router.get('/get-category/:id', category.getCategory);
router.get('/all-categories', category.getAllCategories);


module.exports = router