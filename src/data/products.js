import Deckouverte from '../images/deckouverte.png';
import tapIn from '../images/tapIn.png';
import vachibox from '../images/vachibox.png';

const products = [
  {
    id: 1,
    name: 'DeckOuverte',
    link: 'https://easy-crea.vercel.app/',
    description: "Participation au développement d'une application mobile permettant de jouer des histoires créées par une communauté à l'aide de cartes interactives. Travail réalisé sur l'expérience utilisateur et les fonctionnalités mobiles.",
    image: Deckouverte,
  },
  {
    id: 2,
    name: 'Vachibox',
    link: 'https://vachibox.netlify.app/',
    description: "Développement d'un jeu mobile où le joueur doit secouer son téléphone pour récolter un maximum de lait. Utilisation des capteurs du smartphone et gestion des interactions en temps réel.",
    image: vachibox,
  },
  {
    id: 3,
    name: 'TapIn',
    link: 'https://github.com/MaloCaparros/TapInAPI',
    description: "Développement d'une plateforme combinant poker compétitif classé et paris sportifs, avec système de classement, statistiques et expérience multijoueur.",
    image: tapIn,
  },
];

export default products;
