import { useState } from 'react';
import Product from './Product';
import EmptyState from './EmptyState';
import { useProjectContext } from '../hooks/useProjectContext';

function ProjectCardSkeleton({ reversed }: { reversed: boolean }) {
  return (
    <div
      className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} rounded-2xl overflow-hidden bg-white md:h-[24rem] shadow-md animate-pulse`}
    >
      <div className="flex flex-col justify-center p-6 flex-1 gap-4">
        <div className="h-7 bg-gray-200 rounded-lg w-2/3" />
        <div className="flex flex-col gap-2">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/5" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 bg-gray-200 rounded-full w-36" />
          <div className="h-10 bg-gray-200 rounded-full w-32" />
        </div>
      </div>
      <div className="h-48 md:h-full md:w-1/2 bg-gray-200 shrink-0" />
    </div>
  );
}

function ProductList() {
  const { projects, loading } = useProjectContext();
  const [search, setSearch] = useState('');

  const filtered = projects.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 pt-9">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Projets</h2>
        <span className="w-20 h-1 bg-yellow" />
      </div>

      <input
        type="text"
        placeholder="Rechercher un projet..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md border border-gray-200 rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow"
      />

      <div className="grid grid-cols-1 gap-8 md:gap-6 w-full md:max-w-[50vw]">
        {loading ? (
          [0, 1, 2].map((i) => <ProjectCardSkeleton key={i} reversed={i % 2 !== 0} />)
        ) : filtered.length === 0 ? (
          <EmptyState
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 15.803a7.5 7.5 0 0 0 10.607 0Z" />
              </svg>
            }
            title="Aucun projet trouvé"
            description={search ? `Aucun résultat pour « ${search} »` : 'Il n\'y a pas encore de projets.'}
          />
        ) : (
          filtered.map((project, index) => (
            <Product key={project.id} {...project} reversed={index % 2 !== 0} />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;
