import { Link } from 'react-router-dom';
import type { Project } from '../types';

interface ProductProps extends Project {
  reversed?: boolean;
}

function Product({ id, name, link, description, image, reversed }: ProductProps) {
  return (
    <div
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-2xl overflow-hidden bg-white md:h-[24rem] shadow-md`}
    >
      <div className="flex flex-col justify-center items-center p-6 flex-1 md:items-start gap-4">
        <h3 className="text-2xl font-playFaire font-bold">{name}</h3>
        <p className="text-grey font-nunito text-sm text-center md:text-start">{description}</p>
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Link
            to={`/project/${id}`}
            className="font-nunito font-semibold px-5 py-2.5 rounded-full bg-white border-2 border-black hover:bg-gray-100 transition-colors text-sm"
          >
            En savoir plus
          </Link>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="font-nunito font-semibold px-5 py-2.5 rounded-full bg-yellow hover:opacity-90 transition-opacity text-sm"
          >
            Voir le projet
          </a>
        </div>
      </div>

      {image && (
        <div className="h-48 md:h-full md:w-1/2 shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}

export default Product;
