import { BlurReveal } from "./BlurReveal";

export function TrustStrip() {
  const logos = [
    { name: "ava rivers", className: "font-serif italic" },
    { name: "THE LIFT CO", className: "font-bold tracking-tighter" },
    { name: "Maren&Co.", className: "font-serif" },
    { name: "KIN/FOLK", className: "tracking-[0.3em] font-light" },
    { name: "coach jay", className: "font-black italic" },
    { name: "Studio Vela", className: "font-serif" },
  ];

  return (
    <div className="py-12 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurReveal>
          <div className="text-center mb-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
            Trusted by creators who actually close
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale contrast-125">
            {logos.map((logo, i) => (
              <span key={i} className={`text-xl sm:text-2xl text-slate-900 ${logo.className}`}>
                {logo.name}
              </span>
            ))}
          </div>
        </BlurReveal>
      </div>
    </div>
  );
}
