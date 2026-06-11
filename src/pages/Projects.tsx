import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { UdonLogo } from "../components/UdonLogo";
import {
  Terminal, ArrowRight,
  Sparkles, Cloud, Brain
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ProjectData {
  id: string;
  category: "blockchain" | "ai" | "serverless";
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  link: string;
  icon: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "blockchain" | "ai" | "serverless">("all");
  const { lang } = useLanguage();
  const tr = (en: string, vi: string) => lang === "EN" ? en : vi;

  const projects: ProjectData[] = [
    {
      id: "udonfi",
      category: "blockchain",
      title: "UdonFi",
      badge: tr("DeFi Infrastructure", "Hạ tầng DeFi"),
      description: tr("High-performance decentralized lending protocol on Stellar Soroban. Engineered for extreme capital efficiency using u128 bitmap packing and 2-step liquidation flows.", "Giao thức cho vay phi tập trung hiệu năng cao trên Stellar Soroban, tối ưu hiệu quả vốn bằng bitmap u128 và quy trình thanh lý hai bước."),
      highlights: [
        tr("u128 Bitmap packing logic (95% storage fee reduction).", "Logic đóng gói bitmap u128 giúp giảm 95% phí lưu trữ."),
        tr("Decentralized 2-Step Liquidation flow bypassing CPU limits.", "Quy trình thanh lý phi tập trung hai bước vượt qua giới hạn CPU."),
        tr("Kinked APY interest model for liquidity risk governance.", "Mô hình lãi suất APY gấp khúc để quản trị rủi ro thanh khoản.")
      ],
      tech: ["Rust", "Soroban", "Node.js", "React 19"],
      image: "/Infor/udonFI/HomeUdonFi.png",
      link: "/projects/udonfi",
      icon: <UdonLogo showNetwork={false} className="!p-0 !bg-transparent border-none scale-50 -ml-4" />
    },
    {
      id: "viotune",
      category: "ai",
      title: "VioTune",
      badge: tr("Intelligent Audio", "Âm thanh thông minh"),
      description: tr("Music discovery platform powered by a hybrid recommendation engine. Leveraging SVD Matrix Factorization and KNN for hyper-personalized experiences.", "Nền tảng khám phá âm nhạc dùng hệ gợi ý kết hợp, tận dụng SVD Matrix Factorization và KNN để cá nhân hóa trải nghiệm."),
      highlights: [
        tr("Hybrid Engine: Blending SVD (latent patterns) with KNN (acoustic features).", "Bộ máy kết hợp SVD (mẫu ẩn) với KNN (đặc trưng âm thanh)."),
        tr("Weighted Reciprocal Rank Scoring for high-precision discovery.", "Chấm điểm Weighted Reciprocal Rank cho kết quả khám phá chính xác."),
        tr("Asynchronous FastAPI backend with <150ms inference latency.", "Backend FastAPI bất đồng bộ với độ trễ suy luận dưới 150ms.")
      ],
      tech: ["FastAPI", "React", "Scikit-Learn", "SVD"],
      image: "/Infor/Viotune/Cover.png",
      link: "/projects/viotune",
      icon: <Brain className="w-5 h-5 text-secondary" />
    },
    {
      id: "labouffe",
      category: "serverless",
      title: "LaBouffe",
      badge: tr("Cloud Native", "Cloud Native"),
      description: tr("Hyper-local logistics engine optimizing last-mile delivery via serverless edge workers and real-time GPS interpolation.", "Bộ máy logistics siêu địa phương tối ưu giao hàng chặng cuối bằng serverless edge worker và nội suy GPS thời gian thực."),
      highlights: [
        tr("Distributed reactive state machine for multi-party tracking.", "Máy trạng thái phản ứng phân tán để theo dõi nhiều bên."),
        tr("60fps real-time shipper movement via Linear Interpolation.", "Chuyển động shipper thời gian thực 60fps bằng nội suy tuyến tính."),
        tr("Idempotent payment flows using Stripe and Firebase ACID transactions.", "Luồng thanh toán idempotent bằng Stripe và giao dịch ACID của Firebase.")
      ],
      tech: ["React Native", "Expo SDK 54", "Firebase", "Stripe API"],
      image: "/Infor/Labouffe/Group 1.png",
      link: "/projects/labouffe",
      icon: <Cloud className="w-5 h-5 text-primary" />
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Header */}
      <header className="mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-display text-5xl font-bold mb-4"
        >
          {tr("Engineering Systems", "Hệ thống Kỹ thuật")}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
        >
          {tr("A selection of architectural explorations in distributed systems, financial infrastructure, and machine learning pipelines.", "Tuyển chọn các dự án khám phá kiến trúc hệ thống phân tán, hạ tầng tài chính và pipeline học máy.")}
        </motion.p>
      </header>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-outline-variant/50 pb-6">
        {(["all", "blockchain", "ai", "serverless"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full font-label-mono text-caption transition-all font-bold ${
              filter === cat
                ? "bg-primary text-on-primary shadow-sm"
                : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant"
            }`}
          >
            {({
              all: tr("All", "Tất cả"),
              blockchain: "Blockchain",
              ai: "AI",
              serverless: "Serverless",
            })[cat]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className={`project-card ${
                p.id === "udonfi" ? "md:col-span-12 lg:col-span-8" : "md:col-span-6 lg:col-span-6"
              }`}
            >
              <BentoCard className="h-full flex flex-col justify-between">
                <div>
                  {/* Image Header */}
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 opacity-40 group-hover:opacity-10 transition-opacity" />
                    <img 
                      src={p.image} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      {p.icon}
                      <span className="font-label-mono text-caption text-primary uppercase tracking-wider font-bold">
                        {p.badge}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mb-2">
                      {p.title}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                      {p.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <h3 className="font-label-mono text-caption text-outline uppercase tracking-widest font-bold">
                        {tr("Engineering Highlights", "Điểm nổi bật Kỹ thuật")}
                      </h3>
                      <ul className="space-y-2">
                        {p.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                            <span className="text-body-md text-on-surface-variant">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-2 mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.tech.map((t) => (
                      <span key={t} className="bg-surface-variant border border-outline-variant px-3 py-1 rounded font-label-mono text-caption">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={p.link}
                    className="inline-flex items-center gap-2 font-label-mono text-label-mono text-primary font-bold hover:gap-4 transition-all"
                  >
                    {tr("View Case Study", "Xem Case Study")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </BentoCard>
            </motion.div>
          ))}

          {/* System Exploration Placeholder (Spans 4 columns or sits next to projects) */}
          {filter === "all" && (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-12 lg:col-span-4"
            >
              <div className="border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-12 text-center h-full min-h-[400px] hover:bg-surface-container-low transition-colors duration-300">
                <Terminal className="text-outline w-12 h-12 mb-4" />
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface-variant mb-2">
                  {tr("System Exploration", "Khám phá Hệ thống")}
                </h3>
                <p className="font-body-md text-body-md text-outline max-w-xs leading-relaxed">
                  {tr("Currently developing a distributed state-machine for low-latency trading execution.", "Đang phát triển máy trạng thái phân tán cho hệ thống thực thi giao dịch độ trễ thấp.")}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant rounded-full text-caption font-label-mono">
                  <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" /> {tr("In R&D Phase", "Đang trong giai đoạn R&D")}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
