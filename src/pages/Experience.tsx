import React from "react";
import { motion as fm } from "framer-motion";
import { BentoCard } from "../components/BentoCard";
import { 
  Award, Code, CheckCircle2, 
  Brain, Briefcase
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Experience: React.FC = () => {
  const { lang } = useLanguage();
  const tr = (en: string, vi: string) => lang === "EN" ? en : vi;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pt-32 pb-16">
      {/* Hero Title */}
      <section className="mb-20">
        <fm.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          <span className="font-label-mono text-caption text-primary uppercase font-bold tracking-widest">
            Nguyen The Anh
          </span>
          <h1 className="font-display text-display text-5xl font-bold tracking-tight text-on-surface">
            {tr("Experience & Achievements", "Kinh nghiệm & Thành tích")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed mt-2">
            {tr("Factual engineering history, blockchain solutions, and competitive algorithmic achievements. Verified by production systems and competition benchmarks.", "Hành trình kỹ thuật, giải pháp blockchain và thành tích thuật toán thi đấu được kiểm chứng qua hệ thống thực tế và các kỳ thi.")}
          </p>
        </fm.div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Professional Timeline */}
        <div className="lg:col-span-8 relative pl-6 md:pl-8">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-secondary to-outline-variant opacity-20"></div>
          
          <div className="space-y-12">
            {/* Entry 1: Data Labeling Intern | DevPlus JSC */}
            <fm.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-10 md:pl-12 group"
            >
              <div className="absolute left-[-5px] top-3 w-3.5 h-3.5 rounded-full bg-primary ring-4 ring-primary/20 z-10 transition-transform group-hover:scale-110"></div>
              <BentoCard className="p-8 border-none !bg-surface-container-low/60 hover:!bg-surface-container-low transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-label-mono text-[10px] text-primary uppercase tracking-wider font-bold block">
                        {tr("Professional Internship", "Thực tập Chuyên môn")}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-on-surface mt-0.5">
                        {tr("Data Labeling Intern", "Thực tập sinh Gán nhãn Dữ liệu")}
                      </h3>
                      <p className="text-sm font-body-md text-on-surface-variant font-semibold">DevPlus JSC</p>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono bg-surface px-3 py-1 rounded-lg text-on-surface-variant border border-outline-variant/30 font-bold text-caption self-start md:self-center">
                    {tr("Apr 2026 - Jul 2026", "Tháng 4/2026 - Tháng 7/2026")}
                  </span>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {tr("Data Intelligence Pipelines", "Pipeline Dữ liệu Thông minh")}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mt-1">
                        {tr("Enhanced data intelligence pipelines for ML models, achieving a verified 99.2% accuracy in validation.", "Nâng cấp pipeline dữ liệu cho mô hình ML, đạt độ chính xác kiểm chứng 99,2%.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {tr("QA Automation", "Tự động hóa QA")}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mt-1">
                        {tr("Collaborated on QA automation to reduce regression testing cycles for internal management platforms, optimizing release cycles.", "Phối hợp tự động hóa QA để rút ngắn chu kỳ kiểm thử hồi quy cho nền tảng quản trị nội bộ và tối ưu quy trình phát hành.")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-wrap gap-2">
                  {["ML Pipelines", "Data Intelligence", "QA Automation", "Python", "Regression Testing"].map((t) => (
                    <span key={t} className="bg-surface px-2.5 py-1.5 rounded-lg border border-outline-variant/40 font-label-mono text-caption text-on-surface-variant hover:border-primary hover:text-primary transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </fm.div>

            {/* Entry 2: First Prize - Stellar Hackathon */}
            <fm.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-10 md:pl-12 group"
            >
              <div className="absolute left-[-5px] top-3 w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-secondary/20 z-10 transition-transform group-hover:scale-110"></div>
              <BentoCard className="p-8 border-none !bg-surface-container-low/60 hover:!bg-surface-container-low transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-label-mono text-[10px] text-secondary uppercase tracking-wider font-bold block">
                        {tr("Hackathon Achievement", "Thành tích Hackathon")}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-on-surface mt-0.5">
                        {tr("First Prize - Stellar Mini Hackathon", "Giải Nhất - Stellar Mini Hackathon")}
                      </h3>
                      <p className="text-sm font-body-md text-on-surface-variant font-semibold">{tr("Building Assets", "Xây dựng Tài sản")}</p>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono bg-surface px-3 py-1 rounded-lg text-on-surface-variant border border-outline-variant/30 font-bold text-caption self-start md:self-center">
                    {tr("May 2026", "Tháng 5/2026")}
                  </span>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-secondary mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {tr("UdonFi Lending Protocol", "Giao thức Cho vay UdonFi")}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mt-1">
                        {tr("Engineered UdonFi, a decentralized collateralized lending protocol on Stellar Soroban (Rust / Smart Contracts).", "Phát triển UdonFi, giao thức cho vay thế chấp phi tập trung trên Stellar Soroban bằng Rust và smart contract.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-secondary mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {tr("Storage & Risk Optimizations", "Tối ưu Lưu trữ & Rủi ro")}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mt-1">
                        {tr("Implemented sophisticated risk management models (LTV, Health Factor) and optimized state storage footprint via u128 bitmap packing to minimize gas and bypass Soroban VM constraints.", "Triển khai mô hình quản trị rủi ro LTV, Health Factor và tối ưu vùng lưu trữ trạng thái bằng bitmap u128 để giảm gas, vượt qua giới hạn của Soroban VM.")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-wrap gap-2">
                  {["Stellar Soroban", "Rust Smart Contracts", "u128 Bitmap Packing", "DeFi Risk Engine", "LTV/Health Factor"].map((t) => (
                    <span key={t} className="bg-surface px-2.5 py-1.5 rounded-lg border border-outline-variant/40 font-label-mono text-caption text-on-surface-variant hover:border-secondary hover:text-secondary transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </fm.div>

            {/* Entry 3: VKU ICPC Training Team */}
            <fm.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative pl-10 md:pl-12 group"
            >
              <div className="absolute left-[-5px] top-3 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 z-10 transition-transform group-hover:scale-110"></div>
              <BentoCard className="p-8 border-none !bg-surface-container-low/60 hover:!bg-surface-container-low transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-label-mono text-[10px] text-emerald-600 uppercase tracking-wider font-bold block">
                        {tr("Competitive Programming", "Lập trình Thi đấu")}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-on-surface mt-0.5">
                        {tr("VKU ICPC Training Team", "Đội tuyển Huấn luyện ICPC VKU")}
                      </h3>
                      <p className="text-sm font-body-md text-on-surface-variant font-semibold">{tr("Vietnam-Korea University", "Trường Đại học Việt - Hàn")}</p>
                    </div>
                  </div>
                  <span className="font-label-mono text-label-mono bg-surface px-3 py-1 rounded-lg text-on-surface-variant border border-outline-variant/30 font-bold text-caption self-start md:self-center">
                    {tr("2024 - Present", "2024 - Hiện tại")}
                  </span>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {tr("National Level Algorithmic Contests", "Các kỳ thi Thuật toán Cấp Quốc gia")}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mt-1">
                        {tr("Actively competing in national-level algorithmic contests, solving complex discrete problems under rigorous memory and execution speed limits.", "Tích cực tham gia các kỳ thi thuật toán cấp quốc gia, giải bài toán rời rạc phức tạp dưới giới hạn nghiêm ngặt về bộ nhớ và tốc độ.")}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="text-emerald-500 mt-1 w-5 h-5 flex-shrink-0" />
                    <div>
                      <h4 className="font-headline-md text-headline-md font-bold text-on-surface">
                        {tr("Algorithmic Specialization", "Chuyên môn Thuật toán")}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-body-md leading-relaxed mt-1">
                        {tr("Specializing in advanced Dynamic Programming, Graph Theory algorithms (Shortest paths, Max Flow), and complex data structure optimizations in C++.", "Chuyên sâu quy hoạch động, thuật toán đồ thị như đường đi ngắn nhất và luồng cực đại, cùng tối ưu cấu trúc dữ liệu phức tạp bằng C++.")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-outline-variant/30 flex flex-wrap gap-2">
                  {["C++", "STL Optimization", "Dynamic Programming", "Graph Theory", "Complex Data Structures"].map((t) => (
                    <span key={t} className="bg-surface px-2.5 py-1.5 rounded-lg border border-outline-variant/40 font-label-mono text-caption text-on-surface-variant hover:border-emerald-600 hover:text-emerald-600 transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </BentoCard>
            </fm.div>
          </div>
        </div>

        {/* Right Side: Performance stats, ICPC terminal code snippet, philosophy */}
        <div className="lg:col-span-4 space-y-6">
          {/* Factual Performance metrics */}
          <BentoCard className="p-6 border-none !bg-surface-container-high">
            <h4 className="font-label-mono text-xs mb-6 text-on-surface-variant font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {tr("Engineering Benchmarks", "Chỉ số Kỹ thuật")}
            </h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-label-mono mb-2 font-bold text-on-surface">
                  <span>{tr("ML Data Pipeline Accuracy", "Độ chính xác Pipeline Dữ liệu ML")}</span>
                  <span className="text-primary">99.2%</span>
                </div>
                <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/20">
                  <fm.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.2%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-primary h-full rounded-full"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between text-xs font-label-mono mb-2 font-bold text-on-surface">
                  <span>{tr("Soroban Smart Contract Gas Reduction", "Mức giảm Gas Smart Contract Soroban")}</span>
                  <span className="text-secondary">~40%</span>
                </div>
                <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/20">
                  <fm.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-secondary h-full rounded-full"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-label-mono mb-2 font-bold text-on-surface">
                  <span>{tr("VKU ICPC Training Cohort", "Thời gian Huấn luyện ICPC VKU")}</span>
                  <span className="text-emerald-600">{tr("2+ Years", "Hơn 2 năm")}</span>
                </div>
                <div className="w-full bg-surface h-2 rounded-full overflow-hidden border border-outline-variant/20">
                  <fm.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-emerald-500 h-full rounded-full"
                  />
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Interactive C++ Code Terminal */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-inner p-4 font-mono text-[9px] text-on-surface/80 relative">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-2.5 mb-2.5">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[8px] text-on-surface-variant/60 font-label-mono">Dijkstra_Optimized.cpp</span>
            </div>
            
            <div className="space-y-1 select-none text-left">
              <div className="text-on-surface-variant/40">// VKU ICPC - Dijkstra Optimization</div>
              <div>
                <span className="text-primary font-bold">void</span> <span className="text-secondary font-bold">dijkstra</span>(<span className="text-orange-600">int</span> src) {"{"}
              </div>
              <div className="pl-3">
                pq.push({"{"}<span className="text-teal-600">0</span>, src{"}"});
              </div>
              <div className="pl-3">
                dist[src] = <span className="text-teal-600">0</span>;
              </div>
              <div className="pl-3">
                <span className="text-primary font-bold">while</span> (!pq.empty()) {"{"}
              </div>
              <div className="pl-6">
                <span className="text-primary font-bold">auto</span> [d, u] = pq.top(); pq.pop();
              </div>
              <div className="pl-6">
                <span className="text-primary font-bold">if</span> (d &gt; dist[u]) <span className="text-primary font-bold">continue</span>;
              </div>
              <div className="pl-6">
                <span className="text-primary font-bold">for</span> (<span className="text-primary font-bold">auto</span>& [v, w] : adj[u]) {"{"}
              </div>
              <div className="pl-9">
                <span className="text-primary font-bold">if</span> (dist[u] + w &lt; dist[v]) {"{"}
              </div>
              <div className="pl-12">
                dist[v] = dist[u] + w;
              </div>
              <div className="pl-12">
                pq.push({"{"}dist[v], v{"}"});
              </div>
              <div className="pl-9">{"}"}</div>
              <div className="pl-6">{"}"}</div>
              <div className="pl-3">{"}"}</div>
              <div>{"}"}</div>
            </div>
            
            <div className="absolute bottom-3 right-4 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 px-2 py-0.5 rounded text-[8.5px] font-label-mono font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
              ICPC STL RUNNER
            </div>
          </div>

          {/* Philosophy Card */}
          <div className="bg-inverse-surface text-inverse-on-surface p-6 rounded-2xl border border-outline/10 relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-0"></div>
            <div className="relative z-10">
              <Brain className="text-primary-fixed mb-4 w-7 h-7" />
              <h4 className="font-headline-md text-headline-md font-bold mb-2 text-white">{tr("Technical Philosophy", "Triết lý Kỹ thuật")}</h4>
              <p className="font-body-md text-inverse-on-surface/75 italic leading-relaxed text-[13px]">
                {tr("\"Correctness is not an afterthought; it is the foundation. Whether it is a data label or a competitive edge case, the system only works when every bit is accounted for.\"", "\"Tính đúng đắn không phải phần bổ sung, mà là nền tảng. Dù là nhãn dữ liệu hay trường hợp biên trong thi đấu, hệ thống chỉ hoạt động khi từng bit đều được tính đến.\"")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
