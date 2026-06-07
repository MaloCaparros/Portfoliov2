interface ConfirmModalProps {
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function ConfirmModal({ message, confirmLabel = 'Confirmer', onConfirm, onCancel }: ConfirmModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
      onClick={(e) => e.target === e.currentTarget && onCancel()}
    >
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 flex flex-col gap-6">
        <p className="font-nunito text-dark text-center leading-relaxed">{message}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={onCancel}
            className="font-nunito font-semibold px-5 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="font-nunito font-semibold px-5 py-2.5 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
