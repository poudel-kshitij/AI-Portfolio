import { useEffect, useState } from "react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch("http://localhost:4000/api/messages");
        if (!res.ok) throw new Error("Failed to load messages");
        const data = await res.json();
        setMessages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  if (loading) return <div className="text-center py-10">Loading messages...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error}</div>;

  return (
    <section id="admin" className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📬 Visitor Messages
      </h2>

      {messages.length === 0 ? (
        <p className="text-gray-600 text-center">No messages yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Message</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m) => (
                <tr key={m.id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{m.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-600">{m.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{m.content}</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-500">
                    {new Date(m.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
