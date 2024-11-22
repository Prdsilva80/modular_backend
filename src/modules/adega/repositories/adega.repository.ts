import { PrismaClient } from '@prisma/client';
import { WineDTO } from '../schemas/wine.schema';

export class AdegaRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: WineDTO) {
        return this.prisma.wine.create({ data });
    }

    async findByName(name: string) {
        return this.prisma.wine.findUnique({ where: { name } });
    }

    async findAll() {
        return this.prisma.wine.findMany();
    }

    async findById(id: string) {
        return this.prisma.wine.findUnique({ where: { id } });
    }

    async updateQuantity(id: string, quantity: number) {
        return this.prisma.wine.update({
            where: { id },
            data: { quantity }
        });
    }
}