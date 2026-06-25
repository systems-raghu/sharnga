import { Button } from "./ui/Button";

export function Navbar() {
  return (
    <nav className="fixed top-8 sm:top-10 inset-x-4 sm:inset-x-8 lg:max-w-4xl lg:mx-auto z-50 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-full">
      <div className="px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-3xl font-bold tracking-normal text-slate-900">
            Sharnga
          </span>
        </div>
        <div>
          <a href="#discovery-call">
            <Button variant="dark-glass" size="sm" className="hidden sm:inline-flex relative overflow-hidden group rounded-full px-0 font-semibold shadow-sm border-0 p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.8)_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#1C3418]/80 backdrop-blur-md px-6 text-white group-hover:bg-[#1C3418]/90 transition-colors">
                Book a Discovery Call
              </span>
            </Button>
            <Button variant="dark-glass" size="sm" className="sm:hidden relative overflow-hidden group rounded-full border-0 p-[1px] px-0">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.8)_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-[#1C3418]/80 backdrop-blur-md px-4 text-white group-hover:bg-[#1C3418]/90 transition-colors">
                Book Call
              </span>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
