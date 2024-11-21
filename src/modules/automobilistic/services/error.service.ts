export class ErrorService {
    static handleError(err: any) {
        // Lógica para registrar erros ou formatar mensagens
        console.error('Erro capturado:', err.message);
        return { status: err.status || 500, message: err.message || 'Erro interno do servidor' };
    }
}
