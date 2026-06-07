import { createContext, useReducer, useEffect } from 'react';
import type { Testimonial } from '../types';
import type { TestimonialFormValues } from '../types/schemas';
import testimonialsData from '../data/testimonials';

interface TestimonialsState {
  testimonials: Testimonial[];
  loading: boolean;
}

type TestimonialsAction =
  | { type: 'SET'; payload: Testimonial[] }
  | { type: 'ADD'; payload: Testimonial }
  | { type: 'UPDATE'; payload: Testimonial }
  | { type: 'DELETE'; payload: number }
  | { type: 'TOGGLE_VISIBLE'; payload: number };

function testimonialsReducer(state: TestimonialsState, action: TestimonialsAction): TestimonialsState {
  switch (action.type) {
    case 'SET':
      return { testimonials: action.payload, loading: false };
    case 'ADD':
      return { ...state, testimonials: [...state.testimonials, action.payload] };
    case 'UPDATE':
      return {
        ...state,
        testimonials: state.testimonials.map((t) => (t.id === action.payload.id ? action.payload : t)),
      };
    case 'DELETE':
      return { ...state, testimonials: state.testimonials.filter((t) => t.id !== action.payload) };
    case 'TOGGLE_VISIBLE':
      return {
        ...state,
        testimonials: state.testimonials.map((t) =>
          t.id === action.payload ? { ...t, visible: !t.visible } : t
        ),
      };
  }
}

export interface TestimonialsContextValue extends TestimonialsState {
  addTestimonial: (data: TestimonialFormValues) => void;
  updateTestimonial: (id: number, data: TestimonialFormValues) => void;
  deleteTestimonial: (id: number) => void;
  toggleVisible: (id: number) => void;
}

export const TestimonialsContext = createContext<TestimonialsContextValue | null>(null);

const STORAGE_KEY = 'portfolio_testimonials';

function makeInitials(name: string): string {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function TestimonialsProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(testimonialsReducer, { testimonials: [], loading: true });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    dispatch({
      type: 'SET',
      payload: stored ? (JSON.parse(stored) as Testimonial[]) : testimonialsData,
    });
  }, []);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.testimonials));
    }
  }, [state.testimonials, state.loading]);

  const addTestimonial = (data: TestimonialFormValues) => {
    dispatch({
      type: 'ADD',
      payload: { ...data, id: Date.now(), initials: makeInitials(data.name), visible: true },
    });
  };

  const updateTestimonial = (id: number, data: TestimonialFormValues) => {
    dispatch({
      type: 'UPDATE',
      payload: { ...data, id, initials: makeInitials(data.name), visible: true },
    });
  };

  const deleteTestimonial = (id: number) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const toggleVisible = (id: number) => {
    dispatch({ type: 'TOGGLE_VISIBLE', payload: id });
  };

  return (
    <TestimonialsContext.Provider value={{ ...state, addTestimonial, updateTestimonial, deleteTestimonial, toggleVisible }}>
      {children}
    </TestimonialsContext.Provider>
  );
}
