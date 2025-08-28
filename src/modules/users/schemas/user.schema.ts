import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  role: z.enum(['admin', 'technician', 'client']),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

export type UserSchema = z.infer<typeof userSchema>;
