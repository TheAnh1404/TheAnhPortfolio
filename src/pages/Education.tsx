import React from "react";
import { motion } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { 
  GraduationCap, 
  Trophy, Code, Sparkles, School, 
  CheckCircle, MapPin, ArrowRight 
} from "lucide-react";
import { Link } from "react-router-dom";

export const Education: React.FC = () => {

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
      {/* Hero Title */}
      <section className="mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label-mono font-bold mb-4">
          <GraduationCap className="w-3.5 h-3.5" /> ACADEMIC FOUNDATION
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-display text-5xl md:text-6xl font-bold tracking-tight mb-4"
        >
          Education & <span className="text-primary italic">Academy</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          Deep theoretical foundations in computer science, system engineering, and competitive algorithmic optimization at Vietnam's premier digital technology university.
        </motion.p>
      </section>

      {/* Grid 1: Academic Institution & Faculty Info */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-20">
        {/* VKU University Card */}
        <BentoCard className="lg:col-span-8 p-8 flex flex-col justify-between relative overflow-hidden group" delay={0.1}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 flex-shrink-0 shadow-sm border border-outline-variant/20">
                  <img src="/Infor/Logo_school.png" alt="VKU Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-widest block">
                    Higher Education
                  </span>
                  <h3 className="font-display text-2xl font-bold mt-0.5 text-on-surface">
                    Vietnam - Korea University of ICT
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full text-[10px] font-label-mono font-bold text-on-surface-variant border border-outline-variant/30">
                <MapPin className="w-3 h-3 text-red-500" /> Da Nang, Vietnam
              </div>
            </div>
            
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
              Vietnam - Korea University of Information and Communication Technology (VKU) is a premier public university specializing in digital technology and innovation. Through a strategic partnership between "Vietnam" and "South Korea", VKU provides an elite academic environment for the next generation of global software engineers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
              <div className="p-4 bg-surface rounded-xl border border-outline-variant/40 hover:border-primary/20 transition-colors">
                <span className="font-label-mono text-[9px] uppercase font-bold text-primary block mb-1">Degree Program</span>
                <p className="text-sm font-semibold text-on-surface">Bachelor of Software Engineering</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5 font-label-mono">Sep 2024 — Present</p>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-outline-variant/40 hover:border-primary/20 transition-colors">
                <span className="font-label-mono text-[9px] uppercase font-bold text-primary block mb-1">Key Focus Areas</span>
                <p className="text-sm font-semibold text-on-surface">High-Performance Backend & AI</p>
                <p className="text-[11px] text-on-surface-variant mt-0.5 font-label-mono">Active Student Researcher</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-outline-variant/30 flex flex-wrap gap-4 text-xs font-label-mono text-on-surface-variant/80">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-primary" /> Joint Vietnam-Korea Partnership</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-primary" /> Top-Tier IT Faculty</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-primary" /> Advanced Software Engineering Track</span>
          </div>
        </BentoCard>

        {/* Faculty of Computer Science Card */}
        <BentoCard className="lg:col-span-4 p-8 flex flex-col justify-between relative overflow-hidden group" delay={0.2}>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl -mr-12 -mb-12 group-hover:bg-secondary/10 transition-colors duration-500"></div>
          <div>
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2 mb-6 group-hover:scale-105 transition-transform shadow-sm border border-outline-variant/20">
              <img src="/Infor/Logo_CS.png" alt="Faculty of CS Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-label-mono text-[10px] text-secondary uppercase font-bold tracking-widest block">
              Department
            </span>
            <h3 className="font-display text-xl font-bold mt-1 text-on-surface">
              Faculty of Computer Science
            </h3>
            <p className="font-label-mono text-[11px] text-secondary-container-outline font-bold mt-0.5 mb-4 uppercase">
            </p>
            
            <p className="font-body-md text-on-surface-variant text-[13px] leading-relaxed mb-6">
              The Faculty of Computer Science is the academic heart of VKU, fostering excellence in algorithmic logic, software architecture, and advanced computing systems. We dedicate to training elite engineers who will drive the global tech landscape.
            </p>
          </div>

          <div className="p-3 bg-secondary/5 rounded-lg border border-secondary/15">
            <span className="font-label-mono text-[9px] uppercase font-bold text-secondary block mb-1">Academic Core</span>
            <p className="text-[11px] text-on-surface font-semibold leading-relaxed">Focusing on competitive programming (ICPC), decentralized systems, and AI-driven architectures.</p>
          </div>
        </BentoCard>
      </section>

      {/* Timeline Section: Honors & Achievements */}
      <section className="mb-20">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-label-mono font-bold mb-4">
            <Trophy className="w-3.5 h-3.5" /> REWARDS & TIMELINE
          </div>
          <h2 className="font-display text-headline-lg text-3xl font-bold mb-2">Timeline of Honors & Achievements</h2>
          <p className="text-on-surface-variant max-w-xl text-sm font-body-md">
            Verified academic milestones and competitive developer achievements, strictly aligned with personal engineering records.
          </p>
        </div>

        <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[2px] before:bg-outline-variant/30">
          
          {/* Milestone 1: Stellar Mini Hackathon (FIRST PRIZE) - Highlighted */}
          <div className="relative pl-14 md:pl-20 group/milestone">
            {/* Timeline Marker */}
            <div className="absolute left-[13px] top-1.5 w-[22px] h-[22px] rounded-full bg-surface border-4 border-amber-500 shadow-md group-hover/milestone:scale-110 transition-transform z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></div>
            </div>

            <BentoCard className="p-8 border-none !bg-surface-container-high/40 group-hover/milestone:!bg-surface-container-high/60 transition-all duration-300 relative overflow-hidden" delay={0.1}>
              {/* Highlight Tag */}
              <div className="absolute top-4 right-4 bg-amber-500/10 text-amber-700 border border-amber-500/20 px-3 py-1 rounded-full text-[10px] font-label-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-500 animate-pulse" /> GLOBAL #1 CHAMPION
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Text details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-label-mono text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-500/5 px-2.5 py-1 rounded border border-amber-500/10">May 2026</span>
                    <span className="font-label-mono text-xs text-on-surface-variant">Stellar Developer Event</span>
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-on-surface leading-tight">
                    First Prize – Stellar Mini Hackathon: Building Assets
                  </h3>

                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Designed and engineered **UdonFi**, a decentralized collateralized lending protocol on Stellar Soroban. Bypassed the virtual machine's stack constraints and gas limitations by implementing a custom **u128 bitmap packing algorithm** for state storage and structuring a robust **two-step liquidation system** to optimize transaction throughput.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">Soroban Smart Contracts</span>
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">Rust Security</span>
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">DeFi Risk Models (LTV/Health Factor)</span>
                  </div>

                  <div className="pt-4">
                    <Link 
                      to="/projects/udonfi" 
                      className="inline-flex items-center gap-2 text-xs font-label-mono font-bold text-primary hover:text-primary-container transition-colors group/link"
                    >
                      EXPLORE UDONFI CASE STUDY 
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Award Image Showcase */}
                <div className="lg:col-span-5">
                  <div className="relative rounded-2xl overflow-hidden border border-outline-variant shadow-lg group/img bg-surface-container-lowest aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-70"></div>
                    <img 
                      src="/Infor/udonFI/firstPr_img.jpg" 
                      alt="Stellar Hackathon First Prize" 
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20 text-white select-none">
                      <div className="text-[10px] font-label-mono uppercase tracking-widest text-amber-400 font-bold">Award Ceremony Photo</div>
                      <h4 className="text-sm font-bold mt-0.5 drop-shadow">Stellar Mini Hackathon: Building Assets 2026</h4>
                    </div>
                  </div>
                </div>

              </div>
            </BentoCard>
          </div>

          {/* Milestone 2: VKU ICPC Training Team */}
          <div className="relative pl-14 md:pl-20 group/milestone">
            {/* Timeline Marker */}
            <div className="absolute left-[13px] top-1.5 w-[22px] h-[22px] rounded-full bg-surface border-4 border-emerald-500 shadow-md group-hover/milestone:scale-110 transition-transform z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            </div>

            <BentoCard className="p-8 border-none !bg-surface-container-low/50 group-hover/milestone:!bg-surface-container-low/80 transition-all duration-300" delay={0.2}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Details */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-label-mono text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/10">2024 — Present</span>
                    <span className="font-label-mono text-xs text-on-surface-variant">Competitive Programming</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-on-surface leading-tight">
                    VKU ICPC Training Team Member
                  </h3>

                  <p className="font-body-md text-on-surface-variant leading-relaxed">
                    Representing the university in national-level algorithmic contests (ICPC Vietnam). Actively practicing and specializing in advanced data structures, complex dynamic programming, graph theory, and discrete optimization models.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">C++ (Algorithms)</span>
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">Graph Optimization</span>
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">Dynamic Programming (DP)</span>
                    <span className="px-3 py-1 bg-surface text-xs font-label-mono font-bold text-on-surface-variant rounded-lg border border-outline-variant/30">Complexity Reductions</span>
                  </div>
                </div>

                {/* Algorithmic Diagram Widget */}
                <div className="lg:col-span-4">
                  <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-4 font-mono text-[10px] text-on-surface-variant relative overflow-hidden select-none">
                    <div className="text-[9px] uppercase tracking-wider text-emerald-600 font-bold border-b border-outline-variant/20 pb-2 mb-3 font-label-mono flex justify-between items-center">
                      <span>ICPC Graph Optimizer</span>
                      <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700">Dijkstra Node</span>
                    </div>
                    {/* SVG Node Map */}
                    <div className="h-28 w-full flex items-center justify-center relative">
                      <svg width="180" height="100" viewBox="0 0 180 100" className="opacity-80">
                        {/* Lines */}
                        <line x1="30" y1="50" x2="80" y2="20" stroke="currentColor" className="text-outline-variant" strokeWidth="1.5" />
                        <line x1="30" y1="50" x2="80" y2="80" stroke="currentColor" className="text-outline-variant" strokeWidth="1.5" />
                        <line x1="80" y1="20" x2="140" y2="50" stroke="currentColor" className="text-outline-variant" strokeWidth="1.5" />
                        <line x1="80" y1="80" x2="140" y2="50" stroke="currentColor" className="text-outline-variant" strokeWidth="1.5" />
                        <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" className="text-outline-variant" strokeWidth="1" strokeDasharray="2 2" />

                        {/* Animated Path */}
                        <motion.path 
                          d="M 30 50 L 80 20 L 140 50" 
                          stroke="#0f766e" 
                          strokeWidth="2.5" 
                          fill="none" 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Nodes */}
                        <circle cx="30" cy="50" r="8" fill="#e2e8f0" stroke="#475569" strokeWidth="2" />
                        <text x="30" y="53" textAnchor="middle" className="fill-slate-700 text-[8px] font-bold">S</text>

                        <circle cx="80" cy="20" r="8" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
                        <text x="80" y="23" textAnchor="middle" className="fill-teal-700 text-[8px] font-bold">A</text>

                        <circle cx="80" cy="80" r="8" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
                        <text x="80" y="83" textAnchor="middle" className="fill-slate-700 text-[8px] font-bold">B</text>

                        <circle cx="140" cy="50" r="8" fill="#ccfbf1" stroke="#0f766e" strokeWidth="2" />
                        <text x="140" y="53" textAnchor="middle" className="fill-teal-700 text-[8px] font-bold">T</text>

                        {/* Weights */}
                        <text x="50" y="32" className="fill-on-surface-variant font-bold text-[7px]">w=4</text>
                        <text x="50" y="72" className="fill-on-surface-variant font-bold text-[7px]">w=8</text>
                        <text x="115" y="32" className="fill-on-surface-variant font-bold text-[7px]">w=2</text>
                        <text x="115" y="72" className="fill-on-surface-variant font-bold text-[7px]">w=3</text>
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </BentoCard>
          </div>

          {/* Milestone 3: Young Informatics Competition */}
          <div className="relative pl-14 md:pl-20 group/milestone">
            {/* Timeline Marker */}
            <div className="absolute left-[13px] top-1.5 w-[22px] h-[22px] rounded-full bg-surface border-4 border-primary shadow-md group-hover/milestone:scale-110 transition-transform z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
            </div>

            <BentoCard className="p-6 border-none !bg-surface-container-low/50 group-hover/milestone:!bg-surface-container-low/80 transition-all duration-300" delay={0.3}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-label-mono text-[11px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded border border-primary/10">Dec 2022</span>
                    <span className="font-label-mono text-caption text-on-surface-variant">Quang Binh University</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    Encouragement Prize – Young Informatics Competition
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-[13px] leading-relaxed mt-2">
                    Honored at the Young Informatics Competition hosted by Quang Binh University for showcasing exceptional problem-solving and rapid debugging skills under competitive conditions.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Milestone 4: Informatics Excellent Student Competition Oct 2020 */}
          <div className="relative pl-14 md:pl-20 group/milestone">
            {/* Timeline Marker */}
            <div className="absolute left-[13px] top-1.5 w-[22px] h-[22px] rounded-full bg-surface border-4 border-secondary shadow-md group-hover/milestone:scale-110 transition-transform z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
            </div>

            <BentoCard className="p-6 border-none !bg-surface-container-low/50 group-hover/milestone:!bg-surface-container-low/80 transition-all duration-300" delay={0.4}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-label-mono text-[11px] font-bold text-secondary uppercase tracking-widest bg-secondary/5 px-2 py-0.5 rounded border border-secondary/10">Oct 2020</span>
                    <span className="font-label-mono text-caption text-on-surface-variant">Provincial Level</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    Second Prize – Informatics Excellent Student Competition
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-[13px] leading-relaxed mt-2">
                    Achieved Second Prize in the Provincial Informatics Examination for High School Students, demonstrating strong computational logic and algorithm implementation.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Milestone 5: Informatics Excellent Student Competition Jul 2020 */}
          <div className="relative pl-14 md:pl-20 group/milestone">
            {/* Timeline Marker */}
            <div className="absolute left-[13px] top-1.5 w-[22px] h-[22px] rounded-full bg-surface border-4 border-outline shadow-md group-hover/milestone:scale-110 transition-transform z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></div>
            </div>

            <BentoCard className="p-6 border-none !bg-surface-container-low/50 group-hover/milestone:!bg-surface-container-low/80 transition-all duration-300" delay={0.5}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-label-mono text-[11px] font-bold text-on-surface-variant/80 uppercase tracking-widest bg-surface-container px-2 py-0.5 rounded border border-outline-variant/30">Jul 2020</span>
                    <span className="font-label-mono text-caption text-on-surface-variant">Provincial Level</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-on-surface">
                    Third Prize – Informatics Excellent Student Competition
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-[13px] leading-relaxed mt-2">
                    Ranked third in the Provincial Excellent Student Competition, specializing in programming foundations and computational discrete mathematics.
                  </p>
                </div>
              </div>
            </BentoCard>
          </div>

        </div>
      </section>

    </div>
  );
};
