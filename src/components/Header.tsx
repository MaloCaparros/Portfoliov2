import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import type { NavItem } from '../types';

interface HeaderProps {
  elements: NavItem[];
}

function Header({ elements }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const hash = path.replace('/#', '');
    setIsOpen(false);
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      void navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const renderLinks = (className: string) =>
    elements.map((element) => (
      <li key={element.label}>
        {element.path.startsWith('/#') ? (
          <a
            href={element.path}
            className={className}
            onClick={(e) => handleAnchorClick(e, element.path)}
          >
            {element.label}
          </a>
        ) : (
          <Link to={element.path} className={className} onClick={() => setIsOpen(false)}>
            {element.label}
          </Link>
        )}
      </li>
    ));

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="w-4/5 mx-auto h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-comfortaa text-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Malo Caparros
        </Link>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-600 items-center">
          {renderLinks('font-raleway text-lg')}
          <li>
            <Link
              to={isAuthenticated ? '/admin/projects' : '/login'}
              className="font-raleway text-lg font-semibold px-4 py-1.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
            >
              {isAuthenticated ? 'Admin' : 'Connexion'}
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <ul className={`md:hidden fixed inset-0 flex flex-col items-center justify-center gap-10 bg-white font-raleway text-2xl font-medium text-gray-600 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {renderLinks('font-raleway text-2xl')}
        <li>
          <Link
            to={isAuthenticated ? '/admin/projects' : '/login'}
            className="font-raleway text-2xl font-semibold px-6 py-2 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
            onClick={() => setIsOpen(false)}
          >
            {isAuthenticated ? 'Admin' : 'Connexion'}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
