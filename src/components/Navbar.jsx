function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'farmer', label: '🌾 Farmer Portal (Sell Produce)', sublabel: 'Add & Manage Lots', badge: 'Farmer Portal' },
    { id: 'buyer', label: '🛒 Buyer Store (Buy Produce)', sublabel: 'E-Commerce Storefront', badge: 'Buyer Store' },
    { id: 'bulk', label: '🏢 Bulk B2B Desk (Institutional)', sublabel: 'Multi-Ton Contracts', badge: 'B2B Wholesale' },
    { id: 'market', label: '🏪 Mandi Analysis (Value Wedge)', sublabel: 'RBI Benchmark Comparison', badge: 'RBI Benchmark' },
    { id: 'scanner', label: '🔬 AI Quality Assaying (CNN)', sublabel: 'MobileNet Spectral Scan', badge: 'Edge CV' },
    { id: 'logistics', label: '🚚 Cold Fleet (OR-Tools)', sublabel: 'CVRPTW Route Engine', badge: 'Cold Chain' },
    { id: 'forecast', label: '📈 Forward Contracts', sublabel: 'Pre-Harvest Escrow Locks', badge: 'Escrow Locks' },
    { id: 'macro', label: '📊 Macro Research Data', sublabel: 'RBI / NABARD Synthesis', badge: 'Empirical' }
  ];

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex gap-1.5 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar">
        {tabs.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-emerald-900 border-emerald-950 text-white shadow-sm ring-2 ring-emerald-500/20'
                  : 'bg-slate-50/80 border-slate-200/80 text-slate-700 hover:bg-emerald-50/70 hover:text-emerald-900 hover:border-emerald-200'
              }`}
            >
              <div className="text-left">
                <div className="leading-tight flex items-center gap-1.5">
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  )}
                </div>
                <div className={`text-[10px] font-normal ${isActive ? 'text-emerald-200/90' : 'text-slate-400'}`}>
                  {item.sublabel}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

window.Navbar = Navbar;
