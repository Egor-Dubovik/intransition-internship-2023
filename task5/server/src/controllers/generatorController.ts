import { Request, Response, NextFunction } from "express";
import { messages } from "../common/constant/messages";
import ApiError from "../exceptions/ApiError";
import generatorService from "../services/generatorService";

class GeneratorController {
  async generateFakeData(req: Request, res: Response, next: NextFunction) {
    try {
      const { locale, seed, page, errorCount } = req.query;
      if (!locale || !seed || !page || !errorCount) throw ApiError.badRequest(messages.allFields);
      const fakeData = await generatorService.generateFakeData({
        locale: locale as string,
        page: Number(page),
        seed: Number(seed),
        errorCount: Number(errorCount),
      });
      return res.json(fakeData);
    } catch (err) {
      next(err);
    }
  }
}

export default new GeneratorController();

// Борислав Суханов
