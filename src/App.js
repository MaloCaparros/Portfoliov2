import Header from './components/Header';
import Home from './components/Home';

function App() {
    const element = ["About", "Projects", "Contacts"];
  return (
    <div>
      <Header elements={element} />
      <Home />
    </div>
  );
}

export default App;
