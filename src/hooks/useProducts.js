import { useState, useEffect } from 'react';
import productsData from '../data/products';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(productsData);
    setLoading(false);
  }, []);

  return { products, loading };
}

export default useProducts;
