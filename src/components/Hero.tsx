import { Button } from "./ui/Button";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { IGPhone } from "./IGPhone";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] flex items-center justify-center py-20 px-2 sm:px-4 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-2 sm:inset-4 z-0 rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
        <video
          src="/hero-background.mp4"
          poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center mt-12">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Social Proof Badge */}
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md mb-8 shadow-sm">
              <span className="bg-[#a5b89f] text-[#111c0d] px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">New</span>
              <span className="text-white text-sm font-medium drop-shadow-sm">Now booking Q3 clients · 2 spots left</span>
            </div>
          </BlurReveal>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-6 drop-shadow-xl">
            <LetterReveal>Book 30+ sales calls</LetterReveal> <br />
            <LetterReveal delay={0.3}>a month from your</LetterReveal> <br />
            <LetterReveal delay={0.6}>Instagram DMs.</LetterReveal> <br />
            <LetterReveal className="text-[#a5b89f] drop-shadow-md" delay={0.9}>On autopilot.</LetterReveal>
          </h1>

          {/* Sub-headline */}
          <BlurReveal delay={1.2}>
            <p className="text-lg sm:text-xl text-slate-100 mb-10 max-w-xl leading-relaxed drop-shadow-lg">
              Sharnga builds custom AI agents that respond to every Instagram DM in your voice, qualify leads, and book them straight to your calendar — while you sleep.
            </p>
          </BlurReveal>

          {/* CTA */}
          <BlurReveal delay={1.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="#discovery-call">
                <Button variant="glass" size="lg" className="relative overflow-hidden group rounded-full text-lg px-0 h-14 transition-all duration-300 border-0 p-[2px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.8)_100%)]" />
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white/90 backdrop-blur-md px-8 text-slate-900 font-semibold group-hover:bg-white transition-colors">
                    Book a strategy call →
                  </span>
                </Button>
              </a>
              <Button variant="dark-glass" size="lg" className="rounded-full text-lg px-8 h-14">
                See a live demo
              </Button>
            </div>
          </BlurReveal>

          {/* Stats */}
          <BlurReveal delay={1.6}>
            <div className="flex flex-wrap gap-x-12 gap-y-6 mt-12 text-white/90">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold tracking-tight">50+</span>
                <span className="text-xs uppercase tracking-widest font-semibold mt-1">calls booked in week 1</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold tracking-tight">&lt; 60s</span>
                <span className="text-xs uppercase tracking-widest font-semibold mt-1">avg response time</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold tracking-tight">24/7</span>
                <span className="text-xs uppercase tracking-widest font-semibold mt-1">always replying</span>
              </div>
            </div>
          </BlurReveal>
        </div>

        <div className="relative hidden lg:flex justify-center items-center">
          <motion.div style={{ y: phoneY }} className="relative z-10">
            {/* Floating Badges */}
            <div className="absolute top-10 -left-12 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-2xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                <span className="text-xs font-bold text-white">Replied in 12s</span>
              </div>
            </div>

            <div className="absolute bottom-20 -right-12 z-20">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-2xl flex items-center gap-2">
                <span className="text-xs font-bold text-white">📅 Call booked · Thu 2pm</span>
              </div>
            </div>

            <div className="transform rotate-[2deg]">
              <IGPhone
                messages={[
                  { from: "lead", text: "hey! saw your post on the 12-week program 👀" },
                  { from: "lead", text: "is it still open?" },
                  { from: "agent", text: "hey! yes — couple spots left for july 💪" },
                  { from: "agent", text: "quick q: are you training already or starting fresh?" },
                  { from: "lead", text: "training but stuck for 6 months" },
                  { from: "agent", text: "totally get it. want to jump on a quick call thurs 2pm to map it out?" },
                  { from: "lead", text: "yes please" },
                  { from: "agent", text: "booked ✅ check your email 🙌" },
                ]}
                headerName="ava.rivers"
                headerSub="AI replying · in your voice"
                scale={0.9}
                theme="dark"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
