import { createContext, useReducer } from 'react';
import type { User } from '../types';
import { decodeGoogleToken } from '../services/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

type AuthAction = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

function authReducer(_state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      return { user: null, isAuthenticated: false };
  }
}

export interface AuthContextValue extends AuthState {
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

const AUTH_KEY = 'portfolio_auth';

function getInitialState(): AuthState {
  const stored = localStorage.getItem(AUTH_KEY);
  if (stored) {
    return { user: JSON.parse(stored) as User, isAuthenticated: true };
  }
  return { user: null, isAuthenticated: false };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, undefined, getInitialState);

  const login = (token: string) => {
    const user = decodeGoogleToken(token);
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
    dispatch({ type: 'LOGIN', payload: user });
  };

  const logout = () => {
    localStorage.removeItem(AUTH_KEY);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
