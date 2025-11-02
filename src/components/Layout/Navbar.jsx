import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm h-14">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight"
        >
          KSHITIJ POUDEL
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/resume" className="hover:text-indigo-600">Resume</Link>
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-200 text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4">
          <nav className="flex flex-col space-y-3 text-center text-gray-800 dark:text-gray-200">
            <Link onClick={() => setIsMenuOpen(false)} to="/">Home</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/about">About</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/resume">Resume</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/services">Services</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/blog">Blog</Link>
            <Link onClick={() => setIsMenuOpen(false)} to="/contact">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
