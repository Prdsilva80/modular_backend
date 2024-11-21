import { z } from 'zod';

export const VehicleSchema = z.object({
    id: z.string().uuid().optional(),
    model: z
        .string()
        .min(3, { message: "Modelo deve ter no mínimo 3 caracteres" })
        .max(50, { message: "Modelo deve ter no máximo 50 caracteres" }),
    brand: z
        .string()
        .min(2, { message: "Marca deve ter no mínimo 2 caracteres" }),
    licensePlate: z
        .string()
        .regex(/^[A-Z]{3}-[0-9]{4}$/, { message: "Placa inválida. Formato esperado: ABC-1234" }),
    year: z
        .number()
        .min(1900, { message: "Ano inválido. Deve ser maior que 1900" })
        .max(new Date().getFullYear(), { message: "Ano inválido. Não pode ser no futuro" }),
    ownerId: z.string().uuid({ message: "ID do proprietário inválido" }),
});

export type VehicleDTO = z.infer<typeof VehicleSchema>;
