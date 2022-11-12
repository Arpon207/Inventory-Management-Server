import { createRequire } from "module";
const require = createRequire(import.meta.url);

import dotenv from "dotenv";
dotenv.config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = async (req, res, next) => {
  const imageSrc = req.body.image;
  try {
    const response = await cloudinary.uploader.upload(imageSrc, {
      upload_preset: "Inventory",
    });
    req.img = { url: response.secure_url, id: response.public_id };
    next();
  } catch (error) {
    throw error;
  }
};

const deleteImage = async (id) => {
  try {
    await cloudinary.uploader.destroy(id);
  } catch (error) {
    throw error;
  }
};

export { upload, deleteImage };
