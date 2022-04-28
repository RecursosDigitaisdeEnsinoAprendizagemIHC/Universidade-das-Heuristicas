import express from 'express';
import cors, { CorsOptions } from "cors";

export const app = express();

const corsOptions: CorsOptions = {
  origin: ["*"],
}

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))