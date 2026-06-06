import { useState } from 'react';
import Product from './Product';
import useProducts from '../hooks/useProducts';

function ProductList() {
  const { products, loading } = useProducts();
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 pt-9">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Projets</h2>
        <span className="w-20 h-1 bg-yellow"></span>
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
          <p className="text-center font-nunito text-grey">Chargement...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center font-nunito text-grey">Aucun projet trouvé.</p>
        ) : (
          filtered.map((product, index) => (
            <Product key={product.id} {...product} reversed={index % 2 !== 0} />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;
