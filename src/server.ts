import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req: Request, res: Response) => {
    res.json({
        message: 'Backend Modular Funcionando!',
        status: 'OK'
    });
});

// Middleware de erro global
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({
        status: 'error',
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});