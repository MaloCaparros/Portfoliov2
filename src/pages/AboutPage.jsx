import Button from "../components/Button.jsx";
import Footer from "../components/Footer.jsx";
import Moi from "../images/moi.jpg";

function AboutPage() {
  return (
      <section className="min-h-screen flex flex-col justify-center px-10 md:px-20 gap-10 pt-9">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl md:mt-9">
          A propos de moi
        </h2>

        <div className="flex flex-col md:flex-row items-start gap-10 w-full">
          <div className="flex flex-col gap-6 md:w-1/2">
            <p className="font-nunito text-grey text-base md:text-lg">
              Je m'appelle Malo Caparros et je suis actuellement en première
              année du cycle ingénieur à l'EFREI Bordeaux, dans le parcours
              Logiciels et Systèmes d'Information. Passionné par le développement
              web, j'ai acquis une première expérience significative lors de mon
              stage de fin d'études en BUT Métiers du Multimédia et de l'Internet
              chez Enedis, où j'ai participé au développement d'une application
              web sous Symfony. Aujourd'hui, j'évolue au sein d'Alveus en tant
              que développeur en alternance. Dans ce cadre, je participe à
              l'amélioration continue de l'interface utilisateur ainsi qu'au
              développement et à la maintenance des fonctionnalités de la
              plateforme.
            </p>
            <div className="flex flex-col md:w-1/2">
              <Button
                  label="Voir le github"
                  href="https://github.com/MaloCaparros"
                  color="yellow"
                  border="none"
              />
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
                src={Moi}
                alt="Photo de Malo Caparros"
                className="rounded-full w-64 md:w-96 aspect-square object-cover"
            />
          </div>
        </div>

        <Footer />
      </section>
  );
}

export default AboutPage;