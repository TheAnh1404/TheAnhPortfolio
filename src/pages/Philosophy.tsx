import React, { useState } from "react";
import { motion } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import {
  GitBranch, Terminal, Shield,
  Send, Cloud, Cpu, ArrowUpRight,
  Mail, Phone, MapPin, Globe,
  Layers, Database, Zap,
  RefreshCcw, Code2, Rocket, Brain,
  Lightbulb, Target, Heart, Sparkles
} from "lucide-react";

// Inline SVG icons for brand logos (not available in lucide-react)
const GithubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Philosophy: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill out all fields before sending.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
      alert("Message sent successfully! Nguyen The Anh will reach out shortly.");
    }, 1500);
  };

  // Philosophy pillars data
  const pillars = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Build Real Products",
      description: "Code without context is just text. Every technical decision must serve the ultimate user goal — from UdonFi's lending protocol to VioTune's recommendation engine.",
      color: "primary",
      metric: "Product-First Mindset",
      tags: ["UdonFi", "VioTune", "LaBouffe"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Learn Through Systems",
      description: "Understanding how a request travels from client to database is essential. This holistic view enables better debugging and architectural foresight across the full stack.",
      color: "secondary",
      metric: "Systems Thinking",
      tags: ["NestJS", "FastAPI", "Soroban"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Focus On Fundamentals",
      description: "Frameworks fade, but fundamentals endure. Deep understanding of data structures, algorithms, and protocols — sharpened through ICPC training — allows for precise adaptation.",
      color: "tertiary",
      metric: "Core Mastery",
      tags: ["DSA", "Graph Theory", "DP"]
    }
  ];

  // Roadmap items
  const roadmapItems = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced Containerization",
      description: "Mastering multi-stage builds, Kubernetes orchestration, and optimizing images for edge deployment and security compliance.",
      progress: 75,
      label: "DOCKER & K8S",
      size: "large"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Security",
      description: "Deepening expertise in formal verification, audit methodologies, and secure DeFi protocol design on Stellar Soroban.",
      progress: 80,
      label: "WEB3 SECURITY",
      size: "medium"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Infrastructure",
      description: "Transitioning from monolithic hosting to elastic, distributed cloud architectures. Focusing on serverless compute and global content delivery.",
      progress: 60,
      label: "AWS / CLOUD",
      size: "medium"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-24">
      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 01 / PRINCIPLES: Engineering Philosophy   */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="mb-32">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label-mono font-bold mb-6"
          >
            <Zap className="w-3.5 h-3.5" /> 01 / PRINCIPLES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display text-5xl md:text-6xl font-bold tracking-tight mb-8"
          >
            Engineering <span className="text-primary italic">Philosophy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl"
          >
            Software engineering is the management of complexity to deliver tangible value.
            My approach is rooted in three core pillars that define how I architect systems
            and solve problems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <BentoCard
              key={pillar.title}
              className="p-8 flex flex-col justify-between relative overflow-hidden group"
              delay={0.1 + index * 0.1}
            >
              {/* Glow effect */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-${pillar.color}/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-${pillar.color}/10 transition-colors pointer-events-none`} />

              <div className="relative z-10">
                <div className={`w-12 h-12 bg-${pillar.color}/10 rounded-xl flex items-center justify-center text-${pillar.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {pillar.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-on-surface mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed mb-6 opacity-85">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-auto relative z-10">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 bg-${pillar.color}/5 text-${pillar.color} rounded-md text-[9px] font-label-mono font-bold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="pt-4 border-t border-outline-variant/30">
                  <div className="flex gap-1.5 overflow-hidden">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={`h-1 flex-1 bg-${pillar.color}/15 rounded-full`}>
                        <motion.div
                          className={`h-full bg-${pillar.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.1 * i + index * 0.15 }}
                        />
                      </div>
                    ))}
                  </div>
                  <p className={`font-label-mono text-[9px] text-${pillar.color} font-bold mt-2 uppercase`}>
                    {pillar.metric}
                  </p>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 02 / EVOLUTION: Technical Vision          */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="mb-32">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-label-mono font-bold mb-6"
          >
            <GitBranch className="w-3.5 h-3.5" /> 02 / EVOLUTION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-headline-lg text-4xl md:text-5xl font-bold tracking-tight"
          >
            Technical <span className="text-secondary italic">Vision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant max-w-xl mt-4 text-sm font-body-md"
          >
            Continuously expanding my engineering toolkit — from containerization to cloud-native architectures and smart contract security.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Advanced Containerization — Large card */}
          <BentoCard className="md:col-span-7 p-8 relative overflow-hidden group border-none !bg-surface-container-high/40" delay={0.1}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    Advanced Containerization
                  </h3>
                </div>
                <p className="text-on-surface-variant text-body-md text-sm leading-relaxed mb-8 max-w-md opacity-85">
                  Mastering multi-stage builds, orchestration with Kubernetes, and optimizing images for edge deployment and security compliance.
                </p>
              </div>
              <div className="space-y-3 mt-auto">
                <div className="flex justify-between text-[10px] font-label-mono font-bold text-on-surface">
                  <span className="flex items-center gap-1.5"><Terminal className="w-3 h-3 text-primary" /> DOCKER & K8S</span>
                  <span className="text-primary">75%</span>
                </div>
                <div className="w-full bg-surface-container-high h-2.5 rounded-full overflow-hidden border border-outline-variant/20">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-primary h-full rounded-full shadow-[0_0_10px_rgba(0,74,198,0.3)]"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CI/CD — Dark inverted card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 p-8 bg-inverse-surface text-inverse-on-surface rounded-2xl flex flex-col justify-between border border-outline/10 relative overflow-hidden group shadow-xl"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
            <div>
              <span className="font-label-mono text-[10px] text-primary-fixed mb-2 block uppercase font-bold tracking-widest">
                Automated Pipeline
              </span>
              <h3 className="font-headline-md text-2xl font-bold mb-4 text-white">
                Full Spectrum CI/CD
              </h3>
              <p className="text-surface-variant text-sm leading-relaxed opacity-70">
                Architecting zero-downtime deployment pipelines using GitHub Actions and Terraform for Infrastructure as Code (IaC).
              </p>
            </div>
            <div className="mt-8 flex gap-4 text-primary-fixed">
              <RefreshCcw className="w-8 h-8 animate-spin" style={{ animationDuration: '3s' }} />
              <Zap className="w-8 h-8 text-amber-400" />
            </div>
          </motion.div>

          {/* Cloud Infrastructure — Full-width card */}
          <BentoCard className="md:col-span-12 p-8 flex flex-col md:flex-row items-center gap-12 border-none !bg-surface-container-low/50" delay={0.3}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Cloud className="w-7 h-7" />
                <h3 className="font-headline-md text-2xl font-bold text-on-surface">
                  Cloud Infrastructure Scaling
                </h3>
              </div>
              <p className="text-on-surface-variant mb-8 text-sm leading-relaxed max-w-2xl">
                Transitioning from monolithic hosting to elastic, distributed cloud architectures on AWS. Focusing on serverless compute and global content delivery.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Zap className="w-3.5 h-3.5" />, text: "AWS Lambda / Serverless" },
                  { icon: <Globe className="w-3.5 h-3.5" />, text: "Global Edge Distribution" },
                  { icon: <Shield className="w-3.5 h-3.5" />, text: "Infrastructure as Code" },
                  { icon: <Database className="w-3.5 h-3.5" />, text: "Managed DB Systems" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-outline-variant/30 font-label-mono text-[11px] text-on-surface font-bold">
                    <div className="text-primary">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-surface-container-high rounded-[24px] flex items-center justify-center border border-outline-variant/30 relative overflow-hidden shadow-inner group-hover:border-primary/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              {/* Animated cloud nodes */}
              <div className="relative">
                <Cloud className="text-primary w-16 h-16 group-hover:scale-110 transition-transform duration-500" />
                <motion.div
                  className="absolute -top-2 -right-3 w-3 h-3 bg-secondary rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-1 -left-4 w-2.5 h-2.5 bg-tertiary rounded-full"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ */}
      {/* SECTION 03 / CONNECT: Contact                     */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="pt-4" id="contact">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label-mono font-bold mb-6"
          >
            <Send className="w-3.5 h-3.5" /> 03 / CONNECT
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight"
          >
            Get In <span className="text-primary italic">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant max-w-xl mt-4 text-sm font-body-md"
          >
            Interested in discussing system architecture, DeFi protocols, or potential collaborations? Let's connect.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Connection Panel */}
          <div className="lg:col-span-5 space-y-6">
            <BentoCard className="p-8 border-none !bg-surface-container-low/70 h-full flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
              <div className="space-y-7 relative z-10">
                {/* Phone */}
                <a href="tel:+84917363528" className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Phone</p>
                    <p className="font-display text-lg font-bold text-on-surface">+84 917 363 528</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:anhnt.24ite@vku.udn.vn" className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Email</p>
                    <p className="font-display text-lg font-bold text-on-surface">anhnt.24ite@vku.udn.vn</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-5 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary transition-all duration-300 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Location</p>
                    <p className="font-display text-lg font-bold text-on-surface">Da Nang, Vietnam</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12 pt-8 border-t border-outline-variant/30 relative z-10">
                <p className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold mb-5 tracking-widest">Digital Platforms</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/TheAnh1404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-3.5 px-4 bg-surface-container rounded-xl border border-outline-variant/40 hover:border-on-surface hover:bg-on-surface hover:text-surface transition-all duration-300 group/link"
                  >
                    <GithubIcon className="w-5 h-5" />
                    <span className="font-label-mono text-[11px] font-bold">GITHUB</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href="https://linkedin.com/in/theanh1404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-3 py-3.5 px-4 bg-surface-container rounded-xl border border-outline-variant/40 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300 group/link"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                    <span className="font-label-mono text-[11px] font-bold">LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </BentoCard>
          </div>

          {/* Contact Form Panel */}
          <div className="lg:col-span-7">
            <BentoCard className="p-8 md:p-10 border-none !bg-surface-container-high/30 h-full">
              <div className="mb-6">
                <h3 className="font-display text-xl font-bold text-on-surface mb-2">Send a Message</h3>
                <p className="text-on-surface-variant text-xs font-body-md">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold tracking-widest ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl p-4 font-body-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2.5">
                    <label className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold tracking-widest ml-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-surface border border-outline-variant/50 rounded-2xl p-4 font-body-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40"
                      placeholder="name@organization.com"
                    />
                  </div>
                </div>
                <div className="space-y-2.5">
                  <label className="font-label-mono text-[10px] text-on-surface-variant uppercase font-bold tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-surface border border-outline-variant/50 rounded-2xl p-4 font-body-md text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-on-surface-variant/40 resize-none"
                    placeholder="Describe your inquiry or collaboration idea..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full bg-primary text-on-primary py-4.5 rounded-2xl font-label-mono text-label-mono font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 hover:scale-[1.01] shadow-lg shadow-primary/15 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitted ? (
                    <>
                      SENDING...
                      <RefreshCcw className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </BentoCard>
          </div>
        </div>
      </section>
    </div>
  );
};
