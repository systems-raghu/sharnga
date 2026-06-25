import { Button } from "./ui/Button";
import { CustomBadgeCheck } from "./icons/CustomBadgeCheck";
import { LetterReveal } from "./LetterReveal";
import { BlurReveal } from "./BlurReveal";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center py-20 px-2 sm:px-4">
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-12">
        {/* Social Proof Badge */}
        <BlurReveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md mb-8 shadow-sm">
            <div className="flex text-blue-400">
              <CustomBadgeCheck className="w-5 h-5" />
            </div>
            <span className="text-white text-sm font-medium drop-shadow-sm">Trusted by 40+ Top Personal Brands</span>
          </div>
        </BlurReveal>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.1] mb-6 max-w-4xl mx-auto drop-shadow-xl">
          <LetterReveal>Turn Flooded DMs Into Booked Calls.</LetterReveal> <br className="hidden md:block" />
          <LetterReveal className="text-[#a5b89f] drop-shadow-md">While You Sleep.</LetterReveal>
        </h1>

        {/* Sub-headline */}
        <BlurReveal delay={0.3}>
          <p className="text-lg sm:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Stop losing high-ticket clients in the chaos of your inbox. Sharnga builds custom **IG DM agents** and AI appointment setters that diagnose needs, qualify leads, and secure bookings 24/7—without the sick days or overhead of a VA.
          </p>
        </BlurReveal>

        {/* CTA */}
        <BlurReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#discovery-call">
              <Button variant="glass" size="lg" className="relative overflow-hidden group rounded-full text-lg px-0 h-14 transition-all duration-300 border-0 p-[2px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.8)_100%)]" />
                <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-white/90 backdrop-blur-md px-8 text-slate-900 font-semibold group-hover:bg-white transition-colors">
                  Book Your Strategy Call
                </span>
              </Button>
            </a>
          </div>
        </BlurReveal>
      </div>
    </section>
  );
}
