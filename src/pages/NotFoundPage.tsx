import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-light-grey flex flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="font-playFaire font-bold text-[8rem] md:text-[10rem] leading-none text-yellow select-none">
        404
      </p>

      <div className="flex flex-col gap-2">
        <h1 className="font-playFaire font-bold text-2xl md:text-3xl">Page introuvable</h1>
        <p className="font-nunito text-grey">Cette page n'existe pas ou a été déplacée.</p>
      </div>

      <Link
        to="/"
        className="font-nunito font-semibold px-6 py-3 rounded-full bg-yellow hover:opacity-90 transition-opacity"
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFoundPage;
