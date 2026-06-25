import { GreenTexturedBackground } from "./GreenTexturedBackground";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function FAQ() {
  const faqs = [
    {
      q: "What if the AI says the wrong thing?",
      a: "Our agents operate within strict, pre-defined guardrails. We map out your exact FAQs and objection handling. If the AI encounters a completely unfamiliar scenario, it gracefully escalates the conversation for your manual review rather than guessing."
    },
    {
      q: "Will Instagram ban my account for this?",
      a: "Absolutely not. We utilize official Meta API integrations that comply 100% with Instagram's terms of service. This is secure, approved, and safe for your personal brand."
    },
    {
      q: "How is this different from ManyChat or generic auto-responders?",
      a: "Auto-responders are rigid decision trees that force users to type '1' or '2'. Our AI engages in natural, fluid conversation. It understands nuance, handles complex objections, and feels like a real human—specifically, you."
    },
    {
      q: "What if I don't get enough DMs right now?",
      a: "This system is built for personal brands who are currently experiencing a bottleneck. If you aren't yet generating enough lead flow to justify the system, we recommend focusing on top-of-funnel growth first before automating."
    }
  ];

  return (
    <section className="py-24 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative">
      <GreenTexturedBackground />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-white">
            <LetterReveal>Common Questions</LetterReveal>
          </h2>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <BlurReveal key={idx} delay={0.1 * idx}>
              <div className="border-b border-white/20 pb-8">
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-white/80 leading-relaxed">{faq.a}</p>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
