// packages
import path from "path";
import express from "express";
import dotenv from "dotenv";




// utiles
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());



app.listen(port, () => console.log(`Server running on port: ${port}`));
