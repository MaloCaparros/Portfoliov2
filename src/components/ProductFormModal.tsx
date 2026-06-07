import { useState, useEffect } from 'react';
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
    setValue,
    watch,
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

  const imageValue = watch('image');
  const [preview, setPreview] = useState<string>(initial?.image ?? '');

  useEffect(() => {
    if (!imageValue?.startsWith('data:image/')) {
      setPreview(imageValue ?? '');
    }
  }, [imageValue]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setValue('image', base64, { shouldValidate: true });
      setPreview(base64);
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setValue('image', '', { shouldValidate: true });
    setPreview('');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
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

          <div className="flex flex-col gap-2">
            <label className="font-nunito text-sm font-semibold">
              Image <span className="text-grey font-normal">(optionnel)</span>
            </label>

            {preview && (
              <div className="relative w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={preview}
                  alt="Aperçu"
                  className="w-full h-full object-cover"
                  onError={() => setPreview('')}
                />
                <button
                  type="button"
                  onClick={clearImage}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors text-lg leading-none"
                >
                  ×
                </button>
              </div>
            )}

            <input
              {...register('image')}
              placeholder="https://..."
              className={inputClass(!!errors.image)}
            />

            <label className="flex items-center gap-2 cursor-pointer font-nunito text-sm text-grey hover:text-dark transition-colors self-start">
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              Choisir un fichier
            </label>

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
