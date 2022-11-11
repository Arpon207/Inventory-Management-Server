import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import addItemRoute from "./routes/addItem.js";
import getItemRoute from "./routes/getItems.js";
import getItemByIdRoute from "./routes/getItemById.js";
import updateItemRoute from "./routes/updateItem.js";
import deleteItemRoute from "./routes/deleteItem.js";
import getTokenRoute from "./routes/getToken.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

connect().catch(console.dir);

// middlewares

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/inventory/items/", addItemRoute);
app.use("/inventory/items/", getItemRoute);
app.use("/inventory/items/", getItemByIdRoute);
app.use("/inventory/items/", updateItemRoute);
app.use("/inventory/items/", deleteItemRoute);
app.use("/inventory/token/", getTokenRoute);

//routes

app.get("/", (req, res) => {
  res.send("Inventory management server");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
