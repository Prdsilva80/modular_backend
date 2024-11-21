import { Request, Response, NextFunction } from 'express';
import { VehicleService } from '../services/vehicle.service';

export class VehicleController {
    private vehicleService: VehicleService;

    constructor() {
        this.vehicleService = new VehicleService();
    }

    async registerVehicle(req: Request, res: Response, next: NextFunction) {
        try {
            const vehicleData = req.body;
            const vehicle = await this.vehicleService.registerVehicle(vehicleData);

            res.status(201).json({
                message: 'Veículo registrado com sucesso',
                vehicle
            });
        } catch (error) {
            next(error);
        }
    }

    async getVehicleById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const vehicle = await this.vehicleService.getVehicleById(id);

            res.status(200).json(vehicle);
        } catch (error) {
            next(error);
        }
    }
}
