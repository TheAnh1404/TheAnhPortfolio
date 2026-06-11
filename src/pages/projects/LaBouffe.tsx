import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BentoCard } from "../../components/BentoCard";
import {
  ArrowLeft, Database,
  ShieldCheck, Map, Zap, CreditCard,
  Cloud, Smartphone, Activity, Code as CodeIcon,
  Layout, Layers
} from "lucide-react";

export const LaBouffe: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-primary/20">
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

      {/* Hero Section */}
      <header className="mb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-mono text-[11px] mb-8 font-bold border border-primary/20 shadow-sm shadow-primary/5">
              <Smartphone className="w-4 h-4" />
              ULTRA-PREMIUM MOBILE ECOSYSTEM
            </div>
            <h1 className="font-display text-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              La<span className="text-primary italic">Bouffe</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              A comprehensive premium food delivery ecosystem built with React Native and Firebase. Engineered for 60fps fluidity, absolute transaction security, and real-time logistics tracking.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/TheAnh1404/LaBouffe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-mono text-label-mono bg-on-surface text-surface px-8 py-4 rounded-xl hover:bg-inverse-surface transition-all hover:scale-[1.02] font-bold shadow-lg"
              >
                <CodeIcon className="w-4.5 h-4.5" />
                View Source
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-surface-container border border-outline-variant/30">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] font-bold text-primary uppercase">Performance</span>
                  <span className="font-display font-bold">60 FPS Stable</span>
                </div>
                <div className="w-px h-8 bg-outline-variant/30"></div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] font-bold text-secondary uppercase">Stack</span>
                  <span className="font-display font-bold">Expo SDK 54</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Banner Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative w-full min-h-[600px] md:h-[600px] rounded-[40px] overflow-hidden border border-outline-variant/30 bg-gradient-to-br from-surface-container-highest via-surface-container-high to-surface-container-highest flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12 md:py-0 gap-10 shadow-2xl group"
        >
          {/* Glowing backlighting behind the mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-primary/10 blur-3xl opacity-60 group-hover:scale-110 transition-transform duration-1000 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-10 animate-pulse-slow" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-outline-variant)_1px,transparent_1px)] [background-size:24px_24px]"></div>

          {/* Left Text Column */}
          <div className="relative z-30 flex flex-col max-md:items-center max-md:text-center md:max-w-[32%] text-left">
            <div className="font-label-mono text-on-surface-variant/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">INTERFACE DESIGN</div>
            <div className="font-display text-on-surface text-4xl md:text-5xl font-bold leading-tight">
              Gastronomy <br />
              <span className="text-primary italic">Redefined</span>
            </div>
            <p className="mt-4 text-on-surface-variant text-sm font-body-md opacity-80 leading-relaxed max-w-sm">
              Discover the sleek user interfaces designed to streamline culinary transactions and local tracking.
            </p>
          </div>

          {/* Right Browser Mockup Window */}
          <div className="relative z-20 w-full md:w-[60%] rounded-2xl overflow-hidden border border-outline-variant/50 bg-black/40 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-700 ease-out group-hover:scale-[1.015] group-hover:shadow-primary/5">
            {/* Mac OS title bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-outline-variant/30 bg-surface-container-high/40 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-label-mono text-[9px] text-on-surface-variant/70 font-bold uppercase tracking-[0.2em]">LaBouffe App Core Showcase</span>
              <div className="w-10"></div> {/* Spacer to center title */}
            </div>
            
            {/* Graphic Mockup Container */}
            <div className="relative aspect-[16/9.5] overflow-hidden bg-black">
              <img
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.025]"
                src="/Infor/Labouffe/Group 1.png"
                alt="LaBouffe App Mockup"
              />
              {/* Subtle glass sheen overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-30 pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Enterprise Architecture */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 px-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-headline-lg text-4xl font-bold mb-4 tracking-tight">Enterprise Architecture</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Implementing unidirectional data flow with persistent caching and secure serverless computing.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.1}>
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shadow-inner">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md font-bold mb-2">React Native Core</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Expo SDK 54 with TypeScript 5.9 for a type-safe, high-performance hybrid experience.</p>
            </div>
          </BentoCard>

          <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.2}>
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center shadow-inner">
              <Cloud className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md font-bold mb-2">Firebase Serverless</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Node.js Cloud Functions handling ACID transactions and secure order processing.</p>
            </div>
          </BentoCard>

          <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.3}>
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center shadow-inner">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md font-bold mb-2">TanStack Query</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">Advanced caching layer reducing Firestore reads by 80% and eliminating N+1 overhead.</p>
            </div>
          </BentoCard>

          <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.4}>
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shadow-inner">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md font-bold mb-2">Stripe Payment</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">PCI-DSS compliant integration with secure PaymentSheet and server-side verification.</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Core Innovations */}
      <section className="mb-32">
        <div className="mb-16 px-4">
          <h2 className="font-display text-headline-lg text-4xl font-bold mb-4">Architectural Masterpieces</h2>
          <p className="text-on-surface-variant max-w-2xl font-body-md">Advanced engineering solutions for real-world delivery challenges.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter px-4">
          {/* Live Tracking */}
          <BentoCard className="lg:col-span-8 p-10 group" delay={0.1}>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-8">
                  <Map className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl font-bold">Real-time GPS Interpolation</h3>
                </div>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-body-md">
                  Eliminating "stuttering" driver movements via Linear Interpolation (LERP). The system predicts intermediate steps between GPS pings to ensure a smooth 60fps movement on the map.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 font-label-mono text-xs font-bold text-on-surface">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    INTERPOLATED PATHS
                  </div>
                  <div className="flex items-center gap-3 font-label-mono text-xs font-bold text-on-surface">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    DYNAMIC GEOLOCATION
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 min-h-[250px]">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i14!2i2650!3i1612!2m3!1e0!2sm!3i420120488!3m8!2sen!3sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1f2')] bg-cover"></div>
                <motion.div
                  animate={{
                    x: [40, 150, 120, 200],
                    y: [150, 100, 50, 40]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute z-20"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-primary/20 blur-xl rounded-full"></div>
                    <div className="bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
                      <Smartphone className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg border border-outline-variant/50 font-label-mono text-[10px] font-bold">
                  60 FPS TRACKING
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Security Card */}
          <BentoCard className="lg:col-span-4 p-10 flex flex-col justify-between bg-inverse-surface text-surface" delay={0.2}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
                <h3 className="font-display text-2xl font-bold text-white">Price Manipulation Prevention</h3>
              </div>
              <p className="text-surface-variant text-sm mb-8 leading-relaxed opacity-80">
                Direct-Write Ban on Firestore. All orders are processed through server-side Cloud Functions where price cross-checking and inventory validation are enforced.
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-2">
                  <span className="text-[10px] font-label-mono font-bold text-emerald-400">SERVER VALIDATED</span>
                  <div className="flex justify-between items-end">
                    <span className="text-xs opacity-50 font-label-mono">order_total</span>
                    <span className="text-sm font-bold">$42.00</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-col gap-2">
                  <span className="text-[10px] font-label-mono font-bold text-red-400">CLIENT REQUEST (BLOCKED)</span>
                  <div className="flex justify-between items-end">
                    <span className="text-xs opacity-50 font-label-mono line-through">order_total</span>
                    <span className="text-sm font-bold text-red-400">$0.99</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-label-mono text-[10px] font-bold text-emerald-400 uppercase tracking-widest text-center py-3 border border-emerald-400/30 rounded-lg bg-emerald-400/5">
              SECURE ACID TRANSACTIONS
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="mb-32">
        <div className="max-w-3xl mb-16 px-4">
          <h2 className="font-display text-headline-lg text-4xl font-bold mb-4 tracking-tight">Performance Tuning</h2>
          <p className="text-on-surface-variant font-body-md leading-relaxed">
            Optimizing for consistency and speed across low-end and flagship devices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* List Tuning */}
          <BentoCard className="p-8 group hover:border-primary/30 transition-colors" delay={0.1}>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Virtualized List Optimization</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Custom FlatList implementation with fixed row heights and `clippedSubviews` enabled to minimize memory footprint during heavy scrolling.
            </p>
            <div className="space-y-2">
              <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity }} className="h-full w-1/3 bg-primary/30"></motion.div>
              </div>
              <div className="h-2 w-3/4 bg-surface-container-high rounded-full"></div>
              <div className="h-2 w-full bg-surface-container-high rounded-full"></div>
            </div>
          </BentoCard>

          {/* Reanimated */}
          <BentoCard className="p-8 group hover:border-secondary/30 transition-colors" delay={0.2}>
            <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-8">
              <Activity className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">UI Thread Worklets</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Offloading expensive frame calculations to the UI thread using Reanimated `SharedValues`, keeping the JS thread at 0% load for logic.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex-1 p-3 rounded-lg bg-surface-container-high text-center">
                <span className="text-[10px] font-label-mono block opacity-50">JS THREAD</span>
                <span className="text-sm font-bold text-emerald-500">IDLE</span>
              </div>
              <div className="flex-1 p-3 rounded-lg bg-surface-container-high text-center">
                <span className="text-[10px] font-label-mono block opacity-50">UI THREAD</span>
                <span className="text-sm font-bold text-primary">60 FPS</span>
              </div>
            </div>
          </BentoCard>

          {/* Persistence */}
          <BentoCard className="p-8 group hover:border-tertiary/30 transition-colors" delay={0.3}>
            <div className="w-12 h-12 rounded-2xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-8">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">Offline-First Resilience</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Integrated Firestore Persistence and background queueing for offline cart management and favorite synchronization.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-surface-container-high rounded border border-outline-variant/30 text-[10px] font-label-mono font-bold">ASYNC STORAGE</span>
              <span className="px-2 py-1 bg-surface-container-high rounded border border-outline-variant/30 text-[10px] font-label-mono font-bold">QUEUE SYNC</span>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Permission Matrix */}
      <section className="mb-32 px-4">
        <BentoCard className="p-10 bg-surface-container-low overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <Database className="w-64 h-64" />
          </div>
          <h3 className="font-display text-3xl font-bold mb-10">Data Security Matrix</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body-md">
              <thead>
                <tr className="border-b border-outline-variant/30 text-on-surface-variant text-sm font-label-mono">
                  <th className="pb-4 pr-6">COLLECTION</th>
                  <th className="pb-4 px-6">READ</th>
                  <th className="pb-4 px-6">WRITE</th>
                  <th className="pb-4 pl-6">ENFORCEMENT</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-outline-variant/10">
                  <td className="py-4 pr-6 font-bold">/foods</td>
                  <td className="py-4 px-6"><span className="text-emerald-500 font-bold">Public</span></td>
                  <td className="py-4 px-6"><span className="text-red-500 font-bold">Server-Only</span></td>
                  <td className="py-4 pl-6 opacity-70">Price integrity protection</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="py-4 pr-6 font-bold">/orders</td>
                  <td className="py-4 px-6"><span className="text-primary font-bold">Owner</span></td>
                  <td className="py-4 px-6"><span className="text-primary font-bold">Owner (Restricted)</span></td>
                  <td className="py-4 pl-6 opacity-70">Status-based mutation guards</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="py-4 pr-6 font-bold">/users/wallet</td>
                  <td className="py-4 px-6"><span className="text-primary font-bold">Owner</span></td>
                  <td className="py-4 px-6"><span className="text-red-500 font-bold">Server-Only</span></td>
                  <td className="py-4 pl-6 opacity-70">ACID Transaction enforcement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </BentoCard>
      </section>

      {/* Footer CTA */}
      <footer className="mt-20 py-20 border-t border-outline-variant/30 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-4xl font-bold mb-8">Ready to explore the ecosystem?</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/TheAnh1404/LaBouffe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-on-surface text-surface rounded-2xl font-bold flex items-center gap-3 hover:bg-inverse-surface transition-all shadow-xl"
            >
              <CodeIcon className="w-5 h-5" /> Repository
            </a>
            <button
              onClick={() => alert("Project in Review phase")}
              className="px-10 py-5 border border-outline text-on-surface rounded-2xl font-bold hover:bg-surface-container transition-all"
            >
              Full Documentation
            </button>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};
