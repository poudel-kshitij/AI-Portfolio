// src/components/Sections/Services.jsx
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { categories, projects } from "../../data/servicesData";
import { FaTimes } from "react-icons/fa";

const Bubble = ({ active, label, onClick }) => (
  <button
    onClick={onClick}
    className={`rounded-full px-5 py-2 text-sm font-medium shadow transition
      ${active
        ? "bg-indigo-600 text-white"
        : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-800"
      }`}
  >
    {label}
  </button>
);

const ProjectCard = ({ item, onOpen }) => (
  <motion.article
    layout
    whileHover={{ y: -4 }}
    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex flex-col"
    onClick={() => onOpen(item)}
  >
    {item.image && (
      <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
    )}
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {item.title}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {item.period} • {item.role}
      </p>
      <p className="mt-2 text-gray-700 dark:text-gray-300 line-clamp-3">{item.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {item.tech?.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-[11px] px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

const Modal = ({ open, onClose, item }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-semibold">{item?.title}</h4>
            <button aria-label="Close" onClick={onClose} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
              <FaTimes />
            </button>
          </div>

          {item?.image && <img src={item.image} alt="" className="h-56 w-full object-cover" />}

          <div className="p-6 space-y-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item?.period} • {item?.role}
            </p>

            <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
              {item?.details?.map((d, i) => <li key={i}>{d}</li>)}
            </ul>

            {item?.tech?.length > 0 && (
              <div className="pt-2 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {item?.links?.length > 0 && (
              <div className="pt-2">
                {item.links.map((l, i) => (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline mr-4"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Services() {
  const [active, setActive] = useState("ai-ml");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(null);

  const list = useMemo(
    () => projects.filter(p => p.category.includes(active)),
    [active]
  );

  const openModal = (item) => { setCurrent(item); setOpen(true); };
  const closeModal = () => setOpen(false);

  return (
    <section className="py-0 min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 dark:text-indigo-400">
            Projects & Services
          </h2>
        </div>

        {/* Bubble categories (like your image) */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((c) => (
            <Bubble
              key={c.id}
              label={c.label}
              active={active === c.id}
              onClick={() => setActive(c.id)}
            />
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <ProjectCard key={p.id} item={p} onOpen={openModal} />
          ))}
          {list.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400">No projects yet in this category.</p>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={closeModal} item={current} />
    </section>
  );
}
