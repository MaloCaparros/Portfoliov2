import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from './Button.jsx';

const socialLinks = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: faInstagram },
  { href: 'https://www.linkedin.com/in/malo-caparros-395029275/', label: 'LinkedIn', icon: faLinkedin },
  { href: 'mailto:malo.caparros@orange.com', label: 'Email', icon: faEnvelope },
];

function Contact() {
  return (
    <section id="contacts" className="flex flex-col items-center py-20 px-6 gap-12">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Contacts</h2>
        <span className="w-20 h-1 bg-yellow"></span>
      </div>

      <form className="w-full max-w-lg flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-sm font-semibold">Nom</label>
          <input
            type="text"
            className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-sm font-semibold">Email</label>
          <input
            type="email"
            className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-nunito text-sm font-semibold">Message</label>
          <textarea
            rows={5}
            className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow resize-none"
          />
        </div>
        <div className="flex">
          <Button label="Envoyer" href="#" color="yellow" border="none" />
        </div>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-4 w-full">
        <div className="flex gap-6">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="text-dark hover:text-yellow transition-colors"
              aria-label={s.label}
            >
              <FontAwesomeIcon icon={s.icon} size="2x" />
            </a>
          ))}
        </div>
        <p className="font-nunito text-grey text-sm">Malo Caparros 2026</p>
      </footer>
    </section>
  );
}

export default Contact;
