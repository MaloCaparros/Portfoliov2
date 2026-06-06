import { createContext, useContext, useReducer, useEffect } from 'react';
import type { Project, ProjectFormData } from '../types';
import productsData from '../data/products';

interface ProjectState {
  projects: Project[];
  loading: boolean;
}

type ProjectAction =
  | { type: 'SET_PROJECTS'; payload: Project[] }
  | { type: 'ADD_PROJECT'; payload: Project }
  | { type: 'UPDATE_PROJECT'; payload: Project }
  | { type: 'DELETE_PROJECT'; payload: number };

function projectReducer(state: ProjectState, action: ProjectAction): ProjectState {
  switch (action.type) {
    case 'SET_PROJECTS':
      return { projects: action.payload, loading: false };
    case 'ADD_PROJECT':
      return { ...state, projects: [...state.projects, action.payload] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case 'DELETE_PROJECT':
      return { ...state, projects: state.projects.filter((p) => p.id !== action.payload) };
  }
}

interface ProjectContextValue extends ProjectState {
  addProject: (data: ProjectFormData) => void;
  updateProject: (id: number, data: ProjectFormData) => void;
  deleteProject: (id: number) => void;
}

const ProjectContext = createContext<ProjectContextValue | null>(null);

const STORAGE_KEY = 'portfolio_products';

export function ProjectProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(projectReducer, { projects: [], loading: true });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    dispatch({
      type: 'SET_PROJECTS',
      payload: stored ? (JSON.parse(stored) as Project[]) : productsData,
    });
  }, []);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.projects));
    }
  }, [state.projects, state.loading]);

  const addProject = (data: ProjectFormData) => {
    dispatch({ type: 'ADD_PROJECT', payload: { ...data, id: Date.now() } });
  };

  const updateProject = (id: number, data: ProjectFormData) => {
    dispatch({ type: 'UPDATE_PROJECT', payload: { ...data, id } });
  };

  const deleteProject = (id: number) => {
    dispatch({ type: 'DELETE_PROJECT', payload: id });
  };

  return (
    <ProjectContext.Provider value={{ ...state, addProject, updateProject, deleteProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjectContext(): ProjectContextValue {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error('useProjectContext must be used within ProjectProvider');
  return ctx;
}
