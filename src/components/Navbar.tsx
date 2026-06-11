import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Philosophy & Future", path: "/philosophy" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full bg-surface/85 backdrop-blur-xl border border-outline-variant/30 shadow-sm z-50 flex justify-between items-center px-8 py-3">
      <Link to="/" className="font-headline-md text-headline-md font-bold text-on-surface">
        Nguyen The Anh
      </Link>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `font-label-mono text-label-mono hover:text-primary transition-colors py-1 ${
                isActive
                  ? "text-primary font-bold border-b-2 border-primary"
                  : "text-on-surface-variant"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
        <a
          href="https://drive.google.com/uc?export=download&id=1RgdhZxllueFuDsXPVMjNxhsveV4OKRj8"
          target="_blank"
          rel="noopener noreferrer"
          className="scale-95 active:scale-90 transition-transform px-5 py-2 bg-on-background text-surface rounded-full text-label-mono font-bold hover:bg-on-background/90"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden material-symbols-outlined text-on-surface text-2xl p-1"
        aria-label="Toggle menu"
      >
        {isOpen ? "close" : "menu"}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-surface/95 backdrop-blur-xl border border-outline-variant/30 rounded-3xl p-6 shadow-lg flex flex-col gap-4 md:hidden animate-float-short">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-label-mono text-label-mono py-2 hover:text-primary transition-colors ${
                  isActive ? "text-primary font-bold" : "text-on-surface-variant"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1RgdhZxllueFuDsXPVMjNxhsveV4OKRj8"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-3 bg-on-background text-surface rounded-full text-label-mono font-bold hover:bg-on-background/90 block mt-2"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};
