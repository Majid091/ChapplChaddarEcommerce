const Order = require('../Models/order.model');
const Product = require('../Models/product.model');




const createOrder = async(req, res)=>{
    try
    {
        const {products, shippingAddress, paymentMethod} = req.body;
        const userId = req.user.id;

        let totalAmount = 0;
        const processedProducts = [];

        for(let item of products)
        {
            const product = await Product.findById(item.product);
            if(!product)
            {
                return res.status(404).json({
                    message: `product is not found for the given id ${item.product}`,
                    error: true,
                    success: false
                })
            }

            const itemTotal = product.price * item.quantity;
            totalAmount += itemTotal

            processedProducts.push({
                product: product._id,
                quantity: item.quantity,
                totalPrice: itemTotal
            })
        }

        const newOrder = new Order({
            user: userId,
            products: processedProducts,
            totalAmount,
            shippingAddress,
            paymentMethod,
            paymentStatus: paymentMethod === 'cash on Delivery'? 'Pending': 'Completed'
        });

        await newOrder.save();

        return res.status(200).json({
            message: 'Order is placed successfully..',
            error: false,
            success: true,
            order: newOrder
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

const getUserOrders = async(req, res)=>{
    try
    {
        const orders = await Order.find({user: req.user.id}).populate('products.product');

        if(!orders)
        {
            return res.status(404).json({
                message: "No order found for the user",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "The User Orders are given below",
            error: false,
            success: true,
            orders: orders
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

//get all orders (Admin)
const getAllOrders = async(req, res)=>{
    try
    {
        const orders = await Order.find()
        .populate('user', 'name eamil')
        .populate('products.product');

        if(!orders)
        {
            return res.status(404).json({
                message: "No one placed order yet",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "All Orders List is given below",
            error: false,
            success: true,
            orders: orders
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

//Update Order status(Admin)
const updateOrderStatus = async(req, res)=>{
    try
    {
        const {status, paymentStatus} = req.body;
        const order = await Order.findById(req.params.id);
        if(!order)
        {
            return res.status(404).json({
                message: 'Order of specific id does not exists',
                error: true,
                success: false
            })
        }

        if(status) order.status = status;

        if(paymentStatus) order.paymentStatus = paymentStatus;

        await order.save();

        return res.status(200).json({
            message: 'Order updated successfully',
            order,
            error: false,
            success: true
        });

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

const deleteOrder = async(req, res)=>{
    try
    {
        const order = await Order.findByIdAndDelete(req.params.id);
        if(!order)
        {
            return res.status(404).json({
                message: "order of the specific id does not exists",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "order was deleted successfully....",
            error: false,
            success: true
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



module.exports = {
    createOrder, getUserOrders, getAllOrders, updateOrderStatus, deleteOrder
}