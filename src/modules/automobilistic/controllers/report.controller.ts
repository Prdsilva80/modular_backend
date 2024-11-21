import { Request, Response, NextFunction } from 'express';
import { ReportService } from '../services/report.service';

export class ReportController {
    private reportService: ReportService;

    constructor() {
        this.reportService = new ReportService();
    }

    async generateReport(req: Request, res: Response, next: NextFunction) {
        try {
            const reportData = await this.reportService.generateReport(req.body);
            res.status(200).json(reportData);
        } catch (error) {
            next(error);
        }
    }
}
