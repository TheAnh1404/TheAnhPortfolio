import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { 
  ArrowRight, MapPin, GraduationCap, 
  Terminal, ShieldCheck, Cpu, 
  Database, Link2, Brain, Award 
} from "lucide-react";

const roles = [
  "Software Engineer",
  "Backend Developer",
  "Blockchain Developer",
  "AI Enthusiast"
];

export const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-8 flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant rounded-full w-fit">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
            <span className="font-label-mono text-caption text-on-surface-variant">
              Available for Q3 Internships
            </span>
          </div>
          
          <h1 className="font-display text-display text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Nguyen The Anh
          </h1>

          <div className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
            <span className="text-on-surface-variant font-medium">I am a</span>
            <div className="h-[1.5em] overflow-hidden relative w-64 inline-block align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 font-bold"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
            Software Engineering student at VKU focused on building resilient backend systems, secure blockchain protocols, and intelligent AI applications. Bridging the gap between robust architecture and data-driven intelligence.
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-caption">
              <MapPin className="w-4.5 h-4.5 text-primary" /> Da Nang, Vietnam
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-caption">
              <GraduationCap className="w-4.5 h-4.5 text-primary" /> VKU IT Student
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all hover:scale-[1.02] shadow-lg shadow-primary/10"
            >
              Explore Projects <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#/download-cv"
              onClick={(e) => {
                e.preventDefault();
                alert("Curriculum Vitae download initiated (Placeholder).");
              }}
              className="px-8 py-4 bg-surface border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-container-low transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-4 relative flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="w-full aspect-square bg-surface-container rounded-3xl overflow-hidden relative border border-outline-variant/30 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-secondary/5"></div>
            <div className="w-48 h-48 bg-white/40 backdrop-blur-md rounded-full border border-white/60 flex items-center justify-center animate-float shadow-lg">
              <Terminal className="text-primary w-24 h-24" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Metric Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {/* Large Focus Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between" delay={0.1}>
          <div>
            <h3 className="font-label-mono text-primary mb-6 uppercase tracking-widest text-caption font-bold">
              Core Focus
            </h3>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline-md text-headline-md text-on-surface font-semibold">Backend</span>
                  <span className="text-on-surface-variant font-label-mono font-bold">90%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline-md text-headline-md text-on-surface font-semibold">Blockchain</span>
                  <span className="text-on-surface-variant font-label-mono font-bold">75%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-secondary"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-headline-md text-headline-md text-on-surface font-semibold">AI Systems</span>
                  <span className="text-on-surface-variant font-label-mono font-bold">65%</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-tertiary"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-outline-variant/50 mt-8">
            <p className="font-body-md text-on-surface-variant italic leading-relaxed">
              "Architecture is about managing complexity while maintaining simplicity."
            </p>
          </div>
        </BentoCard>

        {/* Stats */}
        <BentoCard className="p-8 flex flex-col items-center justify-center text-center" delay={0.2}>
          <div className="text-display font-display text-primary text-5xl font-bold mb-2">03</div>
          <div className="font-label-mono text-caption uppercase text-on-surface-variant font-bold tracking-wide">
            Major Projects
          </div>
        </BentoCard>

        {/* Hackathon Champion */}
        <BentoCard className="p-8 bg-primary-container text-on-primary-container border border-primary/20 flex flex-col items-center justify-center text-center" delay={0.3}>
          <Award className="w-12 h-12 text-primary mb-3" />
          <div className="text-headline-md font-headline-md font-bold mb-1">Hackathon</div>
          <div className="font-label-mono text-caption uppercase opacity-80 font-bold tracking-wide">
            Champion
          </div>
        </BentoCard>

        {/* Training Cohort */}
        <BentoCard className="md:col-span-2 p-8 flex items-center gap-6" delay={0.4}>
          <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center shadow-inner flex-shrink-0">
            <Terminal className="text-primary w-8 h-8" />
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
              VKU ICPC Training Team
            </h4>
            <p className="font-caption text-on-surface-variant mt-1 leading-relaxed">
              Competitive programming, complexity analysis, and discrete algorithmic optimizations.
            </p>
          </div>
        </BentoCard>
      </section>

      {/* Engineering Domains */}
      <section className="mb-20">
        <div className="mb-12">
          <h2 className="font-display text-headline-lg text-3xl font-bold mb-2">Engineering Domains</h2>
          <p className="text-on-surface-variant max-w-xl">Deep technical expertise across the modern engineering stack.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Backend */}
          <BentoCard className="p-8 relative overflow-hidden group" delay={0.1}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <Database className="text-primary w-12 h-12 mb-6" />
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
              Backend Engineering
            </h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> REST & GraphQL APIs
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Auth & Security Protocols
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Scalable Database Design
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> System Architecture
              </li>
            </ul>
          </BentoCard>

          {/* Blockchain */}
          <BentoCard className="p-8 relative overflow-hidden group" delay={0.2}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
            <Link2 className="text-secondary w-12 h-12 mb-6" />
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
              Blockchain
            </h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Stellar & Soroban
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Lending Protocols
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> DeFi Infrastructure
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Smart Contract Auditing
              </li>
            </ul>
          </BentoCard>

          {/* AI Systems */}
          <BentoCard className="p-8 relative overflow-hidden group" delay={0.3}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
            <Brain className="text-tertiary w-12 h-12 mb-6" />
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
              AI Systems
            </h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Recommendation Engines
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> ML (SVD/KNN Algorithms)
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> FastAPI Model Services
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Data Pipeline Engineering
              </li>
            </ul>
          </BentoCard>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-20">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-headline-lg text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-on-surface-variant">Production-grade solutions in Fintech and AI.</p>
          </div>
          <Link 
            to="/projects" 
            className="font-label-mono text-primary flex items-center gap-2 hover:underline font-bold"
          >
            View all projects <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {/* UdonFi */}
          <BentoCard className="md:col-span-2 flex flex-col md:flex-row group" delay={0.1}>
            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 transition-opacity opacity-60 group-hover:opacity-20" />
              <img 
                alt="UdonFi" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD08zdnZLLS0nR1gI6vyNEjgbCpzBqPL9qhfCNIZJELrRDS6FzVShvIRzdZ44K5vhB97O38k5X6eh41usE_cubbB5gVGIwoMA9CVcHRDFyY3aUc1MnmJpNvfkXyguwAWuxeugZit8EF0Df-oBrtQm3Fnrp0jvm-Ux0WDIUZsAo0A52x188upXddMwj8tkIWvbTBC2L57NOhcOsUT3F1RQ7qE_ZEuKORMyFW3-UG9blPbH5xh6hLdBtTh7p70MePZyRfJU0jv62kJgKI"
              />
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <div className="flex gap-2 mb-6 flex-wrap">
                <span className="px-3 py-1 bg-surface-container text-caption font-label-mono rounded-full font-bold">Soroban</span>
                <span className="px-3 py-1 bg-surface-container text-caption font-label-mono rounded-full font-bold">Stellar</span>
                <span className="px-3 py-1 bg-surface-container text-caption font-label-mono rounded-full font-bold">DeFi</span>
              </div>
              <h3 className="font-display text-headline-lg text-3xl font-bold mb-4">UdonFi</h3>
              <p className="text-on-surface-variant mb-8 font-body-md leading-relaxed">
                A decentralized lending protocol built on the Stellar Network utilizing Soroban smart contracts. Optimized for low-latency transactions and high capital efficiency.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/projects/udonfi"
                  className="px-6 py-3 border border-outline-variant bg-surface text-on-surface font-label-mono text-caption rounded-xl hover:bg-surface-container transition-colors font-bold"
                >
                  View Case Study
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* VioTune */}
          <BentoCard className="flex flex-col group" delay={0.2}>
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply z-10 transition-opacity opacity-60 group-hover:opacity-20" />
              <img 
                alt="VioTune" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl7XuUjKPdaRt_HO0PHROHeAOToitjfU-l5zOnAFlF2MTZ6pkf19l7gljMQJkl1Z3swTvrzSyi_sAETk44F7xSwV42_C5tjUXj-mW58fGnLrmjM3jAoBrHIuY16sH0JdkgU1jF3g6MXrjMd_zjzaNA00FfpRWE-wLFrm5QZVP_APbPxjN9Oi9CEP3i2rAJKVq85okjbMiRF5_vrzivzIFp8m0Q-fVkWcrT2pTDj4dRYv9UZ3TPqSYg8aR4ClfTrdrVw0HxYRwfvDmp"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">VioTune</h3>
                <p className="text-on-surface-variant mb-6 text-body-md leading-relaxed">
                  AI-powered music recommendation engine utilizing collaborative filtering and content-based analysis for personalized discovery.
                </p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 bg-surface-container-low border border-outline-variant text-[12px] font-label-mono rounded">FastAPI</span>
                  <span className="px-2 py-0.5 bg-surface-container-low border border-outline-variant text-[12px] font-label-mono rounded">SVD</span>
                </div>
                <Link to="/projects/viotune" className="text-primary font-label-mono text-caption hover:underline font-bold">
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* LaBouffe */}
          <BentoCard className="flex flex-col group" delay={0.3}>
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-tertiary/10 mix-blend-multiply z-10 transition-opacity opacity-60 group-hover:opacity-20" />
              <img 
                alt="LaBouffe" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN4Iy37xI77VyWQMlfkQTUY7qJ_zNDIKdioekMvuodXHsTkWimAy9lkBcLyxFQAM6d-hUqCciAVfKX_DwoiZF-ccRq9AIBBsodirsVwOx5RP-upL69pPuUnavHGeJjD8kRpqVNoRR2z90FDWDDesGmGzGBVwFRF1wcMHlRU2hDZNiG5L4ct35VYgY94W6jqQ2G-9WcykGgcwqgOsiyTAREAc_Gm8JK1d4o09lmEbhd0YGcDiEkIwSVhQWmhR6lc_cZXVTEMaTIibKW"
              />
            </div>
            <div className="p-8 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">LaBouffe</h3>
                <p className="text-on-surface-variant mb-6 text-body-md leading-relaxed">
                  Full-stack restaurant management and ordering ecosystem designed for high-concurrency peak hours and seamless delivery tracking.
                </p>
              </div>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 bg-surface-container-low border border-outline-variant text-[12px] font-label-mono rounded">React Native</span>
                  <span className="px-2 py-0.5 bg-surface-container-low border border-outline-variant text-[12px] font-label-mono rounded">Firebase</span>
                </div>
                <Link to="/projects/labouffe" className="text-primary font-label-mono text-caption hover:underline font-bold">
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="mb-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-headline-lg text-3xl font-bold mb-4">Technology Ecosystem</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300 shadow-sm">
              <Terminal className="text-on-surface-variant group-hover:text-primary w-8 h-8" />
            </div>
            <span className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">Languages</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300 shadow-sm">
              <Cpu className="text-on-surface-variant group-hover:text-primary w-8 h-8" />
            </div>
            <span className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">Frontend</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300 shadow-sm">
              <Database className="text-on-surface-variant group-hover:text-primary w-8 h-8" />
            </div>
            <span className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">Backend</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300 shadow-sm">
              <ShieldCheck className="text-on-surface-variant group-hover:text-primary w-8 h-8" />
            </div>
            <span className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">Database</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300 shadow-sm">
              <Link2 className="text-on-surface-variant group-hover:text-primary w-8 h-8" />
            </div>
            <span className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">Blockchain</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-16 h-16 rounded-2xl bg-white border border-outline-variant flex items-center justify-center mb-4 group-hover:border-primary transition-colors duration-300 shadow-sm">
              <Brain className="text-on-surface-variant group-hover:text-primary w-8 h-8" />
            </div>
            <span className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">Tools</span>
          </div>
        </div>
      </section>
    </div>
  );
};
