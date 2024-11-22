import { WineDTO } from '../schemas/wine.schema';
import { AdegaRepository } from '../repositories/adega.repository';

export class AdegaService {
    private adegaRepository: AdegaRepository;

    constructor() {
        this.adegaRepository = new AdegaRepository();
    }

    async addWine(wineData: WineDTO) {
        if (!wineData || !wineData.name) {
            throw new Error('Dados do vinho inválidos');
        }

        const existingWine = await this.adegaRepository.findByName(wineData.name);

        if (existingWine) {
            throw new Error('Este vinho já está cadastrado');
        }

        return this.adegaRepository.create(wineData);
    }

    async listWines() {
        return this.adegaRepository.findAll();
    }

    async updateStock(wineId: string, quantity: number) {
        if (!wineId || quantity == null || quantity < 0) {
            throw new Error('Dados de entrada inválidos');
        }

        const wine = await this.adegaRepository.findById(wineId);
    
        if (!wine) {
            throw new Error('Vinho não encontrado');
        }
    
        if (wine.quantity < quantity) {
            throw new Error('Estoque insuficiente');
        }
    
        return this.adegaRepository.updateQuantity(wineId, wine.quantity - quantity);
    }
}