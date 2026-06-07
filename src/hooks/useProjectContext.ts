import { useContext } from 'react';
import { ProjectContext } from '../context/ProjectContext';
import type { ProjectContextValue } from '../context/ProjectContext';

export function useProjectContext(): ProjectContextValue {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error('useProjectContext must be used within ProjectProvider');
  return ctx;
}
