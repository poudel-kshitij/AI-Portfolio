import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { posts } from "../../data/portfolioData";

export default function Blog() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="pt-0 pb-0 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-8">
          Blog & Insights
        </h2>

        {/* Blog Grid */}
        <motion.div
          className="grid md:grid-cols-1 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, duration: 0.6 },
            },
          }}
        >
          {posts.map((p, i) => (
            <motion.article
              key={p.id}
              className="p-8 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:scale-[1.02] cursor-pointer transition-all duration-300"
              onClick={() => setSelected(p)}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                {p.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                {p.date} • {p.minutes} min read
              </p>
              <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                {p.summary}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* Modal for Full Blog */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-[90%] p-8 text-gray-800 dark:text-gray-100 overflow-y-auto max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl"
                  onClick={() => setSelected(null)}
                >
                  <FaTimes />
                </button>
                <h3 className="text-3xl font-semibold text-indigo-700 dark:text-indigo-400 mb-3">
                  {selected.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  {selected.date} • {selected.minutes} min read
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                  {selected.content || selected.summary}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
