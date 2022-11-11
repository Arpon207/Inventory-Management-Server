import express from "express";
import item from "../models/item.js";
import verifyToken from "./../utils/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, async (req, res) => {
  const email = req.query.email;
  const decodedEmail = req.decodedEmail;
  const searchText = req.query.searchText;
  if (email === decodedEmail) {
    const items = await item
      .find({ email: email, name: { $regex: searchText, $options: "i" } || "" })
      .sort({ createdAt: -1 });
    res.send(items);
  } else {
    return res.status(401).send({ message: "unauthorized access." });
  }
});

export default router;
