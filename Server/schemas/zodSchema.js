import { z } from 'zod';

const registerSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
});

const deleteUserSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(8),
});


export {
  registerSchema,
  deleteUserSchema,
};