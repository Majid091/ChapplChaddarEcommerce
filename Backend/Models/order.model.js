const {model, Schema} = require('mongoose');




const orderSchema = new Schema({
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    
    products:
    [
        {
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
        }
    ],

    totalAmount:
    {
        type: Number,
        required: true
    },

    shippingAddress:
    {
        type: String,
        required: true
    },

    status:
    {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },

    paymentMethod:
    {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'EasyPaisa', 'Cash on Delivery'],
        required: true
    },

    paymentStatus:
    {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending'
    },
    orderDate:
    {
        type: Date,
        default: Date.now
    }


},
{
    timestamps: true
});


const orderModel = model('Order', orderSchema);
module.exports = orderModel;