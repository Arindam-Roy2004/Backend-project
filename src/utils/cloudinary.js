import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

const uploadOnCloudinary = async(filePath)=>{
    try{
        if(!filePath) throw new Error("File path is required for Cloudinary upload")
        const result = await cloudinary.uploader.upload(filePath,{
            resource_type:'auto',
            folder:'video-sharing-app'
        })
        // remove file from local uploads folder
        console.log(`File uploaded to Cloudinary: ${result.secure_url}`)
        return {
            public_id: result.public_id,
            url: result.secure_url
        }
    }
    catch(error){
        fs.unlinkSync(filePath)
        return null;
    }
}

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export default { uploadOnCloudinary };