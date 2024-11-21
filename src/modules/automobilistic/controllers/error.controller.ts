import { Request, Response, NextFunction } from 'express';

export class ErrorController {
    static handleError(err: any, req: Request, res: Response, next: NextFunction) {
        console.error(err);
        res.status(err.status || 500).json({
            message: err.message || 'Erro interno do servidor',
        });
    }
}
