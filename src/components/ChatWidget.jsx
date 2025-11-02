import { useState } from "react";
import axios from "axios";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await axios.post("http://localhost:4000/api/chat", { prompt: input });
      const reply = { role: "assistant", content: res.data.reply };
      setMessages((prev) => [...prev, reply]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Server offline or Ollama not reachable." }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full shadow-lg"
      >
        Chat with me
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border rounded-2xl shadow-xl flex flex-col">
          <div className="p-3 border-b font-semibold bg-slate-50">Assistant</div>
          <div className="flex-1 overflow-y-auto p-3 text-sm space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <span
                  className={`px-2 py-1 rounded-xl ${
                    m.role === "user" ? "bg-indigo-100" : "bg-slate-100"
                  }`}
                >
                  {m.content}
                </span>
              </div>
            ))}
          </div>
          <form onSubmit={sendMessage} className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-xl px-3 py-1 text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Dixit..."
            />
            <button className="bg-indigo-600 text-white px-3 rounded-xl">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
