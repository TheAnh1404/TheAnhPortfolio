import React from "react";
import { Link } from "react-router-dom";
import { BentoCard } from "../../components/BentoCard";
import { 
  ArrowLeft, Terminal
} from "lucide-react";

export const VioTune: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Back to Projects */}
      <div className="mb-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 font-label-mono text-caption text-primary font-bold hover:underline"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Engineering Systems
        </Link>
      </div>

      {/* Hero Section */}
      <header className="mb-20 text-center md:text-left">
        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
          <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant font-label-mono text-caption rounded-full font-bold border border-primary/10">
            Case Study v1.0
          </span>
          <span className="text-outline">•</span>
          <span className="font-label-mono text-caption text-on-surface-variant font-bold">
            Machine Learning / Full Stack
          </span>
        </div>
        <h1 className="font-display text-display text-5xl font-bold mb-4">VioTune</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          An intelligent music discovery platform leveraging hybrid recommendation algorithms to solve the cold-start problem and deliver hyper-personalized sonic experiences.
        </p>
      </header>

      {/* System Architecture */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-8">System Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter items-center relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-outline-variant/50 -z-10"></div>
          
          <BentoCard className="p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-primary mb-4 text-4xl">devices</span>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">React Frontend</h3>
            <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
              Real-time state management & player controls
            </p>
          </BentoCard>
          
          <BentoCard className="p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary mb-4 text-4xl">api</span>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">FastAPI Gateway</h3>
            <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
              Asynchronous I/O & high-throughput request handling
            </p>
          </BentoCard>
          
          <BentoCard className="p-8 flex flex-col items-center text-center ring-2 ring-primary/20 shadow-lg">
            <span className="material-symbols-outlined text-tertiary mb-4 text-4xl">psychology</span>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Rec Engine</h3>
            <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
              Hybrid SVD + KNN Model Processing
            </p>
          </BentoCard>
          
          <BentoCard className="p-8 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-on-surface mb-4 text-4xl">analytics</span>
            <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Rank & Score</h3>
            <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
              Probability thresholding & content filtering
            </p>
          </BentoCard>
        </div>
      </section>

      {/* Bento Tech Stack & Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-20">
        <BentoCard className="md:col-span-2 p-8">
          <h3 className="font-headline-lg text-headline-lg text-3xl font-bold mb-6">The Tech Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="font-label-mono text-caption text-outline mb-3 font-bold uppercase tracking-wide">Backend & ML</p>
              <ul className="space-y-2 font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Python (FastAPI)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Scikit-Learn
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Pandas / NumPy
                </li>
              </ul>
            </div>
            <div>
              <p className="font-label-mono text-caption text-outline mb-3 font-bold uppercase tracking-wide">Frontend</p>
              <ul className="space-y-2 font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> React (Hooks)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Framer Motion
                </li>
              </ul>
            </div>
            <div>
              <p className="font-label-mono text-caption text-outline mb-3 font-bold uppercase tracking-wide">Data & Infra</p>
              <ul className="space-y-2 font-body-md text-on-surface-variant">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Redis (Caching)
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> PostgreSQL
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full"></span> Docker
                </li>
              </ul>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="bg-primary text-on-primary p-8 flex flex-col justify-between border border-primary/20">
          <div>
            <span className="material-symbols-outlined mb-4 text-3xl">speed</span>
            <h4 className="font-headline-md text-headline-md font-bold mb-2">Inference Speed</h4>
            <p className="font-body-md opacity-80 leading-relaxed">Latency optimized for sub-150ms recommendation responses.</p>
          </div>
          <div className="font-display text-display text-5xl font-bold">124ms</div>
        </BentoCard>
      </section>

      {/* Technical Deep-Dive */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-6">Personalization Engine</h2>
          <div className="space-y-6">
            <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-primary shadow-sm border border-outline-variant/30">
              <h4 className="font-label-mono text-label-mono font-bold mb-2 text-on-surface">Collaborative Filtering (SVD)</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Using Singular Value Decomposition to uncover latent features in user-item interactions, allowing for accurate discovery based on cross-user patterns.
              </p>
            </div>
            <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-secondary shadow-sm border border-outline-variant/30">
              <h4 className="font-label-mono text-label-mono font-bold mb-2 text-on-surface">Content-Based KNN</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Addressing the 'Cold Start' problem by utilizing K-Nearest Neighbors on track metadata (BPM, Energy, Key) to suggest songs to new users immediately.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-square bg-inverse-surface rounded-2xl overflow-hidden shadow-2xl group border border-outline/10">
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply opacity-50 z-10" />
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-103 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOoeYHGq6ZP-TcAZ4IsDimthWESoyAMP_VmzZhSp011JiVwHzX9ulrVk_Dhlc9Tdynuwt6-3-Ie9TfdQipnQJLvAntE1PkIi4_oejj2N9I7PjzsYX2RsFFGVFaz3LFPERmTi0Fe9buv4v-Uq1IBOnof04BfGnxCu_z83zEcuM9YzXmyw9mhVX1O-Z4i3laQhrYwcYd8FpUCDcklBPXMvB9wCWEp4AFOd8pH0--Mx32MDPg3RVqIrdddDN9em2oJ6EUhRQZM6jpVlIc"
            alt="Data space visualization"
          />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-gradient-to-t from-black/80 to-transparent z-20">
            <p className="font-label-mono text-label-mono text-surface font-bold">Visualizing the Latent Space Traversal</p>
          </div>
        </div>
      </section>

      {/* UI Preview */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12 text-center">Interface Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          {/* Mobile View */}
          <div className="md:col-span-4 flex justify-center mb-8 md:mb-0">
            <div className="w-[280px] h-[580px] bg-black rounded-[40px] border-[8px] border-outline-variant p-4 relative shadow-2xl overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
              <img 
                className="absolute inset-0 w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP-sh1PBYrDiXDYH7vZyGO16nrgTw-iqtBtGnKt8EesHI0VZsSLds4XIYY3Oa2-w2Cj8pH2vOAELfQiBGSq4DMpFia6mmb22CXi-SAtI99pzOTa5UWQO3e4nSAJwITF_nlJlqWodxLlyEyaLYQo2wWB-exUnhuUcoGo4EFugayUPTabkBFl643-TYeyhVApVSJ6pbWxu7gaESrGdg-WNk_5LcYvzsLsdWa_KkQTf6Zr3YsstcPsIblRXakUy7y0CLZoKmzcYRlSDc_"
                alt="Mobile App View"
              />
              <div className="relative z-10 h-full flex flex-col justify-end pb-8">
                <div className="bg-surface/20 p-4 rounded-2xl backdrop-blur-md border border-white/10">
                  <p className="font-label-mono text-caption text-surface font-bold text-center">Mobile Optimized Discovery</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop View */}
          <div className="md:col-span-8">
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-2xl overflow-hidden aspect-video relative group">
              <div className="absolute top-0 w-full h-8 bg-surface-container border-b border-outline-variant flex items-center px-4 gap-2 z-20">
                <div className="w-3 h-3 rounded-full bg-error/40"></div>
                <div className="w-3 h-3 rounded-full bg-on-surface-variant/20"></div>
                <div className="w-3 h-3 rounded-full bg-primary/20"></div>
              </div>
              <img 
                className="w-full h-full object-cover pt-8" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCprutWFukzkUCAwEEYEH2Ds4xL_imSRp_Z19Qt_-7ae7oF4YzfxCmESrXt2djwTJmwsj2XAo_VhpCLDQWfAbNN1q-1_D_r5Vcyn-mwD6r-Q0Fv-QTYhaJVEPnAuCJycKHvroAhZrlSQ0HEJ3jJWP25-mDnwvBRYXbYMmqL4GwikhVnnIYb-ObWnsy1PCUOdO6O10A-y7k9qvYrO8X_OmkyEF2M4f9X2cFuyXGmmsrzSwQQtjMxNY4B3ACSkK1tsR3sNUSM_cFIv3NI"
                alt="Desktop Dashboard View"
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                <button 
                  onClick={() => alert("Launching Prototype...")}
                  className="bg-surface text-on-surface px-6 py-3 rounded-xl font-label-mono shadow-xl flex items-center gap-2 border border-outline-variant font-bold hover:bg-surface-container-low transition-colors"
                >
                  Launch Prototype
                </button>
              </div>
            </div>
            <p className="mt-6 font-body-md text-on-surface-variant italic text-center">
              Comprehensive dashboard featuring real-time collaborative filtering feedback.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Footer Link */}
      <section className="bg-primary-container text-on-primary-container p-12 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 border border-primary/10">
        <div className="text-center md:text-left">
          <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-2">Interested in the logic?</h2>
          <p className="font-body-md opacity-90 leading-relaxed">Deep-dive into the Jupyter Notebooks and API documentation on GitHub.</p>
        </div>
        <div className="flex gap-4">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              alert("Opening GitHub notebooks...");
            }}
            className="bg-surface text-primary px-8 py-4 rounded-xl font-label-mono flex items-center gap-2 hover:bg-surface-container-high transition-colors font-bold shadow-sm"
          >
            <Terminal className="w-4 h-4" /> View Source
          </a>
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              alert("Opening Case documentation...");
            }}
            className="border border-white/20 text-white px-8 py-4 rounded-xl font-label-mono hover:bg-white/10 transition-colors font-bold"
          >
            Case Documentation
          </a>
        </div>
      </section>
    </div>
  );
};
