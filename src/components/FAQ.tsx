import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: "Will it actually sound like me?",
      a: "Yes. Before we go live we train the agent on hundreds of your past DMs, plus a discovery call where we capture your tone, slang, common objections, and offer language. The first week is a tuning sprint — we read every reply and refine until it's indistinguishable." },
    { q: "Is this against Instagram's terms?",
      a: "No. We use Meta's official Instagram Messaging API for business accounts. Nothing scrapes, nothing automates the official app, no risk of bans. We'll walk you through the one-time business setup on the onboarding call." },
    { q: "What about complex / sensitive DMs?",
      a: "Anything the agent isn't confident on gets escalated to a real human on our team in under 5 minutes — included in every plan above Starter. You'll never have a panicked client wondering why their refund question got a generic reply." },
    { q: "How long does it take to launch?",
      a: "10–14 days from kickoff. Week one is voice training + agent build. Week two is a soft launch on 10% of DMs while we tune. Full rollout once accuracy hits 95%." },
    { q: "What if I already use Manychat / a setter?",
      a: "We migrate your existing flows in week one. If you have a human setter, most clients keep them on for high-ticket closes — the agent handles top-of-funnel so your setter only sees pre-qualified, calendar-ready leads." },
    { q: "What if it doesn't work?",
      a: "30-day money-back guarantee on Growth and above. If we don't book you at least 15 qualified calls in your first month, you get every dollar back. We've never had to issue one." },
  ];

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">
            <LetterReveal>Questions, answered.</LetterReveal>
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((it, i) => (
            <div key={i} className="border-b border-slate-100 last:border-0">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${open === i ? 'text-[#1C3418]' : 'text-slate-900 group-hover:text-[#1C3418]'}`}>
                  {it.q}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${open === i ? 'rotate-45 bg-[#1C3418] border-[#1C3418] text-white' : 'text-slate-400 group-hover:border-[#1C3418] group-hover:text-[#1C3418]'}`}>
                  <span className="text-xl">+</span>
                </span>
              </button>
              {open === i && (
                <BlurReveal>
                  <div className="pb-8 text-slate-600 leading-relaxed text-base">
                    {it.a}
                  </div>
                </BlurReveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
