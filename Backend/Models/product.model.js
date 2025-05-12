const {model, Schema} = require('mongoose');



const productSchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String,
        required: true
    },
    images:
    {
        type: [String],
    },
    price:
    {
        type: Number,
        required: true
    },
    category:
    {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    stock:
    {
        type: Number,
        required: true,
        default: 0
    },
    likes:
    [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    likeCount:
    {
        type: Number,
        default: 0
    },

    rating:
    {
        type: Number,
        default: 0
    }

},
{
    timestamps: true
});


const productModel = model('Product', productSchema);
module.exports = productModel