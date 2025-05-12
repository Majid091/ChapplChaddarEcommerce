const {model, Schema} = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');



const userSchema = new Schema({
    username:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true
    },
    password:
    {
        type: String,
        required: true
    },
    resetPasswordToken:
    {
        type: String
    },
    resetPasswordExpires:
    {
        type: Date
    },
    role:
    {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
},
{
    timestamps: true
});


userSchema.pre('save', async function(next){
    if(!this.isModified('password'))
    {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


userSchema.methods.getSignedJwtToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIREIN});
}

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}



const userModel = model('User', userSchema);
module.exports = userModel;