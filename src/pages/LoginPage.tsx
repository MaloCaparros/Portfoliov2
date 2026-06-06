import { Navigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { isAuthenticated, login } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/admin/projects" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-grey px-6">
      <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center gap-8 w-full max-w-sm">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-comfortaa font-bold text-2xl">Malo Caparros</h1>
          <p className="font-nunito text-grey text-sm">Espace administration</p>
        </div>

        <span className="w-16 h-1 bg-yellow rounded-full" />

        <div className="flex flex-col items-center gap-4 w-full">
          <p className="font-nunito text-sm text-grey text-center">
            Connecte-toi pour accéder au dashboard
          </p>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              if (credentialResponse.credential) {
                login(credentialResponse.credential);
              }
            }}
            onError={() => console.error('Échec de la connexion Google')}
            size="large"
            shape="rectangular"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
