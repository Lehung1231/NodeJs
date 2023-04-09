import express from "express";
import router from "./routes/index";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(`${process.env.URI_DB}`);
app.use("/api", router);

export const viteNodeApp = app;

