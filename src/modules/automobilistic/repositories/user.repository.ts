import { PrismaClient } from '@prisma/client';
import { UserDTO } from '../schemas/user.schema';

export class UserRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: UserDTO) {
        return this.prisma.user.create({ data });
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({ where: { email } });
    }

    async findById(userId: string) {
        return this.prisma.user.findUnique({ where: { id: userId } });
    }

    async updateUser(userId: string, data: Partial<UserDTO>) {
        return this.prisma.user.update({ where: { id: userId }, data });
    }

    async deleteUser(userId: string) {
        return this.prisma.user.delete({ where: { id: userId } });
    }

    async listUsers() {
        return this.prisma.user.findMany();
    }
}
