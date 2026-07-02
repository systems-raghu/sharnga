import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Listen",
      body: "Agent watches every DM, story reply, comment and post tag in real time — no message slips through.",
      detail: "@ava.rivers · DM received 2s ago",
    },
    {
      n: "02",
      title: "Engage in your voice",
      body: "Trained on 100s of your past DMs so replies sound like you — slang, emojis, line breaks and all.",
      detail: "Drafting reply · matching tone…",
    },
    {
      n: "03",
      title: "Qualify",
      body: "Asks the right discovery questions, scores intent, and filters out tire-kickers before they reach you.",
      detail: "Intent score: 8.4 / 10 · HOT",
    },
    {
      n: "04",
      title: "Book",
      body: "Drops your Calendly, holds the slot, sends reminders. Hot leads land straight on your calendar.",
      detail: "Calendly · Thu Jul 18 · 2:00 PM ✓",
    },
  ];

  return (
    <section id="how" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs text-[#293A22] tracking-[0.15em] uppercase font-bold mb-4 font-mono">
            How it works
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>From DM to booked call. In 4 steps.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              Every agent we build follows the same proven pipeline — custom-tuned to your brand voice and offer.
            </p>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={idx}>
              <BlurReveal delay={idx * 0.1}>
                <div className="h-full p-8 rounded-3xl border border-slate-100 bg-slate-50/50 flex flex-col hover:border-[#293A22]/30 hover:bg-white transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-sm font-bold text-[#293A22]">{step.n}</span>
                    <div className="h-px flex-1 bg-slate-200 group-hover:bg-[#293A22]/20 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8 flex-1">
                    {step.body}
                  </p>
                  <div className="mt-auto py-3 px-4 rounded-xl border border-dashed border-slate-200 bg-white font-mono text-[10px] text-slate-400">
                    {step.detail}
                  </div>
                </div>
              </BlurReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
