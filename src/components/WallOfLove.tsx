import { CustomBadgeCheck } from "./icons/CustomBadgeCheck";
import { GreenTexturedBackground } from "./GreenTexturedBackground";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

const testimonials = [
  {
    quote: "Added $40k in pipeline my first month. It’s completely hands-off. I wake up, check my calendar, and the calls are just there. The AI asks better qualifying questions than my last VA.",
    author: "Sarah J.",
    role: "Business Coach",
    metrics: "+12 Qualified Calls/Wk"
  },
  {
    quote: "I finally have my weekends back. The AI handles the tire-kickers and only books people who have the budget and are ready to buy. My closing rate has actually gone up.",
    author: "Mark T.",
    role: "Fitness Entrepreneur",
    metrics: "25% Higher Close Rate"
  },
  {
    quote: "Way better than the 3 VAs I went through. No sick days, no time-zone issues, and it sounds exactly like me. My audience hasn't noticed a difference, but my revenue sure has.",
    author: "Elena R.",
    role: "High-Ticket Consultant",
    metrics: "100% Response Rate"
  }
];

export function WallOfLove() {
  return (
    <section className="py-20 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative">
      <GreenTexturedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">
            <LetterReveal>Don't Just Take Our Word For It</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-white/90">
              See how top personal brands are reclaiming their time and scaling their revenue.
            </p>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <BlurReveal key={idx} delay={0.1 * idx}>
              <div className="relative overflow-hidden rounded-2xl p-[1px] h-full flex hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a5b89f_0%,transparent_50%,#a5b89f_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between w-full h-full cursor-default z-10">
                  <div>
                    <div className="flex text-blue-500 mb-4">
                    <CustomBadgeCheck className="w-5 h-5" />
                  </div>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{t.author}</p>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#1C3418] uppercase tracking-wider">{t.metrics}</p>
                  </div>
                </div>
               </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
