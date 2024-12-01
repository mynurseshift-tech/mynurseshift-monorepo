import { z } from 'zod';
import { userSchema } from './user.types';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

export type LoginInput = z.infer<typeof loginSchema>;

export const authPayloadSchema = z.object({
  token: z.string(),
  user: userSchema
});

export type AuthPayload = z.infer<typeof authPayloadSchema>;

export const resetPasswordSchema = z.object({
  token: z.string(),
  password: z.string().min(6)
});

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
