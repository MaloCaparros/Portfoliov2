import { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import type { ContactContextValue } from '../context/ContactContext';

export function useContactContext(): ContactContextValue {
  const ctx = useContext(ContactContext);
  if (!ctx) throw new Error('useContactContext must be used within ContactProvider');
  return ctx;
}
