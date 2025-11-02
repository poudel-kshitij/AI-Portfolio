// src/components/Layout.jsx
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about"; // 👈 exception for About Me

  return (
    <div className="h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      {/* Fixed Header */}
      <Navbar />

      {/* Scrollable body */}
      <main
        className={`flex-1 overflow-y-auto ${
          isAboutPage
            ? "pt-0 pb-0" // About page handles its own layout
            : "pt-24 pb-19 px-4 md:px-8" // Uniform padding for others
        }`}
      >
        <Outlet />
      </main>

      {/* Fixed Footer */}
      <Footer />
    </div>
  );
}
