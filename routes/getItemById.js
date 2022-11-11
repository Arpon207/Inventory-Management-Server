import express from "express";
import item from "../models/item.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  const result = await item.findById(req.params.id);
  res.send(result);
});

export default router;
