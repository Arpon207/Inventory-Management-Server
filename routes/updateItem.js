import express from "express";
import item from "../models/item.js";

const router = express.Router();

router.put("/:id", async (req, res) => {
  try {
    const result = await item.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/edit/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await item.findByIdAndUpdate(
      { _id: id },
      { $set: req.body }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
