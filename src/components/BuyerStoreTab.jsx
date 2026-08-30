function BuyerStoreTab({
  lots,
  onAddToCart,
  onInstantBuy,
  onOpenCertificate,
  cartItemCount,
  onOpenCart,
  orders = [],
  showOrdersOnly = false,
  lang = 'en'
}) {
  const { useState, useMemo } = React;
  const t = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || window.TRANSLATIONS?.en || {};

  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLotForBuy, setSelectedLotForBuy] = useState(null);
  const [instantBuyQty, setInstantBuyQty] = useState(50);

  // Filter produce lots
  const filteredLots = useMemo(() => {
    return lots.filter((lot) => {
      const matchesCategory = activeCategory === 'All' || lot.category === activeCategory;
      const matchesQuery =
        lot.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (lot.description && lot.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [lots, activeCategory, searchQuery]);

  const handleOpenInstantBuy = (lot) => {
    setSelectedLotForBuy(lot);
    setInstantBuyQty(lot.minOrderKg || 30);
  };

  const handleConfirmInstantBuy = (e) => {
    e.preventDefault();
    if (!selectedLotForBuy) return;
    onInstantBuy(selectedLotForBuy, instantBuyQty);
    setSelectedLotForBuy(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Hero Banner */}
      {!showOrdersOnly && (
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
              <span>🛒 Direct Consumer & Retail Marketplace</span>
              <span>•</span>
              <span>100% Farmgate Freshness</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t.buyerStoreTitle || "Procure Fresh Farmgate Produce Directly From Farmers"}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
              Every harvest lot is spectral-scanned for Brix sweetness, harvested at sunrise, and shipped via temperature-controlled solar reefer cold vans. Zero middleman markup.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 text-xs">
              <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
                <span className="text-amber-300 font-bold">25% Cheaper</span> than Retail Supermarkets
              </div>
              <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
                <span className="text-emerald-300 font-bold">100% Escrow Protection</span> Only Pay Upon Gate Scan
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH AND CATEGORY BAR */}
      {!showOrdersOnly && (
        <div className="bg-white dark:bg-[#131d31] p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
              <input
                type="text"
                placeholder={t.searchPlaceholder || "Search vegetables, fruits, pulses, or district..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] text-xs font-semibold text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              {[
                { id: 'All', label: t.allCommodities || 'All Commodities' },
                { id: 'Vegetables', label: t.vegetables || 'Vegetables' },
                { id: 'Fruits', label: t.fruits || 'Fruits' },
                { id: 'Pulses', label: t.pulses || 'Pulses & Grains' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl font-bold text-xs whitespace-nowrap transition cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-emerald-900 text-white shadow-sm ring-1 ring-emerald-700'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PRODUCE LOTS GRID (STOREFRONT) */}
      {!showOrdersOnly && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLots.map((lot) => (
            <div
              key={lot.id}
              className="bg-white dark:bg-[#131d31] rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={lot.image}
                    alt={lot.crop}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 backdrop-blur-xs text-white font-mono text-[10px] font-bold">
                      {lot.lot}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-bold">
                      {lot.category || 'Fresh'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-emerald-950/95 text-amber-300 font-black text-sm shadow-md">
                    ₹{lot.pricePerKg} <span className="text-[10px] font-normal text-emerald-200">/ kg</span>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                      {lot.crop}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Farmer: <strong className="text-slate-700 dark:text-slate-300">{lot.farmer}</strong> • {lot.location}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                    {lot.description}
                  </p>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Available Volume:</span>
                      <strong className="text-slate-900 dark:text-white">{lot.availableQty || lot.qty} kg</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Brix / Quality Score:</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-bold">{lot.brix} ({lot.grade})</span>
                    </div>
                    <div className="flex justify-between text-teal-700 dark:text-teal-300">
                      <span>Cold Chain Status:</span>
                      <span>❄️ {lot.coolingStatus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onAddToCart(lot, lot.minOrderKg || 30)}
                  className="py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>🛒</span>
                  <span>{t.addToCart || "Add to Cart"}</span>
                </button>

                <button
                  onClick={() => handleOpenInstantBuy(lot)}
                  className="py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs shadow-sm transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>⚡</span>
                  <span>{t.instantBuy || "Instant Buy"}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW: MY ORDERS & REEFER TRANSIT TRACKING */}
      {showOrdersOnly && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              {t.tabBuyerOrders || "My Orders & Escrow Tracking"} ({orders.length} Active)
            </h3>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full">
              ● 100% Escrow Protected
            </span>
          </div>

          <div className="space-y-4">
            {orders.map((ord, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#131d31] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/40 px-2 py-0.5 rounded">
                      {ord.orderId}
                    </span>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">
                      {ord.crop} ({ord.qty} kg)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Farmer: <strong>{ord.farmerName}</strong> • {ord.location}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="text-lg font-black text-emerald-700 dark:text-emerald-400">
                      ₹{ord.totalAmount.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-full">
                      {ord.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c]">
                    <span className="text-slate-400 block mb-1">Temperature-Controlled Logistics:</span>
                    <strong className="text-slate-800 dark:text-slate-200">{ord.reeferId}</strong>
                    <span className="text-teal-600 block mt-0.5">Live Temp: {ord.tempCelsius}</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c]">
                    <span className="text-slate-400 block mb-1">Payment Settlement:</span>
                    <strong className="text-emerald-700 dark:text-emerald-400">Smart Escrow Vault</strong>
                    <span className="text-slate-500 block mt-0.5">Automated release upon farmgate scan</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instant Buy Modal */}
      {selectedLotForBuy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#131d31] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Direct Escrow Procurement
                </h3>
              </div>
              <button
                onClick={() => setSelectedLotForBuy(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmInstantBuy} className="space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Produce:</span>
                  <strong>{selectedLotForBuy.crop}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Farmer:</span>
                  <span>{selectedLotForBuy.farmer} ({selectedLotForBuy.location})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Price:</span>
                  <strong className="text-emerald-700 dark:text-emerald-400">₹{selectedLotForBuy.pricePerKg} / kg</strong>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Procurement Volume (kg):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={selectedLotForBuy.minOrderKg || 10}
                    max={selectedLotForBuy.availableQty || selectedLotForBuy.qty}
                    required
                    value={instantBuyQty}
                    onChange={(e) => setInstantBuyQty(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-sm bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  />
                  <span className="font-bold text-slate-500">kg</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Produce Value ({instantBuyQty} kg × ₹{selectedLotForBuy.pricePerKg}):</span>
                  <span>₹{(instantBuyQty * selectedLotForBuy.pricePerKg).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Reefer Cold Chain Transit (9%):</span>
                  <span>₹{Math.round(instantBuyQty * selectedLotForBuy.pricePerKg * 0.09).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-800 dark:text-emerald-300 font-extrabold text-sm pt-1 border-t border-emerald-200 dark:border-emerald-800">
                  <span>Total Escrow Lock:</span>
                  <span>₹{Math.round(instantBuyQty * selectedLotForBuy.pricePerKg * 1.09).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔒</span>
                <span>Deposit in Escrow & Dispatch Reefer Van</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

window.BuyerStoreTab = BuyerStoreTab;
