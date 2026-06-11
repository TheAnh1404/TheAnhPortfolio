import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant mt-section-gap">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-gutter">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-label-mono text-label-mono font-bold text-on-surface">
            Nguyen The Anh
          </div>
          <div className="font-label-mono text-caption text-on-surface-variant flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>© 2026 Nguyen The Anh • System v2.4.0 • All systems operational</span>
          </div>
        </div>
        <div className="flex gap-6">
          <a
            href="https://github.com/TheAnh1404"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-mono text-caption text-on-surface-variant hover:text-on-surface transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/theanh1404/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-mono text-caption text-on-surface-variant hover:text-on-surface transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-label-mono text-caption text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Source
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-label-mono text-caption text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Documentation
          </a>
        </div>
      </div>
    </footer>
  );
};
