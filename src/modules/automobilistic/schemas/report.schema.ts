import { z } from 'zod';

export const ReportSchema = z.object({
    id: z.string().uuid().optional(),
    type: z.enum(['SALES', 'ACTIVITY', 'USAGE'], {
        required_error: "Tipo de relatório é obrigatório",
    }),
    generatedAt: z.date(),
    filters: z.record(z.string(), z.string()).optional(), 
    data: z.array(z.any()).optional(), 
});

export type ReportDTO = z.infer<typeof ReportSchema>;
