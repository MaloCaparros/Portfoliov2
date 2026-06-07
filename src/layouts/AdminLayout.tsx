import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useContactContext } from '../context/ContactContext';

function AdminLayout() {
  const { user, logout } = useAuth();
  const { unreadCount } = useContactContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    void navigate('/login');
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2.5 rounded-lg font-nunito font-semibold text-sm transition-colors ${
      isActive ? 'bg-yellow text-dark' : 'text-grey hover:bg-gray-100'
    }`;

  const UserAvatar = () =>
    user?.picture ? (
      <img src={user.picture} alt={user.name} className="w-8 h-8 rounded-full shrink-0" />
    ) : user ? (
      <div className="w-8 h-8 rounded-full bg-yellow flex items-center justify-center shrink-0">
        <span className="font-nunito font-bold text-sm">{user.name[0]}</span>
      </div>
    ) : null;

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* Barre mobile */}
      <div className="md:hidden bg-white border-b border-gray-200 flex items-center px-3 py-2 gap-2">
        <nav className="flex gap-2 flex-1">
          <NavLink to="/admin/projects" className={linkClass}>Projets</NavLink>
          <NavLink to="/admin/contacts" className={linkClass}>
            Messages
            {unreadCount > 0 && (
              <span className="ml-1 bg-yellow text-dark text-xs font-bold px-1.5 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </NavLink>
        </nav>

        <UserAvatar />
        <button
          onClick={handleLogout}
          className="px-3 py-2 rounded-lg font-nunito text-sm text-grey hover:bg-gray-100 transition-colors shrink-0"
        >
          Sortir
        </button>
      </div>

      {/* Sidebar desktop */}
      <aside className="hidden md:flex md:w-56 bg-white border-r border-gray-200 flex-col p-4 gap-2 shrink-0">
        <p className="font-comfortaa font-bold text-lg mb-4 px-2">Admin</p>

        <nav className="flex flex-col gap-2 flex-1">
          <NavLink to="/admin/projects" className={linkClass}>Projets</NavLink>
          <NavLink to="/admin/contacts" className={linkClass}>
            Messages
            {unreadCount > 0 && (
              <span className="ml-auto bg-yellow text-dark text-xs font-bold px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </NavLink>
        </nav>

        <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
          {user && (
            <div className="flex items-center gap-2 px-2">
              <UserAvatar />
              <span className="font-nunito text-sm text-dark truncate">{user.name}</span>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg font-nunito text-sm text-grey hover:bg-gray-100 transition-colors text-left"
          >
            Déconnexion
          </button>
        </div>
      </aside>

      <main className="flex-1 p-4 md:p-6 bg-light-grey min-w-0">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
