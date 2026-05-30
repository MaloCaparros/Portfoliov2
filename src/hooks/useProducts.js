import { useState, useEffect } from 'react';
import productsData from '../data/products';

const STORAGE_KEY = 'portfolio_products';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setProducts(stored ? JSON.parse(stored) : productsData);
    setLoading(false);
  }, []);

  const save = (updated) => {
    setProducts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const addProduct = (data) => {
    save([...products, { ...data, id: Date.now() }]);
  };

  const updateProduct = (id, data) => {
    save(products.map((p) => (p.id === id ? { ...p, ...data } : p)));
  };

  const deleteProduct = (id) => {
    save(products.filter((p) => p.id !== id));
  };

  return { products, loading, addProduct, updateProduct, deleteProduct };
}

export default useProducts;
