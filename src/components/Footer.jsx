function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-center text-xs text-slate-500 space-y-2">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="font-bold text-emerald-950">🌾 Kisan Setu v2.4</span>
          <span>•</span>
          <span>Sovereign AI Agricultural Ecosystem</span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span>Bhashini Speech Engine</span>
          <span>•</span>
          <span>Google OR-Tools CVRPTW</span>
          <span>•</span>
          <span>Powered by Google Antigravity 2.0</span>
        </div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
