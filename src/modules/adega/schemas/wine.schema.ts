import { z } from 'zod';

export const WineSchema = z.object({
    id: z.string().uuid().optional(),
    name: z.string().min(3, { message: "O nome do vinho deve ter pelo menos 3 caracteres" }),
    grape: z.string().min(3, { message: "A uva deve ter pelo menos 3 caracteres" }),
    region: z.string().min(2, { message: "A região deve ter pelo menos 2 caracteres" }),
    year: z
        .number()
        .min(1900, { message: "Ano inválido. Deve ser maior que 1900" })
        .max(new Date().getFullYear(), { message: "Ano inválido. Não pode ser no futuro" }),
    quantity: z.number().int().min(1, { message: "A quantidade deve ser no mínimo 1" }),
});

export type WineDTO = z.infer<typeof WineSchema>;
