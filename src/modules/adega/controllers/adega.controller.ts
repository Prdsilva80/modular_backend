import { Request, Response, NextFunction } from 'express';
import { AdegaService } from '../services/adega.service';
import { WineSchema } from '../schemas/wine.schema';

export class AdegaController {
    private adegaService: AdegaService;

    constructor() {
        this.adegaService = new AdegaService();
    }

    async addWine(req: Request, res: Response, next: NextFunction) {
        try {
            const wineData = WineSchema.parse(req.body);
            const wine = await this.adegaService.addWine(wineData);

            res.status(201).json({
                message: 'Vinho adicionado com sucesso',
                wine,
            });
        } catch (error) {
            next(error);
        }
    }

    async listWines(req: Request, res: Response, next: NextFunction) {
        try {
            const wines = await this.adegaService.listWines();
            res.status(200).json({ wines });
        } catch (error) {
            next(error);
        }
    }
}
