const { error } = require('console');
const User = require('../Models/user.model');
const crypto = require('crypto');
const nodemailer = require('nodemailer');


//first we will configure mailer
const tranporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: 'pak33153@gmail.com',
        pass: 'majid.091'
    }
});



const createUser = async(req, res)=>{
    try
    {
        const {username, email, password} = req.body;
        if(!username || !email || !password)
        {
            return res.status(400).json({
                message: "please fill all the fields",
                error: true,
                success: false
            })
        }

        const user = await User.findOne({email});
        if(user)
        {
            return res.status(400).json({
                message: "User is already created go to login page",
                error: true,
                success: false
            })
        }

        const newUser = new User({
            username,
            email,
            password
        });

        await newUser.save();

        const token = newUser.getSignedJwtToken();

        return res.status(200).json({
            message: "New User is created Successfully....",
            error: false,
            success: true,
            data: newUser,
            token: token
        })
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


const loginUser = async(req, res)=>{
    try
    {
        const {email, password} = req.body;
        if(!email || !password)
        {
            return res.status(400).json({
                message: "please fill the desired fields",
                error: true,
                success: false
            })
        }

        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(401).json({
                message: "User is not registered",
                error: true,
                success: false
            })
        }

        const matchPassword = await user.matchPassword(password);
        if(!matchPassword)
        {
            return res.status(400).json({
                message: "Invalid Credentials",
                error: true,
                success: false
            })
        }

        const token = user.getSignedJwtToken();

        return res.status(200).json({
            message: "User Logged IN Successfully.....",
            error: false,
            success: true,
            data: user,
            token: token

        })
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


const getUserById = async(req, res)=>{
    try
    {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(!user)
        {
            return res.status(400).json({
                message: "User not found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "User Found Successfully...",
            error: false,
            success: true,
            data: user
        })
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


const updateUser = async(req, res)=>{
    try
    {
        const userId = req.params.id;
        const updatedData = req.body;
        const user = await User.findById(userId);
        if(!user)
        {
            return res.status(400).json({
                message: "User did not found",
                error: true,
                success: false
            })
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
            new: true,
            runValidators: true
        })

        return res.status(200).json({
            message: "User Data are updated Successfully....",
            error: false,
            success: true,
            data: updatedUser
        })

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


const deleteUser = async(req, res)=>{
    try
    {
        const userId = req.params.id;
        const DeleteUser = await User.findByIdAndDelete(userId);
        if(!DeleteUser)
        {
            return res.status(400).json({
                message: "User not Found",
                error: true,
                success: false
            })
        }

        return res.status(202).json({
            message: "User deleted successfully.....",
            error: false,
            success: true,
            data: DeleteUser
        })
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


const requestPasswordReset = async(req, res)=>{
    try
    {
        const {email} = req.body;
        const user = await User.findOne({email});
        if(!user)
        {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            })
        }

        //generate secure token
        const token = crypto.randomBytes(32).toString('hex');

        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 1000 * 60 * 60; //1hour
        await user.save();

        const resetLink = `${req.protocol}://${req.get('host')}/api/reset-password/${token}`;


        await tranporter.sendMail({
            to: user.email,
            subject: "Password Reset Request",
            html: `<p>You requested a password reset. Click below to reset your password:</p>
             <a href="${resetLink}">${resetLink}</a>`
        })

        
        return res.status(200).json({
            message: "Password reset eamil is sent",
            error: false,
            success: true
        })


    }
    catch(error)
    {
        console.error('reset request error: ', error);
        res.status(500).json({
            message: error.message,
            error: true,
            success: false
        })
    }
}


const resetPassword = async(req, res)=>{
    try
    {
        const {token} = req.params;
        const {newPassword} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {$agt: Date.now()} // token not expired
        })

        if(!user)
        {
            return res.status(400).json({
                message: "Invalid or expired token",
                error: true,
                success: false
            })
        }

        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        return res.status(200).json({
            message: "Password reset successfully..",
            error: false,
            success: true
        })

    }
    catch(error)
    {
        console.error("reset password error", error)
        res.status(500).json({
            message: "Could not reset password",
            error: true,
            success: false
        })
    }
}


// Assign role to a user
const assignRole = async (req, res) => {
    try {
      const { userId, role } = req.body;
  
      // Validate role
      if (!['admin', 'user'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
      }
  
      // Find user and update role
      const user = await User.findByIdAndUpdate(
        userId,
        { role },
        { new: true }
      );
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      return res.status(200).json({
        message: `Role updated to ${role}`,
        user,
      });
    } catch (error) {
      console.error('Error assigning role:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };




module.exports = {
    createUser, loginUser, getUserById, updateUser,
     deleteUser, requestPasswordReset, resetPassword,
     assignRole
}

