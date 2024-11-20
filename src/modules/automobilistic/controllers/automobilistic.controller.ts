import { Request, Response, NextFunction } from 'express';
import { AutomobilisticService } from '../services/automobilistic.service';
import { UserSchema } from '../schemas/user.schema';

export class AutomobilisticController {
    private automobilisticService: AutomobilisticService;

    constructor() {
        this.automobilisticService = new AutomobilisticService();
    }

    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const userData = UserSchema.parse(req.body);
            const user = await this.automobilisticService.register(userData);

            res.status(201).json({
                message: 'Usuário registrado com sucesso',
                user: { id: user.id, email: user.email }
            });
        } catch (error) {
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const user = await this.automobilisticService.login(email, password);

            res.status(200).json({
                message: 'Login realizado com sucesso',
                user: { id: user.id, email: user.email }
            });
        } catch (error) {
            next(error);
        }
    }
}