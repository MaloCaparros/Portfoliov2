import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './context/AuthContext';
import { ProjectProvider } from './context/ProjectContext';
import { ContactProvider } from './context/ContactContext';
import { GOOGLE_CLIENT_ID } from './services/auth';
import ProtectedRoute from './components/ProtectedRoute';
import PublicLayout from './layouts/PublicLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import AdminProjectsPage from './pages/AdminProjectsPage';
import AdminContactsPage from './pages/AdminContactsPage';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ProjectProvider>
          <ContactProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<PublicLayout />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                </Route>

                <Route path="/login" element={<LoginPage />} />

                <Route element={<ProtectedRoute />}>
                  <Route element={<AdminLayout />}>
                    <Route path="/admin/projects" element={<AdminProjectsPage />} />
                    <Route path="/admin/contacts" element={<AdminContactsPage />} />
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </ContactProvider>
        </ProjectProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
