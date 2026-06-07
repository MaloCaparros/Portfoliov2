import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Product Manager · EasyCreA',
    text: "Malo a su s'intégrer rapidement dans notre équipe et livrer des fonctionnalités mobiles de qualité. Sa rigueur et sa capacité à comprendre les besoins utilisateurs ont été un vrai atout pour le projet DeckOuverte.",
    initials: 'SM',
    visible: true,
  },
  {
    id: 2,
    name: 'Lucas Bernard',
    role: 'Lead Developer · Vachibox Studio',
    text: "Un développeur sérieux et créatif. Malo a pris en main les capteurs du smartphone avec une grande autonomie et a proposé des solutions techniques pertinentes dès les premières semaines.",
    initials: 'LB',
    visible: true,
  },
  {
    id: 3,
    name: 'Camille Rousseau',
    role: 'CTO · TapIn',
    text: "Malo a contribué à la conception de l'architecture backend de TapIn avec beaucoup de professionnalisme. Il maîtrise bien les enjeux de performance et de scalabilité pour des applications multijoueurs.",
    initials: 'CR',
    visible: true,
  },
];

export default testimonials;
