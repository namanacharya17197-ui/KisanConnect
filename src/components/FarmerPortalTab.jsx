function FarmerPortalTab({ lots, onAddLot, onOpenCertificate, onOpenScanner }) {
  const { useState } = React;

  const [form, setForm] = useState({
    crop: 'Alphonso Mango (Amrapali)',
    category: 'Fruits',
    variety: 'Amrapali A+',
    grade: 'Export Grade A+',
    qty: 1500,
    pricePerKg: 88,
    mandiPrice: 52,
    farmer: 'Bikash Mahapatra',
    phone: '+91 98612-44550',
    fpo: 'Sakhigopal Farmers Producer Co.',
    location: 'Sakhigopal, Puri',
    harvestDate: 'Today, 06:00 AM',
    coolingStatus: 'Pre-cooled at 6°C',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
    brix: '16.5°',
    defectPct: '0.4%',
    description: 'Freshly harvested export grade mangoes assayed at farmgate with intact epicuticular bloom.'
  });

  const [showAddForm, setShowAddForm] = useState(true);

  // Preset quick fill
  const handleSelectPreset = (presetName) => {
    if (presetName === 'mango') {
      setForm((prev) => ({
        ...prev,
        crop: 'Alphonso Mango (Amrapali)',
        category: 'Fruits',
        variety: 'Amrapali A+',
        grade: 'Export Grade A+',
        pricePerKg: 88,
        mandiPrice: 52,
        brix: '16.5°',
        defectPct: '0.4%',
        image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80'
      }));
    } else if (presetName === 'banana') {
      setForm((prev) => ({
        ...prev,
        crop: 'Robusta Bananas (Grand Naine)',
        category: 'Fruits',
        variety: 'Grand Naine Stage 5',
        grade: 'Domestic Grade A',
        pricePerKg: 33,
        mandiPrice: 16,
        brix: '14.8°',
        defectPct: '1.8%',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80'
      }));
    } else if (presetName === 'tomato') {
      setForm((prev) => ({
        ...prev,
        crop: 'Hybrid Red Tomatoes',
        category: 'Vegetables',
        variety: 'Pusa Ruby / Avinash',
        grade: 'Retail Grade A',
        pricePerKg: 24,
        mandiPrice: 12,
        brix: '5.4°',
        defectPct: '3.1%',
        image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80'
      }));
    } else if (presetName === 'chana') {
      setForm((prev) => ({
        ...prev,
        crop: 'Desi Chana (Unpolished Pulse)',
        category: 'Pulses',
        variety: 'High Protein Desi',
        grade: 'Prime Pulse Grade',
        pricePerKg: 76,
        mandiPrice: 62,
        brix: 'Moisture 9.1%',
        defectPct: '0.2%',
        image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80'
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalVal = Number(form.qty) * Number(form.pricePerKg);
    const mandiVal = Number(form.qty) * Number(form.mandiPrice);
    const gainVal = totalVal - mandiVal;

    const newLot = {
      id: `lot-${Date.now()}`,
      lot: `LOT-${Math.floor(1000 + Math.random() * 9000)}`,
      crop: form.crop,
      category: form.category,
      farmer: form.farmer,
      phone: form.phone,
      fpo: form.fpo,
      location: form.location,
      qty: Number(form.qty),
      availableQty: Number(form.qty),
      unit: 'kg',
      pricePerKg: Number(form.pricePerKg),
      mandiPrice: Number(form.mandiPrice),
      farmerGain: `+₹${gainVal.toLocaleString('en-IN')}`,
      brix: form.brix,
      defectPct: form.defectPct,
      grade: form.grade,
      verifiedBadge: 'AI Certified ' + form.grade,
      image: form.image || 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
      harvestDate: form.harvestDate,
      coolingStatus: form.coolingStatus,
      minOrderKg: Math.min(50, Number(form.qty)),
      bulkPricePerKg: Math.max(10, Math.round(Number(form.pricePerKg) * 0.94)),
      description: form.description,
      status: 'Active'
    };

    onAddLot(newLot);
  };

  const totalCalculatedValue = (Number(form.qty) || 0) * (Number(form.pricePerKg) || 0);
  const mandiCalculatedValue = (Number(form.qty) || 0) * (Number(form.mandiPrice) || 0);
  const extraGainCalculated = totalCalculatedValue - mandiCalculatedValue;

  return (
    <div className="space-y-6">
      {/* Farmer Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <span>🌾 Farmer Seller Portal</span>
            <span>•</span>
            <span>Direct Farmgate Listing with Zero Broker Deductions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            List Your Produce & Capture Direct Fair Value
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            Eliminate commission agents and middleman deductions. List your harvest lots with verified quality parameters and sell directly to retail buyers and institutional bulk purchasers under protected smart escrow.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setShowAddForm(true)}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-md transition cursor-pointer flex items-center gap-1.5"
            >
              <span>➕</span>
              <span>Add New Produce Lot</span>
            </button>
            <button
              onClick={onOpenScanner}
              className="px-4 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs border border-emerald-600 shadow-md transition cursor-pointer flex items-center gap-1.5"
            >
              <span>🔬</span>
              <span>Launch AI Quality Scanner</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Section: Add Lot Form + Live Valuation Preview */}
      {showAddForm && (
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Farmer Produce Entry Form
              </span>
              <h3 className="font-extrabold text-lg text-slate-900">
                List New Produce Lot on Marketplace
              </h3>
              <p className="text-xs text-slate-500">
                Enter your crop parameters. AI automatically computes fair valuation and mandi benchmark gain.
              </p>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-slate-400 font-medium mr-1">Quick Presets:</span>
              <button
                type="button"
                onClick={() => handleSelectPreset('mango')}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                🥭 Mango
              </button>
              <button
                type="button"
                onClick={() => handleSelectPreset('banana')}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                🍌 Banana
              </button>
              <button
                type="button"
                onClick={() => handleSelectPreset('tomato')}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                🍅 Tomato
              </button>
              <button
                type="button"
                onClick={() => handleSelectPreset('chana')}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-emerald-100 text-xs font-semibold text-slate-700 cursor-pointer"
              >
                🌱 Desi Chana
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Form Fields */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Crop Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={form.crop}
                    onChange={(e) => setForm({ ...form, crop: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. Alphonso Mango"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category:
                  </label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Pulses">Pulses & Grains</option>
                    <option value="Spices">Spices</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Harvest Volume (Quantity in kg):
                  </label>
                  <input
                    type="number"
                    min="10"
                    required
                    value={form.qty}
                    onChange={(e) => setForm({ ...form, qty: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-emerald-800 mb-1">
                    Setu Direct Price (₹ / kg):
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    required
                    value={form.pricePerKg}
                    onChange={(e) => setForm({ ...form, pricePerKg: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-emerald-400 bg-emerald-50/50 text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">
                    Mandi Benchmark (₹ / kg):
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    value={form.mandiPrice}
                    onChange={(e) => setForm({ ...form, mandiPrice: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 text-slate-600 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    AI Quality Grade:
                  </label>
                  <select
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="Export Grade A+">Export Grade A+ (Premium Export)</option>
                    <option value="Domestic Grade A">Domestic Grade A (Supermarket Quality)</option>
                    <option value="Processing Grade B">Processing Grade B (Pulp / Processing)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Cooling & Storage Condition:
                  </label>
                  <select
                    value={form.coolingStatus}
                    onChange={(e) => setForm({ ...form, coolingStatus: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="Pre-cooled at 6°C">Pre-cooled at 6°C (Reefer Ready)</option>
                    <option value="Ventilated Crate Stack">Ventilated Crate Stack</option>
                    <option value="Hermetic Solar Silo">Hermetic Solar Silo</option>
                    <option value="Hydro-cooled Buffer">Hydro-cooled Buffer</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Farmer / FPO Name:
                  </label>
                  <input
                    type="text"
                    required
                    value={form.farmer}
                    onChange={(e) => setForm({ ...form, farmer: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Farm Location (District, State):
                  </label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Quality Description & Notes:
                </label>
                <textarea
                  rows="2"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🚀</span>
                <span>Publish Produce Lot to Live Marketplace</span>
              </button>
            </div>

            {/* Live Real-Time Financial Card */}
            <div className="lg:col-span-5 bg-slate-50 p-5 sm:p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  📊 Live AI Valuation & Net Farmer Gain
                </span>

                <div className="aspect-16/9 rounded-xl overflow-hidden bg-slate-900 relative">
                  <img src={form.image} alt={form.crop} className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-emerald-950/80 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs border border-emerald-500/40">
                    {form.grade}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Lot Volume:</span>
                    <strong className="text-slate-900">{form.qty} kg ({(Number(form.qty)/1000).toFixed(2)} Tonnes)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Setu Direct Rate:</span>
                    <strong className="text-emerald-700">₹{form.pricePerKg} / kg</strong>
                  </div>
                  <div className="flex justify-between text-slate-400 line-through text-[11px]">
                    <span>Mandi Trader Offer:</span>
                    <span>₹{form.mandiPrice} / kg</span>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between items-baseline">
                    <span className="font-bold text-slate-700">Total Farmer Payout:</span>
                    <span className="text-lg font-black text-emerald-800">
                      ₹{totalCalculatedValue.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Net Farmer Gain Highlight */}
                <div className="p-3.5 rounded-xl bg-emerald-800 text-white text-xs space-y-1 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200">Net Profit vs APMC Mandi:</span>
                    <span className="text-xs bg-amber-400 text-slate-950 px-2 py-0.5 rounded font-extrabold">
                      +{(((form.pricePerKg - form.mandiPrice) / (form.mandiPrice || 1)) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="text-xl font-extrabold text-amber-300">
                    +₹{extraGainCalculated.toLocaleString('en-IN')} Extra Earnings
                  </div>
                  <p className="text-[10px] text-emerald-200">
                    *Backed by cryptographic smart escrow. Instant release to bank account upon reefer arrival.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl text-xs text-teal-900">
                🔒 <strong>100% Escrow Protection:</strong> Once published, buyers can instantly buy or lock escrow for your harvest lot.
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Farmer's Active Listings Table */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
              Farmer Inventory Dashboard
            </span>
            <h3 className="font-extrabold text-base text-slate-900">
              Your Listed Harvest Lots ({lots.length} Active Lots)
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Escrow Status: Live on National Network
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {lots.map((lot, idx) => (
            <div key={lot.id || idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all space-y-3">
              <div className="flex justify-between items-start">
                <span className="font-mono font-bold text-xs text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {lot.lot}
                </span>
                <span className="px-2 py-0.5 bg-emerald-600 text-white rounded font-bold text-[10px]">
                  {lot.status || 'Active'}
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <img src={lot.image} alt={lot.crop} className="w-14 h-14 rounded-lg object-cover border border-slate-200 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">{lot.crop}</h4>
                  <p className="text-xs text-slate-500">{lot.location}</p>
                  <p className="text-xs font-bold text-emerald-800">₹{lot.pricePerKg} / kg • {lot.qty} kg</p>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white text-xs space-y-1 border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Lot Value:</span>
                  <strong>₹{(lot.qty * lot.pricePerKg).toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Farmer Gain:</span>
                  <span>{lot.farmerGain}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.FarmerPortalTab = FarmerPortalTab;
