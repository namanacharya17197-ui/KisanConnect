function Header({ 
  currentUser, 
  onLogout, 
  userRole, 
  setUserRole, 
  onOpenVoice, 
  onTabChange, 
  cartItemCount, 
  onOpenCart 
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top Telemetry Sovereign Strip */}
      <div className="bg-emerald-950 text-white text-xs px-4 py-1.5 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Antigravity 2.0 Sovereign AI Mesh
          </span>
          <span className="text-emerald-200/80 hidden md:inline text-[11px]">
            Bhashini Sovereign Indic AI • Sub-190ms Voice Engine • Zero Mandi Cartels
          </span>
        </div>

        {/* User Profile & Role Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-sm">{currentUser.avatar || '👤'}</span>
              <div className="text-left hidden sm:block">
                <span className="font-bold text-white text-xs block leading-tight">{currentUser.name}</span>
                <span className="text-[10px] text-emerald-300 block leading-none">{currentUser.badge || currentUser.role}</span>
              </div>
              <button
                onClick={onLogout}
                className="px-2 py-0.5 rounded bg-emerald-900 hover:bg-emerald-800 text-slate-300 hover:text-white border border-emerald-700 text-[11px] font-semibold transition cursor-pointer"
                title="Switch persona or logout"
              >
                Switch Account
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-slate-300 text-xs font-medium">Active Persona:</span>
              <select 
                value={userRole} 
                onChange={(e) => {
                  const role = e.target.value;
                  setUserRole(role);
                  if (role === 'farmer') onTabChange('farmer');
                  else if (role === 'buyer') onTabChange('buyer');
                  else if (role === 'bulk') onTabChange('bulk');
                }}
                className="bg-emerald-900 text-white rounded-lg px-2.5 py-1 text-xs border border-emerald-700 font-medium focus:outline-none focus:ring-1 focus:ring-emerald-400 cursor-pointer"
              >
                <option value="farmer">🌾 Farmer (Produce Seller)</option>
                <option value="buyer">🛒 Retail Buyer (Store Marketplace)</option>
                <option value="bulk">🏢 Bulk Institutional Buyer (B2B Desk)</option>
                <option value="logistics">🚚 Reefer Fleet (Cold Logistics)</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Main Header Brand & CTA */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div 
          className="flex items-center gap-3 cursor-pointer select-none group" 
          onClick={() => onTabChange(userRole === 'farmer' ? 'farmer' : 'buyer')}
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform duration-200">
            🌾
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-xl sm:text-2xl text-emerald-950 tracking-tight leading-tight">
                Kisan Setu
              </h1>
              <span className="text-[11px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-bold border border-emerald-200">
                v2.4 Sovereign
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Sovereign AI-Disintermediated Agritech & E-Commerce Ecosystem
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 font-bold text-xs border border-slate-200 transition cursor-pointer relative"
          >
            <span>🛒</span>
            <span className="hidden sm:inline">Cart</span>
            {cartItemCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Voice Assistant CTA */}
          <button
            onClick={onOpenVoice}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-md shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            title="Open Kisan Vani Multilingual Indic AI"
          >
            <span className="text-base">🎙️</span>
            <span className="font-bold">Kisan Vani AI</span>
            <span className="hidden sm:inline bg-amber-800/40 px-1.5 py-0.5 rounded text-[10px] text-amber-100">
              Voice Assistant
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
