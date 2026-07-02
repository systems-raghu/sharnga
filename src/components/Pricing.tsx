import { Check } from "lucide-react";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { cn } from "../lib/utils";

export function Pricing() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const tiers = [
    {
      name: "Starter",
      sub: "For creators just turning on DMs as a channel.",
      price: "$1,500",
      term: "/ month",
      cta: "Start here",
      features: [
        "1 IG account · up to 5k DMs/mo",
        "Agent trained on your voice",
        "Calendly integration",
        "Weekly performance report",
        "Email support",
      ],
    },
    {
      name: "Growth",
      sub: "For coaches & creators ready to scale to 30+ calls/mo.",
      price: "$3,500",
      term: "/ month",
      featured: true,
      cta: "Book a call",
      features: [
        "Up to 25k DMs/mo",
        "Voice + objection playbooks",
        "Human-in-the-loop on complex leads",
        "Full CRM + Slack integration",
        "Weekly optimization calls",
        "Priority support · 4h SLA",
      ],
    },
    {
      name: "Scale",
      sub: "Multi-brand operators and agencies.",
      price: "Custom",
      term: "",
      cta: "Get a quote",
      features: [
        "Unlimited DMs · multi-account",
        "Multiple custom agents",
        "Dedicated strategist",
        "Custom integrations",
        "White-label option",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs text-[#7c5cff] tracking-[0.15em] uppercase font-bold mb-4 font-mono">
            Pricing
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>Done-for-you. No setup, no contracts.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <div className="flex flex-col items-center gap-4">
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                One flat fee covers training, deployment, optimization, and your human escalation team. Risk-free founding partner guarantee: 15 calls in 30 days or a full refund.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Founding client pricing — full build attention, no legacy accounts competing for my time.
              </div>
            </div>
          </BlurReveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {tiers.map((t, i) => (
            <div key={i}>
              <BlurReveal delay={i * 0.1}>
                <div className={cn(
                  "h-full p-10 rounded-3xl border bg-white flex flex-col relative transition-all duration-300",
                  t.featured ? "border-[#7c5cff] shadow-2xl shadow-[#7c5cff]/10 scale-105 z-10" : "border-slate-100 shadow-sm"
                )}>
                  {t.featured && (
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-[#7c5cff] text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed h-10">{t.sub}</p>
                  </div>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-bold text-slate-900 tracking-tight">{t.price}</span>
                    <span className="text-slate-400 font-medium">{t.term}</span>
                  </div>

                  <button className={cn(
                    "w-full py-4 rounded-2xl font-bold text-sm mb-10 transition-all",
                    t.featured
                      ? "bg-[#7c5cff] text-white hover:bg-[#6c4be0] shadow-lg shadow-[#7c5cff]/20"
                      : "bg-slate-50 text-slate-900 hover:bg-slate-100 border border-slate-200"
                  )}>
                    {t.cta} →
                  </button>

                  <div className="space-y-4 flex-1">
                    {t.features.map((f, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#7c5cff]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#7c5cff]" />
                        </div>
                        <span className="text-sm text-slate-600 leading-tight">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurReveal>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 scroll-mt-24" id="discovery-call">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-6">Book Your Discovery Call</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Let's diagnose your current DM bottleneck and map out the exact system you need to scale. We'll audit your DMs live and show you the agent we'd build.
              </p>
              <div className="flex items-center gap-4 text-slate-500">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400">
                      ?
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">Limited spots for founding clients available</span>
              </div>
            </div>

            <div className="w-full h-[550px] overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/50 p-1">
              <Cal
                namespace="15min"
                calLink="sharnga-ai/15min"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
