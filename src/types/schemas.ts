import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const projectSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  link: z.string().url("L'URL du projet est invalide"),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères'),
  image: z.union([z.string().url("L'URL de l'image est invalide"), z.literal('')]),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
