import express from "express";
import morgan from "morgan";
import { Request, Response } from "express";


const app = express();

app.use(morgan("short"))

app.get("/hello",(req: Request, res: Response) => {
  res.send("Hello baby.")
});

app.listen(3000, () => {
  console.log("Server is running...");
  
});
