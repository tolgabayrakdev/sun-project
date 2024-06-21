import { Request, Response } from 'express';
import { Exception } from "../exceptions/exception";
import { StaticsService } from "../services/statics-service";

export class StaticsController {
    private staticsService: StaticsService;

    constructor() {
        this.staticsService = new StaticsService();
    }

    public getStatics = async (req: Request, res: Response) => {
        const userId = req.user.id;
        try {
            const result = await this.staticsService.getStats(userId);
            res.status(200).json(result);
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    }


}