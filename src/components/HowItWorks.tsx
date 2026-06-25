import { GreenTexturedBackground } from "./GreenTexturedBackground";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "The Audit & Extraction",
      description: "We analyze your current DM flow, winning sales conversations, and brand voice. We extract the exact DNA of how you speak and sell."
    },
    {
      number: "02",
      title: "The Prescription",
      description: "We engineer a custom AI agent tailored strictly to your offers. It is trained on your FAQs, objection handling, and qualification criteria."
    },
    {
      number: "03",
      title: "Seamless Integration",
      description: "We deploy the agent quietly into your Instagram. No technical headaches for you. It begins fielding messages and routing qualified leads to your calendar instantly."
    }
  ];

  return (
    <section className="py-24 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden relative">
      <GreenTexturedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">
            <LetterReveal>A Frictionless Integration</LetterReveal>
          </h2>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-white/90">
              We handle the heavy lifting. You just show up to the booked calls.
            </p>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-white/20" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center">
              <motion.div 
                initial={{ backgroundColor: "rgba(255, 255, 255, 0.5)", borderColor: "rgba(17, 28, 13, 0.2)", color: "#1C3418" }}
                whileInView={{ backgroundColor: "#1C3418", borderColor: "rgba(255, 255, 255, 0.2)", color: "#ffffff" }}
                viewport={{ margin: "-20%" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="w-24 h-24 border-8 rounded-full flex items-center justify-center font-serif text-2xl mb-6 shadow-sm"
              >
                {step.number}
              </motion.div>
              <BlurReveal delay={0.2 + idx * 0.1}>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/80 leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </BlurReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
