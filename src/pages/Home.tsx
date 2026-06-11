import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { TechMarquee } from "../components/TechMarquee";
import { UdonLogo } from "../components/UdonLogo";
import AvatarImg from "../assets/theanh_avt.jpg";
import {
  ArrowRight, MapPin, GraduationCap,
  Terminal, Cpu, Database, Link2,
  Brain, Award
} from "lucide-react";

const roles = [
  "Software Engineer",
  "Fullstack Developer",
  "Blockchain Developer",
  "AI Enthusiast"
];

const techCategories = [
  {
    title: "Languages",
    subtitle: "Core Programming & Logic",
    description: "Foundational languages for system logic, blockchain contracts, and intelligent platforms.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl p-4 font-mono text-[9px] text-on-surface/80 border border-outline-variant/30 overflow-hidden relative shadow-inner">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2 mb-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-[8px] text-on-surface-variant/60 font-label-mono">Algorithm.cpp</span>
        </div>
        <div className="space-y-1 select-none text-left">
          <div className="text-on-surface-variant/40">// ICPC Graph Path Optimization</div>
          <div>
            <span className="text-primary font-bold">int</span> <span className="text-secondary font-bold">find_min_path</span>(<span className="text-orange-600">int</span> u, <span className="text-orange-600">int</span> v) {"{"}
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">if</span> (u == v) <span className="text-primary font-bold">return</span> <span className="text-teal-600">0</span>;
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">if</span> (dp[u][v] != -<span className="text-teal-600">1</span>) <span className="text-primary font-bold">return</span> dp[u][v];
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">int</span> ans = <span className="text-violet-600 font-bold">INF</span>;
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">return</span> dp[u][v] = ans;
          </div>
          <div>{"}"}</div>
        </div>
        <div className="absolute bottom-2 right-3 bg-teal-500/10 text-teal-700 border border-teal-500/20 px-2 py-0.5 rounded text-[8px] font-label-mono font-bold">
          C++ / TypeScript / Rust / Python
        </div>
      </div>
    ),
    skills: [
      { name: "TypeScript/JavaScript", tooltip: "Primary language for high-fidelity frontends, NestJS backends, and test suites." },
      { name: "Rust (Smart Contracts)", tooltip: "Used to write smart contracts on Stellar Soroban." },
      { name: "Python (AI/ML)", tooltip: "Used for AI recommendation models and data pipelines." },
      { name: "C++ (Algorithms)", tooltip: "Used for VKU ICPC competitive programming training." }
    ]
  },
  {
    title: "Backend",
    subtitle: "Service Architecture",
    description: "Designing high-throughput microservices, REST & GraphQL endpoints, and routing logic.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="grid-pattern-backend" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant/15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-backend)" />

          <path d="M 50 65 H 135" stroke="currentColor" className="text-outline-variant/40" strokeWidth="2" />
          <path d="M 175 65 H 260" stroke="currentColor" className="text-outline-variant/40" strokeWidth="2" />

          <motion.path
            d="M 50 65 H 135"
            stroke="#004ac6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 175 65 H 260"
            stroke="#004ac6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <g transform="translate(10, 40)">
            <rect width="40" height="50" rx="6" fill="currentColor" className="text-primary/10" stroke="#004ac6" strokeWidth="1" />
            <text x="20" y="24" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">CLIENT</text>
            <text x="20" y="38" textAnchor="middle" className="fill-primary font-bold text-[6px] font-label-mono">REQUEST</text>
          </g>

          <g transform="translate(135, 30)">
            <rect width="40" height="70" rx="6" fill="currentColor" className="text-secondary/10" stroke="#4b41e1" strokeWidth="1" />
            <text x="20" y="24" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">NestJS</text>
            <text x="20" y="42" textAnchor="middle" className="fill-secondary font-bold text-[6px] font-label-mono">FastAPI</text>
            <text x="20" y="58" textAnchor="middle" className="fill-emerald-600 font-bold text-[6px] font-label-mono">APIs</text>
          </g>

          <g transform="translate(260, 40)">
            <rect width="50" height="50" rx="6" fill="currentColor" className="text-teal-500/10" stroke="#0f766e" strokeWidth="1" />
            <text x="25" y="24" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">SERVICES</text>
            <text x="25" y="38" textAnchor="middle" className="fill-teal-700 font-bold text-[6px] font-label-mono">GRAPHQL</text>
          </g>
        </svg>
      </div>
    ),
    skills: [
      { name: "NestJS", tooltip: "Used to build modular, enterprise backends and microservices." },
      { name: "Express.js", tooltip: "Used for lightweight Node.js API services." },
      { name: "FastAPI", tooltip: "High-performance Python API framework for ML inference model serving." },
      { name: "Microservices", tooltip: "Architecting modular, independent systems with clear data contracts." },
      { name: "RESTful & GraphQL API Design", tooltip: "Designing clean, secure, and well-documented API contracts." }
    ]
  },
  {
    title: "Web3",
    subtitle: "Decentralized Finance",
    description: "Developing gas-efficient decentralized smart contracts, token economies, and secure execution flows.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="grid-pattern-web3" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant/15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-web3)" />

          <g transform="translate(45, 65)">
            <polygon points="0,-20 18,-10 18,10 0,20 -18,10 -18,-10" fill="currentColor" className="text-orange-500/10" stroke="#c2410c" strokeWidth="1" />
            <text x="0" y="3" textAnchor="middle" className="fill-orange-700 font-bold text-[6px] font-label-mono">STELLAR</text>
          </g>

          <g transform="translate(145, 65)">
            <polygon points="0,-25 22,-12 22,12 0,25 -22,12 -22,-12" fill="currentColor" className="text-secondary/10" stroke="#4b41e1" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" className="fill-secondary font-black text-[7px] font-label-mono">SOROBAN</text>
          </g>

          <g transform="translate(245, 65)">
            <polygon points="0,-20 18,-10 18,10 0,20 -18,10 -18,-10" fill="currentColor" className="text-orange-500/10" stroke="#c2410c" strokeWidth="1" />
            <text x="0" y="3" textAnchor="middle" className="fill-orange-700 font-bold text-[6px] font-label-mono">DEFI</text>
          </g>

          <path d="M 65 65 H 121" stroke="currentColor" className="text-outline-variant/40" strokeWidth="1.5" />
          <path d="M 169 65 H 225" stroke="currentColor" className="text-outline-variant/40" strokeWidth="1.5" />

          <motion.circle
            r="2.5"
            fill="#4b41e1"
            animate={{ cx: [65, 121] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="2.5"
            fill="#c2410c"
            animate={{ cx: [169, 225] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </svg>
      </div>
    ),
    skills: [
      { name: "Stellar Soroban", tooltip: "WASM-based smart contract execution platform on the Stellar network." },
      { name: "DeFi Protocol Design", tooltip: "Designing collateralized lending, borrow rate curves, and liquidations." },
      { name: "Smart Contract Security & Optimization", tooltip: "Enforcing safety checks and state footprint optimizations (e.g. u128 bitmap packing)." }
    ]
  },
  {
    title: "Databases",
    subtitle: "Data Management Layers",
    description: "Managing relational schemas, distributed NoSQL storage, and real-time syncing architectures.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(60, 50)">
            <ellipse cx="0" cy="-12" rx="18" ry="5" fill="#0f766e" fillOpacity="0.2" stroke="#0f766e" strokeWidth="1" />
            <path d="M -18 -12 V 12 A 18 5 0 0 0 18 12 V -12" fill="#0f766e" fillOpacity="0.1" stroke="#0f766e" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke="#0f766e" strokeWidth="1" strokeDasharray="2 2" />
            <ellipse cx="0" cy="12" rx="18" ry="5" fill="none" stroke="#0f766e" strokeWidth="1" />
            <text x="0" y="28" textAnchor="middle" className="fill-on-surface font-label-mono text-[7px] font-bold">POSTGRESQL</text>
          </g>

          <g transform="translate(170, 50)">
            <ellipse cx="0" cy="-12" rx="18" ry="5" fill="#004ac6" fillOpacity="0.2" stroke="#004ac6" strokeWidth="1" />
            <path d="M -18 -12 V 12 A 18 5 0 0 0 18 12 V -12" fill="#004ac6" fillOpacity="0.1" stroke="#004ac6" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke="#004ac6" strokeWidth="1" strokeDasharray="2 2" />
            <ellipse cx="0" cy="12" rx="18" ry="5" fill="none" stroke="#004ac6" strokeWidth="1" />
            <text x="0" y="28" textAnchor="middle" className="fill-on-surface font-label-mono text-[7px] font-bold">MONGODB</text>
          </g>

          <g transform="translate(280, 50)">
            <ellipse cx="0" cy="-12" rx="18" ry="5" fill="#c2410c" fillOpacity="0.2" stroke="#c2410c" strokeWidth="1" />
            <path d="M -18 -12 V 12 A 18 5 0 0 0 18 12 V -12" fill="#c2410c" fillOpacity="0.1" stroke="#c2410c" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke="#c2410c" strokeWidth="1" strokeDasharray="2 2" />
            <ellipse cx="0" cy="12" rx="18" ry="5" fill="none" stroke="#c2410c" strokeWidth="1" />
            <text x="0" y="28" textAnchor="middle" className="fill-on-surface font-label-mono text-[7px] font-bold">FIREBASE</text>
          </g>
        </svg>
      </div>
    ),
    skills: [
      { name: "PostgreSQL (Architecture)", tooltip: "Relational database schema design, transaction indexing, and queries." },
      { name: "MongoDB", tooltip: "NoSQL document storage for horizontal scaling and flex schemas." },
      { name: "Firebase Realtime/Firestore", tooltip: "Cloud-hosted NoSQL databases for real-time document syncing." }
    ]
  },
  {
    title: "DevOps & Tools",
    subtitle: "Deployment & Integrations",
    description: "Managing container runtimes, automatic checks, payments gateway, and logging.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="50" y="25" width="240" height="80" rx="40" stroke="currentColor" className="text-outline-variant/30" strokeWidth="3" fill="none" />

          <motion.rect
            x="50" y="25" width="240" height="80" rx="40"
            stroke="#be123c"
            strokeWidth="3"
            fill="none"
            strokeDasharray="30 170"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <g transform="translate(50, 65)">
            <circle r="12" fill="white" stroke="#be123c" strokeWidth="1.5" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">BUILD</text>
          </g>

          <g transform="translate(170, 25)">
            <circle r="12" fill="white" stroke="#475569" strokeWidth="1" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">TEST</text>
          </g>

          <g transform="translate(290, 65)">
            <circle r="12" fill="white" stroke="#475569" strokeWidth="1" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">DEPLOY</text>
          </g>

          <g transform="translate(170, 105)">
            <circle r="12" fill="white" stroke="#0f766e" strokeWidth="1" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">MONITOR</text>
          </g>
        </svg>
      </div>
    ),
    skills: [
      { name: "Docker", tooltip: "Packaging applications and microservices into consistent, isolated container runtimes." },
      { name: "Git/GitHub", tooltip: "Version control and collaborative workflow automation." },
      { name: "Postman", tooltip: "API client for designing, building, and testing HTTP requests." },
      { name: "CI/CD", tooltip: "Automated testing, lint checking, and preview deployment pipelines." },
      { name: "Stripe", tooltip: "Integrating online payment portals and secure webhooks." },
      { name: "Sentry", tooltip: "Real-time application error tracking and performance profiling." }
    ]
  }
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
            Software Engineering student at VKU focused on building comprehensive fullstack systems, secure blockchain protocols, and intelligent AI applications. Bridging the gap between robust architecture and data-driven intelligence.
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
              href="https://drive.google.com/uc?export=download&id=1RgdhZxllueFuDsXPVMjNxhsveV4OKRj8"
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
          <div className="w-full aspect-square bg-surface-container rounded-3xl overflow-hidden relative border border-outline-variant/30 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={AvatarImg}
              alt="Nguyen The Anh"
              className="w-full h-full object-cover animate-float shadow-xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Decorative element */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg z-20">
              <Terminal className="text-white w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Infinite Tech Marquee */}
      <TechMarquee />

      {/* Personal Core Focus Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {/* Fullstack Ecosystem Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between overflow-hidden relative group" delay={0.1}>
          <div className="relative z-10">
            <h3 className="font-label-mono text-primary mb-6 uppercase tracking-widest text-caption font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Fullstack Ecosystem
            </h3>
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-headline-lg text-3xl font-bold text-on-surface">System Architecture</h2>
              <p className="text-on-surface-variant font-body-md max-sm:text-sm">Bridging high-fidelity frontends with resilient backend infrastructures and real-time data pipelines.</p>
            </div>
          </div>

          {/* Fullstack Animation Area */}
          <div className="h-64 relative flex items-center justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-md">
              <rect x="40" y="70" width="60" height="60" rx="12" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="2" />
              <text x="70" y="105" textAnchor="middle" className="fill-primary font-bold text-[10px] font-label-mono">CLIENT</text>
              <rect x="300" y="70" width="60" height="60" rx="12" fill="currentColor" className="text-secondary/10" stroke="currentColor" strokeWidth="2" />
              <text x="330" y="105" textAnchor="middle" className="fill-secondary font-bold text-[10px] font-label-mono">SERVER</text>
              <path d="M110 100 H290" stroke="currentColor" className="text-outline-variant" strokeWidth="2" strokeDasharray="4 4" />
              <motion.circle r="4" fill="#004ac6" initial={{ cx: 110, cy: 100 }} animate={{ cx: [110, 290, 110] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.circle r="4" fill="#004ac6" className="opacity-20" initial={{ cx: 110, cy: 100 }} animate={{ cx: [110, 290, 110], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.circle cx="330" cy="100" r="40" stroke="#4b41e1" strokeWidth="1" className="opacity-20" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.2, opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </svg>
          </div>

          <div className="pt-8 border-t border-outline-variant/50 flex justify-between items-center relative z-10">
            <div className="flex gap-2">
              <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">React</span>
              <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">NestJS</span>
              <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">PostgreSQL</span>
            </div>
            <p className="font-label-mono text-[10px] text-primary font-bold">LIVE SYSTEMS</p>
          </div>
        </BentoCard>

        {/* Blockchain Security Card */}
        <BentoCard className="p-8 flex flex-col justify-between group overflow-hidden" delay={0.2}>
          <div>
            <h3 className="font-label-mono text-secondary mb-4 uppercase tracking-widest text-[11px] font-bold">Web3 Protocol</h3>
            <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-1">Smart Contract</h4>
            <p className="text-caption text-on-surface-variant">Soroban/Rust Security</p>
          </div>
          <div className="h-32 relative flex items-center justify-center my-4">
            <div className="relative">
              <svg width="80" height="92" viewBox="0 0 80 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary drop-shadow-lg">
                <path d="M40 2L74.641 22V62L40 82L5.35898 62V22L40 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                <motion.path d="M40 2L74.641 22V62L40 82L5.35898 62V22L40 2Z" stroke="white" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              </svg>
              <motion.div className="absolute top-0 left-[-10px] right-[-10px] h-[2px] bg-secondary shadow-[0_0_15px_rgba(75,65,225,0.8)] z-20" animate={{ top: [0, 92, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </div>
          <div className="bg-secondary/5 rounded-lg p-3 border border-secondary/10">
            <p className="font-label-mono text-[10px] text-secondary font-bold text-center tracking-tighter uppercase">Audit Status: SECURE</p>
          </div>
        </BentoCard>

        {/* Mini Stellar Hackathon Champion Card */}
        <Link to="/projects/udonfi" className="block cursor-pointer h-full">
          <BentoCard className="p-8 bg-primary text-on-primary flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-primary-container/30 h-full" delay={0.3}>
            <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
            <div className="relative z-10 text-center">
              <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                <Award className="w-14 h-14 text-primary-fixed mb-3 mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </motion.div>
              <div className="font-label-mono text-[11px] uppercase font-bold tracking-[0.2em] text-primary-fixed mb-1">Champion</div>
              <div className="text-display font-display text-3xl font-black mb-1 tracking-tighter leading-tight">MINI STELLAR<br />HACKATHON</div>
              <div className="mt-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-block">
                <p className="font-label-mono text-[9px] uppercase font-bold text-white tracking-widest">Global #1 Winner</p>
              </div>
            </div>
          </BentoCard>
        </Link>

        {/* Algorithmic Logic Card */}
        <BentoCard className="md:col-span-2 p-8 flex items-center gap-8 group" delay={0.4}>
          <div className="w-32 h-32 bg-surface-container rounded-2xl flex-shrink-0 relative overflow-hidden flex items-center justify-center border border-outline-variant/30">
            <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-60">
              <circle cx="20" cy="20" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="80" cy="30" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="50" cy="80" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="70" cy="70" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="25" cy="75" r="4" fill="currentColor" className="text-tertiary" />
              <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="20" y1="20" x2="25" y2="75" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="80" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="25" y1="75" x2="50" y2="80" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="50" y1="80" x2="70" y2="70" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <motion.path d="M20 20 L80 30 L70 70 L50 80" stroke="#943700" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} />
            </svg>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Algorithmic Core</h4>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">Applying advanced discrete optimizations and complex problem-solving strategies to real-world engineering bottlenecks.</p>
            <div className="flex gap-4 mt-4 font-label-mono text-[10px] font-bold text-tertiary">
              <span>DP</span> <span>GRAPH THEORY</span> <span>CONCURRENCY</span>
            </div>
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
          {/* Fullstack */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.1}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    Fullstack Development
                  </h3>
                  <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-wider">End-to-End Solutions</span>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-body-md">
                Engineering comprehensive digital ecosystems from high-performance microservices to responsive, accessible user interfaces.
              </p>

              {/* Metric/Highlight Box */}
              <div className="mb-6 p-3 bg-surface-container rounded-lg border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant block mb-1">Key Focus</span>
                <p className="text-[12px] text-on-surface font-semibold">Production-grade system design & seamless frontend-backend integration.</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-blue-500/10 text-blue-700 border-blue-500/20 hover:scale-105 transition-transform">React 19</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-cyan-500/10 text-cyan-700 border-cyan-500/20 hover:scale-105 transition-transform">Tailwind 4</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-red-500/10 text-red-700 border-red-500/20 hover:scale-105 transition-transform">NestJS</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-teal-500/10 text-teal-700 border-teal-500/20 hover:scale-105 transition-transform">FastAPI</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-blue-600/10 text-blue-800 border-blue-600/20 hover:scale-105 transition-transform">PostgreSQL</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-sky-500/10 text-sky-700 border-sky-500/20 hover:scale-105 transition-transform">Vite 8</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-indigo-500/10 text-indigo-700 border-indigo-500/20 hover:scale-105 transition-transform">Docker</span>
              </div>
            </div>
          </BentoCard>

          {/* Blockchain */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.2}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <Link2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    Web3 & Blockchain
                  </h3>
                  <span className="font-label-mono text-[10px] text-secondary uppercase font-bold tracking-wider">Smart Contracts</span>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-body-md">
                Designing decentralized finance (DeFi) protocols, smart contract execution models, and auditing cryptography systems.
              </p>

              {/* Metric/Highlight Box */}
              <div className="mb-6 p-3 bg-surface-container rounded-lg border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant block mb-1">Hackathon Metric</span>
                <p className="text-[12px] text-on-surface font-semibold">Smart contract gas optimization & state bitmap packing.</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">Web3 Stack</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-orange-500/10 text-orange-700 border-orange-500/20 hover:scale-105 transition-transform">Rust</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-violet-500/10 text-violet-700 border-violet-500/20 hover:scale-105 transition-transform">Soroban</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-blue-500/10 text-blue-700 border-blue-500/20 hover:scale-105 transition-transform">Stellar</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-pink-500/10 text-pink-700 border-pink-500/20 hover:scale-105 transition-transform">DeFi Design</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-cyan-500/10 text-cyan-700 border-cyan-500/20 hover:scale-105 transition-transform">Security Auditing</span>
              </div>
            </div>
          </BentoCard>

          {/* AI Systems */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.3}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    AI Systems & Data
                  </h3>
                  <span className="font-label-mono text-[10px] text-tertiary uppercase font-bold tracking-wider">Machine Learning</span>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-body-md">
                Developing intelligent recommendation systems and high-throughput data intelligence pipelines with real-time inference.
              </p>

              {/* Metric/Highlight Box */}
              <div className="mb-6 p-3 bg-surface-container rounded-lg border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant block mb-1">Model Accuracy</span>
                <p className="text-[12px] text-on-surface font-semibold">ML validation pipelines built with 99.2% accuracy.</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">AI Stack</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-yellow-500/10 text-yellow-800 border-yellow-500/20 hover:scale-105 transition-transform">Python</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-emerald-500/10 text-emerald-700 border-emerald-500/20 hover:scale-105 transition-transform">SVD Collaborative</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-teal-500/10 text-teal-700 border-teal-500/20 hover:scale-105 transition-transform">KNN Analysis</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-indigo-500/10 text-indigo-700 border-indigo-500/20 hover:scale-105 transition-transform">ML Pipelines</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-cyan-500/10 text-cyan-700 border-cyan-500/20 hover:scale-105 transition-transform">FastAPI APIs</span>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 px-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] font-label-mono font-bold mb-4">
              <Award className="w-3 h-3" /> SELECTED WORK
            </div>
            <h2 className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 font-label-mono text-sm font-bold text-primary hover:text-primary-container transition-colors"
          >
            SEE ALL ARCHIVE
            <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* UdonFi - The Flagship Project */}
          <BentoCard className="md:col-span-12 flex flex-col lg:flex-row h-auto lg:h-[450px] group border-none !bg-surface-container-high overflow-hidden" delay={0.1}>
            <div className="lg:w-3/5 h-[300px] lg:h-auto overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 opacity-40" />
              <img
                alt="UdonFi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                src="/Infor/udonFI/HomeUdonFi.png"
              />
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                <UdonLogo className="!bg-white/90 backdrop-blur-md shadow-lg scale-90 origin-top-left border border-white/20 !rounded-2xl !py-3 !px-4 hover:scale-100 transition-transform" />
              </div>
            </div>
            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center relative bg-white lg:bg-transparent">
              <div className="mb-4">
                <span className="font-label-mono text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-2 block">1st Prize Winner • Stellar Hackathon</span>
                <h3 className="font-display text-4xl font-bold text-on-surface mb-4 leading-tight">UdonFi Protocol</h3>
              </div>
              <p className="text-on-surface-variant mb-8 font-body-md leading-relaxed">
                A high-performance lending protocol on Stellar Soroban. Optimized via u128 bitmap packing and 2-step liquidation flows to bypass VM constraints and minimize storage costs.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-3 py-1 bg-surface-container text-[11px] font-label-mono font-bold text-on-surface-variant rounded-md border border-outline-variant/30">SOROBAN</span>
                <span className="px-3 py-1 bg-surface-container text-[11px] font-label-mono font-bold text-on-surface-variant rounded-md border border-outline-variant/30">RUST</span>
                <span className="px-3 py-1 bg-surface-container text-[11px] font-label-mono font-bold text-on-surface-variant rounded-md border border-outline-variant/30">DEFI</span>
              </div>
              <Link
                to="/projects/udonfi"
                className="w-fit px-8 py-3 bg-on-surface text-surface rounded-xl font-bold flex items-center gap-3 hover:bg-primary transition-all group/btn"
              >
                Explore Case Study
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </BentoCard>

          {/* VioTune - Vertical Card */}
          <BentoCard className="md:col-span-6 flex flex-col group border-none !bg-surface-container-low" delay={0.2}>
            <div className="h-72 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                alt="VioTune"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                src="/Infor/Viotune/Cover.png"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white font-label-mono text-[10px] font-bold rounded-lg border border-white/10">
                  AI & MACHINE LEARNING
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-display text-2xl font-bold text-on-surface mb-3 group-hover:text-secondary transition-colors">VioTune AI</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body-md opacity-80">
                  Developing hybrid recommendation systems using SVD Matrix Factorization and KNN models. Bridging FastAPI backends with real-time inference for hyper-personalized discovery.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Cpu className="w-4 h-4 text-secondary" />
                  </div>
                </div>
                <Link to="/projects/viotune" className="font-label-mono text-xs font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2">
                  READ MORE <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* LaBouffe - Vertical Card */}
          <BentoCard className="md:col-span-6 flex flex-col group border-none !bg-surface-container-low" delay={0.3}>
            <div className="h-72 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                alt="LaBouffe"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                src="/Infor/Labouffe/Group 1.png"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white font-label-mono text-[10px] font-bold rounded-lg border border-white/10">
                  FULLSTACK ECOSYSTEM
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-display text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">LaBouffe Platform</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body-md opacity-80">
                  Architecting high-concurrency food delivery systems with real-time tracking and automated order management pipelines. Built for scale and reliability.
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Database className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Terminal className="w-4 h-4 text-tertiary" />
                  </div>
                </div>
                <Link to="/projects/labouffe" className="font-label-mono text-xs font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2">
                  READ MORE <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-headline-lg text-3xl font-bold mb-4">Technology Ecosystem</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm font-body-md">
            Deep technical core and architecture pillars compiled from real-world systems and competitive challenges. Hover over technologies to see where they are applied.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {techCategories.map((category, idx) => {
            const colSpan = idx < 3 ? "md:col-span-4" : "md:col-span-6";
            return (
              <BentoCard
                key={idx}
                className={`${colSpan} p-8 flex flex-col justify-between relative group/card border-none !bg-surface-container-low/70 hover:!bg-surface-container-low transition-all duration-500 overflow-hidden`}
                delay={0.1 * (idx + 1)}
              >
                <div className="mb-6">
                  <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-widest block mb-2">{category.subtitle}</span>
                  <h3 className="font-display text-2xl font-bold text-on-surface mb-3">{category.title}</h3>
                  <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mb-6">{category.description}</p>
                  {category.visual}
                </div>

                <div>
                  <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">Key Technologies</span>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="relative group/tooltip">
                        <span className="cursor-help px-3 py-1.5 text-xs font-label-mono font-bold rounded-lg border bg-surface text-on-surface-variant border-outline-variant/30 hover:border-primary hover:text-primary transition-all inline-block hover:scale-[1.03]">
                          {skill.name}
                        </span>
                        {/* Premium Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-surface-container-highest border border-outline text-[10px] text-on-surface font-sans rounded-xl opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-200 z-30 shadow-xl scale-95 group-hover/tooltip:scale-100 text-left">
                          <div className="font-bold font-label-mono text-primary mb-1 border-b border-outline-variant/30 pb-0.5">{skill.name}</div>
                          <div className="leading-relaxed text-[9px] text-on-surface-variant">{skill.tooltip}</div>
                          {/* Tooltip triangle */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 rotate-45 bg-surface-container-highest border-r border-b border-outline"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </section>
    </div>
  );
};
