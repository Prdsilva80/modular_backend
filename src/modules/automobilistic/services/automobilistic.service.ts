import { UserDTO } from '../schemas/user.schema';
import { UserRepository } from '../repositories/user.repository';

export class AutomobilisticService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(userData: UserDTO) {
        const existingUser = await this.userRepository.findByEmail(userData.email);

        if (existingUser) {
            throw new Error('Usuário já cadastrado');
        }

        return this.userRepository.create(userData);
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        // Implementação de verificação de senha será adicionada depois
        return user;
    }
}