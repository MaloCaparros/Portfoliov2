import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from '../types/schemas';
import { useContactContext } from '../context/ContactContext';
import Footer from '../components/Footer';

const inputClass = (hasError: boolean) =>
  `border rounded-lg px-4 py-2.5 font-nunito bg-white focus:outline-none focus:ring-2 focus:ring-yellow w-full ${
    hasError ? 'border-red-400' : 'border-gray-200'
  }`;
const errorClass = 'font-nunito text-xs text-red-500 mt-0.5';

function ContactPage() {
  const { addMessage } = useContactContext();
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    addMessage(data.name, data.email, data.message);
    reset();
    setSent(true);
  };

  return (
    <section className="min-h-screen flex flex-col items-center py-32 px-6 gap-12">
      <div className="flex flex-col w-full items-center gap-5">
        <h2 className="font-playFaire font-bold text-3xl md:text-4xl">Contact</h2>
        <span className="w-20 h-1 bg-yellow" />
      </div>

      {sent ? (
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-yellow flex items-center justify-center text-2xl">
            ✓
          </div>
          <p className="font-nunito font-semibold text-lg">Message envoyé !</p>
          <p className="font-nunito text-grey text-sm">Je te répondrai dans les plus brefs délais.</p>
          <button
            onClick={() => setSent(false)}
            className="font-nunito text-sm text-grey underline hover:text-dark"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg flex flex-col gap-5"
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Nom</label>
            <input type="text" {...register('name')} className={inputClass(!!errors.name)} />
            {errors.name && <p className={errorClass}>{errors.name.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Email</label>
            <input type="email" {...register('email')} className={inputClass(!!errors.email)} />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-nunito text-sm font-semibold">Message</label>
            <textarea
              rows={5}
              {...register('message')}
              className={`${inputClass(!!errors.message)} resize-none`}
            />
            {errors.message && <p className={errorClass}>{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="font-nunito font-semibold px-6 py-3 rounded-full bg-yellow hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            Envoyer
          </button>
        </form>
      )}

      <Footer />
    </section>
  );
}

export default ContactPage;
