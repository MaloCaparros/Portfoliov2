import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { projectSchema, type ProjectFormValues } from '../types/schemas';
import type { Project } from '../types';

interface ProductFormModalProps {
  initial: Project | null;
  onSubmit: (data: ProjectFormValues) => void;
  onClose: () => void;
}

const inputClass = (hasError: boolean) =>
  `border rounded-lg px-4 py-2.5 font-nunito focus:outline-none focus:ring-2 focus:ring-yellow w-full ${
    hasError ? 'border-red-400' : 'border-gray-200'
  }`;
const errorClass = 'font-nunito text-xs text-red-500 mt-0.5';

function ProductFormModal({ initial, onSubmit, onClose }: ProductFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      name: initial?.name ?? '',
      link: initial?.link ?? '',
      description: initial?.description ?? '',
      image: initial?.image ?? '',
    },
  });

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

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Nom</label>
            <input {...register('name')} className={inputClass(!!errors.name)} />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Lien</label>
            <input {...register('link')} placeholder="https://..." className={inputClass(!!errors.link)} />
            {errors.link && <p className={errorClass}>{errors.link.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Description</label>
            <textarea {...register('description')} rows={3} className={`${inputClass(!!errors.description)} resize-none`} />
            {errors.description && <p className={errorClass}>{errors.description.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">URL de l'image <span className="text-grey font-normal">(optionnel)</span></label>
            <input {...register('image')} placeholder="https://..." className={inputClass(!!errors.image)} />
            {errors.image && <p className={errorClass}>{errors.image.message}</p>}
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
