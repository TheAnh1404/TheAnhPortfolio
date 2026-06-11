import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BentoCard } from "../../components/BentoCard";
import {
  ArrowLeft, Award, Link as LinkIcon, Code as CodeIcon,
  User, Terminal, Layout, Sparkles, Database,
  ShieldCheck, Zap, Activity, Cpu, BarChart3,
  Layers, Clock, RefreshCcw
} from "lucide-react";

import { UdonLogo } from "../../components/UdonLogo";

export const UdonFi: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-8 selection:bg-primary/20">
      {/* Back to Projects */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-label-mono text-caption text-primary font-bold hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Engineering Systems
        </Link>
      </motion.div>

      {/* Hero Header */}
      <header className="mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-mono text-[11px] mb-8 font-bold border border-primary/20 shadow-sm shadow-primary/5">
              <Award className="w-4 h-4" />
              1ST PRIZE • STELLAR MINI HACKATHON 2026
            </div>
            <h1 className="font-display text-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Udon<span className="text-primary italic">Fi</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              A high-performance Web3 lending protocol engineered for the Stellar Soroban ecosystem. Solving capital efficiency and VM constraints via u128 bitmap packing and 2-step liquidation flows.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://udonfi-1404.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-mono text-label-mono bg-primary text-on-primary px-8 py-4 rounded-xl hover:bg-primary-container transition-all hover:scale-[1.02] font-bold shadow-lg shadow-primary/20"
              >
                <LinkIcon className="w-4.5 h-4.5" />
                Live Protocol
              </a>
              <a
                href="https://www.facebook.com/share/p/14fXkQAuFGW/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-mono text-label-mono text-blue-600 border border-blue-200 bg-blue-50 px-8 py-4 rounded-xl hover:bg-blue-100 transition-all hover:scale-[1.02] font-bold"
              >
                <Sparkles className="w-4.5 h-4.5" />
                Official Post
              </a>
              <a
                href="https://github.com/TheAnh1404/UdonFi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-mono text-label-mono border border-outline px-8 py-4 rounded-xl hover:bg-surface-container transition-all hover:scale-[1.02] font-bold"
              >
                <CodeIcon className="w-4.5 h-4.5" />
                View Source
              </a>
            </div>
          </motion.div>

          {/* UdonFi Brand Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex"
          >
             <UdonLogo className="!p-10 !rounded-[32px] bg-surface-container-low border border-outline-variant/30 shadow-xl shadow-primary/5 hover:scale-105 transition-transform cursor-pointer" />
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 aspect-[21/9] w-full rounded-[32px] overflow-hidden border border-outline-variant relative group shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent z-10"></div>
          <img
            alt="UdonFi Dashboard Interface"
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
            src="/Infor/udonFI/HomeUdonFi.png"
          />
          <div className="absolute bottom-10 left-10 z-20">
            <div className="font-label-mono text-surface-bright/70 text-xs font-bold uppercase tracking-[0.3em] mb-3">SYSTEM PREVIEW</div>
            <div className="font-display text-surface-bright text-4xl md:text-5xl font-bold max-w-xl leading-tight">
              Institutional Liquidity <br />
              <span className="text-primary-fixed-dim">on Stellar Soroban</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Core Architectural Flow */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-headline-lg text-4xl font-bold mb-4">System Architecture</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              UdonFi integrates high-speed smart contracts with a real-time indexing layer to bridge the gap between blockchain finality and responsive UI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.1}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">Smart Contracts</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Rust-based logic managing lending pools, reserves, and tokenizations (aTokens/debtTokens).</p>
              </div>
           </BentoCard>

           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.2}>
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-inner">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">Indexer Bot</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Node.js service polling on-chain events via XDR parsing to update Firestore and Socket.io.</p>
              </div>
           </BentoCard>

           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.3}>
              <div className="w-12 h-12 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center shadow-inner">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">Real-time Data</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Global state synchronized across Firestore and client listeners for sub-second UI updates.</p>
              </div>
           </BentoCard>

           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.4}>
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed/20 text-primary-fixed-variant flex items-center justify-center shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">Vite Client</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Premium React/TS frontend with Freighter wallet integration and local blockchain simulation.</p>
              </div>
           </BentoCard>
        </div>
      </section>

      {/* Financial Models - Mathematical Rigor */}
      <section className="mb-32">
        <div className="mb-16">
          <h2 className="font-display text-headline-lg text-4xl font-bold mb-4 text-center md:text-left">Financial Engineering</h2>
          <p className="text-on-surface-variant max-w-2xl font-body-md text-center md:text-left">Strict adherence to DeFi mathematical frameworks to guarantee capital safety.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Health Factor & Risk Matrix */}
          <BentoCard className="lg:col-span-7 p-10 flex flex-col justify-between" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
                <h3 className="font-display text-2xl font-bold">Health Factor (HF) Governance</h3>
              </div>
              
              <p className="text-on-surface-variant mb-10 leading-relaxed font-body-md">
                UdonFi protects depositors via a real-time risk evaluation engine. Positions are liquidated if the Health Factor falls below the threshold, calculated from total collateral value adjusted by specific risk parameters.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                 <div className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <span className="font-label-mono text-[10px] font-bold text-primary block mb-3 uppercase tracking-widest">Risk Config</span>
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-sm font-medium opacity-60">Max LTV</span>
                       <span className="text-sm font-bold text-on-surface">70%</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="text-sm font-medium opacity-60">Liquidation Threshold</span>
                       <span className="text-sm font-bold text-on-surface">82.5%</span>
                    </div>
                 </div>

                 <div className="p-5 rounded-2xl bg-inverse-surface text-surface border border-outline-variant/10">
                    <span className="font-label-mono text-[10px] font-bold text-primary-fixed-dim block mb-3 uppercase tracking-widest">Formula</span>
                    <code className="text-[13px] font-label-mono block leading-relaxed">
                      HF = (Σ Collateral_i * LT_i) <br />
                      &nbsp;&nbsp;&nbsp;&nbsp; / (Σ Borrow_j)
                    </code>
                 </div>
              </div>

              {/* HF Status Visualization */}
              <div className="flex flex-col gap-3">
                 <div className="h-2 flex w-full rounded-full overflow-hidden bg-surface-container-high mb-2">
                    <div className="w-[30%] bg-emerald-500"></div>
                    <div className="w-[40%] bg-yellow-500"></div>
                    <div className="w-[30%] bg-red-500"></div>
                 </div>
                 <div className="flex justify-between font-label-mono text-[9px] font-bold uppercase tracking-tighter opacity-60">
                    <span>Safe (&gt;1.5)</span>
                    <span className="text-center">High Risk (1.0-1.5)</span>
                    <span className="text-right">Liquidatable (&lt;1.0)</span>
                 </div>
              </div>
            </div>
          </BentoCard>

          {/* Kinked Interest Rate Chart */}
          <BentoCard className="lg:col-span-5 p-10 flex flex-col justify-between bg-surface-container-low" delay={0.2}>
             <div>
                <div className="flex items-center gap-3 mb-8">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl font-bold">Kinked APY Curve</h3>
                </div>
                <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                  Dynamic interest rates optimized for pool utilization. When utilization exceeds 80% (The Kink), borrow rates spike exponentially to restore liquidity.
                </p>

                <div className="h-48 relative mb-8">
                   <svg viewBox="0 0 300 120" className="w-full h-full text-primary">
                      <path d="M20 100 L220 80 L280 20" fill="none" stroke="currentColor" strokeWidth="3" />
                      <circle cx="220" cy="80" r="5" fill="#4b41e1" className="animate-pulse" />
                      <text x="220" y="95" textAnchor="middle" className="fill-on-surface font-label-mono text-[9px] font-bold">Kink (80%)</text>
                      <text x="20" y="115" className="fill-on-surface-variant font-label-mono text-[8px]">Utilization %</text>
                      <text x="280" y="115" textAnchor="end" className="fill-on-surface-variant font-label-mono text-[8px]">100%</text>
                   </svg>
                </div>

                <div className="p-4 rounded-xl bg-white/50 border border-outline-variant/30">
                   <div className="flex items-center justify-between">
                      <span className="text-xs font-bold opacity-60">Max Borrow APY</span>
                      <span className="text-lg font-bold text-red-600">90.0%</span>
                   </div>
                </div>
             </div>
          </BentoCard>
        </div>
      </section>

      {/* Technical Deep Dive - Soroban Optimizations */}
      <section className="mb-32">
        <div className="max-w-3xl mb-16">
          <h2 className="font-display text-headline-lg text-4xl font-bold mb-4 tracking-tight">Technical Deep Dive</h2>
          <p className="text-on-surface-variant font-body-md leading-relaxed">
            Optimizing for the unique resource constraints of the Soroban VM, from CPU instruction limits to ledger storage costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* u128 Bitmap Matrix */}
          <BentoCard className="p-8 group hover:border-primary/30 transition-colors" delay={0.1}>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">u128 State Bitmap Packing</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Replacing expensive dynamic Maps with bitwise state-packing. Reduces ledger storage footprint by 95%, significantly lowering on-chain gas costs for active users.
            </p>
            <div className="aspect-video bg-inverse-surface rounded-xl p-4 flex flex-col gap-2 overflow-hidden border border-white/5">
               <div className="grid grid-cols-8 gap-1 opacity-50">
                  {Array.from({length: 16}).map((_, i) => (
                    <div key={i} className={`h-2 rounded-full ${i % 3 === 0 ? 'bg-primary shadow-[0_0_8px_#004ac6]' : 'bg-surface/20'}`}></div>
                  ))}
               </div>
               <div className="mt-auto font-label-mono text-[10px] text-primary font-bold">BITWISE STATE STORAGE</div>
            </div>
          </BentoCard>

          {/* 2-Step Liquidation */}
          <BentoCard className="p-8 group hover:border-secondary/30 transition-colors" delay={0.2}>
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-8">
              <RefreshCcw className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">2-Step Liquidation Flow</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Bypassing the 100M CPU instruction limit by splitting intensive liquidation cycles into cryptographically linked 2-step transactions.
            </p>
            <div className="space-y-3">
               <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-high border border-outline-variant/30">
                  <div className="w-6 h-6 rounded bg-primary/20 flex items-center justify-center text-[10px] font-bold">1</div>
                  <span className="text-[11px] font-bold opacity-80 uppercase font-label-mono">Evaluate & Lock</span>
               </div>
               <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-high border border-outline-variant/30">
                  <div className="w-6 h-6 rounded bg-secondary/20 flex items-center justify-center text-[10px] font-bold">2</div>
                  <span className="text-[11px] font-bold opacity-80 uppercase font-label-mono">Execute & Bonus</span>
               </div>
            </div>
          </BentoCard>

          {/* TTL Extension */}
          <BentoCard className="p-8 group hover:border-tertiary/30 transition-colors" delay={0.3}>
            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-8">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Automated TTL Management</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Ensuring ledger data persistence through automated TTL extensions on every protocol interaction, preventing ledger eviction of critical account state.
            </p>
            <div className="p-4 rounded-xl bg-surface-container-high border border-dashed border-outline-variant flex items-center justify-center gap-2">
               <RefreshCcw className="w-4 h-4 text-tertiary animate-spin-slow" />
               <span className="font-label-mono text-[10px] font-bold uppercase text-on-surface-variant">Persistent Lifecycle</span>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Artifact Gallery */}
      <section className="mb-32">
        <h2 className="font-display text-headline-lg text-4xl font-bold mb-16 px-4">Artifact Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Award Image */}
          <div className="col-span-12 md:col-span-8 aspect-video rounded-[32px] overflow-hidden border border-outline-variant relative group shadow-xl">
            <img
              alt="UdonFi Stellar Hackathon Award"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              src="/Infor/udonFI/firstPr_img.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-10">
               <span className="px-4 py-1.5 bg-amber-500 text-white font-label-mono text-xs font-bold rounded-full w-fit mb-4 shadow-lg shadow-amber-500/20">
                 🏆 GLOBAL FIRST PRIZE
               </span>
               <h3 className="text-white text-3xl font-bold font-display">Stellar Mini Hackathon</h3>
            </div>
          </div>

          {/* High Tech Metric Card */}
          <div className="col-span-12 md:col-span-4 rounded-[32px] bg-inverse-surface p-10 flex flex-col border border-white/5 relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full"></div>
             <Terminal className="text-primary w-12 h-12 mb-8 group-hover:rotate-12 transition-transform" />
             <h4 className="text-surface font-display text-2xl font-bold mb-4">Core Performance</h4>
             <p className="text-surface-variant text-sm leading-relaxed mb-10 opacity-70">
                Optimized for low-latency execution and minimal on-chain footprint. 
             </p>
             <div className="mt-auto space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                   <span className="text-surface/40 text-xs font-label-mono">GAS EFFICIENCY</span>
                   <span className="text-emerald-400 font-bold">+95%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                   <span className="text-surface/40 text-xs font-label-mono">FINALITY</span>
                   <span className="text-primary-fixed-dim font-bold">&lt;1.0s</span>
                </div>
             </div>
          </div>

          {/* Technical Diagrams */}
          <div className="col-span-12 md:col-span-6 aspect-video rounded-[32px] overflow-hidden border border-outline-variant bg-white relative group">
             <img
               alt="Smart Contract Logic"
               className="w-full h-full object-contain p-12 group-hover:scale-[1.02] transition-transform duration-700"
               src="/Infor/udonFI/Function.png"
             />
             <div className="absolute bottom-6 left-6 z-20">
               <span className="px-3 py-1.5 bg-on-surface/90 backdrop-blur-md text-surface font-label-mono text-[10px] font-bold rounded-lg border border-white/10">
                 CONTRACT FLOW ARCHITECTURE
               </span>
             </div>
          </div>

          <div className="col-span-12 md:col-span-6 aspect-video rounded-[32px] overflow-hidden border border-outline-variant bg-white relative group">
             <img
               alt="Bitmap Packing Logic"
               className="w-full h-full object-contain p-12 group-hover:scale-[1.02] transition-transform duration-700"
               src="/Infor/udonFI/128bitMap.png"
             />
             <div className="absolute bottom-6 left-6 z-20">
               <span className="px-3 py-1.5 bg-on-surface/90 backdrop-blur-md text-surface font-label-mono text-[10px] font-bold rounded-lg border border-white/10">
                 u128 BITMAP PACKING MATRIX
               </span>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-20 py-20 border-t border-outline-variant/30 text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h3 className="font-display text-4xl font-bold mb-8">Ready to explore UdonFi?</h3>
           <div className="flex flex-wrap justify-center gap-6">
             <a
               href="https://github.com/TheAnh1404/UdonFi"
               target="_blank"
               rel="noopener noreferrer"
               className="px-10 py-5 bg-on-surface text-surface rounded-2xl font-bold flex items-center gap-3 hover:bg-inverse-surface transition-all shadow-xl"
             >
               <CodeIcon className="w-5 h-5" /> Start Building
             </a>
             <a
               href="https://udonfi-1404.web.app/"
               target="_blank"
               rel="noopener noreferrer"
               className="px-10 py-5 border border-outline text-on-surface rounded-2xl font-bold hover:bg-surface-container transition-all"
             >
               Launch Protocol
             </a>
           </div>
         </motion.div>
      </footer>
    </div>
  );
};
