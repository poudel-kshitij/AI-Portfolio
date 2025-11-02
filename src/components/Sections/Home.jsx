import { useState, useMemo, useRef, useEffect } from "react";
import axios from "axios";
import { posts } from "../../data/portfolioData"; // ✅ now using same file
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const per = 3;
  const navigate = useNavigate();
  const chatEndRef = useRef(null);

  // paginate posts
  const pagePosts = useMemo(() => {
    const start = (page - 1) * per;
    return posts.slice(start, start + per);
  }, [page]);

  // auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send message
  const handleSend = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    const userMsg = { sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setPrompt("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", { prompt });
      const text = res?.data?.reply || "No response generated.";
      setMessages((prev) => [...prev, { sender: "ai", text }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "⚠️ Sorry, I couldn’t process that right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuickNav = (path) => navigate(path);

  // 🔗 when a blog post is clicked — redirect to blog page and open it
  const handleBlogRedirect = (id) => {
    navigate(`/blog#${id}`);
  };

  return (
    <section className=" max-w-7xl mx-auto px-4 md:px-8 pt-0 pb-0
             bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100
             transition-colors duration-300 min-h-[calc(100vh-8rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 🤖 LEFT: AI Assistant */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900 shadow-lg rounded-2xl flex flex-col min-h-[80vh]">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              🤖 Hi, I’m Kshitij’s Personal Assistant
            </h2>

            {/* 🔊 Pronunciation */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Name pronunciation:
              </span>
              <button
                onClick={() => {
                  const utter = new SpeechSynthesisUtterance("Kshitij");
                  utter.lang = "en-IN";
                  utter.rate = 0.9;
                  utter.pitch = 1;
                  speechSynthesis.speak(utter);
                }}
                className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline focus:outline-none"
                title="Click to hear pronunciation"
              >
                🔊 /ˈkʃɪ.tɪdʒ/
              </button>
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "65vh" }}>
            {messages.length === 0 && (
              <p className="text-gray-500 text-center mt-10">
                Ask me about Kshitij’s works, research, or achievements.<br />
                I can guide you through this site!
              </p>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-xl ${
                    msg.sender === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl text-gray-600 dark:text-gray-300">
                  Typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input field */}
          <form
            onSubmit={handleSend}
            className="border-t border-gray-200 dark:border-gray-700 flex items-center p-3 bg-white dark:bg-gray-900"
          >
            <input
              className="flex-1 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Type your message..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="ml-2 px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50"
            >
              {loading ? "..." : "Send"}
            </button>
          </form>
        </div>

        {/* 📰 RIGHT: Recent Activities */}
        <aside className="lg:col-span-5 bg-white dark:bg-gray-900 shadow-lg rounded-2xl flex flex-col min-h-[80vh]">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              📰 Recent Activities
            </h2>
          </div>

          {/* List of posts */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "65vh" }}>
            {pagePosts.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center mt-10">
                No recent activity available yet.
              </p>
            ) : (
              pagePosts.map((p) => (
                <article
                  key={p.id}
                  onClick={() => handleBlogRedirect(p.id)} // ✅ redirect
                  className="border border-gray-100 dark:border-gray-800 rounded-xl p-4 hover:shadow-md hover:bg-indigo-50 dark:hover:bg-indigo-800 transition cursor-pointer"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {p.date} • {p.minutes} min read
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1 line-clamp-2">{p.summary}</p>
                </article>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="border-t border-gray-200 dark:border-gray-700 flex justify-center gap-2 p-3 bg-white dark:bg-gray-900">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`h-9 w-9 rounded-lg border transition-all ${
                  page === n
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
