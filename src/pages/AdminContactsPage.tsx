import { useContactContext } from '../hooks/useContactContext';
import EmptyState from '../components/EmptyState';

function AdminContactsPage() {
  const { messages, loading, markRead } = useContactContext();

  return (
    <div className="flex flex-col gap-8">
      <h1 className="font-playFaire font-bold text-3xl md:text-4xl">Messages reçus</h1>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {loading ? (
          <p className="font-nunito text-grey text-center py-10">Chargement...</p>
        ) : messages.length === 0 ? (
          <EmptyState
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            }
            title="Aucun message reçu"
            description="Les messages envoyés via le formulaire de contact apparaîtront ici."
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4">Nom</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">Email</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4 hidden md:table-cell">Message</th>
                  <th className="text-left font-nunito font-semibold text-sm px-6 py-4">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {messages.map((m) => (
                  <tr key={m.id} className={`transition-colors ${m.read ? 'text-grey' : 'font-semibold'}`}>
                    <td className="px-6 py-4 font-nunito">{m.name}</td>
                    <td className="px-6 py-4 font-nunito text-sm hidden md:table-cell">{m.email}</td>
                    <td className="px-6 py-4 font-nunito text-sm hidden md:table-cell">
                      <span className="line-clamp-1">{m.message}</span>
                    </td>
                    <td className="px-6 py-4">
                      {m.read ? (
                        <span className="font-nunito text-xs text-grey">Lu</span>
                      ) : (
                        <button
                          onClick={() => markRead(m.id)}
                          className="font-nunito text-xs px-3 py-1.5 rounded-lg bg-yellow hover:opacity-80 transition-opacity"
                        >
                          Marquer lu
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminContactsPage;
