const Cart = require('../Models/cart.model');
const Product = require('../Models/product.model');


const addToCart = async(req, res)=>{
    try
    {
        const {userId, productId, quantity} = req.body;

        const product = await Product.findById(productId);
        if(!product)
        {
            return res.status(400).json({
                message: "Product not found",
                error: true,
                success: false
            })
        }

        const totalPrice = product.price * quantity;


        //check if cart exist for user or not
        let cart = await Cart.findOne({user: userId});
        if(!cart)
        {
            //if cart is not present then make a cart for user
            cart = new Cart({
                user: userId,
                products: [
                    {
                        product: productId,
                        quantity: quantity,
                        totalPrice: totalPrice
                    }
                ]
            });
        }
        else
        {
            //when cart already exists for user then check if the product is present
            // in the cart if present then increment by 1 and if not present then add one
            const productIndex = cart.products.findIndex(item => item.product.toString() === productId);

            if(productIndex !== -1)
            {
                //if product exists then update the quantity and the total price
                cart.products[productIndex].quantity += quantity;
                cart.products[productIndex].totalPrice += totalPrice;
            }
            else
            {
                //if product does not exist in the cart then add it to the cart
                cart.products.push({
                    product: productId,
                    quantity: quantity,
                    totalPrice: totalPrice
                })
            }
        }

        //recalculate total amount
        cart.calculateTotalAmount();


        cart.save();

        return res.status(200).json({
            message: "Product is added to the cart",
            error: false,
            success: true,
            data: cart
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

//get the user cart
const getCart = async(req, res)=>{
    try
    {
        const {userId} = req.params;

        //find the user cart
        const cart = await Cart.findOne({user: userId}).populate('products.product', 'name price');
        if(!cart)
        {
            return res.status(404).json({
                message: "Cart is not found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "Cart is found for the user",
            error: false,
            success: true,
            Cart: cart
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


const updateProductQuantity = async(req, res)=>{
    try
    {
        const {userId, productId, quantity} = req.body;

        const cart = await Cart.findOne({user: userId});
        if(!cart)
        {
            return res.status(404).json({
                message: "Cart is not found for the user",
                error: true,
                success: false
            })
        }

        //find prouduct in the cart
        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if(productIndex === -1)
        {
            return res.status(400).json({
                message: "Product is not found in the cart",
                error: true,
                success: false
            })
        }

        //now we will update the product quantity and total price
        const product = cart.products[productIndex];
        const productData = await Product.findById(productId);
        const priceDifference = (quantity - product.quantity) * productData.price;

        product.quantity = quantity;
        product.totalPrice = product.quantity * productData.price;


        //recalculate the total amount
        cart.calculateTotalAmount();

        await cart.save();

        return res.status(200).json({
            message: "Product quantity are updated successfully.. in the cart",
            error: false,
            success: true,
            Cart: cart
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


const removeProductFromCart = async(req, res)=>{
    try
    {
        const {userId, productId} = req.body;

        const cart = await Cart.findOne({user: userId});
        if(!cart)
        {
            return res.status(404).json({
                message: "Cart is not found",
                error: true,
                success: false
            })
        }

        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
        if(productIndex === -1)
        {
            return res.status(404).json({
                message: "Product is not found in the cart",
                error: true,
                success: false
            })
        }

        //now if the product is present in the cart so we will remove it from the cart
        cart.products.splice(productIndex, 1);

        cart.calculateTotalAmount();

        await cart.save();

        return res.status(200).json({
            message: "Product is removed from the cart",
            error: false,
            success: true,
            Cart: cart
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



module.exports = { addToCart, getCart, updateProductQuantity, removeProductFromCart }