import { createContext, useReducer, useEffect } from 'react';
import type { ContactMessage } from '../types';

interface ContactState {
  messages: ContactMessage[];
  loading: boolean;
}

type ContactAction =
  | { type: 'SET_MESSAGES'; payload: ContactMessage[] }
  | { type: 'ADD_MESSAGE'; payload: ContactMessage }
  | { type: 'MARK_READ'; payload: number };

function contactReducer(state: ContactState, action: ContactAction): ContactState {
  switch (action.type) {
    case 'SET_MESSAGES':
      return { messages: action.payload, loading: false };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'MARK_READ':
      return {
        ...state,
        messages: state.messages.map((m) =>
          m.id === action.payload ? { ...m, read: true } : m
        ),
      };
  }
}

export interface ContactContextValue extends ContactState {
  addMessage: (name: string, email: string, message: string) => void;
  markRead: (id: number) => void;
  unreadCount: number;
}

export const ContactContext = createContext<ContactContextValue | null>(null);

const STORAGE_KEY = 'portfolio_messages';

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(contactReducer, { messages: [], loading: true });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    dispatch({
      type: 'SET_MESSAGES',
      payload: stored ? (JSON.parse(stored) as ContactMessage[]) : [],
    });
  }, []);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.messages));
    }
  }, [state.messages, state.loading]);

  const addMessage = (name: string, email: string, message: string) => {
    dispatch({
      type: 'ADD_MESSAGE',
      payload: {
        id: Date.now(),
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
        read: false,
      },
    });
  };

  const markRead = (id: number) => {
    dispatch({ type: 'MARK_READ', payload: id });
  };

  const unreadCount = state.messages.filter((m) => !m.read).length;

  return (
    <ContactContext.Provider value={{ ...state, addMessage, markRead, unreadCount }}>
      {children}
    </ContactContext.Provider>
  );
}
