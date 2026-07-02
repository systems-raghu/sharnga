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
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-[#293A22] tracking-[0.15em] uppercase font-bold mb-4 font-mono">
            The honest comparison
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>Human setter vs. chatbot vs. Sharnga.</LetterReveal>
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/50">
                  <th className="p-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Feature</th>
                  <th className="p-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Human Setter</th>
                  <th className="p-5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Generic Chatbot</th>
                  <th className="p-5 text-[10px] font-bold text-[#293A22] uppercase tracking-widest bg-[#293A22]/5">Sharnga Agent</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/30 transition-colors">
                    <td className="p-5 text-sm font-semibold text-slate-600">{row[0]}</td>
                    <td className="p-5 text-sm text-slate-500">{row[1]}</td>
                    <td className="p-5 text-sm text-slate-500">{row[2]}</td>
                    <td className="p-5 text-sm font-medium text-slate-900 bg-[#293A22]/[0.02]">
                      <div className="flex items-center gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#293A22] flex items-center justify-center text-[10px] text-white font-bold">
                          ✓
                        </span>
                        {row[3]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
