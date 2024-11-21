import { PrismaClient } from '@prisma/client';

export class AuthRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async saveToken(userId: string, token: string) {
        return this.prisma.authToken.create({
            data: {
                userId,
                token,
            },
        });
    }

    async findToken(token: string) {
        return this.prisma.authToken.findUnique({ where: { token } });
    }

    async revokeToken(token: string) {
        return this.prisma.authToken.delete({ where: { token } });
    }
}
