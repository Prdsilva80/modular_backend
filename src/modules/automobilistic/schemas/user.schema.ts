import { z } from 'zod';

export const UserSchema = z.object({
    id: z.string().uuid().optional(),
    name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
    email: z.string().email({ message: "Email inválido" }),
    password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    role: z.enum(['ADMIN', 'USER'], {
        required_error: "Função do usuário é obrigatória"
    })
});

export type UserDTO = z.infer<typeof UserSchema>;