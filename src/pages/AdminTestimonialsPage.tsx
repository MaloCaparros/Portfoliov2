import { useState } from 'react';
import { useTestimonialsContext } from '../hooks/useTestimonialsContext';
import TestimonialFormModal from '../components/TestimonialFormModal';
import ConfirmModal from '../components/ConfirmModal';
import EmptyState from '../components/EmptyState';
import type { TestimonialFormValues } from '../types/schemas';
import type { Testimonial } from '../types';

type ModalMode = 'add' | 'edit' | null;

function AdminTestimonialsPage() {
  const { testimonials, loading, addTestimonial, updateTestimonial, deleteTestimonial, toggleVisible } =
    useTestimonialsContext();
  const [modal, setModal] = useState<ModalMode>(null);
  const [editTarget, setEditTarget] = useState<Testimonial | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);

  const openAdd = () => {
    setEditTarget(null);
    setModal('add');
  };

  const openEdit = (t: Testimonial) => {
    setEditTarget(t);
    setModal('edit');
  };

  const closeModal = () => {
    setModal(null);
    setEditTarget(null);
  };

  const handleSubmit = (data: TestimonialFormValues) => {
    if (modal === 'add') {
      addTestimonial(data);
    } else if (editTarget) {
      updateTestimonial(editTarget.id, data);
    }
    closeModal();
  };

  const confirmDelete = () => {
    if (deleteTargetId !== null) {
      deleteTestimonial(deleteTargetId);
      setDeleteTargetId(null);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h1 className="font-playFaire font-bold text-3xl md:text-4xl">Témoignages</h1>
        <button
          onClick={openAdd}
          className="font-nunito font-semibold text-sm px-5 py-2.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
        >
          + Ajouter
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {loading ? (
          <p className="font-nunito text-grey text-center py-10">Chargement...</p>
        ) : testimonials.length === 0 ? (
          <EmptyState
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
              </svg>
            }
            title="Aucun témoignage"
            description="Ajoutez des témoignages pour les afficher sur votre portfolio."
            action={
              <button
                onClick={openAdd}
                className="font-nunito font-semibold text-sm px-5 py-2.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
              >
                + Ajouter un témoignage
              </button>
            }
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4">Auteur</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">Témoignage</th>
                  <th className="text-center font-nunito font-semibold text-sm px-6 py-4">Visible</th>
                  <th className="text-right font-nunito font-semibold text-sm px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {testimonials.map((t) => (
                  <tr key={t.id} className={`transition-colors hover:bg-gray-50 ${!t.visible ? 'opacity-50' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-yellow flex items-center justify-center shrink-0">
                          <span className="font-nunito font-bold text-xs">{t.initials}</span>
                        </div>
                        <div>
                          <p className="font-nunito font-semibold text-sm">{t.name}</p>
                          <p className="font-nunito text-xs text-grey">{t.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <p className="font-nunito text-sm text-grey line-clamp-2">{t.text}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => toggleVisible(t.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                          t.visible ? 'bg-yellow' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                            t.visible ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col sm:flex-row gap-2 justify-end">
                        <button
                          onClick={() => openEdit(t)}
                          className="font-nunito text-sm px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => setDeleteTargetId(t.id)}
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
        <TestimonialFormModal initial={editTarget} onSubmit={handleSubmit} onClose={closeModal} />
      )}

      {deleteTargetId !== null && (
        <ConfirmModal
          message="Supprimer ce témoignage ? Cette action est irréversible."
          confirmLabel="Supprimer"
          onConfirm={confirmDelete}
          onCancel={() => setDeleteTargetId(null)}
        />
      )}
    </div>
  );
}

export default AdminTestimonialsPage;
