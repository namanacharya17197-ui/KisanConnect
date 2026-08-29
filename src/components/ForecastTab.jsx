function ForecastTab() {
  const contractsList = window.FORWARD_CONTRACTS || [];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>📈 Predictive Price Discovery & Demand AI</span>
            <span>•</span>
            <span>Pre-Harvest Institutional Escrow</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Pre-Harvest Forward Procurement Contracts
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            Locks in procurement price baselines 3 months prior to harvest with leading institutional buyers (ITC, BigBasket, Reliance Fresh, Tata Sampann). 
            Eliminates post-harvest distress dumping by pre-committing 100% funds into smart legal escrow contracts.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-emerald-300 font-bold">₹75.6 Lakhs</span> Active Smart Escrow Locked
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-teal-300 font-bold">150 Tonnes</span> Pre-Committed Production
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-amber-300 font-bold">Zero Default</span> Smart Escrow Settlement
            </div>
          </div>
        </div>
      </div>

      {/* Contract Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {contractsList.map((c) => (
          <div 
            key={c.id} 
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-400 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-xl shadow-xs">
                    {c.buyerLogo}
                  </span>
                  <div>
                    <span className="font-mono font-bold text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                      {c.id}
                    </span>
                    <h4 className="font-extrabold text-base text-slate-900 mt-0.5">{c.crop}</h4>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-teal-100 text-teal-800 font-bold text-[10px]">
                  {c.status}
                </span>
              </div>

              <div className="text-xs text-slate-600 space-y-0.5">
                <p><strong>Institutional Buyer:</strong> {c.buyer}</p>
                <p><strong>Contracted FPO:</strong> {c.fpo} ({c.district})</p>
                <p><strong>Delivery Window:</strong> {c.deliveryWindow}</p>
              </div>

              {/* Progress Bar of Harvest Preparedness */}
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Harvest Preparation & Assaying</span>
                  <span className="font-bold text-slate-800">{c.progressPct}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" 
                    style={{ width: `${c.progressPct}%` }}
                  />
                </div>
              </div>

              {/* Specifications & Escrow Info */}
              <div className="p-3.5 rounded-xl bg-slate-50 text-xs space-y-2 border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">Committed Volume:</span>
                  <strong className="text-slate-800">{c.vol}</strong>
                </div>
                <div className="flex justify-between text-emerald-800 font-semibold">
                  <span>Escrow Balance Locked:</span>
                  <strong className="text-emerald-700">{c.escrow}</strong>
                </div>
                <div className="pt-1 border-t border-slate-200 text-[11px] text-slate-500">
                  <strong>Quality Benchmark:</strong> {c.qualitySpecs}
                </div>
              </div>
            </div>

            {/* Payout Footer */}
            <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
              <div>
                <span className="text-[11px] text-slate-500 block">Locked Procurement Price:</span>
                <span className="text-xl font-extrabold text-emerald-800">{c.price}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 line-through block">Mandi Benchmark: {c.mandiBenchmark}</span>
                <span className="text-xs font-bold text-emerald-700">Guaranteed No-Distress Sale</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.ForecastTab = ForecastTab;
