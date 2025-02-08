import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET 
//   });
cloudinary.config({ 
    cloud_name: 'dxdekhki3', 
    api_key: '492534314729567', 
    api_secret: 'r-HBIzAWC2gabQl-8gVqYDh29VM' // Click 'View API Keys' above to copy your API secret
});
  const uploadOnCloudinary = async (tempAvatar) => {
    try {
        console.log(tempAvatar)
        if (!tempAvatar) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(tempAvatar, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(tempAvatar)
        return response;

    } catch (error) {
        fs.unlinkSync(tempAvatar) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}