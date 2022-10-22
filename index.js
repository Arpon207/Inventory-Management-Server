import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
app.use(express.json());

//api

app.get("/", (req, res) => {
  res.send("Inventory management server");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
