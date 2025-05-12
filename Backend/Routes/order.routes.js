const express = require('express');
const router = express.Router();

const order = require('../Controllers/order.controller');
const {authenticateUser, authorizeAdmin} = require('../Middlewares/auth.middleware');


router.post('/create-order', authenticateUser,order.createOrder);
router.get('/get-user-order', authenticateUser,order.getUserOrders);
router.get('/get-allOrders', authenticateUser,order.getAllOrders);
router.put('/update-order-status/:id',  authenticateUser, authorizeAdmin, order.updateOrderStatus);
router.delete('/delete-order/:id', authenticateUser, authorizeAdmin, order.deleteOrder);


module.exports = router