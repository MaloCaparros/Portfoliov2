import MaloPhoto from '../images/Malo.png';
import VectorBg from '../images/Vector.png';

function Home() {
  return (
    <main className="h-screen flex items-center w-4/5 mx-auto">
      <div className="flex-1">
        <h1 className="font-comfortaa text-5xl font-bold">Malo Caparros</h1>
        <p className="font-raleway text-xl text-gray-500 mt-4">Développeur Web</p>
      </div>
      <div className="flex-1 flex items-center justify-center relative">
        <img src={VectorBg} alt="" className="absolute w-full h-full object-contain" />
        <img src={MaloPhoto} alt="Malo Caparros" className="relative z-10 w-80 h-80 object-cover" />
      </div>
    </main>
  );
}

export default Home;
