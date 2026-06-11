import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Experience } from "./pages/Experience";
import { Education } from "./pages/Education";
import { Philosophy } from "./pages/Philosophy";
import { UdonFi } from "./pages/projects/UdonFi";
import { VioTune } from "./pages/projects/VioTune";
import { LaBouffe } from "./pages/projects/LaBouffe";
import { LanguageProvider } from "./context/LanguageContext";

// ScrollToTop helper component
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col justify-between bg-background text-on-background selection:bg-primary-fixed-dim selection:text-on-primary-fixed transition-colors duration-300">
          <Navbar />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/udonfi" element={<UdonFi />} />
              <Route path="/projects/viotune" element={<VioTune />} />
              <Route path="/projects/labouffe" element={<LaBouffe />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
