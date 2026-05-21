import Header from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';

const navElements = [
  { label: "About", path: "#about" },
  { label: "Projects", path: "#projects" },
  { label: "Contacts", path: "#contacts" },
];

function App() {
  return (
    <main>
      <Header elements={navElements} />
      <Home />
      <ProductList />
    </main>
  );
}

export default App;
