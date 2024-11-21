import { ReportRepository } from '../repositories/report.repository';

export class ReportService {
    private reportRepository: ReportRepository;

    constructor() {
        this.reportRepository = new ReportRepository();
    }

    async generateReport(filterData: any) {
        // Lógica para filtrar, processar e retornar os dados do relatório
        return this.reportRepository.generate(filterData);
    }
}
