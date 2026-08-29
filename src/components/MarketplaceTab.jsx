function MarketplaceTab({ selectedCrop, setSelectedCrop, onExecuteEscrow, userRole }) {
  const commoditiesList = window.COMMODITIES || [];
  const farmgateLotsList = window.FARMGATE_LOTS || [];

  return (
    <div className="space-y-6">
      {/* Banner / Hero Statement */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <span>🛡️ Sovereign Disintermediation Protocol</span>
            <span>•</span>
            <span>4 to 6 APMC Middlemen Eliminated</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Farmer Captures 72%–88% of Consumer Rupee
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            In traditional APMC mandis, smallholders receive as low as 31% for bananas and 43% for mangoes due to compounding margins and distress write-offs. 
            Kisan Setu bridges producers directly to verified buyers with algorithmic grading and instantaneous smart contract escrow release.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-emerald-300 font-bold">+38.4%</span> Avg. Net Farmer Income Lift
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-amber-300 font-bold">&lt; 2.5%</span> Post-Harvest Spoilage (NABARD: 25%)
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-teal-300 font-bold">Instant</span> UPI / e-RUPI Escrow Settlement
            </div>
          </div>
        </div>
      </div>

      {/* RBI 16-Commodity Value Wedge Comparison Tool */}
      <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Empirical Economic Benchmark
            </span>
            <h3 className="font-extrabold text-lg text-slate-900">
              RBI 16-Commodity Value Wedge Comparison
            </h3>
            <p className="text-xs text-slate-500">
              Select a commodity to analyze margin capture: Traditional APMC Mandi vs Kisan Setu Direct Protocol.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {commoditiesList.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCrop(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                  selectedCrop && selectedCrop.id === c.id
                    ? 'bg-emerald-800 text-white shadow-sm ring-2 ring-emerald-500/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c.name.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {selectedCrop && (
          <>
            {/* Selected Crop Meta Tag */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900">{selectedCrop.name}</span>
                <span className="text-slate-400">|</span>
                <span className="text-emerald-700 font-odia">{selectedCrop.nameOdia}</span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-semibold text-[10px]">
                  {selectedCrop.category}
                </span>
              </div>
              <div className="text-slate-600">
                Consumer Retail Benchmark: <strong className="text-slate-900">₹{selectedCrop.consumerPrice.toFixed(2)} / kg</strong>
              </div>
            </div>

            {/* Split Grid: Mandi vs Setu */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Traditional Mandi */}
              <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-md">
                      Status Quo APMC Channel
                    </span>
                    <h4 className="font-extrabold text-base text-rose-950 mt-1">
                      Traditional Multi-Tier Mandi
                    </h4>
                    <p className="text-xs text-rose-800/80">4 to 6 Middlemen layers taking cascading cuts</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-rose-700 block font-medium">Farmer Share</span>
                    <span className="text-2xl font-black text-rose-900">{selectedCrop.farmerShareMandi}%</span>
                  </div>
                </div>

                {/* Stacked Bar */}
                <div className="space-y-1.5">
                  <div className="h-6 rounded-full overflow-hidden flex bg-rose-200 shadow-inner p-0.5">
                    {selectedCrop.middlemen.map((n, i) => (
                      <div 
                        key={i} 
                        style={{ width: `${n.share}%`, backgroundColor: n.color }} 
                        className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300" 
                        title={`${n.role}: ${n.share}% (₹${n.amount.toFixed(2)})`} 
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 px-1">
                    <span>Farmer Share ({selectedCrop.farmerShareMandi}%)</span>
                    <span>Intermediaries & Spoilage ({100 - selectedCrop.farmerShareMandi}%)</span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-1.5 text-xs bg-white/70 rounded-xl p-3 border border-rose-100">
                  {selectedCrop.middlemen.map((n, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-700 py-1 border-b border-rose-50 last:border-0">
                      <span className="flex items-center gap-2 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: n.color }}></span>
                        <span className="line-clamp-1">{n.role}</span>
                      </span>
                      <span className="font-bold text-slate-800 whitespace-nowrap">
                        {n.share}% <span className="text-slate-500 font-normal">({`₹${n.amount.toFixed(2)}`})</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-rose-900 text-white flex justify-between items-center text-xs shadow-sm">
                  <div>
                    <span className="text-rose-200 block text-[10px]">What Farmer Realizes:</span>
                    <span className="text-lg font-extrabold text-rose-100">₹{selectedCrop.mandiPrice.toFixed(2)} / kg</span>
                  </div>
                  <div className="text-right">
                    <span className="text-rose-200 block text-[10px]">Mandi Spoilage Loss:</span>
                    <span className="font-bold text-rose-300">{selectedCrop.spoilageRateMandi}% of volume</span>
                  </div>
                </div>
              </div>

              {/* Kisan Setu Direct Model */}
              <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                      Sovereign AI Protocol
                    </span>
                    <h4 className="font-extrabold text-base text-emerald-950 mt-1">
                      Kisan Setu Direct Farmgate Model
                    </h4>
                    <p className="text-xs text-emerald-800/80">Direct FPO-to-Buyer with cold-chain & escrow</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-emerald-700 block font-medium">Farmer Share</span>
                    <span className="text-2xl font-black text-emerald-800">{selectedCrop.farmerShareSetu}%</span>
                  </div>
                </div>

                {/* Stacked Bar */}
                <div className="space-y-1.5">
                  <div className="h-6 rounded-full overflow-hidden flex bg-emerald-200 shadow-inner p-0.5">
                    {selectedCrop.setuBreakdown.map((n, i) => (
                      <div 
                        key={i} 
                        style={{ width: `${n.share}%`, backgroundColor: n.color }} 
                        className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-300" 
                        title={`${n.role}: ${n.share}% (₹${n.amount.toFixed(2)})`} 
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-emerald-800 font-semibold px-1">
                    <span>Farmer Direct ({selectedCrop.farmerShareSetu}%)</span>
                    <span>Logistics & Tech ({100 - selectedCrop.farmerShareSetu}%)</span>
                  </div>
                </div>

                {/* Breakdown List */}
                <div className="space-y-1.5 text-xs bg-white/70 rounded-xl p-3 border border-emerald-100">
                  {selectedCrop.setuBreakdown.map((n, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-700 py-1 border-b border-emerald-50 last:border-0">
                      <span className="flex items-center gap-2 font-medium">
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: n.color }}></span>
                        <span className="line-clamp-1">{n.role}</span>
                      </span>
                      <span className="font-bold text-emerald-900 whitespace-nowrap">
                        {n.share}% <span className="text-slate-500 font-normal">({`₹${n.amount.toFixed(2)}`})</span>
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-800 text-white flex justify-between items-center text-xs shadow-md">
                  <div>
                    <span className="text-emerald-200 block text-[10px]">Direct Farmer Payout:</span>
                    <span className="text-xl font-extrabold text-amber-300">₹{selectedCrop.setuPrice.toFixed(2)} / kg</span>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-200 block text-[10px]">Net Farmer Premium:</span>
                    <span className="font-bold text-emerald-100 bg-emerald-700/80 px-2 py-0.5 rounded">
                      +₹{(selectedCrop.setuPrice - selectedCrop.mandiPrice).toFixed(2)} / kg (+{(((selectedCrop.setuPrice - selectedCrop.mandiPrice) / selectedCrop.mandiPrice) * 100).toFixed(0)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Structural Drivers Insight Box */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
              <span className="text-xl">💡</span>
              <div>
                <strong className="font-bold text-amber-900">Perishability Dynamics & Price Drivers:</strong>
                <p className="mt-0.5 text-amber-900/90 leading-relaxed">{selectedCrop.drivers}</p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Live AI-Assayed Farmgate Produce Lots Ready for Procurement */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Live Farmgate Inventory
            </span>
            <h3 className="font-extrabold text-lg text-slate-900">
              AI-Certified Farmgate Lots Available Now
            </h3>
            <p className="text-xs text-slate-500">
              Assayed at farmgate by MobileNet-AgriV4 CNN. Locked in cold custody with instant escrow release.
            </p>
          </div>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs self-start sm:self-auto">
            {farmgateLotsList.length} Certified Lots Active
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {farmgateLotsList.map((lot, idx) => (
            <div 
              key={idx} 
              className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                    {lot.lot}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">
                    {lot.verifiedBadge}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{lot.crop}</h4>
                  <p className="text-xs text-slate-500 font-medium">{lot.farmer}</p>
                  <p className="text-[11px] text-slate-400">{lot.location} • {lot.fpo}</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 text-xs space-y-1.5 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Harvest Volume:</span>
                    <strong className="text-slate-800">{lot.qty}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Assay Parameters:</span>
                    <strong className="text-slate-800">{lot.brix} Brix, {lot.defectPct} defect</strong>
                  </div>
                  <div className="flex justify-between text-emerald-700">
                    <span>Setu Direct Price:</span>
                    <strong className="text-emerald-800">₹{lot.pricePerKg} / kg</strong>
                  </div>
                  <div className="flex justify-between text-slate-400 line-through text-[11px]">
                    <span>Mandi Gate Price:</span>
                    <span>₹{lot.mandiPrice} / kg</span>
                  </div>
                  <div className="pt-1 border-t border-slate-200 flex justify-between font-bold text-emerald-700">
                    <span>Farmer Gain:</span>
                    <span>{lot.farmerGain}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onExecuteEscrow(lot)}
                className="w-full py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold text-xs shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>⚡</span>
                <span>Lock Escrow ({lot.totalValue})</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.MarketplaceTab = MarketplaceTab;
