import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import type { NavItem } from '../types';

const navElements: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contact', path: '/contact' },
];

function PublicLayout() {
  const location = useLocation();

  return (
    <main className="bg-light-grey">
      <Header elements={navElements} />
      <div key={location.pathname} className="animate-page-in">
        <Outlet />
      </div>
    </main>
  );
}

export default PublicLayout;
