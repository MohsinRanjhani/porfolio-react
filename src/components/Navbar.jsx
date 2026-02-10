import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#articles", label: "Articles" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 py-6">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="px-5 py-2 rounded-full bg-black/70 text-white font-bold text-lg tracking-wide hover:bg-black transition"
        >
          Shaukat Korai
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex flex-1 justify-center gap-4">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="px-5 py-2 rounded-full text-white font-medium transition-all duration-300 hover:bg-black/70"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Right-Side Sliding Menu */}
      <div
  className={`fixed top-0 right-0 w-64 bg-black/90 shadow-lg transform transition-transform duration-300 z-40
    ${isOpen ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col items-center pt-24 gap-4`}
>

        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className="w-11/12 text-center px-5 py-2 rounded-full text-white font-medium hover:bg-black/70 transition"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Optional overlay when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}
