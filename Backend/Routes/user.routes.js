const express = require('express');
const router = express.Router();

const user = require('../Controllers/user.controller');
const auth = require('../Middlewares/auth.middleware');


router.post('/create-user', user.createUser);
router.post('/login-user',user.loginUser);
router.get('/get-user/:id', user.getUserById);
router.put('/update-user/:id', user.updateUser);
router.delete('/delete-user/:id', user.deleteUser);

router.post('/request-reset', user.requestPasswordReset);
router.post('/reset-password/:token', user.resetPassword);

router.put('/assign-role', auth.authenticateUser,auth.authorizeAdmin, user.assignRole);



module.exports = router;