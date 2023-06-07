import { Request, Response, NextFunction } from "express";
import ApiError from "../exceptions/ApiError";

export const errorMiddleware = (err: Error, req: Request, res: Response) => {
  return err instanceof ApiError
    ? res.status(err.status).json({ message: err.message, errors: err.errors })
    : res.status(500).json({ message: "Unexpected error" });
};
