import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string().uuid().optional(),
    name: z
        .string()
        .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
        .max(50, { message: "Nome deve ter no máximo 50 caracteres" }),
    email: z
        .string()
        .email({ message: "Email inválido" })
        .transform((email) => email.toLowerCase()), 
    password: z
        .string()
        .min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
        .regex(/[A-Z]/, { message: "Senha deve conter pelo menos uma letra maiúscula" })
        .regex(/[a-z]/, { message: "Senha deve conter pelo menos uma letra minúscula" })
        .regex(/[0-9]/, { message: "Senha deve conter pelo menos um número" })
        .regex(/[@$!%*?&]/, { message: "Senha deve conter pelo menos um caractere especial" }),
    role: z.enum(['ADMIN', 'USER'], {
        required_error: "Função do usuário é obrigatória",
    }),
    createdAt: z.date().optional(), 
    updatedAt: z.date().optional(), 
});

export type UserDTO = z.infer<typeof UserSchema>;