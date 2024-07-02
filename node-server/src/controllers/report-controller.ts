import { Request, Response } from 'express';
import { Exception } from '../exceptions/exception';
import { ReportService } from '../services/report-service';

export class ReportController {
    private reportService: ReportService;

    constructor() {
        this.reportService = new ReportService();
    }

    public create = async (req: Request, res: Response) => {
        try {
            const userId = req.user.id;
            const payload = req.body;
            await this.reportService.create(payload, userId);
            res.status(201).json({ message: 'Report created.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public delete = async (req: Request, res: Response) => {
        const userId = req.params.id;
        try {
            await this.reportService.delete(parseInt(userId));
            res.status(200).json({ message: 'Report deleted.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public update = async (req: Request, res: Response) => {
        const id = req.params.id;
        const payload = req.body;
        try {
            await this.reportService.update(parseInt(id), payload);
            res.status(200).json({ message: 'Report updated.' });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public show = async (req: Request, res: Response) => {
        try {
            const person = await this.reportService.show(parseInt(req.params.id));
            res.status(200).json({ person: person });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };

    public list = async (req: Request, res: Response) => {
        const userId = req.user.id;
        try {
            const reportList = await this.reportService.list(userId);
            res.status(200).json({ reports: reportList });
        } catch (error) {
            if (error instanceof Exception) {
                res.status(error.statusCode).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Internal server error!' });
            }
        }
    };
}
