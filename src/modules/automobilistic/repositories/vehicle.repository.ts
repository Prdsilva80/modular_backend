import { PrismaClient } from '@prisma/client';

export class VehicleRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: any) {
        return this.prisma.vehicle.create({ data });
    }

    async findById(vehicleId: string) {
        return this.prisma.vehicle.findUnique({ where: { id: vehicleId } });
    }

    async updateVehicle(vehicleId: string, data: Partial<any>) {
        return this.prisma.vehicle.update({ where: { id: vehicleId }, data });
    }

    async deleteVehicle(vehicleId: string) {
        return this.prisma.vehicle.delete({ where: { id: vehicleId } });
    }

    async listVehicles() {
        return this.prisma.vehicle.findMany();
    }
}
