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
  image: z.string().refine(
    (val) => {
      if (val === '' || val.startsWith('data:image/') || val.startsWith('/')) return true;
      try { new URL(val); return true; } catch { return false; }
    },
    { message: "L'URL de l'image est invalide" }
  ),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

export const testimonialSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  role: z.string().min(2, 'Le rôle doit contenir au moins 2 caractères'),
  text: z.string().min(20, 'Le témoignage doit contenir au moins 20 caractères'),
});

export type TestimonialFormValues = z.infer<typeof testimonialSchema>;
