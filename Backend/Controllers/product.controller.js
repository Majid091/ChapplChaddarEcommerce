const Product = require('../Models/product.model');
const uploadOnCloudinary = require('../Config/cloudinary');
const User = require('../Models/user.model');




const createProduct = async(req, res)=>{
    try
    {
        const {name, description, price, category, stock, size, color} = req.body;
        const files = req.files;
        if(!name || !description || !price || !category || !stock || !files)
        {
            return res.status(400).json({
                message: "please fill all the fields",
                error: true,
                success: false
            })
        }

        const uploadImages = [];
        for (const file of files)
        {
            const uploaded = await uploadOnCloudinary(file.path);
            if(uploaded)
            {
                uploadImages.push(uploaded.secure_url)
            }
        }

        const product = new Product({
            name,
            description, 
            price, 
            category, 
            stock, 
            images: uploadImages,
            size,
            color
        })

        await product.save();

        return res.status(200).json({
            message: "New Product is created Successfully..",
            error: false,
            success: true,
            data: product
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


const updateProduct = async(req, res)=>{
    try
    {
        const productId = req.params.id
        const product = await Product.findById(productId);
        const updatedFields = req.body;
        if(!product)
        {
            return res.status(400).json({
                message: "Product of the provided id is not available",
                error: true,
                success: false
            })
        }

        const updateProduct = await Product.findByIdAndUpdate(productId, updatedFields, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            message: "Product is Updated Successfully...",
            error: false,
            success: true,
            productDetails: product
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


const getProductById = async(req, res)=>{
    try
    {
        const productId = req.params.id;
        const product = await Product.findById(productId).populate('category', 'name description');
        if(!product)
        {
            return res.status(400).json({
                message: "product is not found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "Product is found Successfully....",
            error: false,
            success: true,
            productDetails: {
                name: product.name,
                description: product.description,
                price: product.price,
                category: product.category,
                images: product.images,
                stock: product.stock,
                likeCount: product.likeCount,
                rating: product.rating.toFixed(1) //round to 1 decimal point
            }
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


const getAllProducts = async(req, res)=>{
    try
    {
        const products = await Product.find();
        if(!products)
        {
            return res.status(404).json({
                message: "NO product found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "All products are given below",
            error: false,
            success: true,
            products: products
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



const likeProduct = async(req, res)=>{
    try
    {
        const userId = req.body;
        const product = await Product.findById(req.params.id);
        const totalUsers = await User.countDocuments();
        if(!product)
        {
            return res.status(400).json({
                message: "Product not found",
                error: true,
                success: false
            })
        }

        //check if the user already liked the product
        const index = product.likes.indexOf(userId);
        if(index === -1)
        {
            //if user not liked product yet
            product.likes.push(userId);
        }
        else
        {
            //if user already liked it, remove the like
            product.likes.splice(index, 1);
        }


        product.likeCount = product.likes.length  //update likes count

        //update rating (normalize to 5 star system)
        product.rating = totalUsers > 0 ? (product.likeCount/totalUsers) * 5 : 0;

        await product.save();

        return res.status(200).json({
            message: "Likes status is Updated and rating is recalculated",
            error: false,
            success: true,
            productDetails: product
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


const deleteProduct = async(req, res)=>{
    try
    {
        const productId = req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if(!product)
        {
            return res.status(400).json({
                message: "product did not found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "product is deleted successfully....",
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
    createProduct, updateProduct, getProductById,
    likeProduct, deleteProduct, getAllProducts
}