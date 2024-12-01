import { z } from 'zod';

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN'
}

export enum UserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

export const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional(),
  role: z.nativeEnum(UserRole),
  status: z.nativeEnum(UserStatus),
  position: z.string().optional(),
  workingHours: z.record(z.any()).optional(),
  serviceId: z.number().optional(),
  supervisorId: z.number().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type User = z.infer<typeof userSchema>;

export const createUserSchema = z.object({
  email: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  phone: z.string().optional(),
  role: z.nativeEnum(UserRole),
  position: z.string().optional(),
  workingHours: z.record(z.any()).optional(),
  serviceId: z.number().optional(),
  supervisorId: z.number().optional(),
  password: z.string().min(6)
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

export const updateUserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  status: true
}).partial();

export type UpdateUserInput = z.infer<typeof updateUserSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export type LoginInput = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  email: z.string().email(),
  newPassword: z.string().min(6),
  token: z.string()
});

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
