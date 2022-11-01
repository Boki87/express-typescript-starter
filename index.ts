import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db'
import auth  from "./routes/auth";
import cors from 'cors'

dotenv.config({ path: "./config/config.env" });
connectDB()

const app = express();
app.use(express.json())
app.use(cors())


// Mount routers
app.use("/api/v1/auth", auth);


app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running at https://localhost:${port}`);
});
