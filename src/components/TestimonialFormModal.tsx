import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { testimonialSchema, type TestimonialFormValues } from '../types/schemas';
import type { Testimonial } from '../types';

interface TestimonialFormModalProps {
  initial: Testimonial | null;
  onSubmit: (data: TestimonialFormValues) => void;
  onClose: () => void;
}

const inputClass = (hasError: boolean) =>
  `border rounded-lg px-4 py-2.5 font-nunito focus:outline-none focus:ring-2 focus:ring-yellow w-full ${
    hasError ? 'border-red-400' : 'border-gray-200'
  }`;
const errorClass = 'font-nunito text-xs text-red-500 mt-0.5';

function TestimonialFormModal({ initial, onSubmit, onClose }: TestimonialFormModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: initial?.name ?? '',
      role: initial?.role ?? '',
      text: initial?.text ?? '',
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
            {initial ? 'Modifier le témoignage' : 'Ajouter un témoignage'}
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
            <label className="font-nunito text-sm font-semibold">Rôle / Entreprise</label>
            <input {...register('role')} placeholder="ex: CTO · Entreprise" className={inputClass(!!errors.role)} />
            {errors.role && <p className={errorClass}>{errors.role.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Témoignage</label>
            <textarea
              {...register('text')}
              rows={4}
              className={`${inputClass(!!errors.text)} resize-none`}
            />
            {errors.text && <p className={errorClass}>{errors.text.message}</p>}
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

export default TestimonialFormModal;
