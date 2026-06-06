import VectorBg from '../images/yellow-bg.png';
import HomeText from './HomeText';

function Home() {
  return (
    <section
      className="home-bg h-screen overflow-hidden flex items-center w-full"
      style={{
        backgroundImage: `url(${VectorBg})`,
        backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex h-screen md:h-auto md:w-full items-end">
        <HomeText work="PHP Software Engineer" name="Malo Caparros" />
      </div>
    </section>
  );
}

export default Home;
