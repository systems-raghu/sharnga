export function Footer() {
  return (
    <footer className="relative py-12 m-2 sm:m-4 rounded-[2rem] sm:rounded-[3rem] overflow-hidden text-slate-800">
      <div className="absolute inset-0 z-0">
        <video 
          src="/hero-background.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover object-bottom" 
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif text-2xl font-bold text-slate-900">Sharnga</span>
          <p className="text-sm mt-2 font-medium">© {new Date().getFullYear()} Sharnga. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-slate-900 transition-colors font-medium">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900 transition-colors font-medium">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
