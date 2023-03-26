import express from "express";
import routerProduct from "./routes/product.js";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect(`${process.env.URI_DB}`);

app.use("/api", routerProduct);
app.use("/api", authRouter);
export const viteNodeApp = app;

