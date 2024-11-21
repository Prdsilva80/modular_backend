import { ZodSchema } from 'zod';

export const validateSchema = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data);

    if (!result.success) {
        const errors = result.error.issues.map((issue) => ({
            path: issue.path.join('.'),
            message: issue.message,
        }));
        throw new Error(JSON.stringify(errors)); 
    }

    return result.data as T;
};
