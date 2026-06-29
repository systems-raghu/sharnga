import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function Comparison() {
  const rows = [
    ["Response time", "4–24 hours", "Often missed", "< 60 seconds"],
    ["Hours of coverage", "8h / day", "Working hours", "24 / 7 / 365"],
    ["Trained on your voice", "Yes", "Generic", "Yes — 100s of past DMs"],
    ["Handles objections", "If skilled", "Scripted only", "Custom playbooks per offer"],
    ["Books to your calendar", "Manual", "Sometimes", "Auto + reminders"],
    ["Monthly cost", "$3–6k+ salary", "$99–500", "Done-for-you fee"],
    ["Sleeps, gets tired, churns", "Yes", "—", "No"],
  ];

  return (
    <section id="comparison" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>The honest comparison.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-slate-600">
              Human setter vs. chatbot vs. Sharnga.
            </p>
          </BlurReveal>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50 overflow-hidden">
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] p-6 border-b border-slate-100 bg-slate-50/50 text-[10px] font-bold tracking-widest uppercase text-slate-400">
              <div>Metric</div>
              <div>Human Setter</div>
              <div>Generic Chatbot</div>
              <div className="text-[#1C3418]">Sharnga Agent</div>
            </div>

            <div className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-[1.5fr_1fr_1fr_1.2fr] p-6 text-sm items-center hover:bg-slate-50/30 transition-colors">
                  <div className="font-medium text-slate-900">{row[0]}</div>
                  <div className="text-slate-500">{row[1]}</div>
                  <div className="text-slate-500">{row[2]}</div>
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <div className="w-5 h-5 rounded-full bg-[#1C3418] flex items-center justify-center text-white text-[10px]">✓</div>
                    {row[3]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
