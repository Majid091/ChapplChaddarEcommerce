const jwt = require('jsonwebtoken');
const User = require('../Models/user.model');




const authenticateUser = async(req, res, next)=>{
    try
    {
        const token = req.header("Authorization")?.split(" ")[1];
        if(!token)
        {
            return res.status(400).json({
                message: "No token is provided Authorization denied",
                error: true,
                success: false
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decode.id).select('-password');
        if(!user)
        {
            return res.status(404).json({
                messsage: "user not found",
                error: true,
                success: false
            })
        }

        req.user = user;
        next();
    }
    catch(error)
    {
        res.status(500).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}



const authorizeAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Admins only.", error: true, success: false });
    }
    next();
};


module.exports = {authenticateUser, authorizeAdmin};