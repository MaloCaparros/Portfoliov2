interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center px-6">
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
        {icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-nunito font-semibold text-dark">{title}</p>
        {description && <p className="font-nunito text-sm text-grey">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export default EmptyState;
