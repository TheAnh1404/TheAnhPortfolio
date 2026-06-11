import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { TechMarquee } from "../components/TechMarquee";
import { UdonLogo } from "../components/UdonLogo";
import { BentoCard } from "../components/BentoCard";
import AvatarImg from "../assets/theanh_avt.jpg";
import { useLanguage } from "../context/LanguageContext";
import {
  ArrowRight, MapPin, GraduationCap,
  Terminal, Cpu, Database, Link2,
  Brain, Award, Briefcase, Code,
  Layers, Globe, Zap, Send,
  Phone, Mail
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

// roles are handled via useLanguage() dynamically

const getTechCategories = (lang: "EN" | "VI") => [
  {
    title: lang === "EN" ? "Languages" : "Ngôn ngữ",
    subtitle: lang === "EN" ? "Core Programming & Logic" : "Lập trình cốt lõi & Logic",
    description: lang === "EN" 
      ? "Foundational languages for system logic, blockchain contracts, and intelligent platforms."
      : "Các ngôn ngữ nền tảng cho logic hệ thống, hợp đồng blockchain và nền tảng thông minh.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl p-4 font-mono text-[9px] text-on-surface/80 border border-outline-variant/30 overflow-hidden relative shadow-inner">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2 mb-2">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
            <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
            <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
          </div>
          <span className="text-[8px] text-on-surface-variant/60 font-label-mono">Algorithm.cpp</span>
        </div>
        <div className="space-y-1 select-none text-left">
          <div className="text-on-surface-variant/40">{lang === "EN" ? "// ICPC Graph Path Optimization" : "// Tối ưu hóa đường đi đồ thị ICPC"}</div>
          <div>
            <span className="text-primary font-bold">int</span> <span className="text-secondary font-bold">find_min_path</span>(<span className="text-orange-600">int</span> u, <span className="text-orange-600">int</span> v) {"{"}
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">if</span> (u == v) <span className="text-primary font-bold">return</span> <span className="text-teal-600">0</span>;
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">if</span> (dp[u][v] != -<span className="text-teal-600">1</span>) <span className="text-primary font-bold">return</span> dp[u][v];
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">int</span> ans = <span className="text-violet-600 font-bold">INF</span>;
          </div>
          <div className="pl-4">
            <span className="text-primary font-bold">return</span> dp[u][v] = ans;
          </div>
          <div>{"}"}</div>
        </div>
        <div className="absolute bottom-2 right-3 bg-teal-500/10 text-teal-700 border border-teal-500/20 px-2 py-0.5 rounded text-[8px] font-label-mono font-bold">
          C++ / TypeScript / Rust / Python
        </div>
      </div>
    ),
    skills: [
      { name: "TypeScript/JavaScript", tooltip: lang === "EN" ? "Primary language for high-fidelity frontends, NestJS backends, and test suites." : "Ngôn ngữ chính cho frontend độ tin cậy cao, backend NestJS và các bộ kiểm thử." },
      { name: "Rust (Smart Contracts)", tooltip: lang === "EN" ? "Used to write smart contracts on Stellar Soroban." : "Sử dụng để viết hợp đồng thông minh trên nền tảng Stellar Soroban." },
      { name: "Python (AI/ML)", tooltip: lang === "EN" ? "Used for AI recommendation models and data pipelines." : "Sử dụng cho các mô hình gợi ý AI và pipeline dữ liệu." },
      { name: "C++ (Algorithms)", tooltip: lang === "EN" ? "Used for VKU ICPC competitive programming training." : "Sử dụng cho huấn luyện lập trình thi đấu ICPC tại VKU." }
    ]
  },
  {
    title: lang === "EN" ? "Backend" : "Backend",
    subtitle: lang === "EN" ? "Service Architecture" : "Kiến trúc Dịch vụ",
    description: lang === "EN" 
      ? "Designing high-throughput microservices, REST & GraphQL endpoints, and routing logic."
      : "Thiết kế hệ thống microservices hiệu năng cao, các endpoint REST & GraphQL và logic định tuyến.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="grid-pattern-backend" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant/15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-backend)" />

          <path d="M 50 65 H 135" stroke="currentColor" className="text-outline-variant/40" strokeWidth="2" />
          <path d="M 175 65 H 260" stroke="currentColor" className="text-outline-variant/40" strokeWidth="2" />

          <motion.path
            d="M 50 65 H 135"
            stroke="#004ac6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 175 65 H 260"
            stroke="#004ac6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [-20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          <g transform="translate(10, 40)">
            <rect width="40" height="50" rx="6" fill="currentColor" className="text-primary/10" stroke="#004ac6" strokeWidth="1" />
            <text x="20" y="24" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">{lang === "EN" ? "CLIENT" : "THIẾT BỊ"}</text>
            <text x="20" y="38" textAnchor="middle" className="fill-primary font-bold text-[6px] font-label-mono">{lang === "EN" ? "REQUEST" : "YÊU CẦU"}</text>
          </g>

          <g transform="translate(135, 30)">
            <rect width="40" height="70" rx="6" fill="currentColor" className="text-secondary/10" stroke="#4b41e1" strokeWidth="1" />
            <text x="20" y="24" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">NestJS</text>
            <text x="20" y="42" textAnchor="middle" className="fill-secondary font-bold text-[6px] font-label-mono">FastAPI</text>
            <text x="20" y="58" textAnchor="middle" className="fill-emerald-600 font-bold text-[6px] font-label-mono">APIs</text>
          </g>

          <g transform="translate(260, 40)">
            <rect width="50" height="50" rx="6" fill="currentColor" className="text-teal-500/10" stroke="#0f766e" strokeWidth="1" />
            <text x="25" y="24" textAnchor="middle" className="fill-on-surface font-label-mono text-[8px] font-bold">SERVICES</text>
            <text x="25" y="38" textAnchor="middle" className="fill-teal-700 font-bold text-[6px] font-label-mono">GRAPHQL</text>
          </g>
        </svg>
      </div>
    ),
    skills: [
      { name: "NestJS", tooltip: lang === "EN" ? "Used to build modular, enterprise backends and microservices." : "Được sử dụng để xây dựng các backend doanh nghiệp dạng mô-đun và microservices." },
      { name: "Express.js", tooltip: lang === "EN" ? "Used for lightweight Node.js API services." : "Được sử dụng cho các dịch vụ API Node.js gọn nhẹ." },
      { name: "FastAPI", tooltip: lang === "EN" ? "High-performance Python API framework for ML inference model serving." : "Framework API Python hiệu năng cao phục vụ cho suy luận mô hình ML." },
      { name: "Microservices", tooltip: lang === "EN" ? "Architecting modular, independent systems with clear data contracts." : "Kiến trúc hệ thống độc lập, dạng mô-đun với hợp đồng dữ liệu rõ ràng." },
      { name: "RESTful & GraphQL API Design", tooltip: lang === "EN" ? "Designing clean, secure, and well-documented API contracts." : "Thiết kế các hợp đồng API rõ ràng, bảo mật và được tài liệu hóa tốt." }
    ]
  },
  {
    title: lang === "EN" ? "Web3" : "Web3",
    subtitle: lang === "EN" ? "Decentralized Finance" : "Tài chính phi tập trung",
    description: lang === "EN" 
      ? "Developing gas-efficient decentralized smart contracts, token economies, and secure execution flows."
      : "Phát triển các hợp đồng thông minh phi tập trung tối ưu hóa gas, nền kinh tế token và luồng thực thi an toàn.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="grid-pattern-web3" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-outline-variant/15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-web3)" />

          <g transform="translate(45, 65)">
            <polygon points="0,-20 18,-10 18,10 0,20 -18,10 -18,-10" fill="currentColor" className="text-orange-500/10" stroke="#c2410c" strokeWidth="1" />
            <text x="0" y="3" textAnchor="middle" className="fill-orange-700 font-bold text-[6px] font-label-mono">STELLAR</text>
          </g>

          <g transform="translate(145, 65)">
            <polygon points="0,-25 22,-12 22,12 0,25 -22,12 -22,-12" fill="currentColor" className="text-secondary/10" stroke="#4b41e1" strokeWidth="1.5" />
            <text x="0" y="3" textAnchor="middle" className="fill-secondary font-black text-[7px] font-label-mono">SOROBAN</text>
          </g>

          <g transform="translate(245, 65)">
            <polygon points="0,-20 18,-10 18,10 0,20 -18,10 -18,-10" fill="currentColor" className="text-orange-500/10" stroke="#c2410c" strokeWidth="1" />
            <text x="0" y="3" textAnchor="middle" className="fill-orange-700 font-bold text-[6px] font-label-mono">DEFI</text>
          </g>

          <path d="M 65 65 H 121" stroke="currentColor" className="text-outline-variant/40" strokeWidth="1.5" />
          <path d="M 169 65 H 225" stroke="currentColor" className="text-outline-variant/40" strokeWidth="1.5" />

          <motion.circle
            r="2.5"
            fill="#4b41e1"
            animate={{ cx: [65, 121] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            r="2.5"
            fill="#c2410c"
            animate={{ cx: [169, 225] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </svg>
      </div>
    ),
    skills: [
      { name: "Stellar Soroban", tooltip: lang === "EN" ? "WASM-based smart contract execution platform on the Stellar network." : "Nền tảng thực thi hợp đồng thông minh dựa trên WASM trên mạng lưới Stellar." },
      { name: "DeFi Protocol Design", tooltip: lang === "EN" ? "Designing collateralized lending, borrow rate curves, and liquidations." : "Thiết kế cho vay thế chấp, đường cong lãi suất và cơ chế thanh lý." },
      { name: "Smart Contract Security & Optimization", tooltip: lang === "EN" ? "Enforcing safety checks and state footprint optimizations (e.g. u128 bitmap packing)." : "Đảm bảo các kiểm tra an toàn và tối ưu hóa bộ nhớ lưu trữ (ví dụ: bitmap packing u128)." }
    ]
  },
  {
    title: lang === "EN" ? "Databases" : "Cơ sở dữ liệu",
    subtitle: lang === "EN" ? "Data Management Layers" : "Lớp Quản lý Dữ liệu",
    description: lang === "EN" 
      ? "Managing relational schemas, distributed NoSQL storage, and real-time syncing architectures."
      : "Quản lý cơ sở dữ liệu quan hệ, lưu trữ NoSQL phân tán và kiến trúc đồng bộ thời gian thực.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g transform="translate(60, 50)">
            <ellipse cx="0" cy="-12" rx="18" ry="5" fill="#0f766e" fillOpacity="0.2" stroke="#0f766e" strokeWidth="1" />
            <path d="M -18 -12 V 12 A 18 5 0 0 0 18 12 V -12" fill="#0f766e" fillOpacity="0.1" stroke="#0f766e" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke="#0f766e" strokeWidth="1" strokeDasharray="2 2" />
            <ellipse cx="0" cy="12" rx="18" ry="5" fill="none" stroke="#0f766e" strokeWidth="1" />
            <text x="0" y="28" textAnchor="middle" className="fill-on-surface font-label-mono text-[7px] font-bold">POSTGRESQL</text>
          </g>

          <g transform="translate(170, 50)">
            <ellipse cx="0" cy="-12" rx="18" ry="5" fill="#004ac6" fillOpacity="0.2" stroke="#004ac6" strokeWidth="1" />
            <path d="M -18 -12 V 12 A 18 5 0 0 0 18 12 V -12" fill="#004ac6" fillOpacity="0.1" stroke="#004ac6" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke="#004ac6" strokeWidth="1" strokeDasharray="2 2" />
            <ellipse cx="0" cy="12" rx="18" ry="5" fill="none" stroke="#004ac6" strokeWidth="1" />
            <text x="0" y="28" textAnchor="middle" className="fill-on-surface font-label-mono text-[7px] font-bold">MONGODB</text>
          </g>

          <g transform="translate(280, 50)">
            <ellipse cx="0" cy="-12" rx="18" ry="5" fill="#c2410c" fillOpacity="0.2" stroke="#c2410c" strokeWidth="1" />
            <path d="M -18 -12 V 12 A 18 5 0 0 0 18 12 V -12" fill="#c2410c" fillOpacity="0.1" stroke="#c2410c" strokeWidth="1" />
            <ellipse cx="0" cy="0" rx="18" ry="5" fill="none" stroke="#c2410c" strokeWidth="1" strokeDasharray="2 2" />
            <ellipse cx="0" cy="12" rx="18" ry="5" fill="none" stroke="#c2410c" strokeWidth="1" />
            <text x="0" y="28" textAnchor="middle" className="fill-on-surface font-label-mono text-[7px] font-bold">FIREBASE</text>
          </g>
        </svg>
      </div>
    ),
    skills: [
      { name: "PostgreSQL (Architecture)", tooltip: lang === "EN" ? "Relational database schema design, transaction indexing, and queries." : "Thiết kế lược đồ cơ sở dữ liệu quan hệ, lập chỉ mục giao dịch và truy vấn." },
      { name: "MongoDB", tooltip: lang === "EN" ? "NoSQL document storage for horizontal scaling and flex schemas." : "Lưu trữ tài liệu NoSQL phục vụ mở rộng theo chiều ngang và lược đồ linh hoạt." },
      { name: "Firebase Realtime/Firestore", tooltip: lang === "EN" ? "Cloud-hosted NoSQL databases for real-time document syncing." : "Cơ sở dữ liệu đám mây NoSQL phục vụ đồng bộ tài liệu thời gian thực." }
    ]
  },
  {
    title: lang === "EN" ? "DevOps & Tools" : "DevOps & Công cụ",
    subtitle: lang === "EN" ? "Deployment & Integrations" : "Triển khai & Tích hợp",
    description: lang === "EN" 
      ? "Managing container runtimes, automatic checks, payments gateway, and logging."
      : "Quản lý môi trường container, kiểm tra tự động, cổng thanh toán và ghi nhật ký hệ thống.",
    visual: (
      <div className="w-full h-40 bg-surface-container-lowest rounded-xl border border-outline-variant/30 flex items-center justify-center relative overflow-hidden shadow-inner p-2">
        <svg width="340" height="130" viewBox="0 0 340 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="50" y="25" width="240" height="80" rx="40" stroke="currentColor" className="text-outline-variant/30" strokeWidth="3" fill="none" />

          <motion.rect
            x="50" y="25" width="240" height="80" rx="40"
            stroke="#be123c"
            strokeWidth="3"
            fill="none"
            strokeDasharray="30 170"
            animate={{ strokeDashoffset: [200, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />

          <g transform="translate(50, 65)">
            <circle r="12" fill="white" stroke="#be123c" strokeWidth="1.5" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">{lang === "EN" ? "BUILD" : "BUILD"}</text>
          </g>

          <g transform="translate(170, 25)">
            <circle r="12" fill="white" stroke="#475569" strokeWidth="1" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">{lang === "EN" ? "TEST" : "TEST"}</text>
          </g>

          <g transform="translate(290, 65)">
            <circle r="12" fill="white" stroke="#475569" strokeWidth="1" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">{lang === "EN" ? "DEPLOY" : "DEPLOY"}</text>
          </g>

          <g transform="translate(170, 105)">
            <circle r="12" fill="white" stroke="#0f766e" strokeWidth="1" />
            <text x="0" y="2.5" textAnchor="middle" className="fill-on-surface font-label-mono text-[6px] font-bold">{lang === "EN" ? "MONITOR" : "MONITOR"}</text>
          </g>
        </svg>
      </div>
    ),
    skills: [
      { name: "Docker", tooltip: lang === "EN" ? "Packaging applications and microservices into consistent, isolated container runtimes." : "Đóng gói ứng dụng và microservices vào container chạy cô lập và nhất quán." },
      { name: "Git/GitHub", tooltip: lang === "EN" ? "Version control and collaborative workflow automation." : "Quản lý phiên bản mã nguồn và tự động hóa cộng tác phát triển." },
      { name: "Postman", tooltip: lang === "EN" ? "API client for designing, building, and testing HTTP requests." : "Công cụ thiết kế, xây dựng và kiểm thử các yêu cầu HTTP." },
      { name: "CI/CD", tooltip: lang === "EN" ? "Automated testing, lint checking, and preview deployment pipelines." : "Tự động hóa kiểm thử, kiểm tra cú pháp và pipeline triển khai bản xem trước." },
      { name: "Stripe", tooltip: lang === "EN" ? "Integrating online payment portals and secure webhooks." : "Tích hợp cổng thanh toán trực tuyến và webhook bảo mật." },
      { name: "Sentry", tooltip: lang === "EN" ? "Real-time application error tracking and performance profiling." : "Theo dõi lỗi ứng dụng thời gian thực và phân tích hồ sơ hiệu năng." }
    ]
  }
];

export const Home: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const { lang, t } = useLanguage();
  const roles = t("roles") as string[];
  const techCategories = getTechCategories(lang);

  const content = {
    EN: {
      cta_explore: "Explore Projects",
      cta_download: "Download CV",
      core_focus: {
        tag: "Fullstack Ecosystem",
        title: "System Architecture",
        desc: "Bridging high-fidelity frontends with resilient backend infrastructures and real-time data pipelines.",
        live: "LIVE SYSTEMS"
      },
      web3_focus: {
        tag: "Web3 Protocol",
        title: "Smart Contract",
        subtitle: "Soroban/Rust Security",
        audit: "Audit Status: SECURE"
      },
      hackathon: {
        rank: "Champion",
        event: "MINI STELLAR HACKATHON",
        winner: "Global #1 Winner"
      },
      algo: {
        title: "Algorithmic Core",
        desc: "Applying advanced discrete optimizations and complex problem-solving strategies to real-world engineering bottlenecks."
      },
      domains: {
        title: "Engineering Domains",
        subtitle: "Deep technical expertise across the modern engineering stack.",
        fullstack: {
          title: "Fullstack Development",
          tag: "End-to-End Solutions",
          desc: "Engineering comprehensive digital ecosystems from high-performance microservices to responsive, accessible user interfaces.",
          focus: "Production-grade system design & seamless frontend-backend integration."
        },
        blockchain: {
          title: "Web3 & Blockchain",
          tag: "Smart Contracts",
          desc: "Designing decentralized finance (DeFi) protocols, smart contract execution models, and auditing cryptography systems.",
          focus: "Smart contract gas optimization & state bitmap packing."
        },
        ai: {
          title: "AI Systems & Data",
          tag: "Machine Learning",
          desc: "Developing intelligent recommendation systems and high-throughput data intelligence pipelines with real-time inference.",
          focus: "ML validation pipelines built with 99.2% accuracy."
        }
      },
      projects: {
        tag: "SELECTED WORK",
        title: "Featured Projects",
        cta_archive: "SEE ALL ARCHIVE",
        udonfi: {
          tag: "1st Prize Winner • Stellar Hackathon",
          desc: "A high-performance lending protocol on Stellar Soroban. Optimized via u128 bitmap packing and 2-step liquidation flows.",
          cta: "Explore Case Study"
        },
        viotune: {
          tag: "AI & MACHINE LEARNING",
          desc: "Developing hybrid recommendation systems using SVD Matrix Factorization and KNN models. Bridging FastAPI backends with real-time inference.",
          cta: "READ MORE"
        },
        labouffe: {
          tag: "FULLSTACK ECOSYSTEM",
          desc: "Architecting high-concurrency food delivery systems with real-time tracking and automated order management pipelines.",
          cta: "READ MORE"
        }
      },
      experience: {
        tag: "TIMELINE & HONORS",
        title: "Experience & Achievements",
        cta: "VIEW FULL TIMELINE",
        devplus: {
          tag: "DevPlus JSC",
          title: "Data Labeling Intern",
          desc: "Enhanced data intelligence pipelines for ML models with 99.2% accuracy in validation, and automated regression testing."
        },
        hackathon: {
          tag: "Hackathon Champion",
          title: "Stellar Mini Hackathon",
          desc: "First Prize winner. Engineered UdonFi decentralized lending protocol on Soroban using Rust with state storage optimizations."
        },
        icpc: {
          tag: "Competitive Coding",
          title: "VKU ICPC Training Team",
          desc: "Actively competing in national-level contests, specializing in graph theory and dynamic programming optimization."
        },
        details: "DETAILS"
      },
      ecosystem: {
        title: "Technology Ecosystem",
        desc: "Deep technical core and architecture pillars compiled from real-world systems and competitive challenges. Hover over technologies to see where they are applied.",
        key: "Key Technologies"
      },
      academic: {
        tag: "ACADEMIC FOUNDATION",
        title: "Education & Academy",
        cta: "VIEW ACADEMIC RECORD",
        vku: {
          tag: "University",
          name: "Vietnam - Korea University of ICT",
          desc: "A premier public university specializing in digital technology and innovation, fostering an elite academic environment through a strategic partnership between Vietnam and South Korea.",
          location: "Da Nang, Vietnam",
          degree: "Bachelor of Software Engineering"
        },
        faculty: {
          tag: "Department",
          name: "Faculty of CS",
          desc: "The academic heart of VKU, focusing on excellence in algorithmic logic, decentralized systems, and AI-driven architectures.",
          core_tag: "Academic Core",
          core: "ICPC Training Team • AI Intelligence"
        }
      },
      philosophy: {
        tag: "ENGINEERING MINDSET",
        title: "Philosophy & Vision",
        cta: "EXPLORE PHILOSOPHY",
        pillar1: {
          title: "Build Real Products",
          desc: "Engineering excellence is measured by the utility of the product. Every technical decision must serve the ultimate user goal."
        },
        pillar2: {
          title: "Systems Thinking",
          desc: "Understanding how a request travels from client to database enables better debugging and architectural foresight."
        },
        pillar3: {
          title: "Fundamentals Focus",
          desc: "Frameworks fade, but fundamentals endure. Deep understanding of DSA and protocols allows for precise adaptation."
        }
      },
      contact: {
        tag: "GET IN TOUCH",
        title: "Let's Connect",
        desc: "Interested in discussing system architecture, DeFi protocols, or potential collaborations? Reach out through any channel below.",
        phone: "Phone",
        email: "Email",
        location: "Location",
        platform_tag: "Open for Collaboration",
        collab_title: "Let's Build Something Amazing Together",
        collab_desc: "Whether it's a DeFi protocol, an AI-powered platform, or a fullstack application — I'm ready to contribute and create impact.",
        cta_msg: "SEND MESSAGE"
      }
    },
    VI: {
      cta_explore: "Khám phá Dự án",
      cta_download: "Tải CV Cá nhân",
      core_focus: {
        tag: "Hệ sinh thái Fullstack",
        title: "Kiến trúc Hệ thống",
        desc: "Kết nối frontend độ tin cậy cao với hạ tầng backend linh hoạt và pipeline dữ liệu thời gian thực.",
        live: "HỆ THỐNG THỰC TẾ"
      },
      web3_focus: {
        tag: "Giao thức Web3",
        title: "Hợp đồng Thông minh",
        subtitle: "Bảo mật Soroban/Rust",
        audit: "Trạng thái Kiểm thử: AN TOÀN"
      },
      hackathon: {
        rank: "Quán quân",
        event: "MINI STELLAR HACKATHON",
        winner: "Hạng 1"
      },
      algo: {
        title: "Cốt lõi Thuật toán",
        desc: "Áp dụng tối ưu hóa rời rạc nâng cao và chiến lược giải quyết vấn đề phức tạp vào các điểm nghẽn kỹ thuật thực tế."
      },
      domains: {
        title: "Lĩnh vực Kỹ thuật",
        subtitle: "Chuyên môn kỹ thuật sâu rộng trên toàn bộ stack công nghệ hiện đại.",
        fullstack: {
          title: "Phát triển Fullstack",
          tag: "Giải pháp Toàn diện",
          desc: "Xây dựng hệ sinh thái kỹ thuật số toàn diện từ microservices hiệu năng cao đến giao diện người dùng mượt mà.",
          focus: "Thiết kế hệ thống cấp độ production & tích hợp frontend-backend liền mạch."
        },
        blockchain: {
          title: "Web3 & Blockchain",
          tag: "Hợp đồng Thông minh",
          desc: "Thiết kế giao thức tài chính phi tập trung (DeFi), mô hình thực thi hợp đồng thông minh và kiểm thử hệ thống mật mã.",
          focus: "Tối ưu hóa gas hợp đồng thông minh & bitmap packing trạng thái."
        },
        ai: {
          title: "Hệ thống AI & Dữ liệu",
          tag: "Học máy (ML)",
          desc: "Phát triển hệ thống gợi ý thông minh và pipeline dữ liệu hiệu suất cao với khả năng suy luận thời gian thực.",
          focus: "Pipeline kiểm chứng ML được xây dựng với độ chính xác 99.2%."
        }
      },
      projects: {
        tag: "CÁC DỰ ÁN TIÊU BIỂU",
        title: "Dự án Nổi bật",
        cta_archive: "XEM TẤT CẢ KHO LƯU TRỮ",
        udonfi: {
          tag: "Giải Nhất • Stellar Hackathon",
          desc: "Giao thức cho vay hiệu năng cao trên Stellar Soroban. Tối ưu hóa qua u128 bitmap packing và luồng thanh lý 2 bước.",
          cta: "Khám phá Case Study"
        },
        viotune: {
          tag: "AI & HỌC MÁY (ML)",
          desc: "Phát triển hệ thống gợi ý kết hợp sử dụng SVD Matrix Factorization và KNN. Kết nối FastAPI với suy luận thời gian thực.",
          cta: "XEM CHI TIẾT"
        },
        labouffe: {
          tag: "HỆ SINH THÁI FULLSTACK",
          desc: "Kiến trúc hệ thống giao đồ ăn đồng thời cao với theo dõi thời gian thực và pipeline quản lý đơn hàng tự động.",
          cta: "XEM CHI TIẾT"
        }
      },
      experience: {
        tag: "LỘ TRÌNH & THÀNH TỰU",
        title: "Kinh nghiệm & Thành tích",
        cta: "XEM TOÀN BỘ LỘ TRÌNH",
        devplus: {
          tag: "DevPlus JSC",
          title: "Thực tập sinh Dữ liệu",
          desc: "Nâng cấp pipeline dữ liệu cho các mô hình ML với độ chính xác 99.2%, và tự động hóa kiểm thử hồi quy."
        },
        hackathon: {
          tag: "Quán quân Hackathon",
          title: "Stellar Mini Hackathon",
          desc: "Đạt giải Nhất. Xây dựng giao thức DeFi UdonFi trên Soroban bằng Rust với các tối ưu hóa lưu trữ trạng thái."
        },
        icpc: {
          tag: "Lập trình Thi đấu",
          title: "Đội tuyển ICPC VKU",
          desc: "Đang thi đấu tại các giải quốc gia, chuyên sâu về lý thuyết đồ thị và tối ưu hóa quy hoạch động."
        },
        details: "CHI TIẾT"
      },
      ecosystem: {
        title: "Hệ sinh thái Công nghệ",
        desc: "Cốt lõi kỹ thuật sâu và các trụ cột kiến trúc được tổng hợp từ các hệ thống thực tế và thử thách thi đấu. Di chuột vào công nghệ để xem nơi chúng được áp dụng.",
        key: "Công nghệ Trọng tâm"
      },
      academic: {
        tag: "NỀN TẢNG HỌC THUẬT",
        title: "Giáo dục & Học viện",
        cta: "XEM HỒ SƠ HỌC THUẬT",
        vku: {
          tag: "Trường Đại học",
          name: "Trường Đại học Công nghệ TT & TT Việt - Hàn",
          desc: "Trường đại học công lập hàng đầu chuyên về công nghệ số và đổi mới sáng tạo, thúc đẩy môi trường học thuật ưu tú qua quan hệ đối tác chiến lược giữa Việt Nam và Hàn Quốc.",
          location: "Đà Nẵng, Việt Nam",
          degree: "Cử nhân Kỹ thuật Phần mềm"
        },
        faculty: {
          tag: "Khoa đào tạo",
          name: "Khoa Khoa học Máy tính",
          desc: "Trung tâm học thuật của VKU, tập trung vào sự xuất sắc trong logic thuật toán, hệ thống phi tập trung và kiến trúc AI.",
          core_tag: "Trọng tâm Học thuật",
          core: "Đội tuyển ICPC • Trí tuệ Nhân tạo AI"
        }
      },
      philosophy: {
        tag: "TƯ DUY KỸ THUẬT",
        title: "Triết lý & Tầm nhìn",
        cta: "KHÁM PHÁ TRIẾT LÝ",
        pillar1: {
          title: "Xây dựng Sản phẩm Thực",
          desc: "Sự xuất sắc trong kỹ thuật được đo lường bằng giá trị sản phẩm. Mọi quyết định kỹ thuật phải phục vụ mục tiêu người dùng."
        },
        pillar2: {
          title: "Tư duy Hệ thống",
          desc: "Hiểu cách một yêu cầu di chuyển từ client đến database giúp xử lý lỗi tốt hơn và có tầm nhìn kiến trúc dài hạn."
        },
        pillar3: {
          title: "Tập trung vào Cốt lõi",
          desc: "Framework có thể lỗi thời, nhưng kiến thức cốt lõi thì trường tồn. Hiểu sâu về CTDL&GT giúp thích nghi chính xác."
        }
      },
      contact: {
        tag: "LIÊN HỆ",
        title: "Kết nối với tôi",
        desc: "Bạn muốn thảo luận về kiến trúc hệ thống, giao thức DeFi hoặc các cơ hội hợp tác? Hãy liên hệ qua các kênh dưới đây.",
        phone: "Số điện thoại",
        email: "Email",
        location: "Địa điểm",
        platform_tag: "Sẵn sàng hợp tác",
        collab_title: "Hãy cùng nhau xây dựng điều gì đó tuyệt vời",
        collab_desc: "Cho dù đó là giao thức DeFi, nền tảng AI hay ứng dụng fullstack — tôi luôn sẵn sàng đóng góp và tạo ra tác động.",
        cta_msg: "GỬI TIN NHẮN"
      }
    }
  };

  const s = content[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:col-span-8 flex flex-col justify-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 bg-surface-container-low border border-outline-variant rounded-full w-fit">
            <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
            <span className="font-label-mono text-caption text-on-surface-variant">
              {t("home.hero.status")}
            </span>
          </div>

          <h1 className="font-display text-display text-5xl md:text-6xl font-bold tracking-tight mb-4 text-on-surface">
            {t("home.hero.title")}
          </h1>

          <div className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
            <span className="text-on-surface-variant font-medium">{lang === "EN" ? "I am a" : "Tôi là"}</span>
            <div className="h-[1.5em] overflow-hidden relative w-64 inline-block align-bottom">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-0 font-bold"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed">
            {t("home.hero.subtitle")}
          </p>

          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-caption">
              <MapPin className="w-4.5 h-4.5 text-primary" /> {t("home.hero.location")}
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant font-label-mono text-caption">
              <GraduationCap className="w-4.5 h-4.5 text-primary" /> {lang === "EN" ? "VKU IT Student" : "Sinh viên IT VKU"}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:bg-primary-container transition-all hover:scale-[1.02] shadow-lg shadow-primary/10"
            >
              {s.cta_explore} <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=1RgdhZxllueFuDsXPVMjNxhsveV4OKRj8"
              className="px-8 py-4 bg-surface border border-outline text-on-surface rounded-xl font-bold hover:bg-surface-container-low transition-colors"
            >
              {s.cta_download}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-4 relative flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="w-full aspect-square bg-surface-container rounded-3xl overflow-hidden relative border border-outline-variant/30 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={AvatarImg}
              alt="Nguyen The Anh"
              className="w-full h-full object-cover animate-float shadow-xl transition-transform duration-700 group-hover:scale-105"
            />
            {/* Decorative element */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg z-20">
              <Terminal className="text-white w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Infinite Tech Marquee */}
      <TechMarquee />

      {/* Personal Core Focus Dashboard */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
        {/* Fullstack Ecosystem Card */}
        <BentoCard className="md:col-span-2 md:row-span-2 p-8 flex flex-col justify-between overflow-hidden relative group" delay={0.1}>
          <div className="relative z-10">
            <h3 className="font-label-mono text-primary mb-6 uppercase tracking-widest text-caption font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              {s.core_focus.tag}
            </h3>
            <div className="flex flex-col gap-2">
              <h2 className="font-headline-lg text-headline-lg text-3xl font-bold text-on-surface">{s.core_focus.title}</h2>
              <p className="text-on-surface-variant font-body-md max-sm:text-sm">{s.core_focus.desc}</p>
            </div>
          </div>

          {/* Fullstack Animation Area */}
          <div className="h-64 relative flex items-center justify-center">
            <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-md">
              <rect x="40" y="70" width="60" height="60" rx="12" fill="currentColor" className="text-primary/10" stroke="currentColor" strokeWidth="2" />
              <text x="70" y="105" textAnchor="middle" className="fill-primary font-bold text-[10px] font-label-mono">{lang === "EN" ? "CLIENT" : "THIẾT BỊ"}</text>
              <rect x="300" y="70" width="60" height="60" rx="12" fill="currentColor" className="text-secondary/10" stroke="currentColor" strokeWidth="2" />
              <text x="330" y="105" textAnchor="middle" className="fill-secondary font-bold text-[10px] font-label-mono">{lang === "EN" ? "SERVER" : "MÁY CHỦ"}</text>
              <path d="M110 100 H290" stroke="currentColor" className="text-outline-variant" strokeWidth="2" strokeDasharray="4 4" />
              <motion.circle r="4" fill="#004ac6" initial={{ cx: 110, cy: 100 }} animate={{ cx: [110, 290, 110] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.circle r="4" fill="#004ac6" className="opacity-20" initial={{ cx: 110, cy: 100 }} animate={{ cx: [110, 290, 110], scale: [1, 1.5, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.circle cx="330" cy="100" r="40" stroke="#4b41e1" strokeWidth="1" className="opacity-20" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1.2, opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            </svg>
          </div>

          <div className="pt-8 border-t border-outline-variant/50 flex justify-between items-center relative z-10">
            <div className="flex gap-2">
              <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">React</span>
              <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">NestJS</span>
              <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant bg-surface-container px-2 py-1 rounded">PostgreSQL</span>
            </div>
            <p className="font-label-mono text-[10px] text-primary font-bold">{s.core_focus.live}</p>
          </div>
        </BentoCard>

        {/* Blockchain Security Card */}
        <BentoCard className="p-8 flex flex-col justify-between group overflow-hidden" delay={0.2}>
          <div>
            <h3 className="font-label-mono text-secondary mb-4 uppercase tracking-widest text-[11px] font-bold">{s.web3_focus.tag}</h3>
            <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-1">{s.web3_focus.title}</h4>
            <p className="text-caption text-on-surface-variant">{s.web3_focus.subtitle}</p>
          </div>
          <div className="h-32 relative flex items-center justify-center my-4">
            <div className="relative">
              <svg width="80" height="92" viewBox="0 0 80 92" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-secondary drop-shadow-lg">
                <path d="M40 2L74.641 22V62L40 82L5.35898 62V22L40 2Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" />
                <motion.path d="M40 2L74.641 22V62L40 82L5.35898 62V22L40 2Z" stroke="white" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
              </svg>
              <motion.div className="absolute top-0 left-[-10px] right-[-10px] h-[2px] bg-secondary shadow-[0_0_15px_rgba(75,65,225,0.8)] z-20" animate={{ top: [0, 92, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
          </div>
          <div className="bg-secondary/5 rounded-lg p-3 border border-secondary/10">
            <p className="font-label-mono text-[10px] text-secondary font-bold text-center tracking-tighter uppercase">{s.web3_focus.audit}</p>
          </div>
        </BentoCard>

        {/* Mini Stellar Hackathon Champion Card */}
        <Link to="/projects/udonfi" className="block cursor-pointer h-full">
          <BentoCard className="p-8 bg-primary text-on-primary flex flex-col items-center justify-center text-center relative overflow-hidden ring-4 ring-primary-container/30 h-full" delay={0.3}>
            <motion.div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} />
            <div className="relative z-10 text-center">
              <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                <Award className="w-14 h-14 text-primary-fixed mb-3 mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </motion.div>
              <div className="font-label-mono text-[11px] uppercase font-bold tracking-[0.2em] text-primary-fixed mb-1">{s.hackathon.rank}</div>
              <div className="text-display font-display text-3xl font-black mb-1 tracking-tighter leading-tight">{s.hackathon.event}</div>
              <div className="mt-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-block">
                <p className="font-label-mono text-[9px] uppercase font-bold text-white tracking-widest">{s.hackathon.winner}</p>
              </div>
            </div>
          </BentoCard>
        </Link>

        {/* Algorithmic Logic Card */}
        <BentoCard className="md:col-span-2 p-8 flex items-center gap-8 group" delay={0.4}>
          <div className="w-32 h-32 bg-surface-container rounded-2xl flex-shrink-0 relative overflow-hidden flex items-center justify-center border border-outline-variant/30">
            <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-60">
              <circle cx="20" cy="20" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="80" cy="30" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="50" cy="80" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="70" cy="70" r="4" fill="currentColor" className="text-tertiary" />
              <circle cx="25" cy="75" r="4" fill="currentColor" className="text-tertiary" />
              <line x1="20" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="20" y1="20" x2="25" y2="75" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="80" y1="30" x2="70" y2="70" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="25" y1="75" x2="50" y2="80" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <line x1="50" y1="80" x2="70" y2="70" stroke="currentColor" strokeWidth="1" className="text-outline-variant" />
              <motion.path d="M20 20 L80 30 L70 70 L50 80" stroke="#943700" strokeWidth="2" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity }} />
            </svg>
          </div>
          <div>
            <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">{s.algo.title}</h4>
            <p className="font-body-md text-on-surface-variant leading-relaxed text-sm">{s.algo.desc}</p>
            <div className="flex gap-4 mt-4 font-label-mono text-[10px] font-bold text-tertiary">
              <span>DP</span> <span>GRAPH THEORY</span> <span>CONCURRENCY</span>
            </div>
          </div>
        </BentoCard>
      </section>

      {/* Engineering Domains */}
      <section className="mb-20">
        <div className="mb-12">
          <h2 className="font-display text-headline-lg text-3xl font-bold mb-2">{s.domains.title}</h2>
          <p className="text-on-surface-variant max-w-xl">{s.domains.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Fullstack */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.1}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    Fullstack Development
                  </h3>
                  <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-wider">{s.domains.fullstack.tag}</span>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-body-md">
                Engineering comprehensive digital ecosystems from high-performance microservices to responsive, accessible user interfaces.
              </p>

              {/* Metric/Highlight Box */}
              <div className="mb-6 p-3 bg-surface-container rounded-lg border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant block mb-1">{lang === "EN" ? "Key Focus" : "Trọng tâm"}</span>
	                <p className="text-[12px] text-on-surface font-semibold">{s.domains.fullstack.focus}</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">{lang === "EN" ? "Tech Stack" : "Công nghệ"}</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-blue-500/10 text-blue-700 border-blue-500/20 hover:scale-105 transition-transform">React 19</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-cyan-500/10 text-cyan-700 border-cyan-500/20 hover:scale-105 transition-transform">Tailwind 4</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-red-500/10 text-red-700 border-red-500/20 hover:scale-105 transition-transform">NestJS</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-teal-500/10 text-teal-700 border-teal-500/20 hover:scale-105 transition-transform">FastAPI</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-blue-600/10 text-blue-800 border-blue-600/20 hover:scale-105 transition-transform">PostgreSQL</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-sky-500/10 text-sky-700 border-sky-500/20 hover:scale-105 transition-transform">Vite 8</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-indigo-500/10 text-indigo-700 border-indigo-500/20 hover:scale-105 transition-transform">Docker</span>
              </div>
            </div>
          </BentoCard>

          {/* Blockchain */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.2}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                  <Link2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    Web3 & Blockchain
                  </h3>
                  <span className="font-label-mono text-[10px] text-secondary uppercase font-bold tracking-wider">{s.domains.blockchain.tag}</span>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-body-md">
                Designing decentralized finance (DeFi) protocols, smart contract execution models, and auditing cryptography systems.
              </p>

              {/* Metric/Highlight Box */}
              <div className="mb-6 p-3 bg-surface-container rounded-lg border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant block mb-1">{lang === "EN" ? "Hackathon Metric" : "Chỉ số Hackathon"}</span>
	                <p className="text-[12px] text-on-surface font-semibold">{s.domains.blockchain.focus}</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">Web3 Stack</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-orange-500/10 text-orange-700 border-orange-500/20 hover:scale-105 transition-transform">Rust</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-violet-500/10 text-violet-700 border-violet-500/20 hover:scale-105 transition-transform">Soroban</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-blue-500/10 text-blue-700 border-blue-500/20 hover:scale-105 transition-transform">Stellar</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-pink-500/10 text-pink-700 border-pink-500/20 hover:scale-105 transition-transform">DeFi Design</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-cyan-500/10 text-cyan-700 border-cyan-500/20 hover:scale-105 transition-transform">{lang === "EN" ? "Security Auditing" : "Kiểm toán Bảo mật"}</span>
              </div>
            </div>
          </BentoCard>

          {/* AI Systems */}
          <BentoCard className="p-8 relative overflow-hidden group flex flex-col justify-between" delay={0.3}>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary/5 rounded-full blur-2xl group-hover:bg-tertiary/10 transition-colors"></div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    AI Systems & Data
                  </h3>
                  <span className="font-label-mono text-[10px] text-tertiary uppercase font-bold tracking-wider">{s.domains.ai.tag}</span>
                </div>
              </div>

              <p className="text-on-surface-variant text-[13px] leading-relaxed mb-6 font-body-md">
                Developing intelligent recommendation systems and high-throughput data intelligence pipelines with real-time inference.
              </p>

              {/* Metric/Highlight Box */}
              <div className="mb-6 p-3 bg-surface-container rounded-lg border border-outline-variant/30">
                <span className="font-label-mono text-[9px] uppercase font-bold text-on-surface-variant block mb-1">{lang === "EN" ? "Model Accuracy" : "Độ chính xác Mô hình"}</span>
	                <p className="text-[12px] text-on-surface font-semibold">{s.domains.ai.focus}</p>
              </div>
            </div>

            {/* Tech Badges */}
            <div>
              <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">AI Stack</span>
              <div className="flex flex-wrap gap-2">
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-yellow-500/10 text-yellow-800 border-yellow-500/20 hover:scale-105 transition-transform">Python</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-emerald-500/10 text-emerald-700 border-emerald-500/20 hover:scale-105 transition-transform">SVD Collaborative</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-teal-500/10 text-teal-700 border-teal-500/20 hover:scale-105 transition-transform">KNN Analysis</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-indigo-500/10 text-indigo-700 border-indigo-500/20 hover:scale-105 transition-transform">ML Pipelines</span>
                <span className="px-2.5 py-1 text-[11px] font-label-mono font-bold rounded-lg border bg-cyan-500/10 text-cyan-700 border-cyan-500/20 hover:scale-105 transition-transform">FastAPI APIs</span>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 px-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed text-[10px] font-label-mono font-bold mb-4">
	              <Award className="w-3 h-3" /> {s.projects.tag}
            </div>
            <h2 className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight">
	              {s.projects.title}
            </h2>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 font-label-mono text-sm font-bold text-primary hover:text-primary-container transition-colors"
          >
	            {s.projects.cta_archive}
            <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* UdonFi - The Flagship Project */}
          <BentoCard className="md:col-span-12 flex flex-col lg:flex-row h-auto lg:h-[450px] group border-none !bg-surface-container-high overflow-hidden" delay={0.1}>
            <div className="lg:w-3/5 h-[300px] lg:h-auto overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 opacity-40" />
              <img
                alt="UdonFi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                src="/Infor/udonFI/HomeUdonFi.png"
              />
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                <UdonLogo className="!bg-white/90 backdrop-blur-md shadow-lg scale-90 origin-top-left border border-white/20 !rounded-2xl !py-3 !px-4 hover:scale-100 transition-transform" />
              </div>
            </div>
            <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center relative bg-surface-container-lowest lg:bg-transparent">
              <div className="mb-4">
	                <span className="font-label-mono text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-2 block">{s.projects.udonfi.tag}</span>
                <h3 className="font-display text-4xl font-bold text-on-surface mb-4 leading-tight">UdonFi Protocol</h3>
              </div>
              <p className="text-on-surface-variant mb-8 font-body-md leading-relaxed">
	                {s.projects.udonfi.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                <span className="px-3 py-1 bg-surface-container text-[11px] font-label-mono font-bold text-on-surface-variant rounded-md border border-outline-variant/30">SOROBAN</span>
                <span className="px-3 py-1 bg-surface-container text-[11px] font-label-mono font-bold text-on-surface-variant rounded-md border border-outline-variant/30">RUST</span>
                <span className="px-3 py-1 bg-surface-container text-[11px] font-label-mono font-bold text-on-surface-variant rounded-md border border-outline-variant/30">DEFI</span>
              </div>
              <Link
                to="/projects/udonfi"
                className="w-fit px-8 py-3 bg-on-surface text-surface rounded-xl font-bold flex items-center gap-3 hover:bg-primary transition-all group/btn"
              >
	                {s.projects.udonfi.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </BentoCard>

          {/* VioTune - Vertical Card */}
          <BentoCard className="md:col-span-6 flex flex-col group border-none !bg-surface-container-low" delay={0.2}>
            <div className="h-72 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                alt="VioTune"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                src="/Infor/Viotune/Cover.png"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white font-label-mono text-[10px] font-bold rounded-lg border border-white/10">
	                  {s.projects.viotune.tag}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-display text-2xl font-bold text-on-surface mb-3 group-hover:text-secondary transition-colors">VioTune AI</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body-md opacity-80">
	                  {s.projects.viotune.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Brain className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Cpu className="w-4 h-4 text-secondary" />
                  </div>
                </div>
                <Link to="/projects/viotune" className="font-label-mono text-xs font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2">
		                  {s.projects.viotune.cta} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </BentoCard>

          {/* LaBouffe - Vertical Card */}
          <BentoCard className="md:col-span-6 flex flex-col group border-none !bg-surface-container-low" delay={0.3}>
            <div className="h-72 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                alt="LaBouffe"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                src="/Infor/Labouffe/Group 1.png"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md text-white font-label-mono text-[10px] font-bold rounded-lg border border-white/10">
	                  {s.projects.labouffe.tag}
                </span>
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow">
              <div className="flex-grow">
                <h3 className="font-display text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">LaBouffe Platform</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-body-md opacity-80">
	                  {s.projects.labouffe.desc}
                </p>
              </div>
              <div className="pt-6 border-t border-outline-variant/30 flex justify-between items-center">
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Database className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center border border-outline-variant/50">
                    <Terminal className="w-4 h-4 text-tertiary" />
                  </div>
                </div>
                <Link to="/projects/labouffe" className="font-label-mono text-xs font-bold text-on-surface hover:text-primary transition-colors flex items-center gap-2">
	                  {s.projects.labouffe.cta} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Experience & Achievements Overview Section */}
      <section className="mb-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 px-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary text-[10px] font-label-mono font-bold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
	              {s.experience.tag}
            </div>
            <h2 className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight text-on-surface">
	              {s.experience.title}
            </h2>
          </div>
          <Link
            to="/experience"
            className="group flex items-center gap-2 font-label-mono text-sm font-bold text-primary hover:text-primary-container transition-colors"
          >
	            {s.experience.cta}
            <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Milestone 1: Data Labeling Intern */}
          <Link to="/experience" className="block group/card h-full">
            <BentoCard className="p-8 flex flex-col justify-between h-full border-none !bg-surface-container-low/60 hover:!bg-surface-container-low transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover/card:scale-110 transition-transform">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-widest block mb-2">DevPlus JSC</span>
	                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover/card:text-primary transition-colors">{s.experience.devplus.title}</h3>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mb-6 opacity-80">
	                  {s.experience.devplus.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center text-caption font-label-mono text-on-surface-variant/75">
                <span>04/2026 — 07/2026</span>
                <span className="text-primary font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">{s.experience.details} <ArrowRight className="w-3 h-3" /></span>
              </div>
            </BentoCard>
          </Link>

          {/* Milestone 2: Stellar Hackathon Champion */}
          <Link to="/experience" className="block group/card h-full">
            <BentoCard className="p-8 flex flex-col justify-between h-full border-none !bg-surface-container-low/60 hover:!bg-surface-container-low transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6 group-hover/card:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-label-mono text-[10px] text-secondary uppercase font-bold tracking-widest block mb-2">{s.experience.hackathon.tag}</span>
	                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover/card:text-secondary transition-colors">{s.experience.hackathon.title}</h3>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mb-6 opacity-80">
	                  {s.experience.hackathon.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center text-caption font-label-mono text-on-surface-variant/75">
                <span>05/2026</span>
                <span className="text-secondary font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">{s.experience.details} <ArrowRight className="w-3 h-3" /></span>
              </div>
            </BentoCard>
          </Link>

          {/* Milestone 3: VKU ICPC Team */}
          <Link to="/experience" className="block group/card h-full">
            <BentoCard className="p-8 flex flex-col justify-between h-full border-none !bg-surface-container-low/60 hover:!bg-surface-container-low transition-all duration-300">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6 group-hover/card:scale-110 transition-transform">
                  <Code className="w-5 h-5" />
                </div>
                <span className="font-label-mono text-[10px] text-emerald-600 uppercase font-bold tracking-widest block mb-2">{s.experience.icpc.tag}</span>
	                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover/card:text-emerald-600 transition-colors">{s.experience.icpc.title}</h3>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mb-6 opacity-80">
	                  {s.experience.icpc.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-center text-caption font-label-mono text-on-surface-variant/75">
                <span>2024 — Present</span>
                <span className="text-emerald-600 font-bold flex items-center gap-1 group-hover/card:translate-x-1 transition-transform">{s.experience.details} <ArrowRight className="w-3 h-3" /></span>
              </div>
            </BentoCard>
          </Link>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="mb-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-headline-lg text-3xl font-bold mb-4">{s.ecosystem.title}</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4"></div>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm font-body-md">
            {s.ecosystem.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {techCategories.map((category, idx) => {
            const colSpan = idx < 3 ? "md:col-span-4" : "md:col-span-6";
            return (
              <BentoCard
                key={idx}
                className={`${colSpan} p-8 flex flex-col justify-between relative group/card border-none !bg-surface-container-low/70 hover:!bg-surface-container-low transition-all duration-500 overflow-hidden`}
                delay={0.1 * (idx + 1)}
              >
                <div className="mb-6">
                  <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-widest block mb-2">{category.subtitle}</span>
                  <h3 className="font-display text-2xl font-bold text-on-surface mb-3">{category.title}</h3>
                  <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mb-6">{category.description}</p>
                  {category.visual}
                </div>

                <div>
                  <span className="font-label-mono text-[10px] text-on-surface-variant/80 uppercase font-bold tracking-wide block mb-3">{s.ecosystem.key}</span>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="relative group/tooltip">
                        <span className="cursor-help px-3 py-1.5 text-xs font-label-mono font-bold rounded-lg border bg-surface text-on-surface-variant border-outline-variant/30 hover:border-primary hover:text-primary transition-all inline-block hover:scale-[1.03]">
                          {skill.name}
                        </span>
                        {/* Premium Hover Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 bg-surface-container-highest border border-outline text-[10px] text-on-surface font-sans rounded-xl opacity-0 pointer-events-none group-hover/tooltip:opacity-100 transition-all duration-200 z-30 shadow-xl scale-95 group-hover/tooltip:scale-100 text-left">
                          <div className="font-bold font-label-mono text-primary mb-1 border-b border-outline-variant/30 pb-0.5">{skill.name}</div>
                          <div className="leading-relaxed text-[9px] text-on-surface-variant">{skill.tooltip}</div>
                          {/* Tooltip triangle */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 rotate-45 bg-surface-container-highest border-r border-b border-outline"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </div>
      </section>

      {/* Education & Academy Preview */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 px-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label-mono font-bold mb-4">
	              <GraduationCap className="w-3.5 h-3.5" /> {s.academic.tag}
            </div>
            <h2 className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight">
	              {s.academic.title}
            </h2>
          </div>
          <Link
            to="/education"
            className="group flex items-center gap-2 font-label-mono text-sm font-bold text-primary hover:text-primary-container transition-colors"
          >
	            {s.academic.cta}
            <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* VKU Brief Card */}
          <BentoCard className="lg:col-span-7 p-8 flex flex-col justify-between relative overflow-hidden group border-none !bg-surface-container-low/70" delay={0.1}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500"></div>
            <div>
              <div className="flex gap-4 items-center mb-6">
                <div className="brand-logo-surface w-14 h-14 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 shadow-sm border group-hover:scale-105 transition-transform">
                  <img src="/Infor/Logo_school.png" alt="VKU Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-label-mono text-[10px] text-primary uppercase font-bold tracking-widest block">
	                    {s.academic.vku.tag}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-on-surface">
	                    {s.academic.vku.name}
                  </h3>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm mb-6 max-w-xl">
	                {s.academic.vku.desc}
              </p>
              <div className="flex flex-wrap gap-4 text-[11px] font-label-mono text-on-surface-variant font-bold">
	                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-red-500" /> {s.academic.vku.location}</span>
	                <span className="flex items-center gap-1.5 text-primary">{s.academic.vku.degree}</span>
              </div>
            </div>
          </BentoCard>

          {/* Faculty Brief Card */}
          <BentoCard className="lg:col-span-5 p-8 flex flex-col justify-between relative overflow-hidden group border-none !bg-surface-container-low/70" delay={0.2}>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-2xl -mr-12 -mb-12 group-hover:bg-secondary/10 transition-colors duration-500"></div>
            <div>
              <div className="flex gap-4 items-center mb-6">
                <div className="brand-logo-surface w-14 h-14 rounded-xl flex items-center justify-center p-2.5 flex-shrink-0 shadow-sm border group-hover:scale-105 transition-transform">
                  <img src="/Infor/Logo_CS.png" alt="Faculty of CS Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="font-label-mono text-[10px] text-secondary uppercase font-bold tracking-widest block">
	                    {s.academic.faculty.tag}
                  </span>
                  <h3 className="font-display text-xl font-bold text-on-surface">
	                    {s.academic.faculty.name}
                  </h3>
                </div>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-sm opacity-90">
	                {s.academic.faculty.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-outline-variant/30">
              <span className="font-label-mono text-[9px] uppercase font-bold text-secondary block mb-1">{s.academic.faculty.core_tag}</span>
	              <p className="text-[11px] text-on-surface font-semibold">{s.academic.faculty.core}</p>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* Philosophy & Vision Preview */}
      <section className="mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 px-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-label-mono font-bold mb-4">
	              <Zap className="w-3.5 h-3.5" /> {s.philosophy.tag}
            </div>
            <h2 className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight">
	              {s.philosophy.title}
            </h2>
          </div>
          <Link
            to="/philosophy"
            className="group flex items-center gap-2 font-label-mono text-sm font-bold text-secondary hover:text-secondary-container transition-colors"
          >
	            {s.philosophy.cta}
            <div className="w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:text-on-secondary transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Build Real Products */}
          <Link to="/philosophy" className="block group/pillar">
            <BentoCard className="p-8 h-full flex flex-col justify-between relative overflow-hidden border-none !bg-surface-container-low/70 hover:!bg-surface-container-low transition-all duration-300" delay={0.1}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-8 -mt-8 group-hover/pillar:bg-primary/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover/pillar:scale-110 transition-transform duration-300">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover/pillar:text-primary transition-colors">
	                  {s.philosophy.pillar1.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed opacity-85">
	                  {s.philosophy.pillar1.desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-outline-variant/30 flex justify-between items-center relative z-10">
                <div className="flex gap-1.5">
                  {["UdonFi", "VioTune"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-primary/5 text-primary rounded text-[9px] font-label-mono font-bold">{tag}</span>
                  ))}
                </div>
                <span className="text-primary font-bold text-caption font-label-mono flex items-center gap-1 group-hover/pillar:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </BentoCard>
          </Link>

          {/* Pillar 2: Systems Thinking */}
          <Link to="/philosophy" className="block group/pillar">
            <BentoCard className="p-8 h-full flex flex-col justify-between relative overflow-hidden border-none !bg-surface-container-low/70 hover:!bg-surface-container-low transition-all duration-300" delay={0.2}>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl -mr-8 -mb-8 group-hover/pillar:bg-secondary/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-5 group-hover/pillar:scale-110 transition-transform duration-300">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover/pillar:text-secondary transition-colors">
	                  {s.philosophy.pillar2.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed opacity-85">
	                  {s.philosophy.pillar2.desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-outline-variant/30 flex justify-between items-center relative z-10">
                <div className="flex gap-1.5">
                  {["NestJS", "FastAPI"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-secondary/5 text-secondary rounded text-[9px] font-label-mono font-bold">{tag}</span>
                  ))}
                </div>
                <span className="text-secondary font-bold text-caption font-label-mono flex items-center gap-1 group-hover/pillar:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </BentoCard>
          </Link>

          {/* Pillar 3: Fundamentals Focus */}
          <Link to="/philosophy" className="block group/pillar">
            <BentoCard className="p-8 h-full flex flex-col justify-between relative overflow-hidden border-none !bg-surface-container-low/70 hover:!bg-surface-container-low transition-all duration-300" delay={0.3}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-tertiary/5 rounded-full blur-[60px] pointer-events-none group-hover/pillar:bg-tertiary/10 transition-colors" />
              <div className="relative z-10">
                <div className="w-10 h-10 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-5 group-hover/pillar:scale-110 transition-transform duration-300">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-on-surface mb-3 group-hover/pillar:text-tertiary transition-colors">
	                  {s.philosophy.pillar3.title}
                </h3>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed opacity-85">
	                  {s.philosophy.pillar3.desc}
                </p>
              </div>
              <div className="pt-5 mt-5 border-t border-outline-variant/30 flex justify-between items-center relative z-10">
                <div className="flex gap-1.5">
                  {["DSA", "ICPC", "Graph Theory"].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-tertiary/5 text-tertiary rounded text-[9px] font-label-mono font-bold">{tag}</span>
                  ))}
                </div>
                <span className="text-tertiary font-bold text-caption font-label-mono flex items-center gap-1 group-hover/pillar:translate-x-1 transition-transform">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </BentoCard>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mb-12" id="home-contact">
        <div className="mb-12 px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-label-mono font-bold mb-4">
	            <Send className="w-3.5 h-3.5" /> {s.contact.tag}
          </div>
          <h2 className="font-display text-display text-4xl md:text-5xl font-bold tracking-tight">
	            {s.contact.title}
          </h2>
          <p className="text-on-surface-variant max-w-xl mt-4 text-sm font-body-md">
	            {s.contact.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Contact Info Card */}
          <BentoCard className="md:col-span-5 p-8 border-none !bg-surface-container-low/70 relative overflow-hidden" delay={0.1}>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <a href="tel:+84917363528" className="flex items-center gap-4 group/contact cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover/contact:bg-primary group-hover/contact:text-on-primary transition-all duration-300 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
	                  <p className="font-label-mono text-[9px] text-on-surface-variant uppercase font-bold tracking-widest">{s.contact.phone}</p>
                  <p className="font-display text-base font-bold text-on-surface">+84 917 363 528</p>
                </div>
              </a>

              <a href="mailto:anhnt.24ite@vku.udn.vn" className="flex items-center gap-4 group/contact cursor-pointer">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary group-hover/contact:bg-secondary group-hover/contact:text-on-secondary transition-all duration-300 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-label-mono text-[9px] text-on-surface-variant uppercase font-bold tracking-widest">Email</p>
                  <p className="font-display text-base font-bold text-on-surface">anhnt.24ite@vku.udn.vn</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-tertiary/10 flex items-center justify-center text-tertiary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
	                  <p className="font-label-mono text-[9px] text-on-surface-variant uppercase font-bold tracking-widest">{s.contact.location}</p>
	                  <p className="font-display text-base font-bold text-on-surface">{s.academic.vku.location}</p>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Social Links & CTA Card */}
          <BentoCard className="md:col-span-7 p-8 border-none !bg-inverse-surface text-inverse-on-surface relative overflow-hidden" delay={0.2}>
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="mb-8">
                <span className="font-label-mono text-[10px] text-primary-fixed mb-3 block uppercase font-bold tracking-widest">
	                  {s.contact.platform_tag}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
	                  {s.contact.collab_title}
                </h3>
                <p className="text-inverse-on-surface/70 text-sm leading-relaxed max-w-md">
	                  {s.contact.collab_desc}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/TheAnh1404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-3.5 px-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group/social"
                >
                  <GithubIcon className="w-5 h-5 text-white" />
                  <span className="font-label-mono text-[11px] font-bold text-white">GITHUB</span>
                  <ArrowRight className="w-3 h-3 text-white/60 opacity-0 group-hover/social:opacity-100 transition-opacity" />
                </a>
                <a
                  href="https://linkedin.com/in/theanh1404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-3.5 px-5 bg-[#0A66C2]/20 backdrop-blur-sm rounded-xl border border-[#0A66C2]/30 hover:bg-[#0A66C2]/40 hover:border-[#0A66C2]/50 transition-all duration-300 group/social"
                >
                  <LinkedinIcon className="w-5 h-5 text-[#5DA3E8]" />
                  <span className="font-label-mono text-[11px] font-bold text-white">LINKEDIN</span>
                  <ArrowRight className="w-3 h-3 text-white/60 opacity-0 group-hover/social:opacity-100 transition-opacity" />
                </a>
                <Link
                  to="/philosophy#contact"
                  className="flex-1 flex items-center justify-center gap-3 py-3.5 px-5 bg-primary/80 rounded-xl border border-primary hover:bg-primary transition-all duration-300 group/social"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span className="font-label-mono text-[11px] font-bold text-white">{s.contact.cta_msg}</span>
                </Link>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>
    </div>
  );
};
