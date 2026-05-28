import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import Contact from './components/Contact';

const navElements = [
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Contacts", path: "#contacts" },
];

function App() {
  return (
    <main className="bg-light-grey">
      <Header elements={navElements} />
      <Home />
      <ProductList />
      <Contact />
    </main>
  );
}

export default App;
