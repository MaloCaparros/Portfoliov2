import Product from './Product';
import useProducts from '../hooks/useProducts';

function ProductList() {
  const { products, loading } = useProducts();

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 gap-10 pt-9">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Projets</h2>
        <span className="w-20 h-1 bg-yellow"></span>
      </div>
      <div className="grid grid-cols-1 gap-8 md:gap-6 w-full md:max-w-[50vw]">
        {loading ? (
          <p className="text-center font-nunito text-grey">Chargement...</p>
        ) : (
          products.map((product, index) => (
            <Product key={product.id} {...product} reversed={index % 2 !== 0} />
          ))
        )}
      </div>
    </section>
  );
}

export default ProductList;
