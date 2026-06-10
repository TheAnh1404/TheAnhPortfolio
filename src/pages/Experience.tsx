import React from "react";
import { motion as fm } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { CheckCircle, Bug, Code } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Hero Title */}
      <section className="mb-20">
        <fm.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-display text-5xl font-bold mb-4"
        >
          Experience & Algorithmics
        </fm.h1>
        <fm.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          Bridging the gap between systematic industrial QA and the high-precision world of competitive programming.
        </fm.p>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Left Side: Vertical Timeline */}
        <div className="lg:col-span-8 relative pl-6 md:pl-8">
          {/* Vertical timeline spine */}
          <div className="absolute left-6 md:left-8 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-outline-variant opacity-30"></div>
          
          <div className="space-y-16">
            {/* Experience Entry 1 */}
            <fm.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-10 md:pl-12 group"
            >
              <div className="absolute left-[-5px] top-2.5 w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
              <BentoCard className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <span className="font-label-mono text-caption text-primary uppercase tracking-wider font-bold">
                      Industrial Internship
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-2xl font-bold text-on-surface mt-1">
                      DevPlus JSC
                    </h3>
                  </div>
                  <span className="font-label-mono text-label-mono bg-surface-container px-3 py-1 rounded-lg text-on-surface font-bold text-caption self-start md:self-center">
                    Jun 2023 — Sep 2023
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Focused on the structural integrity of large-scale datasets and software reliability within the Data Intelligence department.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-semibold text-on-surface">
                        Data Labeling & Processing
                      </h4>
                      <p className="text-on-surface-variant text-body-md leading-relaxed mt-0.5">
                        Engineered systematic pipelines for labeling high-dimensional data used in computer vision models, ensuring 99% accuracy rates.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Bug className="text-primary mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-semibold text-on-surface">
                        Quality Assurance
                      </h4>
                      <p className="text-on-surface-variant text-body-md leading-relaxed mt-0.5">
                        Conducted rigorous regression testing and documented edge-case anomalies for internal project management platforms.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["QA Automation", "Data Sanitization", "SQL", "Jira"].map((t) => (
                    <span key={t} className="bg-surface-variant px-3 py-1 rounded border border-outline-variant font-label-mono text-caption text-on-surface-variant">
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </fm.div>

            {/* Experience Entry 2 */}
            <fm.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative pl-10 md:pl-12 group"
            >
              <div className="absolute left-[-5px] top-2.5 w-3 h-3 rounded-full bg-secondary ring-4 ring-secondary/20 z-10"></div>
              <BentoCard className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <span className="font-label-mono text-caption text-secondary uppercase tracking-wider font-bold">
                      Competitive Programming
                    </span>
                    <h3 className="font-headline-lg text-headline-lg text-2xl font-bold text-on-surface mt-1">
                      VKU Training Team
                    </h3>
                  </div>
                  <span className="font-label-mono text-label-mono bg-surface-container px-3 py-1 rounded-lg text-on-surface font-bold text-caption self-start md:self-center">
                    2022 — Present
                  </span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
                  Active member of the ICPC training cohort, specializing in advanced data structures and algorithmic complexity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant/50">
                    <h4 className="font-label-mono text-label-mono text-primary font-bold mb-2">Graph Theory</h4>
                    <p className="text-caption text-on-surface-variant leading-relaxed">
                      Implementation of Shortest Paths, MST, Flow Networks, and Heavy-Light Decomposition.
                    </p>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant/50">
                    <h4 className="font-label-mono text-label-mono text-primary font-bold mb-2">Dynamic Programming</h4>
                    <p className="text-caption text-on-surface-variant leading-relaxed">
                      Expertise in Bitmask DP, Digit DP, and complex optimization techniques like Convex Hull Trick.
                    </p>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant/50">
                    <h4 className="font-label-mono text-label-mono text-primary font-bold mb-2">Greedy & Math</h4>
                    <p className="text-caption text-on-surface-variant leading-relaxed">
                      Number Theory applications, Combinatorics, and constructive Greedy approaches.
                    </p>
                  </div>
                  <div className="p-4 bg-surface rounded-lg border border-outline-variant/50">
                    <h4 className="font-label-mono text-label-mono text-primary font-bold mb-2">ICPC Regionals</h4>
                    <p className="text-caption text-on-surface-variant leading-relaxed">
                      Participated in national level contests, focusing on team coordination and rapid prototyping.
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["C++", "STL", "Algorithms", "Complexity Analysis"].map((t) => (
                    <span key={t} className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded border border-secondary/20 font-label-mono text-caption">
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </fm.div>
          </div>
        </div>

        {/* Right Side: Stats & Highlights */}
        <div className="lg:col-span-4 space-y-gutter mt-12 lg:mt-0">
          {/* Performance Metrics Card */}
          <BentoCard className="p-6 bg-surface-container-high">
            <h4 className="font-label-mono text-label-mono mb-6 text-on-surface-variant font-bold uppercase tracking-wider">
              Performance Metrics
            </h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-caption font-label-mono mb-1.5 font-bold">
                  <span>Codeforces Max Rating</span>
                  <span>1400+</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <fm.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "65%" }}
                    viewport={{ once: true }}
                    className="bg-primary h-full rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-caption font-label-mono mb-1.5 font-bold">
                  <span>Problems Solved</span>
                  <span>500+</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <fm.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    className="bg-primary h-full rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-caption font-label-mono mb-1.5 font-bold">
                  <span>QA Accuracy</span>
                  <span>99.2%</span>
                </div>
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <fm.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.2%" }}
                    viewport={{ once: true }}
                    className="bg-secondary h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Visual code block snippet */}
          <div className="relative aspect-square rounded-xl overflow-hidden group border border-outline-variant">
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-60 z-10"></div>
            <img 
              alt="Code visualization" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ_yrw0NMyt1wrj-NMHVacoS4OQMCDqPI93wY7IxDDU4VXHUDkvSXd2mZaPlALZ0KGp0ZpKThx-SsOJ3xj4Cuvp2DpLXn4DaAzuDpbykLTxdk4nCrRrtIdBWcK7ITcuHBkhLOzcOyiQ1DclhWw1wyCmIYpTnlI4Cg99EIPnhzdC-oX4p2hfUYMy22486qM-7saKw77zaXzOHIY0k7co-WtM2scy_YyNcXi09JcA3UUAumCJz1pfp8WAYPbruf1GXvockjk4nOVXiJ"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <p className="font-label-mono text-white text-caption bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                // Optimizing Dijkstra's with priority_queue
              </p>
            </div>
          </div>

          {/* Philosophy quote */}
          <div className="bg-inverse-surface text-inverse-on-surface p-6 rounded-xl border border-outline/10">
            <Code className="text-primary-fixed mb-4 w-8 h-8" />
            <h4 className="font-headline-md text-headline-md font-bold mb-2">Technical Philosophy</h4>
            <p className="font-body-md text-surface-variant opacity-80 italic leading-relaxed">
              "Correctness is not an afterthought; it is the foundation. Whether it's a data label or a competitive edge case, the system only works when every bit is accounted for."
            </p>
          </div>
        </div>
      </div>

      {/* Awards / Certificates Section */}
      <section className="mt-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-8">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard className="p-6 hover:bg-surface-container transition-colors" delay={0.1}>
            <span className="font-label-mono text-primary text-caption font-bold">2023</span>
            <h4 className="font-headline-md text-headline-md font-bold mt-2">Excellent Intern Award</h4>
            <p className="text-caption text-on-surface-variant mt-2 leading-relaxed">
              DevPlus JSC — Recognition for highest QA accuracy in the summer cohort.
            </p>
          </BentoCard>
          <BentoCard className="p-6 hover:bg-surface-container transition-colors" delay={0.2}>
            <span className="font-label-mono text-primary text-caption font-bold">2022</span>
            <h4 className="font-headline-md text-headline-md font-bold mt-2">ICPC National Finalist</h4>
            <p className="text-caption text-on-surface-variant mt-2 leading-relaxed">
              Represented VKU at the Vietnam ICPC National Contest.
            </p>
          </BentoCard>
          <BentoCard className="p-6 hover:bg-surface-container transition-colors" delay={0.3}>
            <span className="font-label-mono text-primary text-caption font-bold">2024</span>
            <h4 className="font-headline-md text-headline-md font-bold mt-2">Top 5 VKU Coding Cup</h4>
            <p className="text-caption text-on-surface-variant mt-2 leading-relaxed">
              Demonstrated exceptional proficiency in Dynamic Programming challenges.
            </p>
          </BentoCard>
        </div>
      </section>
    </div>
  );
};
