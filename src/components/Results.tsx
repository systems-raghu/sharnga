import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function Results() {
  return (
    <section id="results" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>One week. 50+ booked calls.</LetterReveal>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">
          {/* Hero Case */}
          <div className="p-8 sm:p-10 rounded-3xl border border-slate-100 bg-slate-50/50 relative overflow-hidden group">
            <div className="flex gap-4 items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" />
              <div>
                <div className="text-base font-semibold text-slate-900">@coach.jay.fitness</div>
                <div className="text-sm text-slate-500">Online fitness coach · 84k followers</div>
              </div>
            </div>

            <div className="text-2xl sm:text-3xl leading-snug text-slate-900 font-medium mb-10">
              "I was burning out trying to keep up with DMs. Sharnga's agent booked{" "}
              <span className="relative inline-block text-[#1C3418]">
                <span className="relative z-10 font-bold">50+ discovery calls in the first 7 days</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#1C3418]/10 -rotate-1" />
              </span>{" "}
              — and 11 of them turned into paying clients."
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-slate-200">
              <BigStat num="50+" label="calls booked / wk 1" />
              <BigStat num="11" label="new clients closed" />
              <BigStat num="$47k" label="cash collected" />
              <BigStat num="6×" label="response rate" />
            </div>
          </div>

          {/* Side Stats */}
          <div className="flex flex-col gap-4">
            <SmallCard title="Avg. response time" before="4h 22m" after="48 seconds" delta="−99%" delay={0.1} />
            <SmallCard title="DMs handled / week" before="120 (by you)" after="2,400 (by agent)" delta="20×" delay={0.2} />
            <SmallCard title="Show-up rate" before="42%" after="78%" delta="+36pt" delay={0.3} />
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

function SmallCard({ title, before, after, delta, delay = 0 }: { title: string; before: string; after: string; delta: string; delay?: number }) {
  return (
    <BlurReveal delay={delay}>
      <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <div className="text-sm font-medium text-slate-500">{title}</div>
          <div className="text-[10px] font-bold text-[#1C3418] px-2 py-1 rounded bg-[#1C3418]/10 uppercase tracking-wider">
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
