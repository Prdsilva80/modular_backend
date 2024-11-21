import { PrismaClient } from '@prisma/client';

export class ReportRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async generate(filter: any) {
        // Lógica fictícia para demonstração, depende do modelo de dados
        return this.prisma.report.findMany({
            where: filter,
        });
    }

    async save(data: any) {
        return this.prisma.report.create({ data });
    }

    async findById(reportId: string) {
        return this.prisma.report.findUnique({ where: { id: reportId } });
    }
}
