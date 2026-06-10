import React, { useState } from "react";
import { motion } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { 
  GitBranch, Terminal, Shield, 
  Send, Cloud, Cpu, ArrowUpRight 
} from "lucide-react";

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
    // Perform placeholder submit action
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setSubmitted(false);
      alert("Transmission transmitted successfully! Nguyen The Anh will reach out shortly.");
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16">
      {/* Philosophy Section */}
      <section className="mb-20" id="philosophy">
        <div className="max-w-3xl mx-auto mb-16">
          <span className="font-label-mono text-label-mono text-primary mb-4 block font-bold tracking-wider">
            01 / PRINCIPLES
          </span>
          <h1 className="font-display text-display text-5xl font-bold mb-8">
            Engineering Philosophy
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Software engineering is more than just writing code; it is the art of managing complexity while delivering tangible value. My approach is rooted in three core pillars that define how I solve problems and build systems.
          </p>
        </div>

        <div className="space-y-20 max-w-4xl mx-auto">
          {/* Pillar 1 */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                Build Real Products
              </h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
            </div>
            <div className="md:col-span-8">
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Code without context is just text. I believe that engineering excellence is measured by the utility of the product in the hands of the user. Every technical decision—from database schema to frontend framework—must be justified by how it serves the ultimate goal of the product.
              </p>
              <blockquote className="border-l-4 border-outline-variant pl-6 py-2 italic text-on-surface-variant leading-relaxed bg-surface-container-low/30 rounded-r-lg">
                "The best code is the code that solves a problem effectively today and stays out of the way tomorrow."
              </blockquote>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                Learn Through Systems
              </h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
            </div>
            <div className="md:col-span-8">
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                I don't just learn tools; I learn the systems they inhabit. Understanding how a request travels from a client through a load balancer into a containerized service and finally to a distributed database is essential. This holistic view allows for better debugging, performance tuning, and architectural foresight.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-3">
                  <Terminal className="text-primary w-5 h-5" />
                  <p className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">
                    System Topology
                  </p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-3">
                  <GitBranch className="text-primary w-5 h-5" />
                  <p className="font-label-mono text-caption uppercase text-on-surface-variant font-bold">
                    Observability
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4">
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                Focus On Fundamentals
              </h2>
              <div className="w-12 h-1 bg-primary mb-6 rounded-full"></div>
            </div>
            <div className="md:col-span-8">
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Frameworks fade, but fundamentals endure. I prioritize a deep understanding of data structures, algorithms, networking protocols, and operating system internals. This foundation allows me to adapt to any technology stack with speed and precision.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TCP/IP", "Memory Mgmt", "Concurrency", "Distributed Systems"].map((fund) => (
                  <span
                    key={fund}
                    className="px-3 py-1 bg-surface-container-highest border border-outline-variant rounded-full font-label-mono text-caption text-on-surface-variant"
                  >
                    {fund}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap Section */}
      <section className="mb-20 pt-12" id="future">
        <div className="mb-12">
          <span className="font-label-mono text-label-mono text-primary mb-4 block font-bold tracking-wider">
            02 / EVOLUTION
          </span>
          <h2 className="font-display text-display text-4xl font-bold">
            Future Roadmap
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Docker Card */}
          <BentoCard className="col-span-12 md:col-span-7 p-8 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="text-primary w-6 h-6" />
                  <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    Advanced Containerization
                  </h3>
                </div>
                <p className="text-on-surface-variant text-body-md mb-8 max-w-md leading-relaxed">
                  Mastering multi-stage builds, orchestration with Kubernetes, and optimizing images for edge deployment and security compliance.
                </p>
              </div>
              <div className="space-y-3 mt-auto">
                <div className="flex justify-between text-caption font-label-mono font-bold">
                  <span>DOCKER & K8S</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    viewport={{ once: true }}
                    className="bg-primary h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CI/CD Card */}
          <div className="col-span-12 md:col-span-5 p-8 bg-inverse-surface text-inverse-on-surface rounded-xl flex flex-col justify-between border border-outline/10">
            <div>
              <span className="font-label-mono text-caption text-primary-fixed mb-2 block uppercase font-bold tracking-wide">
                Automated Pipeline
              </span>
              <h3 className="font-headline-md text-headline-md font-bold mb-4">
                Full Spectrum CI/CD
              </h3>
              <p className="text-surface-variant text-body-md leading-relaxed">
                Architecting zero-downtime deployment pipelines using GitHub Actions and Terraform for Infrastructure as Code (IaC).
              </p>
            </div>
            <div className="mt-8 flex gap-3">
              <span className="material-symbols-outlined text-primary-fixed text-3xl">sync</span>
              <span className="material-symbols-outlined text-primary-fixed text-3xl">rocket_launch</span>
            </div>
          </div>

          {/* Cloud Infrastructure */}
          <BentoCard className="col-span-12 p-8 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-4">
                Cloud Infrastructure Scaling
              </h3>
              <p className="text-on-surface-variant mb-6 text-body-md leading-relaxed">
                Transitioning from monolithic hosting to elastic, distributed cloud architectures on AWS. Focusing on serverless compute and global content delivery.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> AWS Lambda / Serverless
                </li>
                <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Global Edge Distribution
                </li>
                <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Infrastructure as Code
                </li>
                <li className="flex items-center gap-2.5 font-label-mono text-caption text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-primary text-[18px]">check_circle</span> Managed DB Systems
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-surface-container-high rounded-xl flex items-center justify-center border border-outline-variant/30 relative overflow-hidden shadow-inner flex-shrink-0">
              <Cloud className="text-primary w-16 h-16" />
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-10 pt-12" id="contact">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <span className="font-label-mono text-label-mono text-primary mb-4 block font-bold tracking-wider">
              03 / COLLABORATE
            </span>
            <h2 className="font-display text-display text-4xl font-bold mb-6">
              Technical Inquiries
            </h2>
            <p className="font-body-md text-on-surface-variant mb-12 max-w-md leading-relaxed">
              Interested in discussing system architecture, open-source projects, or potential collaborations? Drop me a message or find me on technical platforms.
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://github.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all shadow-sm">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-label-mono text-caption text-on-surface-variant uppercase font-bold">GitHub</p>
                  <p className="font-body-md font-medium text-on-surface flex items-center gap-1 group-hover:text-primary transition-colors">
                    @theanh-dev <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all shadow-sm">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-label-mono text-caption text-on-surface-variant uppercase font-bold">LinkedIn</p>
                  <p className="font-body-md font-medium text-on-surface flex items-center gap-1 group-hover:text-primary transition-colors">
                    Nguyen The Anh <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </a>
            </div>
          </div>

          <BentoCard className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="font-label-mono text-caption text-on-surface-variant uppercase font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3.5 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-mono text-caption text-on-surface-variant uppercase font-bold">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3.5 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="name@company.com"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label-mono text-caption text-on-surface-variant uppercase font-bold">
                  Message Context
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3.5 font-body-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Describe your inquiry..."
                />
              </div>
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-label-mono text-label-mono font-bold hover:bg-primary/95 transition-colors flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                {submitted ? "Transmitting..." : "Send Transmission"}
                <Send className="w-4.5 h-4.5" />
              </button>
            </form>
          </BentoCard>
        </div>
      </section>
    </div>
  );
};
