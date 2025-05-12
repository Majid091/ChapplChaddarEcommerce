const {model, Schema} = require('mongoose');



const cartSchema = new Schema({
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    products:[{
        product:
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity:
        {
            type: Number,
            required: true,
            min: 1
        },
        totalPrice:
        {
            type: Number,
            required: true
        }
    }],
    
    totalAmount: 
    {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});


cartSchema.methods.calculateTotalAmount = function(){

    let total = 0;

    this.products.forEach(item=>{
        total += item.totalPrice
    });

    this.totalAmount = total;
}



const cartModel = model('Cart', cartSchema);
module.exports = cartModel