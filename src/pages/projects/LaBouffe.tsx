import React from "react";
import { Link } from "react-router-dom";
import { BentoCard } from "../../components/BentoCard";
import { 
  ArrowLeft, Terminal
} from "lucide-react";

export const LaBouffe: React.FC = () => {
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
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label-mono text-label-mono text-primary uppercase tracking-widest mb-4 block font-bold">
              Case Study • 2024
            </span>
            <h1 className="font-display text-display text-5xl font-bold mb-4">LaBouffe</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A next-generation serverless real-time food delivery platform engineered for ultra-low latency order synchronization and high-integrity financial transactions.
            </p>
          </div>
          <div className="flex gap-4 self-start md:self-end">
            <div className="flex flex-col items-center p-4 bg-surface-container rounded-xl border border-outline-variant/30 w-32 shadow-sm">
              <span className="font-label-mono text-caption text-primary font-bold">Latency</span>
              <span className="font-headline-md text-headline-md font-bold mt-1 text-on-surface">&lt; 150ms</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-surface-container rounded-xl border border-outline-variant/30 w-32 shadow-sm">
              <span className="font-label-mono text-caption text-primary font-bold">Availability</span>
              <span className="font-headline-md text-headline-md font-bold mt-1 text-on-surface">99.9%</span>
            </div>
          </div>
        </div>
        
        {/* Banner Mockup */}
        <div className="mt-12 relative w-full h-[500px] rounded-2xl overflow-hidden border border-outline-variant/30 bg-surface-container-highest flex items-center justify-center shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
          <img 
            className="w-3/4 md:w-1/2 drop-shadow-2xl translate-y-12 z-20" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKNR5rOreeh4a7mAQXSNxHNxK7qdwIE4zX5XbcLO5py1EKUhJpbTRwFZoFdHLv_5d3xUiRgq7G2oiLa8qRSQLRxPlm-Ud-gCMmVA46KpNA56xC_MITZ3hfiHMPEFkQSZHeyGthl-5NE3sYIHoX4zSGnI5kFed6nHrdRZO83aJ80xGHyW3IpOL_ChA2Rcru57MfHjWjnQRRpBJLwBdhHJlN8Z99xgFCTM9pJbrPfVo-IA50RksExJK6TGeZg83qkSgs2_ilHuwZRykL" 
            alt="LaBouffe App Mockup"
          />
        </div>
      </header>

      {/* Tech Foundation Bento Grid */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-8 flex items-center gap-3">
          <Terminal className="text-primary w-7 h-7" /> Technical Foundation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Frameworks */}
          <BentoCard className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">Frameworks</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">React Native</span>
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">Expo</span>
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">TypeScript</span>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Built with a single codebase for cross-platform excellence, ensuring UI consistency across iOS and Android.
            </p>
          </BentoCard>

          {/* Backend */}
          <BentoCard className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">Backend</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">Firebase functions</span>
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">Firestore</span>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Serverless architecture providing infinite scalability without the overhead of server maintenance.
            </p>
          </BentoCard>

          {/* Infrastructure */}
          <BentoCard className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-md text-headline-md font-bold mb-6 text-on-surface">Infrastructure</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">Stripe API</span>
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">Sentry</span>
                <span className="font-label-mono text-caption px-3 py-1 bg-surface-container-highest border border-outline-variant/50 rounded-lg font-bold">Google Maps</span>
              </div>
            </div>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Industry-leading telemetry and payment processing for a robust production-grade environment.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* System Architecture Flow */}
      <section className="mb-20 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-outline-variant/30 hidden md:block z-0"></div>
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-16 text-center">System Architecture</h2>
        
        <div className="space-y-16 relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 md:text-right">
              <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Mobile Client</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                React Native application handling user interactions, real-time location streaming, and state management via Redux Toolkit.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-lg shadow-primary/20 flex-shrink-0">
              1
            </div>
            <div className="md:w-1/2 h-32 md:h-auto overflow-hidden rounded-xl border border-outline-variant/20 shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgVnYZYxSVRhQa1luD5ZZCEiJw4eDpE4popishA2lw8h9L3XtF6jKow6JJ9nhemoJCKO7yc9BcPnR6O4IRlhIEVsJ-PN-LKsQDzSuQvif8IFSHLs-euqjiqob7-6YoVbgRTHnbICwKfp3qgML15yv_E7Gyo1VfqTSUEzocmWjPVQZfvITqKygYfj7owCCNnytFoOdYHl6_E4D7_S56T0rQGd6HAlaVoAGBayX_RaqqvodHRSlM2paw6LFQqfXlGm0txuBw3YrscDwl" 
                alt="Client Code"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Cloud Functions</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Event-driven serverless functions acting as the API gateway, managing business logic and payment orchestration.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-lg shadow-primary/20 flex-shrink-0">
              2
            </div>
            <div className="md:w-1/2 h-32 md:h-auto overflow-hidden rounded-xl border border-outline-variant/20 shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbRIx0ga0BjmM0ZeYyT2saHOQ-wA3g0pYTktLOAIwa6OCEbIMSLly2wDu8gMSLCG5X_plgONlgRMY3ztCS_QHyiZgq_D4z8llIBNsPnZUIYHsK4DxXr5StQzhh37WIqOFbgBY-IsUaWD8HXMuV84vulgT5N-flzFOqQfh6vpmUJxy-5IBHmrj4Ls7CTBaMJViJO6s2RnD0k-V81UDMT1528_Qx_pyGP03M01R3vdV8JScFyb3bpdi13EiJ09su_shXo_zpnfFiG99w" 
                alt="Serverless Compute Node"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 md:text-right">
              <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Firestore (Real-time)</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                NoSQL document store providing instant synchronization of order states across drivers and customers.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-lg shadow-primary/20 flex-shrink-0">
              3
            </div>
            <div className="md:w-1/2 h-32 md:h-auto overflow-hidden rounded-xl border border-outline-variant/20 shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO5AZjy34KrhPbVEbUmYztFw1hWELh4T_PN0_cHuAH228ZVRLzYXMYJVQ6T1xnqdBwKqL-jGnXsdlbLFJF_PcEfJApbef8WqUhcMjm4hlKx5qCqY6sLP63qiRJJWQs8FiaGSWAjuvB5E9YwEI896LPNvwRNjxk0gHILHH1jE3K4W4aDqMIQ8ZysyrRGOd9YUxhpOaWKM_XHA_T9J1FVGU7an6-SiyEyLegokYUeNYQSglLMr3f9rZGsoUi0pDkO49s6n0UAJwYbHpM" 
                alt="High-Speed Sync Grid"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <h4 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">Stripe & Sentry</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Secure idempotent payment processing and real-time error telemetry for production stability.
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold shadow-lg shadow-primary/20 flex-shrink-0">
              4
            </div>
            <div className="md:w-1/2 h-32 md:h-auto overflow-hidden rounded-xl border border-outline-variant/20 shadow-sm">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuByZoXRDsU-zHuXsN7cG-pleIJnwuLF0ydnFAY1pdHgJI0l3cZOIrRhslZl_MzM8H-OjKPp4LAfc4peAgJ_kNu1EyCJradzpi_3cp0sOpUkzZi_QCZ1a2Bmh1CGetnxDwS28X6KK13s1jWt6GtWl69pW4i6zHHtUBAnmDD9b3g5DSe1jkx2aiOdWvCkuaRjueMtZE-EnN0m0J0W74ncAm4QKUjMaPGr_8ysKWnDIBXdPnt2-CFSWIsJTfwCRqU3qTVzZbLZ-QgNi5yF" 
                alt="Telemetry Dashboard"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-20">
        <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-12">Engineering Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BentoCard className="p-8">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">track_changes</span>
            <h5 className="font-headline-md text-headline-md font-bold mb-3 text-on-surface">Distributed Order Tracking</h5>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Implemented a reactive state machine that syncs order progress (Received → Preparing → Out for Delivery) across three separate user roles with zero data collision.
            </p>
          </BentoCard>
          
          <BentoCard className="p-8">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">account_balance_wallet</span>
            <h5 className="font-headline-md text-headline-md font-bold mb-3 text-on-surface">Idempotent Payments</h5>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Strict logic to prevent double-charging on flaky connections, using Firestore transactions and Stripe's idempotency keys for 100% financial accuracy.
            </p>
          </BentoCard>
          
          <BentoCard className="p-8">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">monitoring</span>
            <h5 className="font-headline-md text-headline-md font-bold mb-3 text-on-surface">Error Telemetry</h5>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Global Sentry integration with breadcrumbs and user context, allowing for sub-minute identification and resolution of production issues.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="p-12 bg-primary-container rounded-2xl text-on-primary-container relative overflow-hidden border border-primary/10">
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-3xl font-bold mb-6">Interested in the full technical documentation?</h2>
          <p className="font-body-lg text-body-lg mb-8 opacity-90 leading-relaxed">Deep dive into the source code, deployment strategies, and CI/CD pipelines used for LaBouffe.</p>
          <div className="flex gap-4">
            <button 
              onClick={() => alert("Redirecting to GitHub...")}
              className="bg-on-primary-container text-primary-container px-8 py-3 rounded-full font-label-mono text-label-mono font-bold hover:bg-white transition-colors"
            >
              View on GitHub
            </button>
            <button 
              onClick={() => alert("Opening docs...")}
              className="border border-on-primary-container/30 px-8 py-3 rounded-full font-label-mono text-label-mono font-bold hover:bg-white/10 transition-colors"
            >
              Read Docs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
