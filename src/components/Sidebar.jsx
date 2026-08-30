function Sidebar({
  activeTab,
  onTabChange,
  userRole,
  currentUser,
  onLogout,
  theme,
  onToggleTheme,
  cartItemCount,
  onOpenCart,
  onOpenVoice,
  isOpenMobile,
  onCloseMobile
}) {
  let navSections = [];

  if (userRole === 'farmer') {
    navSections = [
      {
        sectionTitle: 'PRODUCER OPERATIONS',
        items: [
          { id: 'farmer', label: 'Farmer Dashboard', icon: '🌾', badge: 'Active', desc: 'Listings & Live Buyers' },
          { id: 'trust', label: 'KYC & Satellite Mesh', icon: '🛡️', badge: 'Verified', desc: 'Aadhaar & Bhuvan Map' },
          { id: 'finance', label: 'UPI & KCC Loan Desk', icon: '💳', badge: '4% KCC', desc: 'Advances & PMFBY' },
          { id: 'scanner', label: 'AI Assaying (CNN)', icon: '🔬', badge: 'Edge AI', desc: 'Spectral Quality Scan' },
          { id: 'logistics', label: 'Cold Fleet Pickups', icon: '🚚', badge: 'OR-Tools', desc: 'Reefer Dispatch' },
          { id: 'market', label: 'Mandi Price Index', icon: '🏪', badge: 'RBI Data', desc: 'Value Wedge & Margins' }
        ]
      }
    ];
  } else if (userRole === 'buyer') {
    navSections = [
      {
        sectionTitle: 'BUYER HUB',
        items: [
          { id: 'buyer', label: 'Produce Storefront', icon: '🛒', badge: 'Store', desc: 'Browse Fresh Lots' },
          { id: 'buyer-orders', label: 'My Orders & Escrow', icon: '📦', badge: 'Active', desc: 'Cold Transit Tracking' },
          { id: 'trust', label: 'Trust & Dispute Hub', icon: '🛡️', badge: 'Arbitration', desc: 'Claims & Verification' },
          { id: 'finance', label: 'UPI Payment Rails', icon: '💳', badge: 'Instant', desc: 'QR & Intent Checkout' },
          { id: 'market', label: 'Mandi Savings Index', icon: '🏪', badge: 'Savings', desc: 'Consumer Price Benefit' }
        ]
      }
    ];
  } else if (userRole === 'bulk') {
    navSections = [
      {
        sectionTitle: 'B2B INSTITUTIONAL',
        items: [
          { id: 'bulk', label: 'Bulk B2B Desk', icon: '🏢', badge: 'Wholesale', desc: 'Multi-Ton RFQ Contracts' },
          { id: 'forecast', label: 'Forward Contracts', icon: '📈', badge: 'Escrow', desc: 'Pre-Harvest Locks' },
          { id: 'trust', label: 'Ground-Truthing Hub', icon: '🛡️', badge: 'Sentinel-2', desc: 'Satellite NDVI Telemetry' },
          { id: 'finance', label: 'Corporate Escrow Rails', icon: '💳', badge: 'Financing', desc: 'Advances & Settlement' },
          { id: 'logistics', label: 'Cold Corridors', icon: '🚚', badge: 'Fleet', desc: 'OR-Tools Routing' },
          { id: 'macro', label: 'Macro Research', icon: '📊', badge: 'Empirical', desc: 'RBI & NABARD Data' }
        ]
      }
    ];
  } else {
    navSections = [
      {
        sectionTitle: 'NAVIGATION',
        items: [
          { id: 'farmer', label: 'Farmer Portal', icon: '🌾', badge: 'Seller', desc: 'List Produce' },
          { id: 'buyer', label: 'Buyer Store', icon: '🛒', badge: 'Store', desc: 'Shop Farmgate' },
          { id: 'trust', label: 'Trust Protocol', icon: '🛡️', badge: 'KYC', desc: 'Aadhaar & Satellite' },
          { id: 'finance', label: 'Financial Rails', icon: '💳', badge: 'UPI/KCC', desc: 'Payments & Loans' },
          { id: 'bulk', label: 'Bulk B2B Desk', icon: '🏢', badge: 'B2B', desc: 'Multi-Ton Contracts' }
        ]
      }
    ];
  }

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Vertical Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-white dark:bg-[#111928] border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpenMobile ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Top: Brand & User Profile */}
        <div>
          <div className="p-4 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3 select-none">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-500 flex items-center justify-center text-white text-xl font-bold shadow-md shadow-emerald-900/10">
                🌾
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="font-extrabold text-lg text-emerald-950 dark:text-emerald-300 tracking-tight leading-tight">
                    Kisan Setu
                  </h1>
                  <span className="text-[10px] px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 rounded font-bold">
                    v2.5
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 dark:text-slate-500 leading-none mt-0.5">
                  Sovereign Agritech Rails
                </p>
              </div>
            </div>

            <button
              onClick={onCloseMobile}
              className="lg:hidden w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center text-xs cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* User Profile Card */}
          {currentUser && (
            <div className="m-3 p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900/80 text-emerald-900 dark:text-emerald-200 flex items-center justify-center text-lg flex-shrink-0">
                  {currentUser.avatar || '👤'}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-extrabold text-xs text-slate-900 dark:text-slate-100 truncate leading-tight">
                    {currentUser.name}
                  </h4>
                  <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold block truncate">
                    {currentUser.badge || currentUser.role}
                  </span>
                </div>
              </div>

              <button
                onClick={onLogout}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer text-xs"
                title="Sign Out / Switch Profile"
              >
                🚪
              </button>
            </div>
          )}

          {/* Navigation Menu List */}
          <div className="px-3 py-2 space-y-4 overflow-y-auto max-h-[calc(100vh-280px)]">
            {navSections.map((sec, secIdx) => (
              <div key={secIdx} className="space-y-1">
                <div className="px-3 text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  {sec.sectionTitle}
                </div>

                <div className="space-y-1">
                  {sec.items.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          onTabChange(item.id);
                          if (onCloseMobile) onCloseMobile();
                        }}
                        className={`w-full p-2.5 rounded-2xl text-left transition-all duration-150 flex items-center justify-between gap-3 cursor-pointer group ${
                          isActive
                            ? 'bg-emerald-900 text-white shadow-sm ring-1 ring-emerald-700'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c] hover:text-emerald-900 dark:hover:text-emerald-300'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`text-lg p-1 rounded-xl transition-transform group-hover:scale-110 ${
                            isActive ? 'bg-emerald-800' : 'bg-slate-100 dark:bg-slate-800/80'
                          }`}>
                            {item.icon}
                          </span>
                          <div className="min-w-0">
                            <div className="font-extrabold text-xs truncate leading-tight">
                              {item.label}
                            </div>
                            <div className={`text-[10px] truncate ${
                              isActive ? 'text-emerald-200' : 'text-slate-400 dark:text-slate-500'
                            }`}>
                              {item.desc}
                            </div>
                          </div>
                        </div>

                        {item.badge && (
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                            isActive 
                              ? 'bg-amber-400 text-slate-950' 
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                          }`}>
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Actions: Voice, Cart, Theme Toggle, DPDP Compliance */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 bg-slate-50/50 dark:bg-[#111928]">
          {/* Quick Voice Assistant Button */}
          <button
            onClick={onOpenVoice}
            className="w-full p-2.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-sm transition flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-base">🎙️</span>
              <span>Kisan Vani AI</span>
            </div>
            <span className="text-[10px] bg-amber-900/40 px-2 py-0.5 rounded-full">Voice Assistant</span>
          </button>

          {/* Cart Trigger (For Buyers) */}
          {(userRole === 'buyer' || userRole === 'bulk') && (
            <button
              onClick={onOpenCart}
              className="w-full p-2 rounded-xl bg-white dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span>🛒</span>
                <span>Shopping Cart</span>
              </div>
              <span className="bg-amber-500 text-slate-950 font-extrabold text-[10px] px-2 py-0.2 rounded-full">
                {cartItemCount} items
              </span>
            </button>
          )}

          {/* Light / Dark Mode Toggle */}
          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
              Theme Mode:
            </span>
            <button
              onClick={onToggleTheme}
              className="px-2.5 py-1 rounded-xl bg-white dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-300 font-bold text-xs hover:border-emerald-400 transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <span>{theme === 'dark' ? '☀️ Light' : '🌙 Dark'}</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

window.Sidebar = Sidebar;
