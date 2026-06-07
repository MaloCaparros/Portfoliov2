import { useContext } from 'react';
import { TestimonialsContext } from '../context/TestimonialsContext';
import type { TestimonialsContextValue } from '../context/TestimonialsContext';

export function useTestimonialsContext(): TestimonialsContextValue {
  const ctx = useContext(TestimonialsContext);
  if (!ctx) throw new Error('useTestimonialsContext must be used within TestimonialsProvider');
  return ctx;
}
