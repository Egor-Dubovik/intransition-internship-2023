import { Request, Response, NextFunction } from "express";
import { messages } from "../common/constant/messages";
import ApiError from "../exceptions/ApiError";
import generatorService from "../services/generatorService";
import { format } from "@fast-csv/format";
import { IUserData } from "../common/types/user";

class CsvController {
  async createFile(req: Request, res: Response, next: NextFunction) {
    try {
      const { locale, seed, pageAmount, errorCount } = req.query;
      if (!locale || !seed || !pageAmount || !errorCount)
        throw new ApiError(400, messages.allFields);
      const fakeDataArray = await generatorService.getFakeDataArray({
        locale: locale as string,
        pageAmount: pageAmount as string,
        seed: Number(seed),
        errorCount: Number(errorCount),
      });
      CsvController.sendCsvResponse(fakeDataArray, res);
    } catch (err) {
      next(err);
    }
  }

  private static sendCsvResponse(fakeDataArray: IUserData[], res: Response) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", 'attachment; filename="fake_data.csv"');
    const csvStream = format({ headers: true });
    csvStream.pipe(res);
    fakeDataArray.forEach((fakeData) => {
      csvStream.write(fakeData);
    });
    csvStream.end();
  }
}

export default new CsvController();
