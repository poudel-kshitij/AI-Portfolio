export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-sm py-3 px-6 flex justify-between items-center h-3 z-50">
      <span>
        © {new Date().getFullYear()} <b>KSHITIJ POUDEL</b>. All rights reserved.
      </span>
      <a
        href="mailto:kshitij.poudel@kysu.edu"
        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
      >
        Get in Touch
      </a>
    </footer>
  );
}
