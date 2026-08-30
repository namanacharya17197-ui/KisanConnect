function Navbar({ activeTab, onTabChange, userRole }) {
  // Strict Role-Based Tab Filtering
  let tabs = [];

  if (userRole === 'farmer') {
    tabs = [
      { id: 'farmer', label: '🌾 Farmer Portal', sublabel: 'List Produce & Incoming Buyers', badge: 'Seller Portal' },
      { id: 'scanner', label: '🔬 AI Quality Assaying (CNN)', sublabel: 'MobileNet Spectral Scan', badge: 'Edge CV' },
      { id: 'logistics', label: '🚚 Cold Fleet Pickups (OR-Tools)', sublabel: 'CVRPTW Farmgate Dispatch', badge: 'Logistics' },
      { id: 'market', label: '🏪 Mandi Price Comparison', sublabel: 'RBI Benchmark Margins', badge: 'Price Index' }
    ];
  } else if (userRole === 'buyer') {
    tabs = [
      { id: 'buyer', label: '🛒 Buyer Storefront', sublabel: 'Browse & Buy Farmgate Produce', badge: 'E-Commerce Store' },
      { id: 'buyer-orders', label: '📦 My Orders & Tracking', sublabel: 'Cold-Chain Delivery Status', badge: 'Active Escrow' },
      { id: 'market', label: '🏪 Mandi Savings Index', sublabel: 'Consumer Direct Benefit', badge: 'Price Index' }
    ];
  } else if (userRole === 'bulk') {
    tabs = [
      { id: 'bulk', label: '🏢 Bulk B2B Procurement Desk', sublabel: 'Multi-Ton RFQ Contracts', badge: 'B2B Wholesale' },
      { id: 'forecast', label: '📈 Forward Contracts & Escrow', sublabel: 'Pre-Harvest Institutional Locks', badge: 'Escrow Locks' },
      { id: 'logistics', label: '🚚 Cold Fleet Logistics (OR-Tools)', sublabel: 'CVRPTW Cold Corridors', badge: 'Logistics' },
      { id: 'macro', label: '📊 Macroeconomic Research', sublabel: 'RBI / NABARD Empirical Data', badge: 'Macro Data' }
    ];
  } else {
    // Default fallback
    tabs = [
      { id: 'buyer', label: '🛒 Buyer Store', sublabel: 'Shop Produce', badge: 'Store' },
      { id: 'farmer', label: '🌾 Farmer Portal', sublabel: 'List Harvest', badge: 'Seller' },
      { id: 'bulk', label: '🏢 Bulk B2B Desk', sublabel: 'Multi-Ton RFQ', badge: 'B2B' },
      { id: 'market', label: '🏪 Mandi Analysis', sublabel: 'Value Wedge', badge: 'RBI' }
    ];
  }

  return (
    <nav className="bg-white border-b border-slate-200 shadow-xs transition-colors duration-200">
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
