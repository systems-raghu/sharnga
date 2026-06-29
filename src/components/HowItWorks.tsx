import { GreenTexturedBackground } from "./GreenTexturedBackground";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Listen",
      description: "Agent watches every DM, story reply, comment and post tag in real time — no message slips through.",
      detail: "@ava.rivers · DM received 2s ago",
    },
    {
      number: "02",
      title: "Engage in your voice",
      description: "Trained on 100s of your past DMs so replies sound like you — slang, emojis, line breaks and all.",
      detail: "Drafting reply · matching tone…",
    },
    {
      number: "03",
      title: "Qualify",
      description: "Asks the right discovery questions, scores intent, and filters out tire-kickers before they reach you.",
      detail: "Intent score: 8.4 / 10 · HOT",
    },
    {
      number: "04",
      title: "Book",
      description: "Drops your Calendly, holds the slot, sends reminders. Hot leads land straight on your calendar.",
      detail: "Calendly · Thu Jul 18 · 2:00 PM ✓",
    }
  ];

  return (
    <section className="py-24 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative" id="how">
      <GreenTexturedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">
            <LetterReveal>From DM to booked call. In 4 steps.</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-white/90">
              Every agent we build follows the same proven pipeline — custom-tuned to your brand voice and offer.
            </p>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <motion.div
                initial={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(17, 28, 13, 0.2)", color: "#1C3418" }}
                whileInView={{ backgroundColor: "#1C3418", borderColor: "rgba(255, 255, 255, 0.2)", color: "#ffffff" }}
                viewport={{ margin: "0px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="w-24 h-24 border-8 rounded-full flex items-center justify-center font-serif text-2xl mb-6 shadow-sm"
              >
                {step.number}
              </motion.div>
              <BlurReveal delay={0.2 + idx * 0.1}>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed max-w-sm mb-6">
                  {step.description}
                </p>
                <div className="mt-auto py-2 px-3 rounded-lg border border-dashed border-white/20 bg-white/5 font-mono text-[10px] text-white/40">
                  {step.detail}
                </div>
              </BlurReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
