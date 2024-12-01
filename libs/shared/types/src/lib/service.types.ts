import { z } from 'zod';
import { Status } from './enums';

export const serviceSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  capacity: z.number(),
  status: z.nativeEnum(Status),
  poleId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Service = z.infer<typeof serviceSchema>;

export const createServiceSchema = serviceSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

export type CreateServiceInput = z.infer<typeof createServiceSchema>;

export const updateServiceSchema = createServiceSchema.partial();

export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
