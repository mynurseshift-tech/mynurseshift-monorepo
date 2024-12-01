import { z } from 'zod';
import { Status } from './enums';

export const poleSchema = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  description: z.string(),
  status: z.nativeEnum(Status),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type Pole = z.infer<typeof poleSchema>;

export const createPoleSchema = poleSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type CreatePoleInput = z.infer<typeof createPoleSchema>;

export const updatePoleSchema = createPoleSchema.partial();

export type UpdatePoleInput = z.infer<typeof updatePoleSchema>;
