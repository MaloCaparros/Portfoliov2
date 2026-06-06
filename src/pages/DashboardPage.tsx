import { useState } from 'react';
import useProducts from '../hooks/useProducts';
import ProductFormModal from '../components/ProductFormModal';
import type { Project, ProjectFormData } from '../types';

type ModalMode = 'add' | 'edit' | null;

function DashboardPage() {
  const { products, loading, addProduct, updateProduct, deleteProduct } = useProducts();
  const [modal, setModal] = useState<ModalMode>(null);
  const [editTarget, setEditTarget] = useState<Project | null>(null);

  const openAdd = () => {
    setEditTarget(null);
    setModal('add');
  };

  const openEdit = (product: Project) => {
    setEditTarget(product);
    setModal('edit');
  };

  const closeModal = () => {
    setModal(null);
    setEditTarget(null);
  };

  const handleSubmit = (data: ProjectFormData) => {
    if (modal === 'add') {
      addProduct(data);
    } else if (editTarget) {
      updateProduct(editTarget.id, data);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Supprimer ce projet ?')) {
      deleteProduct(id);
    }
  };

  return (
    <div className="min-h-screen px-6 pt-24 pb-10">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="font-playFaire font-bold text-3xl md:text-4xl">Dashboard</h1>
          <button
            onClick={openAdd}
            className="font-nunito font-semibold text-sm px-5 py-2.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
          >
            + Ajouter un projet
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {loading ? (
            <p className="font-nunito text-grey text-center py-10">Chargement...</p>
          ) : (
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4">Nom</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">
                    Description
                  </th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">
                    Lien
                  </th>
                  <th className="text-right font-nunito font-semibold text-sm px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center font-nunito text-grey py-10">
                      Aucun projet. Commencez par en ajouter un.
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-nunito font-semibold">{p.name}</td>
                      <td className="px-6 py-4 font-nunito text-grey text-sm hidden md:table-cell">
                        <span className="line-clamp-2">{p.description}</span>
                      </td>
                      <td className="px-6 py-4 font-nunito text-sm hidden md:table-cell">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-500 hover:underline block truncate max-w-[180px]"
                        >
                          {p.link}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => openEdit(p)}
                            className="font-nunito text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="font-nunito text-sm px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                          >
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {modal && (
        <ProductFormModal initial={editTarget} onSubmit={handleSubmit} onClose={closeModal} />
      )}
    </div>
  );
}

export default DashboardPage;
