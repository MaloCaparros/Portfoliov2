import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Product Manager · EasyCreA',
    text: "Malo a su s'intégrer rapidement dans notre équipe et livrer des fonctionnalités mobiles de qualité. Sa rigueur et sa capacité à comprendre les besoins utilisateurs ont été un vrai atout pour le projet DeckOuverte.",
    initials: 'SM',
  },
  {
    id: 2,
    name: 'Lucas Bernard',
    role: 'Lead Developer · Vachibox Studio',
    text: "Un développeur sérieux et créatif. Malo a pris en main les capteurs du smartphone avec une grande autonomie et a proposé des solutions techniques pertinentes dès les premières semaines.",
    initials: 'LB',
  },
  {
    id: 3,
    name: 'Camille Rousseau',
    role: 'CTO · TapIn',
    text: "Malo a contribué à la conception de l'architecture backend de TapIn avec beaucoup de professionnalisme. Il maîtrise bien les enjeux de performance et de scalabilité pour des applications multijoueurs.",
    initials: 'CR',
  },
];

function Testimonials() {
  return (
    <section className="flex flex-col items-center py-20 px-6 gap-12">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Témoignages</h2>
        <span className="w-20 h-1 bg-yellow"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {testimonials.map((t) => (
          <div key={t.id} className="flex flex-col gap-4 bg-light-grey rounded-2xl p-6 shadow-sm">
            <span className="text-yellow text-4xl leading-none">"</span>
            <p className="font-nunito text-grey text-sm leading-relaxed flex-1">{t.text}</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-full bg-yellow flex items-center justify-center shrink-0">
                <span className="font-nunito font-bold text-sm text-dark">{t.initials}</span>
              </div>
              <div>
                <p className="font-nunito font-semibold text-sm text-dark">{t.name}</p>
                <p className="font-nunito text-xs text-grey">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
