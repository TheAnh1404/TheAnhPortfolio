import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BentoCard } from "../../components/BentoCard";
import {
  ArrowLeft, Brain, Music, Sparkles,
  Activity, Zap, Layers, Code as CodeIcon,
  PlayCircle, Disc
} from "lucide-react";

export const VioTune: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto selection:bg-secondary/20">
      {/* Back to Projects */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 font-label-mono text-caption text-secondary font-bold hover:gap-3 transition-all"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-label-mono text-[11px] mb-8 font-bold border border-secondary/20 shadow-sm shadow-secondary/5">
              <Sparkles className="w-4 h-4" />
              INTELLIGENT AUDIO DISCOVERY
            </div>
            <h1 className="font-display text-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Vio<span className="text-secondary italic">Tune</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              A state-of-the-art music streaming platform powered by a hybrid recommendation engine. Leveraging SVD Matrix Factorization and KNN algorithms to deliver hyper-personalized auditory experiences.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/TheAnh1404/VioTune"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-label-mono text-label-mono bg-on-surface text-surface px-8 py-4 rounded-xl hover:bg-inverse-surface transition-all hover:scale-[1.02] font-bold shadow-lg"
              >
                <CodeIcon className="w-4.5 h-4.5" />
                View Source
              </a>
              <div className="flex items-center gap-4 px-6 py-4 rounded-xl bg-surface-container border border-outline-variant/30">
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] font-bold text-secondary uppercase">ML Engine</span>
                  <span className="font-display font-bold">Hybrid SVD + KNN</span>
                </div>
                <div className="w-px h-8 bg-outline-variant/30"></div>
                <div className="flex flex-col">
                  <span className="font-label-mono text-[10px] font-bold text-primary uppercase">Response</span>
                  <span className="font-display font-bold">&lt; 150ms</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Banner Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative w-full h-[600px] rounded-[40px] overflow-hidden border border-outline-variant/30 bg-surface-container-highest flex items-center justify-center shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10 z-10" />
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0" 
            src="/Infor/Viotune/Cover.png" 
            alt="VioTune Cover"
          />
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/10 transition-colors duration-500"></div>

          <div className="absolute bottom-10 left-10 z-30">
            <div className="font-label-mono text-white/70 text-xs font-bold uppercase tracking-[0.3em] mb-3">HYBRID AI ENGINE</div>
            <div className="font-display text-white text-4xl md:text-5xl font-bold max-w-xl leading-tight">
              Personalized <br />
              <span className="text-secondary italic">Harmonies</span>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Technical Stack */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16 px-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-headline-lg text-4xl font-bold mb-4 tracking-tight">Technical Stack</h2>
            <p className="text-on-surface-variant font-body-md leading-relaxed">
              Decoupled architecture connecting a high-performance Python ML service with a responsive React dashboard.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.1}>
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shadow-inner">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">FastAPI Backend</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">High-concurrency asynchronous endpoints for real-time inference and data processing.</p>
              </div>
           </BentoCard>

           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.2}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-inner">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">Surprise & Scikit</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Leveraging SVD Matrix Factorization and KNN for sophisticated user-item interaction modeling.</p>
              </div>
           </BentoCard>

           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.3}>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">Pandas & NumPy</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Vectorized data manipulations ensuring near-instantaneous recommendation generations.</p>
              </div>
           </BentoCard>

           <BentoCard className="p-8 flex flex-col gap-6 bg-surface-container-low" delay={0.4}>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shadow-inner">
                <CodeIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-headline-md font-bold mb-2">React Dashboard</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">Glassmorphic UI with immersive animations designed for high user engagement.</p>
              </div>
           </BentoCard>
        </div>
      </section>

      {/* Deep Dive - ML Logic */}
      <section className="mb-32">
        <div className="mb-16 px-4 text-center md:text-left">
          <h2 className="font-display text-headline-lg text-4xl font-bold mb-4">Recommendation Logic</h2>
          <p className="text-on-surface-variant max-w-2xl font-body-md">The Hybrid Reciprocal Rank Scoring system.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter px-4">
          {/* Collaborative Filtering */}
          <BentoCard className="lg:col-span-6 p-10 flex flex-col justify-between" delay={0.1}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Activity className="w-6 h-6 text-secondary" />
                <h3 className="font-display text-2xl font-bold">Collaborative Filtering (CF)</h3>
              </div>
              
              <p className="text-on-surface-variant mb-10 leading-relaxed font-body-md">
                Analyzes user interaction patterns using **SVD (Singular Value Decomposition)**. By factorizing the user-item matrix, we discover latent features that connect users with similar tastes.
              </p>

              <div className="p-6 rounded-2xl bg-inverse-surface text-surface border border-outline-variant/10">
                 <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="font-label-mono text-[10px] font-bold text-secondary uppercase tracking-widest">SVD LATENT SPACE</span>
                 </div>
                 <div className="grid grid-cols-4 gap-2 opacity-40">
                    {Array.from({length: 8}).map((_, i) => (
                      <div key={i} className="h-8 bg-surface/20 rounded border border-white/10 flex items-center justify-center text-[10px] font-label-mono">
                        {Math.random().toFixed(2)}
                      </div>
                    ))}
                 </div>
                 <p className="mt-4 text-[11px] font-label-mono text-surface/60 italic">Dimensionality reduction discover patterns impossible for manual tagging.</p>
              </div>
            </div>
          </BentoCard>

          {/* Content-Based Filtering */}
          <BentoCard className="lg:col-span-6 p-10 flex flex-col justify-between bg-surface-container-low" delay={0.2}>
             <div>
                <div className="flex items-center gap-3 mb-8">
                  <Music className="w-6 h-6 text-primary" />
                  <h3 className="font-display text-2xl font-bold">Content-Based (CBF)</h3>
                </div>
                <p className="text-on-surface-variant mb-10 leading-relaxed font-body-md">
                  Uses **K-Nearest Neighbors (KNN)** and **Cosine Similarity** to recommend songs with similar acoustic signatures—genre, tempo, energy, and instrumentation.
                </p>

                <div className="space-y-4">
                   {['Lofi Chill', 'Deep House', 'Neo Soul'].map((genre, i) => (
                     <div key={genre} className="flex items-center justify-between p-4 rounded-xl bg-white border border-outline-variant/30">
                        <span className="text-sm font-bold">{genre}</span>
                        <div className="flex items-center gap-2">
                           <div className="w-24 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${95 - i * 15}%` }}
                                transition={{ duration: 1, delay: i * 0.2 }}
                                className="h-full bg-primary" 
                              />
                           </div>
                           <span className="text-[10px] font-label-mono font-bold">{(95 - i * 15) / 100}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </BentoCard>
        </div>
      </section>

      {/* Artifact Gallery */}
      <section className="mb-32">
        <h2 className="font-display text-headline-lg text-4xl font-bold mb-16 px-4">Artifact Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4">
          {/* Main Interface */}
          <div className="col-span-12 md:col-span-7 aspect-video rounded-[32px] overflow-hidden border border-outline-variant relative group shadow-xl bg-surface-container-low">
            <img
              alt="VioTune Onboarding"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              src="/Infor/Viotune/Onboarding.png"
            />
            <div className="absolute top-6 left-6 z-20">
               <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white font-label-mono text-[10px] font-bold rounded-lg border border-white/10 uppercase tracking-widest">
                 UX Onboarding
               </span>
            </div>
          </div>

          {/* Feature Card */}
          <div className="col-span-12 md:col-span-5 rounded-[32px] bg-secondary-fixed text-on-secondary-fixed p-10 flex flex-col relative overflow-hidden group shadow-2xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] rounded-full"></div>
             <PlayCircle className="text-on-secondary-fixed w-12 h-12 mb-8 group-hover:scale-110 transition-transform" />
             <h4 className="font-display text-2xl font-bold mb-4 text-on-secondary-fixed">Immersive Playback</h4>
             <p className="font-body-md text-sm leading-relaxed mb-10 opacity-80">
                A seamless audio experience integrated with visual feedback that reacts to the genre and mood of the current track.
             </p>
             <div className="mt-auto flex items-center gap-4 p-4 rounded-2xl bg-white/10 border border-white/10">
                <Disc className="w-8 h-8 animate-spin-slow" />
                <div>
                   <div className="text-xs font-bold uppercase tracking-widest opacity-60">Currently Analyzing</div>
                   <div className="text-sm font-bold">Signal Correction Active</div>
                </div>
             </div>
          </div>

          {/* Secondary Image */}
          <div className="col-span-12 md:col-span-12 aspect-[21/9] rounded-[32px] overflow-hidden border border-outline-variant bg-surface-container relative group">
             <img
               alt="VioTune Interface"
               className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
               src="/Infor/Viotune/engin-akyurt-Hlkuojv_P6I-unsplash (1).png"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-10">
                <div>
                   <h4 className="text-white text-2xl font-bold font-display mb-2">High-Fidelity Interaction</h4>
                   <p className="text-white/60 text-sm max-w-lg">Responsive designs ensuring that discovery is as intuitive as it is beautiful.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="mt-20 py-20 border-t border-outline-variant/30 text-center px-4">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
         >
           <h3 className="font-display text-4xl font-bold mb-8">Ready to hear the future?</h3>
           <div className="flex flex-wrap justify-center gap-6">
             <a
               href="https://github.com/TheAnh1404/VioTune"
               target="_blank"
               rel="noopener noreferrer"
               className="px-10 py-5 bg-on-surface text-surface rounded-2xl font-bold flex items-center gap-3 hover:bg-inverse-surface transition-all shadow-xl"
             >
               <CodeIcon className="w-5 h-5" /> Explore the Engine
             </a>
             <button
               onClick={() => alert("Deployment in progress")}
               className="px-10 py-5 border border-outline text-on-surface rounded-2xl font-bold hover:bg-surface-container transition-all"
             >
               Live Beta
             </button>
           </div>
         </motion.div>
      </footer>
    </div>
  );
};
