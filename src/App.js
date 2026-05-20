import Header from './components/Header';

function App() {
    const element = ["About", "Projects", "Contacts"];
  return (
    <div>
      <Header elements={element} />
    </div>
  );
}

export default App;
