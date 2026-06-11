import React from "react";
import { Link } from "react-router-dom";
import { BentoCard } from "../../components/BentoCard";
import {
  ArrowLeft, Award, Link as LinkIcon, Code as CodeIcon,
  User, Terminal, Layout, Sparkles, Database
} from "lucide-react";

export const UdonFi: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-6 md:px-8">
      {/* Back to Projects */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-label-mono text-caption text-primary font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Engineering Systems
        </Link>
      </div>

      {/* Hero Header */}
      <header className="mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-mono text-caption mb-6 font-bold border border-primary/20">
              <Award className="w-4.5 h-4.5 text-primary" />
              1st Prize Stellar Hackathon
            </div>
            <h1 className="font-display text-display text-5xl font-bold mb-4">UdonFi</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
              A high-performance Web3 lending protocol engineered for the Stellar Soroban ecosystem. UdonFi enables non-custodial asset borrowing and lending with sub-second finality and institutional-grade security.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://udonfi-1404.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface border border-outline px-6 py-3 rounded-xl hover:bg-surface-container transition-all hover:scale-[1.02] font-bold"
            >
              <LinkIcon className="w-4.5 h-4.5" />
              Live Demo
            </a>
            <a
              href="https://github.com/TheAnh1404/UdonFi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-label-mono text-label-mono bg-on-surface text-surface px-6 py-3 rounded-xl hover:bg-inverse-surface transition-all hover:scale-[1.02] font-bold"
            >
              <CodeIcon className="w-4.5 h-4.5" />
              View Source
            </a>
          </div>
        </div>

        <div className="mt-12 aspect-[21/9] w-full rounded-2xl overflow-hidden border border-outline-variant relative group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 to-transparent z-10"></div>
          <img
            alt="UdonFi Dashboard Interface"
            className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpjV4xUtiehAyIHX7_MuLERgPFFbpHGBO7VTEWQXMQVK_ZjC07acAKYt9t6TbMDtHLE0lTlpQJt2HJnbWjB031mEwa60OT0Ahg1hub609vCrqSE8SMIzAvbLxhvSVkBKbZcsSbRly0NgipvAa7Fhu10ztitJtSa-hIKqDrvu2I8Td5e7nim_CGzeZrPM6MlQHmPvEox-2t_m27Fd3bT4nAjZMkgHYfmKXlBF_MNja0j_D1YRwGcQDcpuN8PG_ch-M008B1unlW-_Px"
          />
          <div className="absolute bottom-8 left-8 z-20">
            <div className="font-label-mono text-surface-bright text-label-mono opacity-80 mb-2 font-bold uppercase tracking-wider">Platform Preview</div>
            <div className="font-headline-lg text-surface-bright text-3xl font-bold">The Future of Liquid Stellar Assets</div>
          </div>
        </div>
      </header>

      {/* Value Matrix */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Value Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* User Value */}
          <BentoCard className="p-8 flex flex-col gap-6" delay={0.1}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-2 text-on-surface">User Experience</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Seamless non-custodial lending with instant liquidations and transparent yield generation for everyday DeFi users.</p>
            </div>
            <ul className="space-y-3 mt-auto border-t border-outline-variant/30 pt-6">
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>Sub-second Transaction Finality</span>
              </li>
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>Mobile-First Dashboard UI</span>
              </li>
            </ul>
          </BentoCard>

          {/* Engineering Value */}
          <BentoCard className="p-8 flex flex-col gap-6" delay={0.2}>
            <div className="w-12 h-12 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-2 text-on-surface">Engineering Rigor</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Highly optimized Rust smart contracts utilizing bitmap storage patterns to minimize on-chain footprint and gas costs.</p>
            </div>
            <ul className="space-y-3 mt-auto border-t border-outline-variant/30 pt-6">
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>u128 Bitmap State packing</span>
              </li>
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>Automated TTL Extensions</span>
              </li>
            </ul>
          </BentoCard>

          {/* Business Value */}
          <BentoCard className="p-8 flex flex-col gap-6" delay={0.3}>
            <div className="w-12 h-12 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-2 text-on-surface">Business Logic</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Solvency protection through decentralized liquidations and optimal liquidity utilization via a kinked APY model.</p>
            </div>
            <ul className="space-y-3 mt-auto border-t border-outline-variant/30 pt-6">
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                <span>Kinked APY Curve Model</span>
              </li>
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                <span>Solvency Risk Governance</span>
              </li>
            </ul>
          </BentoCard>
        </div>
      </section>

      {/* Core Financial Mathematics */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Core Financial Mathematics & Risk Models</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Health Factor & Risk Monitoring */}
          <BentoCard className="p-8 flex flex-col justify-between" delay={0.1}>
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Health Factor (HF) Risk Governance</h3>
              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6">
                UdonFi monitors position safety in real-time. If a position's Health Factor drops below 1.0, the vault is immediately locked and flagged for public liquidation.
              </p>

              {/* Formula Callout */}
              <div className="mb-8 p-4 bg-surface-container rounded-xl border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-primary block mb-2">Health Factor Formula</span>
                <code className="text-sm font-label-mono font-bold text-on-surface block bg-black/5 p-3 rounded-lg overflow-x-auto">
                  HF = (Σ Collateral_i * LT_i) / (Σ Borrow_j)
                </code>
                <div className="flex gap-6 mt-3 font-label-mono text-[10px] text-on-surface-variant font-semibold">
                  <span>LT (Liquidation Threshold) = 82.5%</span>
                  <span>LTV Max = 70%</span>
                </div>
              </div>

              {/* Visual HF Scale */}
              <div className="space-y-4">
                <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block">Real-time Risk Statuses</span>

                {/* Safe Status */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-label-mono text-[11px] font-bold text-emerald-800">HF &gt; 1.5</span>
                  </div>
                  <span className="text-[12px] font-bold text-emerald-700">Safe Status (Low Volatility Risk)</span>
                </div>

                {/* Warning Status */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="font-label-mono text-[11px] font-bold text-yellow-800">1.0 ≤ HF ≤ 1.5</span>
                  </div>
                  <span className="text-[12px] font-bold text-yellow-700">Warning (High Risk, Supply Collateral)</span>
                </div>

                {/* Liquidation Status */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-error/10 border border-error/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-error animate-ping"></span>
                    <span className="font-label-mono text-[11px] font-bold text-error">HF &lt; 1.0</span>
                  </div>
                  <span className="text-[12px] font-bold text-error">Liquidation Triggered (Vault Locked)</span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Kinked Interest Rate Curve */}
          <BentoCard className="p-8 flex flex-col justify-between" delay={0.2}>
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Kinked Interest Rate Curve Algorithm</h3>
              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6">
                To optimize pool liquidity, the Borrow APY adjusts dynamically based on the utilization rate (U). When U exceeds the optimal threshold (U_opt = 80%), rates spike to protect pool solvency.
              </p>

              {/* SVG Curve Plot */}
              <div className="h-44 bg-surface-container rounded-xl border border-outline-variant/30 relative flex items-center justify-center p-4 mb-6 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 300 120" className="text-primary overflow-visible">
                  {/* Grid Lines */}
                  <line x1="20" y1="100" x2="280" y2="100" stroke="#c3c6d7" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="20" y1="20" x2="20" y2="100" stroke="#c3c6d7" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="220" y1="20" x2="220" y2="100" stroke="#c3c6d7" strokeWidth="1" strokeDasharray="2 2" />

                  {/* Curve Paths */}
                  {/* Base rate to Kink (80%) */}
                  <line x1="20" y1="90" x2="220" y2="70" stroke="currentColor" strokeWidth="3" />
                  {/* Kink (80%) to Scarcity (100%) */}
                  <line x1="220" y1="70" x2="280" y2="20" stroke="#ba1a1a" strokeWidth="3" strokeDasharray="1 1" className="animate-pulse" />
                  <line x1="220" y1="70" x2="280" y2="20" stroke="#ba1a1a" strokeWidth="2" />

                  {/* Points */}
                  <circle cx="20" cy="90" r="4" fill="currentColor" />
                  <circle cx="220" cy="70" r="5" fill="#4b41e1" />
                  <circle cx="280" cy="20" r="4" fill="#ba1a1a" />

                  {/* Text Labels */}
                  <text x="220" y="85" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">Kink (80%)</text>
                  <text x="18" y="110" className="fill-on-surface-variant font-label-mono text-[8px]">0%</text>
                  <text x="220" y="110" textAnchor="middle" className="fill-on-surface-variant font-label-mono text-[8px]">80% Utilization</text>
                  <text x="280" y="110" textAnchor="end" className="fill-on-surface-variant font-label-mono text-[8px]">100%</text>

                  <text x="25" y="82" className="fill-primary font-label-mono text-[7px] font-bold">Slope 1: Standard Rate</text>
                  <text x="250" y="55" textAnchor="middle" className="fill-error font-label-mono text-[7px] font-bold">Slope 2: Scarcity (90% APY)</text>
                </svg>
              </div>

              {/* Formula details */}
              <div className="p-3 bg-surface rounded-lg border border-outline-variant/30 flex justify-between items-center">
                <div>
                  <span className="font-label-mono text-[9px] uppercase font-bold text-secondary block">Supply APY Formula</span>
                  <code className="text-[11px] font-label-mono font-bold text-on-surface">Supply APY = R_t * U * (1 - 10% Reserve Fee)</code>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Soroban-Specific Technical Optimizations */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Soroban VM Architectural Optimizations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* u128 State Bitmap Matrix */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.1}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface leading-tight">u128 State Bitmap Packing</h3>
              </div>
              <p className="text-on-surface-variant text-[12px] leading-relaxed mb-6">
                Soroban ledger storage is priced per entry. Instead of using expensive Dynamic Vectors or dynamic maps, UdonFi packs all config properties and boolean flags into a single, compact <code className="bg-surface-variant px-1.5 py-0.5 rounded font-label-mono text-[10px]">u128</code> slot.
              </p>
              <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/30 text-center font-label-mono text-[11px] font-bold text-emerald-700">
                ⚡ SAVES ~40% ON-CHAIN GAS COSTS
              </div>
            </div>
          </BentoCard>

          {/* Decentralized 2-Step Liquidation */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.2}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface leading-tight">Decentralized 2-Step Flow</h3>
              </div>
              <p className="text-on-surface-variant text-[12px] leading-relaxed mb-6">
                To prevent malicious front-running bots on the Stellar Network, UdonFi separates liquidations into a commit step and an execution step, forcing fair liquidation opportunities.
              </p>
              <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/30 text-center font-label-mono text-[11px] font-bold text-secondary">
                🛡️ FRONTRUN-RESISTANT LIQUIDATION
              </div>
            </div>
          </BentoCard>

          {/* Automated TTL Storage Extension */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.3}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-on-surface leading-tight">Automated TTL Sweeper</h3>
              </div>
              <p className="text-on-surface-variant text-[12px] leading-relaxed mb-6">
                Ledger entries on Soroban expire if not maintained. UdonFi implements an automated sweeper logic that checks and updates the entry TTL during transactions to guarantee persistence.
              </p>
              <div className="p-3 bg-surface-container rounded-lg border border-outline-variant/30 text-center font-label-mono text-[11px] font-bold text-tertiary">
                🔄 AUTO-MAINTAIN DATA PERSISTENCE
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Architecture & Tech Stack</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
          <div className="lg:col-span-3">
            <div className="bg-inverse-surface rounded-2xl p-12 relative overflow-hidden border border-outline/10">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-surface/10 border border-surface/20 flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-surface text-4xl">devices</span>
                  </div>
                  <div className="font-label-mono text-caption text-surface/60 font-bold uppercase tracking-wider">Client UI (Vite + React)</div>
                </div>

                <span className="material-symbols-outlined text-surface/30 hidden md:block text-2xl">arrow_forward</span>

                <div className="flex flex-col items-center gap-4">
                  <div className="px-6 py-4 rounded-xl bg-primary text-surface border border-primary-container shadow-xl">
                    <div className="font-label-mono text-label-mono font-bold text-white">Soroban VM (Rust)</div>
                    <div className="text-[10px] opacity-70 font-label-mono text-white/80">Smart Contracts</div>
                  </div>
                  <div className="font-label-mono text-caption text-surface/60 font-bold uppercase tracking-wider">Rust Core Engine</div>
                </div>

                <span className="material-symbols-outlined text-surface/30 hidden md:block text-2xl">arrow_forward</span>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-surface/10 border border-surface/20 flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-surface text-4xl">database</span>
                  </div>
                  <div className="font-label-mono text-caption text-surface/60 font-bold uppercase tracking-wider">Node.js Indexer (Firebase)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-4">
            <div className="p-4 rounded-xl border border-outline-variant">
              <div className="font-label-mono text-caption text-outline mb-2 font-bold">CORE CONTRACTS</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-orange-500/10 text-orange-700 border-orange-500/20 hover:scale-105 transition-transform">Rust</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-violet-500/10 text-violet-700 border-violet-500/20 hover:scale-105 transition-transform">Soroban SDK</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-outline-variant">
              <div className="font-label-mono text-caption text-outline mb-2 font-bold">REALTIME DATA</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-teal-500/10 text-teal-700 border-teal-500/20 hover:scale-105 transition-transform">Node.js</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-indigo-500/10 text-indigo-700 border-indigo-500/20 hover:scale-105 transition-transform">Socket.io</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-outline-variant">
              <div className="font-label-mono text-caption text-outline mb-2 font-bold">CLOUD STORAGE</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-amber-500/10 text-amber-700 border-amber-500/20 hover:scale-105 transition-transform">Firestore</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-sky-500/10 text-sky-700 border-sky-500/20 hover:scale-105 transition-transform">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Snippets */}
      <section className="mb-10">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Gallery & Artifacts</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Dashboard preview card */}
          <div className="col-span-12 md:col-span-8 aspect-video rounded-2xl overflow-hidden border border-outline-variant relative group shadow-sm">
            <img
              alt="Main Dashboard UI"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ29VVOr_5fhmt_qK-h_so0sipy5nSEwDs2VCeutJS5uyAgK9otyFh1JxY3xmhDI19vxIOS6UIjMA7n-F6fAnlWvE18ysntTeiBuf166pn5-NmnX37elS72Dfm5WUgPbnOz_I1MgdeO9qi9RR6WbaJoaYfsIskSghtrK36EXTt0_6pHRnv36C0VDGKjqnw0ooAechxWhEUCk0KN6f9FLtChGGFT3qNYwZiJvbaoS80hSbd7l5w74KY9K7nnIVPVK0TZL6MpoBbb9LF"
            />
            <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/20 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-surface opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all text-5xl">fullscreen</span>
            </div>
          </div>

          {/* Code block card */}
          <div className="col-span-12 md:col-span-4 bg-inverse-surface rounded-2xl p-6 border border-outline-variant/30 flex flex-col h-full shadow-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-error"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary"></div>
              <div className="w-3 h-3 rounded-full bg-primary-fixed"></div>
              <span className="ml-2 font-label-mono text-caption text-surface/40 font-bold">lib.rs</span>
            </div>

            <pre className="font-label-mono text-[11px] leading-relaxed text-surface-variant overflow-x-auto bg-black/30 p-4 rounded-xl border border-white/5 flex-grow">
              <span className="text-primary-fixed-dim">pub fn</span> <span className="text-secondary-fixed">repay</span>(e: Env, user: Address, amount: i128) &#123;{"\n"}
              {"  "}user.require_auth();{"\n"}
              {"  "}<span className="text-surface/40">// Bitmap packing logic</span>{"\n"}
              {"  "}<span className="text-primary-fixed-dim">let mut</span> config: u128 = e.storage().instance(){"\n"}
              {"    "}.get(&DataKey::Config).unwrap();{"\n"}
              {"  "}{"\n"}
              {"  "}<span className="text-primary-fixed-dim">if</span> (config & ACTIVE_MASK) != 0 &#123;{"\n"}
              {"    "}<span className="text-surface/40">// Repayment internal flow</span>{"\n"}
              {"    "}update_position(&e, &user, -amount);{"\n"}
              {"  "}&#125;{"\n"}
              &#125;
            </pre>

            <div className="mt-4 pt-4 border-t border-surface/10 font-label-mono text-[10px] text-surface/40 font-bold">
              Rust / Soroban Smart Contract snippet
            </div>
          </div>

          {/* Network Topology */}
          <div className="col-span-12 md:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden border border-outline-variant relative group">
            <img
              alt="Network Topology"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrKiL4qEsnqhybfuIdcTCZvg556UR08bzF-TsvHaBUa827UFzW3g6hGSec7PEbHNWDUj3IIq1NEPPUAIVQA8MHxDllx_aytuaMLlUR9Dg6qWfGe8Y-YQXFGEGyx-wg72cytLi4r1Z3Tv6R8T-PIXjjPVIAJOLxtFi4AmBy68DquCUYZt0t4DM4JX9PKL-crOErgV_8AxtLCeadtffGtFsRk93dL_0RSkcot2-Fv2HDD2H4KRaxRvpCNa9ZnGm2NS-Vu81s36yV8Lj"
            />
          </div>

          {/* Infrastructure Detail */}
          <div className="col-span-12 md:col-span-6 aspect-[16/10] rounded-2xl overflow-hidden border border-outline-variant relative group">
            <img
              alt="Infrastructure Detail"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoXRT_JRXo4PeRN2b_k_yisx0YXRKcFvvW8hMqpGk_VcR-9WGdlxy0ecSeHcCXkQ79gmIrvXINckxI67IjGKx7huiqjvYV3MLVLJPDtuxSJy0WPxwYIrTX0e9muD89MDudWsnGlhMzsZmiwPupDcx47Z2CEHFDTXlsDjvMCy1dpOz909gu0GvtszMyoaBw2ErnTNOloWuvXQO6bHN2e5A3xXRBBZ6mg9iWbiYx4cTl5bbzvJ0KYoLsURTgqtDss2plGren91SJ_WAx"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
