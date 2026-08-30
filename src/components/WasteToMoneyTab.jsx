function WasteToMoneyTab({ currentUser }) {
  const { useState } = React;

  const [wasteStreams, setWasteStreams] = useState([
    {
      id: 'WST-301',
      category: 'Sunburn & B-Grade Tomatoes',
      icon: '🥫',
      idealBuyers: 'Sauce & Ketchup Manufacturers (Maggi / Tops / Local Puree Units)',
      description: 'Cosmetically flawed, misshapen, or over-red tomatoes unsuitable for retail crates but rich in lycopene and brix solids.',
      currentProcurementPrice: '₹14 - ₹16 / kg',
      mandiDumpLoss: '₹0 (Usually thrown away or sold at ₹2 distress rate)',
      activeCommercialBuyers: [
        { name: 'Kissan / Unilever Processing Unit', hub: 'Cuttack Food Park', demandKg: '5,000 kg / week', ratePerKg: 15 },
        { name: 'Utkal Agro Puree Plant', hub: 'Jatni Industrial Estate', demandKg: '2,000 kg / batch', ratePerKg: 14.5 }
      ]
    },
    {
      id: 'WST-302',
      category: 'Overripe & Bruised Bananas',
      icon: '🍌',
      idealBuyers: 'Commercial Bakeries, Banana Bread & Puree Units',
      description: 'Fully ripened bananas with skin sugar spots that supermarkets reject. Peak aromatic sugar content ideal for industrial baking.',
      currentProcurementPrice: '₹16 - ₹19 / kg',
      mandiDumpLoss: '₹0 (Dumped in compost)',
      activeCommercialBuyers: [
        { name: 'Monginis / Mio Amore Central Bakery', hub: 'Bhubaneswar Hub-1', demandKg: '1,500 kg / batch', ratePerKg: 18 },
        { name: 'Bio-Ethanol Distillation Pilot', hub: 'Paradip Eco Park', demandKg: '3,000 kg', ratePerKg: 12 }
      ]
    },
    {
      id: 'WST-303',
      category: 'Undersized Baby Potatoes (Chhatar)',
      icon: '🥔',
      idealBuyers: 'Starch Extractors, Dehydrated Flakes & Sambar Kitchens',
      description: 'Under-caliber (<30mm) potatoes rejected by supermarket grading lines.',
      currentProcurementPrice: '₹12 - ₹14 / kg',
      mandiDumpLoss: '₹3 / kg distress trader price',
      activeCommercialBuyers: [
        { name: 'Haldiram’s / Balaji Wafers Processing', hub: 'Khurda Food Park', demandKg: '8,000 kg', ratePerKg: 13.5 },
        { name: 'Hospital & Mess Kitchen Network', hub: 'Bhubaneswar Institutional Hub', demandKg: '2,500 kg', ratePerKg: 14 }
      ]
    },
    {
      id: 'WST-304',
      category: 'Crop Residue, Husk & Stalks',
      icon: '🌾',
      idealBuyers: 'Animal Feed Compounders & Biomass Green Briquette Plants',
      description: 'Paddy straw, banana pseudo-stems, and corn stalks that are otherwise burned in fields.',
      currentProcurementPrice: '₹3.50 - ₹5.00 / kg (Baled)',
      mandiDumpLoss: '₹0 (Burned causing air pollution)',
      activeCommercialBuyers: [
        { name: 'OMFED Cattle Feed Pellet Plant', hub: 'Radhashyampur, Cuttack', demandKg: '20 Tonnes / month', ratePerKg: 4.5 },
        { name: 'GreenBio Renewable Briquette Co.', hub: 'Jajpur Industrial Corridor', demandKg: '15 Tonnes', ratePerKg: 4.0 }
      ]
    }
  ]);

  const [sellModalStream, setSellModalStream] = useState(null);
  const [wasteQty, setWasteQty] = useState(400);

  const handleSellWaste = (e) => {
    e.preventDefault();
    if (!sellModalStream) return;

    const payout = wasteQty * (sellModalStream.activeCommercialBuyers[0].ratePerKg || 14);

    if (window.confetti) {
      window.confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }

    alert(
      `🎉 Waste Produce Monetized!\n\n` +
      `• Stream: ${sellModalStream.category}\n` +
      `• Buyer: ${sellModalStream.activeCommercialBuyers[0].name}\n` +
      `• Volume Sold: ${wasteQty} kg\n` +
      `• Rate: ₹${sellModalStream.activeCommercialBuyers[0].ratePerKg}/kg\n` +
      `• Total Extra Income Earned: ₹${payout.toLocaleString('en-IN')}\n\n` +
      `Zero wastage! The collection tempo will pick up during the scheduled aggregation run.`
    );

    setSellModalStream(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <span>♻️ "Waste to Money" Circular Agritech Marketplace</span>
            <span>•</span>
            <span>Zero Agricultural Waste</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Turn Rejected & B-Grade Produce into Extra Income
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/90 max-w-3xl leading-relaxed">
            Never dump cosmetically imperfect, sunburned, overripe produce or crop residue. Sell directly to commercial sauce manufacturers, bakeries, starch extractors, and biomass pellet plants.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-300 font-bold">+₹15,000 to ₹35,000</span> Extra Annual Revenue / Acre
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-300 font-bold">100% Zero Field Burning</span> Eco-Friendly
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-300 font-bold">Industrial Aggregation</span> Doorstep Pickup
            </div>
          </div>
        </div>
      </div>

      {/* Waste Streams Cards */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
          Active Commercial Processing Streams
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {wasteStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-white dark:bg-[#131d31] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 flex items-center justify-center text-2xl flex-shrink-0">
                    {stream.icon}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/40 px-2 py-0.5 rounded border border-amber-200 dark:border-amber-800">
                      {stream.id}
                    </span>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight mt-0.5">
                      {stream.category}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{stream.idealBuyers}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {stream.description}
                </p>

                {/* Pricing Benchmark Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">Commercial Processing Offer:</span>
                    <strong className="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm">{stream.currentProcurementPrice}</strong>
                  </div>
                  <div className="flex justify-between text-rose-600 dark:text-rose-400 text-[11px]">
                    <span>Without This (Mandi Dump Loss):</span>
                    <span>{stream.mandiDumpLoss}</span>
                  </div>
                </div>

                {/* Live Industrial Buyers for this stream */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Verified Factory Buyers ({stream.activeCommercialBuyers.length}):
                  </span>
                  {stream.activeCommercialBuyers.map((buyer, i) => (
                    <div
                      key={i}
                      className="p-2 rounded-xl bg-slate-50 dark:bg-[#1a253c] text-xs flex justify-between items-center border border-slate-200/60 dark:border-slate-700/60"
                    >
                      <div>
                        <strong className="text-slate-900 dark:text-white">{buyer.name}</strong>
                        <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{buyer.hub} (Demand: {buyer.demandKg})</span>
                      </div>
                      <span className="font-extrabold text-emerald-700 dark:text-emerald-400 text-xs">
                        ₹{buyer.ratePerKg}/kg
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSellModalStream(stream);
                  setWasteQty(400);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>💰</span>
                <span>Sell B-Grade / Residual Produce to Factories</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sale Modal */}
      {sellModalStream && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#131d31] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">♻️</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Monetize {sellModalStream.category}
                </h3>
              </div>
              <button
                onClick={() => setSellModalStream(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSellWaste} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  How many kg of residual / B-Grade produce do you have?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="50"
                    max="10000"
                    value={wasteQty}
                    onChange={(e) => setWasteQty(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-sm bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  />
                  <span className="font-bold text-slate-500">kg</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Factory Purchase Rate:</span>
                  <strong className="text-emerald-700 dark:text-emerald-400">₹{sellModalStream.activeCommercialBuyers[0].ratePerKg}/kg</strong>
                </div>
                <div className="flex justify-between font-extrabold text-sm text-amber-950 dark:text-amber-300 pt-1 border-t border-amber-200 dark:border-amber-800">
                  <span>New Income from Waste:</span>
                  <span>₹{(wasteQty * sellModalStream.activeCommercialBuyers[0].ratePerKg).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🚀</span>
                <span>Confirm Factory Pickup & Lock Escrow Payout</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

window.WasteToMoneyTab = WasteToMoneyTab;
