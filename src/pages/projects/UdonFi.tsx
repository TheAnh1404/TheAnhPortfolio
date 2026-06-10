import React from "react";
import { Link } from "react-router-dom";
import { BentoCard } from "../../components/BentoCard";
import { 
  ArrowLeft, Award, Link as LinkIcon, Code as CodeIcon,
  User, Terminal, Layout, Sparkles
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
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Opening Live Prototype Demo...");
              }}
              className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface border border-outline px-6 py-3 rounded-xl hover:bg-surface-container transition-colors font-bold"
            >
              <LinkIcon className="w-4.5 h-4.5" />
              Live Demo
            </a>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Opening GitHub Repository...");
              }}
              className="flex items-center gap-2 font-label-mono text-label-mono bg-on-surface text-surface px-6 py-3 rounded-xl hover:bg-inverse-surface transition-colors font-bold"
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
          <BentoCard className="p-8 flex flex-col gap-6">
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
                <span>2.5s Transaction Finality</span>
              </li>
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
                <span>Mobile-First Dashboard</span>
              </li>
            </ul>
          </BentoCard>

          {/* Engineering Value */}
          <BentoCard className="p-8 flex flex-col gap-6">
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
                <span>Soroban SDK Integration</span>
              </li>
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                <span>98% Test Coverage</span>
              </li>
            </ul>
          </BentoCard>

          {/* Business Value */}
          <BentoCard className="p-8 flex flex-col gap-6">
            <div className="w-12 h-12 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center">
              <Layout className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-2 text-on-surface">Business Logic</h3>
              <p className="text-on-surface-variant font-body-md leading-relaxed">Protocol-controlled value (PCV) mechanics and automated TTL management ensuring long-term sustainability.</p>
            </div>
            <ul className="space-y-3 mt-auto border-t border-outline-variant/30 pt-6">
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                <span>Auditable Open-Source</span>
              </li>
              <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-bold">
                <span className="material-symbols-outlined text-tertiary text-[18px]">check_circle</span>
                <span>Revenue Sharing Model</span>
              </li>
            </ul>
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
                  <div className="font-label-mono text-caption text-surface/60 font-bold uppercase tracking-wider">Client UI</div>
                </div>
                
                <span className="material-symbols-outlined text-surface/30 hidden md:block text-2xl">arrow_forward</span>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="px-6 py-4 rounded-xl bg-primary text-surface border border-primary-container shadow-xl">
                    <div className="font-label-mono text-label-mono font-bold">Soroban VM</div>
                    <div className="text-[10px] opacity-70 font-label-mono">Smart Contracts</div>
                  </div>
                  <div className="font-label-mono text-caption text-surface/60 font-bold uppercase tracking-wider">Rust Core</div>
                </div>
                
                <span className="material-symbols-outlined text-surface/30 hidden md:block text-2xl">arrow_forward</span>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl bg-surface/10 border border-surface/20 flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-surface text-4xl">database</span>
                  </div>
                  <div className="font-label-mono text-caption text-surface/60 font-bold uppercase tracking-wider">Node.js Indexer</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1 space-y-4">
            <div className="p-4 rounded-xl border border-outline-variant">
              <div className="font-label-mono text-caption text-outline mb-2 font-bold">CORE</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-lg font-label-mono text-caption border border-outline-variant/30 font-bold">Rust</span>
                <span className="px-3 py-1 bg-surface-container rounded-lg font-label-mono text-caption border border-outline-variant/30 font-bold">Soroban</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-outline-variant">
              <div className="font-label-mono text-caption text-outline mb-2 font-bold">INDEXING</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-lg font-label-mono text-caption border border-outline-variant/30 font-bold">Node.js</span>
                <span className="px-3 py-1 bg-surface-container rounded-lg font-label-mono text-caption border border-outline-variant/30 font-bold">Socket.IO</span>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-outline-variant">
              <div className="font-label-mono text-caption text-outline mb-2 font-bold">INFRA</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container rounded-lg font-label-mono text-caption border border-outline-variant/30 font-bold">Firestore</span>
                <span className="px-3 py-1 bg-surface-container rounded-lg font-label-mono text-caption border border-outline-variant/30 font-bold">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Challenges */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Technical Challenges</h2>
        <div className="space-y-6">
          {/* Challenge 1 */}
          <BentoCard className="p-8 hover:bg-surface-container-low transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center font-label-mono text-label-mono bg-on-surface text-surface rounded-full font-bold">
                01
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
                  Bitmap Packing for u128 Optimization
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Soroban storage costs are priced per entry. To minimize costs, I implemented a bitmap packing strategy that consolidates multiple user configuration flags and small integers into a single <code className="bg-surface-variant px-2.5 py-0.5 rounded font-label-mono text-caption">u128</code> storage slot. This reduced the gas consumption for core protocol operations by approximately 40%.
                </p>
                <div className="flex gap-4">
                  <span className="text-caption font-label-mono text-primary flex items-center gap-1 font-bold">
                    <Sparkles className="w-3.5 h-3.5" /> Logic Architecture
                  </span>
                  <span className="text-caption font-label-mono text-secondary flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[16px]">speed</span> Performance Gain
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Challenge 2 */}
          <BentoCard className="p-8 hover:bg-surface-container-low transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center font-label-mono text-label-mono bg-on-surface text-surface rounded-full font-bold">
                02
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
                  Real-time Health Factor Logic
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Calculating a user's health factor requires real-time price feeds and complex fixed-point arithmetic. I developed a high-precision math library within the Rust contracts to prevent rounding errors during liquidations, ensuring the protocol remains solvent even during high volatility.
                </p>
                <div className="flex gap-4">
                  <span className="text-caption font-label-mono text-primary flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[16px]">calculate</span> Fixed-point Math
                  </span>
                  <span className="text-caption font-label-mono text-secondary flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[16px]">security</span> Solvency Protection
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Challenge 3 */}
          <BentoCard className="p-8 hover:bg-surface-container-low transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center font-label-mono text-label-mono bg-on-surface text-surface rounded-full font-bold">
                03
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
                  Automated TTL Extension
                </h3>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  In Stellar Soroban, ledger entries have a Time To Live (TTL). If not extended, data is archived. I built an automated "sweeper" mechanism that monitors and extends the TTL of critical protocol state during every user interaction, preventing accidental data loss.
                </p>
                <div className="flex gap-4">
                  <span className="text-caption font-label-mono text-primary flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[16px]">update</span> Auto-Maintenance
                  </span>
                  <span className="text-caption font-label-mono text-secondary flex items-center gap-1 font-bold">
                    <span className="material-symbols-outlined text-[16px]">inventory_2</span> Data Persistence
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>
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
