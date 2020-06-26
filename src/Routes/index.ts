import express, { Request, Response, NextFunction } from "express";
import { signup, login } from "../app/Controllers/AuthController";
export const routes = express.Router();

routes.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    message: "Hello, World!",
  });
});

routes.post("/signup", signup);
routes.post("/login", login);
