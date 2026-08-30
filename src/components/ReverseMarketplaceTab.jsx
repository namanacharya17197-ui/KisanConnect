function ReverseMarketplaceTab({ currentUser, onAcceptDemand }) {
  const { useState } = React;

  // Active Recurring Demands from HoReCa (Hotels, Restaurants, Hostels, Hospitals)
  const [demands, setDemands] = useState([
    {
      id: 'REQ-1082',
      buyerName: 'Hotel Mayfair Lagoon & Convention',
      buyerType: 'Luxury Hotel / Resort',
      location: 'Jaydev Vihar, Bhubaneswar',
      avatar: '🏨',
      crop: 'Hybrid Red Tomatoes (Grade A)',
      volumeNeeded: '250 kg / delivery',
      frequency: 'Every Monday & Thursday',
      offeredPricePerKg: 28,
      mandiRate: 14,
      deliveryWindow: 'Morning 05:30 AM - 07:00 AM',
      qualitySpecs: 'Brix > 5.0°, Unblemished, 60-70mm size',
      status: 'Open for Bids',
      bidsCount: 3,
      committedVolume: 100,
      totalDemandKg: 250,
      expiresIn: '4 hours remaining'
    },
    {
      id: 'REQ-1079',
      buyerName: 'KIIT University Mega Hostel Mess #4',
      buyerType: 'University Hostel & Mess',
      location: 'Patia, Bhubaneswar (2,400 Students)',
      avatar: '🎓',
      crop: 'Fresh Potatoes & Onions',
      volumeNeeded: '800 kg / batch',
      frequency: 'Every Tuesday & Friday',
      offeredPricePerKg: 24,
      mandiRate: 16,
      deliveryWindow: 'Morning 06:00 AM',
      qualitySpecs: 'Medium/Large size, Dry skinned, Sorted',
      status: 'Open for Bids',
      bidsCount: 5,
      committedVolume: 500,
      totalDemandKg: 800,
      expiresIn: '6 hours remaining'
    },
    {
      id: 'REQ-1065',
      buyerName: 'Apollo Hospitals Dietary Division',
      buyerType: 'Hospital Healthcare Kitchen',
      location: 'Sainik School Road, Bhubaneswar',
      avatar: '🏥',
      crop: 'Robusta Bananas & Papaya (Organic)',
      volumeNeeded: '300 kg / week',
      frequency: 'Every Wednesday',
      offeredPricePerKg: 36,
      mandiRate: 20,
      deliveryWindow: 'Morning 07:00 AM',
      qualitySpecs: 'Chemical-free residue, Stage 4 ripeness',
      status: 'Open for Bids',
      bidsCount: 2,
      committedVolume: 150,
      totalDemandKg: 300,
      expiresIn: '12 hours remaining'
    },
    {
      id: 'REQ-1051',
      buyerName: 'Barbeque Nation & Mainland China',
      buyerType: 'Restaurant Chain',
      location: 'Janpath, Bhubaneswar',
      avatar: '🍽️',
      crop: 'Amrapali Mangoes (Ripened)',
      volumeNeeded: '200 kg / delivery',
      frequency: 'Every Weekend (Fri & Sat)',
      offeredPricePerKg: 92,
      mandiRate: 55,
      deliveryWindow: 'Afternoon 02:00 PM',
      qualitySpecs: 'Brix > 16°, Dessert quality, Sweet aroma',
      status: 'Open for Bids',
      bidsCount: 4,
      committedVolume: 120,
      totalDemandKg: 200,
      expiresIn: '1 day remaining'
    }
  ]);

  const [bidModalItem, setBidModalItem] = useState(null);
  const [farmerBidQty, setFarmerBidQty] = useState(50);

  const handleOpenBid = (item) => {
    setBidModalItem(item);
    setFarmerBidQty(Math.min(100, item.totalDemandKg - item.committedVolume));
  };

  const handleSubmitBid = (e) => {
    e.preventDefault();
    if (!bidModalItem) return;

    setDemands((prev) =>
      prev.map((item) =>
        item.id === bidModalItem.id
          ? {
              ...item,
              committedVolume: Math.min(item.totalDemandKg, item.committedVolume + farmerBidQty),
              bidsCount: item.bidsCount + 1
            }
          : item
      )
    );

    if (window.confetti) {
      window.confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }

    alert(
      `🎉 Offer Accepted & Supply Contract Locked!\n\n` +
      `• Buyer: ${bidModalItem.buyerName}\n` +
      `• Crop: ${bidModalItem.crop}\n` +
      `• Your Committed Supply: ${farmerBidQty} kg\n` +
      `• Guaranteed Rate: ₹${bidModalItem.offeredPricePerKg}/kg\n` +
      `• Expected Payout: ₹${(farmerBidQty * bidModalItem.offeredPricePerKg).toLocaleString('en-IN')}\n\n` +
      `Demand comes to you! Reefer pickup will collect directly from your farmgate.`
    );

    setBidModalItem(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Hero Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            <span>🔄 Reverse Marketplace (Demand-First Agritech)</span>
            <span>•</span>
            <span>Demand Comes to the Farmer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Recurring Institutional Demand: Hotels, Hostels, Hospitals & Restaurants
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            Stop guessing what to harvest. Commercial institutional buyers post their exact recurring weekly requirements and guaranteed purchase prices. Farmers simply review the demand and accept volume contracts.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-300 font-bold">100% Guaranteed Demand</span> Before Harvesting
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-300 font-bold">HoReCa Direct</span> Zero Intermediaries
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-300 font-bold">Smart Escrow</span> Payout Locked Upfront
            </div>
          </div>
        </div>
      </div>

      {/* Demand Feed Cards Grid */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
              Live Buyer Purchase Requirements ({demands.length} Active Posts)
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Hotels, university messes, and restaurants looking for immediate and recurring supply.
            </p>
          </div>
          <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold text-xs rounded-full">
            ● Live Demand Radar
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {demands.map((item) => {
            const fulfilledPct = Math.round((item.committedVolume / item.totalDemandKg) * 100);
            const remainingKg = item.totalDemandKg - item.committedVolume;
            const extraGain = item.offeredPricePerKg - item.mandiRate;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-[#131d31] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Top Bar: Buyer Info & Expiry */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200 flex items-center justify-center text-2xl flex-shrink-0">
                        {item.avatar}
                      </div>
                      <div className="min-w-0">
                        <span className="font-mono text-[10px] font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
                          {item.id}
                        </span>
                        <h4 className="font-extrabold text-sm text-slate-900 dark:text-white truncate mt-0.5">
                          {item.buyerName}
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                          {item.buyerType} • {item.location}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full whitespace-nowrap border border-amber-200 dark:border-amber-800">
                      ⏱️ {item.expiresIn}
                    </span>
                  </div>

                  {/* Requirement Details Box */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 space-y-2 text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-500 dark:text-slate-400">Needed Commodity:</span>
                      <strong className="text-slate-900 dark:text-white font-extrabold text-sm">{item.crop}</strong>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-slate-500 dark:text-slate-400">Offered Guaranteed Rate:</span>
                      <div className="text-right">
                        <span className="text-base font-black text-emerald-700 dark:text-emerald-400">₹{item.offeredPricePerKg} / kg</span>
                        <span className="text-[10px] text-emerald-600 block font-semibold">(+₹{extraGain}/kg vs Mandi)</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Frequency & Schedule:</span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{item.frequency}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">Quality Specifications:</span>
                      <span className="text-[11px] text-slate-700 dark:text-slate-300 italic">{item.qualitySpecs}</span>
                    </div>
                  </div>

                  {/* Volume Fulfillment Progress Bar */}
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-500 dark:text-slate-400">
                        Contract Pool: <strong>{item.committedVolume} / {item.totalDemandKg} kg</strong> committed
                      </span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">
                        {remainingKg > 0 ? `${remainingKg} kg still open` : 'Fully Contracted'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                        style={{ width: `${fulfilledPct}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-2">
                  <button
                    disabled={remainingKg <= 0}
                    onClick={() => handleOpenBid(item)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 ${
                      remainingKg > 0
                        ? 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <span>⚡</span>
                    <span>{remainingKg > 0 ? `Accept Order & Commit Volume (₹${item.offeredPricePerKg}/kg)` : 'Requirement Fulfilled'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Acceptance / Commitment Modal */}
      {bidModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#131d31] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🤝</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Commit Supply to {bidModalItem.buyerName}
                </h3>
              </div>
              <button
                onClick={() => setBidModalItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmitBid} className="space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Crop:</span>
                  <strong className="text-slate-900 dark:text-white">{bidModalItem.crop}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Buyer Guaranteed Rate:</span>
                  <strong className="text-emerald-700 dark:text-emerald-400">₹{bidModalItem.offeredPricePerKg} / kg</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Delivery Window:</span>
                  <span>{bidModalItem.deliveryWindow}</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  How many kg do you want to commit from your harvest?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="10"
                    max={bidModalItem.totalDemandKg - bidModalItem.committedVolume}
                    required
                    value={farmerBidQty}
                    onChange={(e) => setFarmerBidQty(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-sm bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  />
                  <span className="font-bold text-slate-500">kg</span>
                </div>
                <span className="text-[10px] text-slate-400 mt-0.5 block">
                  Max available in this pool: {bidModalItem.totalDemandKg - bidModalItem.committedVolume} kg
                </span>
              </div>

              {/* Total Calculation */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs space-y-1">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Gross Farmer Payout:</span>
                  <span className="font-bold">₹{(farmerBidQty * bidModalItem.offeredPricePerKg).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-800 dark:text-emerald-300 font-extrabold text-sm pt-1 border-t border-emerald-200 dark:border-emerald-800">
                  <span>Guaranteed Escrow Payout:</span>
                  <span>₹{(farmerBidQty * bidModalItem.offeredPricePerKg).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔒</span>
                <span>Lock Supply Contract (Guaranteed Payment)</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

window.ReverseMarketplaceTab = ReverseMarketplaceTab;
