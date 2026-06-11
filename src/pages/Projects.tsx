import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { UdonLogo } from "../components/UdonLogo";
import { 
  Terminal, Cpu, Wallet, ArrowRight,
  Sparkles, Cloud
} from "lucide-react";

interface ProjectData {
  id: string;
  category: "blockchain" | "ai" | "serverless";
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  link: string;
  icon: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "blockchain" | "ai" | "serverless">("all");

  const projects: ProjectData[] = [
    {
      id: "udonfi",
      category: "blockchain",
      title: "UdonFi",
      badge: "DeFi Infrastructure",
      description: "High-performance decentralized lending protocol on Stellar Soroban. Engineered for extreme capital efficiency using u128 bitmap packing and 2-step liquidation flows.",
      highlights: [
        "u128 Bitmap packing logic (95% storage fee reduction).",
        "Decentralized 2-Step Liquidation flow bypassing CPU limits.",
        "Kinked APY interest model for liquidity risk governance."
      ],
      tech: ["Rust", "Soroban", "Node.js", "React 19"],
      image: "/Infor/udonFI/HomeUdonFi.png",
      link: "/projects/udonfi",
      icon: <UdonLogo showNetwork={false} className="!p-0 !bg-transparent border-none scale-50 -ml-4" />
    },
    {
      id: "viotune",
      category: "ai",
      title: "VioTune",
      badge: "Audio ML",
      description: "AI-powered audio signal processing for real-time instrument correction and personalized music recommendations.",
      highlights: [
        "Hybrid collaborative filtering (SVD) and content filtering (KNN).",
        "Sub-150ms prediction latency with Redis caching."
      ],
      tech: ["PyTorch", "Python", "FastAPI", "Redis"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYvKH2rcPHxlnDbGLyz0CGzXL6bvU2O7btNah8XfwTWadul--CAcoZCv-3xiX7l9MQgxT1Jq0aKCuc5iG_bkNfJjIge8E9elX4OOAK-7AeVay_2kGIS8UqM7gdXbjd9-e2QQQIqtPGlb5gJKLDPQg-T6NsaT5bTF_gnTdDV7o4Qws9fxuQKObGR1_uiUzO1zZQLZlGQqXcsE-B-5rxfkB6bosq1antkDoOM3O6VM01lHY0188ZOH_fHq--WzoTNFLRm0EcQeXjb6Nx",
      link: "/projects/viotune",
      icon: <Cpu className="w-5 h-5 text-primary" />
    },
    {
      id: "labouffe",
      category: "serverless",
      title: "LaBouffe",
      badge: "Cloud Native",
      description: "Hyper-local logistics engine optimizing last-mile delivery via serverless edge workers.",
      highlights: [
        "Distributed reactive state machine for multi-party tracking.",
        "Idempotent payment flows using Stripe and Firestore transactions."
      ],
      tech: ["React Native", "Firebase", "Stripe API", "Sentry"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwQzKzTZUmuIBnLZlaRfHlYCVhE8Rxn_smfEwWfUZoLouwiYvMEH4Wdu64vqyhiQz1BXlM94VDW3ID95cRJoGNGqpYC3W2hx7MopboChaw5LygVV4j_EikRqOojVwebzOyJIPJylhKyVkyZ0OffqEHDn-QlxmI-xZH6HpQCezNYWc4lWqZ7ZuxfFhyI1gnSOHpAfh3D87qMEdCu_SXBQiS4oE8olIj9_2LcccxLgDKDVy0fd79vkxaTT_WZBMiXYM_AuD4CpR4XlWQ",
      link: "/projects/labouffe",
      icon: <Cloud className="w-5 h-5 text-primary" />
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Header */}
      <header className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-display text-5xl font-bold mb-4"
        >
          Engineering Systems
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          A selection of architectural explorations in distributed systems, financial infrastructure, and machine learning pipelines.
        </motion.p>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-outline-variant/50 pb-6">
        {(["all", "blockchain", "ai", "serverless"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-label-mono text-caption transition-all font-bold ${
              filter === cat
                ? "bg-primary text-on-primary shadow-sm"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`project-card ${
                p.id === "udonfi" ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-6"
              }`}
            >
              <BentoCard className="h-full flex flex-col justify-between">
                <div>
                  {/* Image Header */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 opacity-40 group-hover:opacity-10 transition-opacity" />
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      {p.icon}
                      <span className="font-label-mono text-caption text-primary uppercase tracking-wider font-bold">
                        {p.badge}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                      {p.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h3 className="font-label-mono text-caption text-outline uppercase tracking-widest font-bold">
                        Engineering Highlights
                      </h3>
                      <ul className="space-y-2">
                        {p.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                            <span className="text-body-md text-on-surface-variant">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map((t) => (
                      <span key={t} className="bg-surface-variant border border-outline-variant px-3 py-1 rounded font-label-mono text-caption">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={p.link}
                    className="inline-flex items-center gap-2 font-label-mono text-label-mono text-primary font-bold hover:gap-4 transition-all"
                  >
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>
          ))}

          {/* System Exploration Placeholder (Spans 4 columns or sits next to projects) */}
          {filter === "all" && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-12 lg:col-span-4"
            >
              <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px] hover:bg-surface-container-low transition-colors duration-300">
                <Terminal className="text-outline w-12 h-12 mb-4" />
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface-variant mb-2">
                  System Exploration
                </h3>
                <p className="font-body-md text-body-md text-outline max-w-xs leading-relaxed">
                  Currently developing a distributed state-machine for low-latency trading execution.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-caption font-label-mono">
                  <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" /> In R&D Phase
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
