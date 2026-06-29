import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function Integrations() {
  const items = [
    { name: "Instagram", sub: "DMs · Comments · Stories", color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]" },
    { name: "Calendly", sub: "Auto-book qualified leads", color: "bg-[#006bff]" },
    { name: "GoHighLevel", sub: "CRM + pipeline sync", color: "bg-[#ffb547]" },
    { name: "Notion", sub: "Lead notes + DM logs", color: "bg-black" },
    { name: "Slack", sub: "Hot-lead alerts", color: "bg-[#4a154b]" },
    { name: "Stripe", sub: "Payment links in DMs", color: "bg-[#635bff]" },
    { name: "Manychat", sub: "Migrate flows in", color: "bg-[#00d563]" },
    { name: "Zapier", sub: "1000+ apps", color: "bg-[#ff4a00]" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <div className="text-xs text-[#7c5cff] tracking-[0.15em] uppercase font-bold mb-4 font-mono">
            Integrations
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>Plugs into the stack you already use.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              We don't make you migrate. Your agent connects directly to Instagram + the tools running your business.
            </p>
          </BlurReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <div key={i}>
              <BlurReveal delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#7c5cff]/30 hover:shadow-lg hover:shadow-[#7c5cff]/5 transition-all group">
                  <div className={`w-10 h-10 rounded-xl ${it.color} mb-5 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`} />
                  <div>
                    <div className="text-base font-semibold text-slate-900">{it.name}</div>
                    <div className="text-sm text-slate-500 mt-1">{it.sub}</div>
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
