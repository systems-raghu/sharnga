import { Button } from "./ui/Button";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";
import { IGPhone } from "./IGPhone";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-slate-100">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(#7c5cff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          {/* Badge */}
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100 mb-8 shadow-sm group">
              <span className="bg-[#7c5cff] text-white px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase">NEW</span>
              <span className="text-slate-600 text-xs font-medium">Now booking Q3 clients · 2 spots left</span>
            </div>
          </BlurReveal>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-slate-900 leading-[1.05] mb-8 tracking-tight">
            <LetterReveal>Book 30+ sales calls</LetterReveal><br />
            <LetterReveal delay={0.3}>a month from your</LetterReveal><br />
            <LetterReveal delay={0.6}>Instagram DMs.</LetterReveal><br />
            <span className="text-slate-400">
              <LetterReveal delay={0.9}>On autopilot.</LetterReveal>
            </span>
          </h1>

          {/* Sub-headline */}
          <BlurReveal delay={1.2}>
            <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
              Sharnga builds custom AI agents that respond to every Instagram DM in your voice, qualify leads, and book them straight to your calendar — while you sleep.
            </p>
          </BlurReveal>

          {/* CTA */}
          <BlurReveal delay={1.4}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#discovery-call">
                <Button size="lg" className="rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 h-14 text-base font-bold shadow-xl shadow-slate-200">
                  Book a strategy call →
                </Button>
              </a>
              <Button variant="outline" size="lg" className="rounded-full border-slate-200 text-slate-600 hover:bg-slate-50 px-8 h-14 text-base font-bold">
                See a live demo
              </Button>
            </div>
          </BlurReveal>

          {/* Stats */}
          <BlurReveal delay={1.6}>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">50+</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">calls booked in week 1</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">&lt; 60s</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">avg response time</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">24/7</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">always replying</span>
              </div>
            </div>
          </BlurReveal>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Floating Badges */}
          <div className="absolute top-10 -left-4 z-20 animate-bounce transition-all duration-1000" style={{ animationDuration: '3s' }}>
            <div className="bg-white/90 backdrop-blur-md border border-slate-100 rounded-full px-4 py-2 shadow-xl shadow-slate-200/50 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              <span className="text-xs font-bold text-slate-900">Replied in 12s</span>
            </div>
          </div>

          <div className="absolute bottom-20 -right-4 z-20 animate-bounce transition-all duration-1000" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            <div className="bg-white/90 backdrop-blur-md border border-slate-100 rounded-full px-4 py-2 shadow-xl shadow-slate-200/50 flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900">📅 Call booked · Thu 2pm</span>
            </div>
          </div>

          <div className="relative transform lg:rotate-[2deg] hover:rotate-0 transition-transform duration-500">
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
              scale={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
