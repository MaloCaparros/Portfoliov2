import { useState, useEffect } from 'react';
import productsData from '../data/products';
import type { Project, ProjectFormData } from '../types';

const STORAGE_KEY = 'portfolio_products';

interface UseProductsReturn {
  products: Project[];
  loading: boolean;
  addProduct: (data: ProjectFormData) => void;
  updateProduct: (id: number, data: ProjectFormData) => void;
  deleteProduct: (id: number) => void;
}

function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setProducts(stored ? (JSON.parse(stored) as Project[]) : productsData);
    setLoading(false);
  }, []);

  const save = (updated: Project[]) => {
    setProducts(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const addProduct = (data: ProjectFormData) => {
    save([...products, { ...data, id: Date.now() }]);
  };

  const updateProduct = (id: number, data: ProjectFormData) => {
    save(products.map((p) => (p.id === id ? { ...p, ...data } : p)));
  };

  const deleteProduct = (id: number) => {
    save(products.filter((p) => p.id !== id));
  };

  return { products, loading, addProduct, updateProduct, deleteProduct };
}

export default useProducts;
