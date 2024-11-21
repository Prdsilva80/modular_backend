import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async refreshToken(req: Request, res: Response, next: NextFunction) {
        try {
            const { refreshToken } = req.body;
            const newToken = await this.authService.refreshToken(refreshToken);
            res.status(200).json({ token: newToken });
        } catch (error) {
            next(error);
        }
    }

    async logout(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.body;
            await this.authService.logout(userId);
            res.status(200).json({ message: 'Logout realizado com sucesso' });
        } catch (error) {
            next(error);
        }
    }
}
