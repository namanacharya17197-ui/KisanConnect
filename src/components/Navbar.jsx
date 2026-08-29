function Navbar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'farmer', label: '🌾 किसान पोर्टल (Sell Produce)', sublabel: 'Add & Manage Lots', badge: 'Farmer Portal' },
    { id: 'buyer', label: '🛒 खरीदार स्टोर (Buy Produce)', sublabel: 'E-Commerce Storefront', badge: 'Buyer Store' },
    { id: 'bulk', label: '🏢 थोक B2B डेस्क (Bulk Buyers)', sublabel: 'Multi-Ton Contracts', badge: 'B2B Wholesale' },
    { id: 'market', label: '🏪 मंडी तुलना (Value Wedge)', sublabel: 'RBI Margin Analysis', badge: 'RBI Benchmark' },
    { id: 'scanner', label: '🔬 AI क्वालिटी जांच (Assaying)', sublabel: 'MobileNet CNN', badge: 'Edge CV' },
    { id: 'logistics', label: '🚚 कोल्ड फ्लीट (OR-Tools)', sublabel: 'CVRPTW Routing', badge: 'Cold Chain' },
    { id: 'forecast', label: '📈 फॉरवर्ड कॉन्ट्रैक्ट्स', sublabel: 'Pre-Harvest Locks', badge: 'Escrow Locks' },
    { id: 'macro', label: '📊 मैक्रो रिसर्च डेटा', sublabel: 'RBI/NABARD Synthesis', badge: 'Empirical' }
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
