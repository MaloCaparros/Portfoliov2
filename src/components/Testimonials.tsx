import { useTestimonialsContext } from '../hooks/useTestimonialsContext';

function Testimonials() {
  const { testimonials } = useTestimonialsContext();
  const visible = testimonials.filter((t) => t.visible);

  if (visible.length === 0) return null;

  return (
    <section className="flex flex-col items-center py-20 px-6 gap-12">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Témoignages</h2>
        <span className="w-20 h-1 bg-yellow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {visible.map((t) => (
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
