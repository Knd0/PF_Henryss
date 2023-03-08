const { v2 } = require('cloudinary') 
require('dotenv').config()
const { CLOUD_NAME, API_KEY, API_SECRET } = process.env;

v2.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
    secure: true
});


const uploadImage = async (filePath) => {
    return await
    v2.uploader.upload(filePath, {
        folder: 'saveImages'
    })
}

const deleteImage = async (publicId) => {
    return await v2.uploader.destroy(publicId)

}

module.exports = {
    uploadImage,
    deleteImage
}