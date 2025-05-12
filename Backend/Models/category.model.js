const {model, Schema} = require('mongoose');



const categorySchema = new Schema({
    name:
    {
        type: String,
        required: true
    },
    description:
    {
        type: String
    }
});


const categoryModel = model('Category', categorySchema);
module.exports = categoryModel;