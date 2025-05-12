const Category = require('../Models/category.model');




const createCategory = async(req, res)=>{
    try
    {
        const {name, description} = req.body;
        if(!name || !description)
        {
            return res.status(400).json({
                message: "please all the fields",
                error: true,
                success: false
            })
        }

        const newCategory = await Category.create({
            name,
            description
        });

        return res.status(200).json({
            message: "Category is created Successfully....",
            error: false,
            success: true,
            category: newCategory
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


const getCategory = async(req, res)=>{
    try
    {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        if(!category)
        {
            return res.status(400).json({
                message: "Category is not found",
                error: true,
                success: false
            })
        }

        return res.status(200).json({
            message: "Category is found",
            error: false,
            success: true,
            Category: category
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

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.find();
        if(!categories)
        {
            return res.status(404).json({
                message: "No category found",
                error: true,
                success: false
            })
        }

        return res.json(categories);
    }
    catch(error)
    {
        res.status(500).json({
            message: error.message,
            error: true,
            success: false
        })
    }
  };



module.exports = { createCategory, getCategory, getAllCategories }