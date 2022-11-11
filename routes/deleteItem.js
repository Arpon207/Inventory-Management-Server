import { Router } from "express";
import item from "../models/item.js";
import { deleteImage } from "../utils/cloudinary.js";

const router = Router();

router.delete("/delete", async (req, res) => {
  try {
    deleteImage(req.query.cloudinaryId);
    const response = await item.findByIdAndDelete({ _id: req.query.itemId });
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
  }
});

export default router;
