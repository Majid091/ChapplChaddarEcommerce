const cloudinary = require('cloudinary');
const fs = require('fs');



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async(localFilePath)=>{
    try
    {
        if(!localFilePath)
        {
            console.error("no file is provided to upload on cloudinary");
            return null
        }

        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
            folder: "AneesEcommerce"
        });

        fs.unlinkSync(localFilePath);
        return response
    }
    catch(error)
    {
        fs.unlinkSync(localFilePath);
        console.log("error Uploading file", error);
        return null
    }
}



module.exports = uploadOnCloudinary