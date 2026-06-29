import { MessageSquareText, Fingerprint, Clock3 } from "lucide-react";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

const benefits = [
  {
    title: "Smart Qualification",
    description: "Like an expert closer, our AI asks the precise questions needed to qualify leads based on your specific criteria—budget, timeline, and intent—before a call is ever booked.",
    icon: MessageSquareText
  },
  {
    title: "Surgical Brand Alignment",
    description: "We map your exact tone, vocabulary, and cadence. Your audience receives the personal touch they expect, and they will never know they aren't speaking directly to you.",
    icon: Fingerprint
  },
  {
    title: "Always On-Call",
    description: "Zero sick days. Zero time-zone delays. 100% response rate within seconds, 24/7/365. Your business scales without scaling your management headaches.",
    icon: Clock3
  }
];

export function ValueProps() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>Precision Qualification. Zero Wasted Calls.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-slate-600">
              Sharnga replaces the chaos of manual follow-ups with a highly-tuned, conversion-focused engine that operates silently in the background.
            </p>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <BlurReveal key={idx} delay={0.1 * idx}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full group hover:border-[#1C3418]/30 transition-all">
                <div className="w-12 h-12 bg-[#1C3418]/10 text-[#1C3418] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
