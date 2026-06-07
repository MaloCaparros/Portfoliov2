import { useState } from 'react';
import { useProjectContext } from '../hooks/useProjectContext';
import ProductFormModal from '../components/ProductFormModal';
import ConfirmModal from '../components/ConfirmModal';
import EmptyState from '../components/EmptyState';
import type { ProjectFormValues } from '../types/schemas';
import type { Project } from '../types';

type ModalMode = 'add' | 'edit' | null;

function AdminProjectsPage() {
  const { projects, loading, addProject, updateProject, deleteProject } = useProjectContext();
  const [modal, setModal] = useState<ModalMode>(null);
  const [editTarget, setEditTarget] = useState<Project | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const openAdd = () => {
    setEditTarget(null);
    setModal('add');
  };

  const openEdit = (project: Project) => {
    setEditTarget(project);
    setModal('edit');
  };

  const closeModal = () => {
    setModal(null);
    setEditTarget(null);
  };

  const handleSubmit = (data: ProjectFormValues) => {
    if (modal === 'add') {
      addProject(data);
    } else if (editTarget) {
      updateProject(editTarget.id, data);
    }
    closeModal();
  };

  const confirmDelete = () => {
    if (deleteTargetId !== null) {
      deleteProject(deleteTargetId);
      setDeleteTargetId(null);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="font-playFaire font-bold text-3xl md:text-4xl">Projets</h1>
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
        ) : projects.length === 0 ? (
          <EmptyState
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
              </svg>
            }
            title="Aucun projet"
            description="Commencez par ajouter votre premier projet."
            action={
              <button
                onClick={openAdd}
                className="font-nunito font-semibold text-sm px-5 py-2.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
              >
                + Ajouter un projet
              </button>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4">Nom</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">Description</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">Lien</th>
                  <th className="text-right font-nunito font-semibold text-sm px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((p) => (
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
                        className="text-blue-500 hover:underline block truncate max-w-45"
                      >
                        {p.link}
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row gap-2 justify-end">
                        <button
                          onClick={() => openEdit(p)}
                          className="font-nunito text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => setDeleteTargetId(p.id)}
                          className="font-nunito text-sm px-3 py-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 transition-colors"
                        >
                          Supprimer
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modal && (
        <ProductFormModal initial={editTarget} onSubmit={handleSubmit} onClose={closeModal} />
      )}

      {deleteTargetId !== null && (
        <ConfirmModal
          message="Supprimer ce projet ? Cette action est irréversible."
          confirmLabel="Supprimer"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTargetId(null)}
        />
      )}
    </div>
  );
}

export default AdminProjectsPage;
