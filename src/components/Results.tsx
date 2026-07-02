import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { cn } from "../lib/utils";

export function Results() {
  const accent = "#293A22"; // Default accent from design

  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center lg:text-left">
          <div className="text-xs text-[#293A22] tracking-[0.15em] uppercase font-bold mb-4 font-mono">
            Performance
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>Built for high-volume conversion.</LetterReveal>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            Sharnga isn't just about automation — it's about shifting your response time from hours to seconds and capturing every lead before they lose interest.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* Hero Case - Replaced with illustrative benefit */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-100 bg-slate-50/50 relative overflow-hidden group">
            <div className="flex gap-4 items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <div>
                <div className="text-base font-semibold text-slate-900">Founding Partner Benefit</div>
                <div className="text-sm text-slate-500">Illustrative Performance Target</div>
              </div>
            </div>

            <div className="text-2xl sm:text-3xl leading-snug text-slate-900 font-medium mb-10">
              Our goal is to help you book{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-bold">30+ discovery calls every single month</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#293A22]/10 -rotate-1" />
              </span>{" "}
              without you ever opening the Instagram app.
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-slate-200">
              <BigStat num="30+" label="target calls / mo" />
              <BigStat num="24/7" label="coverage" />
              <BigStat num="< 60s" label="response time" />
              <BigStat num="100%" label="lead capture" />
            </div>
          </div>

          {/* Side Stats */}
          <div className="flex flex-col gap-4">
            <div className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2 px-1">
              Expected efficiency gains
            </div>
            <SmallCard title="Avg. response time" before="4h 22m" after="48 seconds" delta="−99%" />
            <SmallCard title="DMs handled / week" before="120 (manual)" after="2,400+ (agent)" delta="20×" />
            <SmallCard title="Lead qualification" before="Manual" after="Automated" delta="+100%" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BigStat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-slate-900 tracking-tight">{num}</div>
      <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">{label}</div>
    </div>
  );
}

function SmallCard({ title, before, after, delta }: { title: string; before: string; after: string; delta: string }) {
  return (
    <BlurReveal>
      <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="text-sm font-medium text-slate-500">{title}</div>
          <div className="text-[10px] font-bold text-[#293A22] px-2 py-1 rounded bg-[#293A22]/10 uppercase tracking-wider">
            {delta}
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <span className="text-sm text-slate-400 line-through font-medium">{before}</span>
          <span className="text-slate-300">→</span>
          <span className="text-2xl font-bold text-slate-900 tracking-tight">{after}</span>
        </div>
      </div>
    </BlurReveal>
  );
}
