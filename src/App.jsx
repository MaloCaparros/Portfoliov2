import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

const navElements = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/#projects" },
  { label: "Contacts", path: "/#contacts" },
];

function App() {
  return (
    <BrowserRouter>
      <main className="bg-light-grey">
        <Header elements={navElements} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
