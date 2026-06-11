import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Sun, Moon, Languages, 
  Menu, X, Download, Globe 
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));
  const toggleLang = () => setLang(lang === "EN" ? "VI" : "EN");

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.experience"), path: "/experience" },
    { name: t("nav.education"), path: "/education" },
    { name: t("nav.philosophy"), path: "/philosophy" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full bg-surface/90 backdrop-blur-xl border border-outline-variant/60 shadow-lg shadow-black/5 dark:shadow-black/40 z-50 flex justify-between items-center px-8 py-3 transition-all duration-500">
      <Link 
        to="/" 
        className="font-headline-md text-headline-md font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2"
        onClick={() => setIsOpen(false)}
      >
        <span className="max-sm:hidden">Nguyen The Anh</span>
        <span className="sm:hidden text-primary">NTA</span>
      </Link>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex gap-6 items-center">
        <div className="flex gap-6 mr-4 border-r border-outline-variant/30 pr-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-label-mono text-[13px] hover:text-primary transition-colors py-1 ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary"
                    : "text-on-surface-variant"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Toggles Group */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all group"
            title={lang === "EN" ? "Switch to Vietnamese" : "Chuyển sang Tiếng Anh"}
          >
            <div className="relative">
              <Globe className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 text-[8px] font-bold bg-primary text-on-primary px-1 rounded-sm">
                {lang}
              </span>
            </div>
          </button>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary/10 text-on-surface-variant hover:text-primary transition-all"
            title={theme === "light" ? "Dark Mode" : "Light Mode"}
            aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
            aria-pressed={theme === "dark"}
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>

          <a
            href="https://drive.google.com/uc?export=download&id=1RgdhZxllueFuDsXPVMjNxhsveV4OKRj8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 bg-on-surface text-surface rounded-full text-[12px] font-label-mono font-bold hover:bg-primary hover:scale-[1.02] active:scale-95 transition-all shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            {lang === "EN" ? "CV" : "Tải CV"}
          </a>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-surface-container border border-outline-variant/30 text-on-surface"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-16 left-0 w-full bg-surface/98 backdrop-blur-2xl border border-outline-variant/30 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 md:hidden z-40 overflow-hidden"
          >
            {/* Background decorative blur */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-display text-2xl font-bold py-3 transition-all flex items-center justify-between ${
                      isActive ? "text-primary translate-x-2" : "text-on-surface-variant hover:text-on-surface"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            <div className="pt-6 border-t border-outline-variant/30 grid grid-cols-2 gap-4">
              <button
                onClick={toggleLang}
                className="flex flex-col items-center justify-center p-4 bg-surface-container rounded-2xl border border-outline-variant/20 hover:border-primary/40 transition-all group"
              >
                <Languages className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <span className="font-label-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  {lang === "EN" ? "English" : "Tiếng Việt"}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="flex flex-col items-center justify-center p-4 bg-surface-container rounded-2xl border border-outline-variant/20 hover:border-primary/40 transition-all group"
                aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
                aria-pressed={theme === "dark"}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <span className="font-label-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-6 h-6 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                    <span className="font-label-mono text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Light Mode</span>
                  </>
                )}
              </button>
            </div>

            <a
              href="https://drive.google.com/uc?export=download&id=1RgdhZxllueFuDsXPVMjNxhsveV4OKRj8"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 bg-primary text-on-primary rounded-2xl font-display font-bold hover:bg-primary-container transition-all shadow-lg shadow-primary/20"
              onClick={() => setIsOpen(false)}
            >
              <Download className="w-5 h-5" />
              {lang === "EN" ? "Download Resume" : "Tải CV Cá nhân"}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
