import Product from './Product';
import Deckouverte from '../images/deckouverte.png';
import tapIn from '../images/tapIn.png';
import vachibox from '../images/vachibox.png';





const products = [
  {
    name: 'DeckOuverte',
    link: 'https://easy-crea.vercel.app/',
    description: 'Participation au développement d’une application mobile permettant de jouer des histoires créées par une communauté à l’aide de cartes interactives. Travail réalisé sur l’expérience utilisateur et les fonctionnalités mobiles.',
    image: `${Deckouverte}`,
  },
  {
    name: 'Vachibox',
    link: 'https://vachibox.netlify.app/',
    description: 'Développement d’un jeu mobile où le joueur doit secouer son téléphone pour récolter un maximum de lait. Utilisation des capteurs du smartphone et gestion des interactions en temps réel.',
    image: `${vachibox}`,
  },
  {
    name: 'TapIn',
    link: 'https://github.com/MaloCaparros/TapInAPI',
    description: 'Développement d’une plateforme combinant poker compétitif classé et paris sportifs, avec système de classement, statistiques et expérience multijoueur.',
    image: `${tapIn}`,
  },
];

function ProductList() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 pt-9">
      <div className="flex flex-col w-full items-center gap-5 ">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Projets</h2>
        <span className="w-20 h-1 bg-yellow"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-6 w-full md:max-w-[50vw]">
        {products.map((product, index) => (
          <Product key={product.name} {...product} reversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
