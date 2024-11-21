import { UserDTO } from '../schemas/user.schema';
import { UserRepository } from '../repositories/user.repository';
import bcrypt from 'bcrypt'; // Supondo que usaremos bcrypt para hashing de senhas.

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

        // Hash da senha antes de salvar no banco.
        userData.password = await bcrypt.hash(userData.password, 10);
        return this.userRepository.create(userData);
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        // Verificar se a senha fornecida é válida.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Senha inválida');
        }

        return user;
    }
}
