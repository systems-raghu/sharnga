import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function PainSection() {
  return (
    <section className="py-24 sm:py-32 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-white">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[#1C3418] font-bold tracking-widest uppercase text-sm mb-4">
          <LetterReveal>The Bottleneck</LetterReveal>
        </h2>
        <h3 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-8 leading-tight">
          <LetterReveal delay={0.1}>Your Inbox is a Goldmine.</LetterReveal> <br className="hidden sm:block" />
          <LetterReveal delay={0.2}>But Right Now, It's a Waiting Room.</LetterReveal>
        </h3>
        
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
          <BlurReveal delay={0.3}>
            <p>
              You've built an audience. The demand is there. But every unanswered DM is a prospect losing interest. The longer a lead waits, the faster their buying temperature drops.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.4}>
            <p>
              You tried hiring a Virtual Assistant. But managing them takes almost as much time as answering the messages yourself. They take sick leaves, struggle to match your exact tone, and the time-zone delays mean you're still missing opportunities while you sleep.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.5}>
            <p className="text-slate-900 font-medium text-xl mt-8">
              You don't need another employee to manage. You need a frictionless system.
            </p>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
