import { useState } from 'react';
import type { Project, ProjectFormData } from '../types';

interface ProductFormModalProps {
  initial: Project | null;
  onSubmit: (data: ProjectFormData) => void;
  onClose: () => void;
}

function ProductFormModal({ initial, onSubmit, onClose }: ProductFormModalProps) {
  const [form, setForm] = useState<ProjectFormData>({
    name: initial?.name ?? '',
    link: initial?.link ?? '',
    description: initial?.description ?? '',
    image: initial?.image ?? '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h2 className="font-playFaire font-bold text-2xl">
            {initial ? 'Modifier le projet' : 'Ajouter un projet'}
          </h2>
          <button onClick={onClose} className="text-grey hover:text-dark text-3xl leading-none">
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Nom</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito focus:outline-none focus:ring-2 focus:ring-yellow"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Lien</label>
            <input
              name="link"
              value={form.link}
              onChange={handleChange}
              required
              placeholder="https://..."
              className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito focus:outline-none focus:ring-2 focus:ring-yellow"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              required
              className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito resize-none focus:outline-none focus:ring-2 focus:ring-yellow"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">URL de l'image</label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              className="border border-gray-200 rounded-lg px-4 py-2.5 font-nunito focus:outline-none focus:ring-2 focus:ring-yellow"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="font-nunito font-semibold px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="font-nunito font-semibold px-5 py-2.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
            >
              {initial ? 'Enregistrer' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductFormModal;
