function SellNowAdvisorTab() {
  const { useState } = React;

  const [selectedCrop, setSelectedCrop] = useState('Tomato');
  const [harvestQty, setHarvestQty] = useState(800);
  const [buyerOfferPrice, setBuyerOfferPrice] = useState(30);
  const [transportCostPerKg, setTransportCostPerKg] = useState(1.8);
  const [packagingCostPerKg, setPackagingCostPerKg] = useState(0.8);
  const [localMandiRate, setLocalMandiRate] = useState(16);

  // Crop Intelligence Database
  const cropIntel = {
    Tomato: {
      currentTrend: 'Price Surging (+18% next 4 days)',
      recommendation: 'WAIT 3 DAYS',
      badgeColor: 'from-amber-500 to-orange-600',
      reason: 'Arrivals in Puri/Cuttack mandis dropping by 35% due to rains. Prices expected to reach ₹34-₹36/kg on Thursday.',
      action1: 'Hold in Ventilated Solar Shade for 3 days',
      action2: 'Commit 30% to Mayfair Hotel Reverse Order now at ₹28/kg to hedge risk',
      action3: 'Divert sunburn/misshapen grade to Ketchup Processor at ₹14/kg',
      holdingCostPerDay: 0.15,
      expectedGainIfWait: '+₹4,800 Extra Cash'
    },
    Mango: {
      currentTrend: 'Peak Seasonal Demand',
      recommendation: 'SELL NOW (EXPORT GRADE)',
      badgeColor: 'from-emerald-600 to-teal-700',
      reason: 'Amrapali sweetness (Brix 16.5°) is at peak maturity. Holding further increases softening risk without additional price premium.',
      action1: 'Execute Direct Buyer Store Escrow at ₹88/kg',
      action2: 'Book shared Reefer Truck POOL-OR-401 to maintain cold chain',
      action3: 'Direct overripe pulp to local Ice Cream/Juice unit at ₹35/kg',
      holdingCostPerDay: 0.45,
      expectedGainIfWait: 'Risk of Spoilage exceeds price gain'
    },
    Banana: {
      currentTrend: 'High Institutional Demand',
      recommendation: 'SELL 70% NOW, STORE 30%',
      badgeColor: 'from-teal-600 to-emerald-700',
      reason: 'Grand Naine Stage 4 bananas are in immediate demand from Apollo Hospital & KIIT Hostels at ₹33/kg.',
      action1: 'Accept Hospital Purchase Request immediately',
      action2: 'Keep greener bunch in Hydro-cooled buffer for next week',
      action3: 'Overripe surplus to bakery network at ₹18/kg',
      holdingCostPerDay: 0.20,
      expectedGainIfWait: '+₹1,600 Optimal Blend'
    },
    Potato: {
      currentTrend: 'Stable Wholesale Market',
      recommendation: 'STORE IN COLD SILO (30 DAYS)',
      badgeColor: 'from-indigo-600 to-slate-800',
      reason: 'Cold storage buffer fees are ₹0.80/month while post-monsoon prices rise +40% in October.',
      action1: 'Deposit in Nimapada Multi-Chamber Solar Cold Storage',
      action2: 'Lock 50% in Pre-Harvest Forward Contract with ITC Foods at ₹26/kg',
      action3: 'Small-size baby potatoes to Restaurant Sambar batches',
      holdingCostPerDay: 0.05,
      expectedGainIfWait: '+₹6,200 Surge Gain'
    }
  };

  const currentAdvice = cropIntel[selectedCrop] || cropIntel['Tomato'];

  // Net Profit Calculation
  const grossTotal = harvestQty * buyerOfferPrice;
  const totalTransport = harvestQty * transportCostPerKg;
  const totalPackaging = harvestQty * packagingCostPerKg;
  const netEarnings = grossTotal - totalTransport - totalPackaging;
  const netPerKg = (netEarnings / (harvestQty || 1)).toFixed(2);

  const mandiTotal = harvestQty * localMandiRate;
  const extraGainVsMandi = netEarnings - mandiTotal;
  const gainPercentage = (((netPerKg - localMandiRate) / (localMandiRate || 1)) * 100).toFixed(0);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/20 text-indigo-300 text-xs font-semibold border border-indigo-400/30">
            <span>🧠 "Should I Sell Now?" AI & Net Profit Calculator</span>
            <span>•</span>
            <span>Maximize Real Take-Home Cash</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            AI Harvest Timing & Real Net Profit Breakdown
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            The platform doesn't just list produce—it tells you <strong>WHEN</strong>, <strong>WHERE</strong>, and <strong>AT WHAT NET PROFIT</strong> you make the most money before accepting any offer.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: "Should I Sell Now?" AI Engine */}
        <div className="lg:col-span-6 bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Harvest Decision Intelligence
              </span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                "Should I Sell Now?" AI Advisor
              </h3>
            </div>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300">
              Live Mandi Forecast
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Select Crop:</label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                >
                  <option value="Tomato">🍅 Red Tomatoes</option>
                  <option value="Mango">🥭 Amrapali Mango</option>
                  <option value="Banana">🍌 Robusta Banana</option>
                  <option value="Potato">🥔 Fresh Potatoes</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Harvest Volume (kg):</label>
                <input
                  type="number"
                  value={harvestQty}
                  onChange={(e) => setHarvestQty(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* AI Recommendation Result Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-3 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-[11px] text-indigo-300 font-bold uppercase tracking-wider">AI Decision Engine Verdict:</span>
                <span className={`px-3 py-1 rounded-full font-black text-xs bg-gradient-to-r ${currentAdvice.badgeColor} text-white shadow-sm`}>
                  {currentAdvice.recommendation}
                </span>
              </div>

              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                💡 <strong>Why:</strong> {currentAdvice.reason}
              </p>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs space-y-1.5 text-[11px] border border-white/10">
                <div className="font-bold text-amber-300">Recommended Action Plan:</div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <span>1.</span> {currentAdvice.action1}
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <span>2.</span> {currentAdvice.action2}
                </div>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <span>3.</span> {currentAdvice.action3}
                </div>
              </div>

              <div className="flex justify-between items-center text-xs pt-1 border-t border-white/10">
                <span className="text-slate-400">Projected Advantage:</span>
                <strong className="text-emerald-400 text-sm font-extrabold">{currentAdvice.expectedGainIfWait}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Farmer Net Profit Calculator */}
        <div className="lg:col-span-6 bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex justify-between items-center">
            <div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                True Take-Home Ledger
              </span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Farmer Net Profit Calculator
              </h3>
            </div>
            <span className="text-xs bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-bold px-2.5 py-1 rounded-full">
              Avoid Fake High Offers
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Buyer Offer (₹/kg):</label>
                <input
                  type="number"
                  step="0.5"
                  value={buyerOfferPrice}
                  onChange={(e) => setBuyerOfferPrice(Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30 font-bold text-sm text-emerald-900 dark:text-emerald-300"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Pooled Freight (₹/kg):</label>
                <input
                  type="number"
                  step="0.1"
                  value={transportCostPerKg}
                  onChange={(e) => setTransportCostPerKg(Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-600 font-medium text-xs bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">Crates/Pack (₹/kg):</label>
                <input
                  type="number"
                  step="0.1"
                  value={packagingCostPerKg}
                  onChange={(e) => setPackagingCostPerKg(Number(e.target.value))}
                  className="w-full px-2.5 py-1.5 rounded-xl border border-slate-300 dark:border-slate-600 font-medium text-xs bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                />
              </div>
            </div>

            {/* Cost Breakdown Ledger */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Gross Sale Value ({harvestQty} kg × ₹{buyerOfferPrice}):</span>
                <strong className="text-slate-900 dark:text-white">₹{grossTotal.toLocaleString('en-IN')}</strong>
              </div>
              <div className="flex justify-between text-rose-600 dark:text-rose-400">
                <span>- Pooled Transportation Freight:</span>
                <span>-₹{totalTransport.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-rose-600 dark:text-rose-400">
                <span>- Reusable Crates & Grading:</span>
                <span>-₹{totalPackaging.toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-baseline">
                <span className="font-extrabold text-slate-900 dark:text-white text-sm">Real Net In-Hand Earnings:</span>
                <span className="text-xl font-black text-emerald-700 dark:text-emerald-400">
                  ₹{netEarnings.toLocaleString('en-IN')} (₹{netPerKg}/kg)
                </span>
              </div>
            </div>

            {/* Mandi Distress Comparison Box */}
            <div className="p-4 rounded-2xl bg-emerald-800 text-white space-y-1.5 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-emerald-200 font-medium text-xs">Local Mandi Trader Payout (at ₹{localMandiRate}/kg):</span>
                <span className="font-bold line-through text-slate-300 text-xs">₹{mandiTotal.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-emerald-700/80">
                <span className="font-bold text-amber-300 text-sm">Extra Net Cash in Farmer's Pocket:</span>
                <span className="text-xl font-black text-amber-300">
                  +₹{extraGainVsMandi.toLocaleString('en-IN')} (+{gainPercentage}%)
                </span>
              </div>
              <p className="text-[10px] text-emerald-200 leading-tight">
                *Backed by instant Smart Escrow. No credit default risk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.SellNowAdvisorTab = SellNowAdvisorTab;
