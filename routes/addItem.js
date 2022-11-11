import express from "express";
import item from "../models/item.js";
import { upload } from "./../utils/cloudinary.js";

const router = express.Router();

router.post("/add", upload, async (req, res) => {
  const imageSrc = req.img;
  const itemData = { ...req.body, image: imageSrc };
  const items = new item(itemData);
  try {
    const savedItems = await items.save();
    res.status(200).send(savedItems);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
