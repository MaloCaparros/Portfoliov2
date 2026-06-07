import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Product Manager · EasyCreA',
    text: "Je mange du chocolat",
    initials: 'SM',
    visible: true,
  },
  {
    id: 2,
    name: 'Lucas Bernard',
    role: 'Lead Developer · Vachibox Studio',
    text: "Mon dieu j'ai peur",
    initials: 'LB',
    visible: true,
  },
  {
    id: 3,
    name: 'Camille Rousseau',
    role: 'CTO · TapIn',
    text: "Le projet est en développement mais ça va être une masterclass",
    initials: 'CR',
    visible: true,
  },
];

export default testimonials;
