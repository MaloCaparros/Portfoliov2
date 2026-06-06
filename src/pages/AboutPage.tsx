import Button from '../components/Button';
import Footer from '../components/Footer';
import Moi from '../images/moi.jpg';

function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-10 gap-10 pt-9">
      <h2 className="font-playFaire font-bold text-3xl md:text-4xl md:mt-9">A propos de moi</h2>

      <div className="flex flex-col-reverse md:flex-row items-start gap-10 w-full">
        <div className="flex flex-col gap-6 md:w-1/2">
          <p className="font-nunito text-grey text-base md:text-lg">
            Je m'appelle Malo Caparros et je suis actuellement en première année du cycle ingénieur
            à l'EFREI Bordeaux, dans le parcours Logiciels et Systèmes d'Information.
          </p>
          <p className="font-nunito text-grey text-base md:text-lg">
            Aujourd'hui, j'évolue au sein d'Alveus en tant que développeur en alternance. Dans ce
            cadre, je participe à l'amélioration continue de l'interface utilisateur ainsi qu'au
            développement et à la maintenance des fonctionnalités de la plateforme.
          </p>
          <div className="flex flex-col md:w-1/2">
            <Button label="Voir le github" href="https://github.com/MaloCaparros" color="yellow" border="none" />
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center w-full">
          <img
            src={Moi}
            alt="Photo de Malo Caparros"
            className="rounded-full w-64 md:w-96 aspect-square object-cover md:-mt-20"
          />
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default AboutPage;
