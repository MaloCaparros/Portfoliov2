import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import type { NavItem } from '../types';

const navElements: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Contacts', path: '/#contacts' },
];

function PublicLayout() {
  return (
    <main className="bg-light-grey">
      <Header elements={navElements} />
      <Outlet />
    </main>
  );
}

export default PublicLayout;
