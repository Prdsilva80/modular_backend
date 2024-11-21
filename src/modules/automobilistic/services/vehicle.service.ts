import { VehicleRepository } from '../repositories/vehicle.repository';

export class VehicleService {
    private vehicleRepository: VehicleRepository;

    constructor() {
        this.vehicleRepository = new VehicleRepository();
    }

    async registerVehicle(vehicleData: any) {
        // Lógica de registro de veículos (ex.: validação de dados, criação no banco)
        return this.vehicleRepository.create(vehicleData);
    }

    async getVehicleById(vehicleId: string) {
        const vehicle = await this.vehicleRepository.findById(vehicleId);

        if (!vehicle) {
            throw new Error('Veículo não encontrado');
        }

        return vehicle;
    }
}
