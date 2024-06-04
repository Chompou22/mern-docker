import colors from "colors";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";

import Anim from "./database/anim.model";
import connect from "./database/connect";

dotenv.config();
colors.enable();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log("Hello World!".rainbow);
  res.send("Hello World!");
});

app.get("/api/anime", async (req: Request, res: Response) => {
  try {
    const anime = await Anim.find();
    res.json(anime);
  } catch (err) {
    res.status(500).send((err as Error).message);
  }
});

app.post("/api/anime", async (req: Request, res: Response) => {
  try {
    const anime = new Anim(req.body);
    await anime.save();
    res.json(anime);
  } catch (err) {
    res.status(400).send((err as Error).message);
  }
});

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});
