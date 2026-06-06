import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialLink {
  href: string;
  label: string;
  icon: IconDefinition;
}

const socialLinks: SocialLink[] = [
  { href: 'https://www.instagram.com/', label: 'Instagram', icon: faInstagram },
  { href: 'https://www.linkedin.com/in/malo-caparros-395029275/', label: 'LinkedIn', icon: faLinkedin },
  { href: 'mailto:malo.caparros@orange.com', label: 'Email', icon: faEnvelope },
];

function Footer() {
  return (
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
  );
}

export default Footer;
