function Header({ elements }) {
  const listElements = elements.map((element) => (
    <li key={element}><a href={`#${element}`} className="font-raleway text-lg">{element}</a></li>
  ));
  return (
    <header className="fixed top-0 w-full bg-white z-50">
      <nav className="w-4/5 mx-auto h-14 flex items-center justify-between">
        <span className="font-comfortaa text-lg">Malo Caparros</span>
        <ul className="flex gap-8 text-sm font-medium text-gray-600">
          {listElements}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
