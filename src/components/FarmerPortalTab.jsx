function FarmerPortalTab({ 
  lots, 
  onAddLot, 
  onOpenCertificate, 
  onOpenScanner,
  orders = []
}) {
  const { useState } = React;

  const [activeSubTab, setActiveSubTab] = useState('orders'); // 'orders' | 'lots' | 'add'
  const [showAddForm, setShowAddForm] = useState(false);

  const [form, setForm] = useState({
    crop: 'Alphonso Mango (Amrapali)',
    category: 'Fruits',
    variety: 'Amrapali A+',
    grade: 'Export Grade A+',
    qty: 1500,
    pricePerKg: 88,
    mandiPrice: 52,
    farmer: 'Ramesh Patra',
    phone: '+91 98612-33410',
    fpo: 'Sakhigopal Farmers Producer Co.',
    location: 'Sakhigopal, Puri',
    harvestDate: 'Today, 06:00 AM',
    coolingStatus: 'Pre-cooled at 6°C',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
    brix: '16.5°',
    defectPct: '0.4%',
    description: 'Freshly harvested export grade mangoes assayed at farmgate with intact epicuticular bloom.'
  });

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
    setShowAddForm(false);
    setActiveSubTab('lots');
  };

  const totalCalculatedValue = (Number(form.qty) || 0) * (Number(form.pricePerKg) || 0);
  const mandiCalculatedValue = (Number(form.qty) || 0) * (Number(form.mandiPrice) || 0);
  const extraGainCalculated = totalCalculatedValue - mandiCalculatedValue;

  const totalEarningsInEscrow = orders.reduce((sum, ord) => sum + (ord.farmerPayout || (ord.qty * ord.pricePerKg)), 0);
  const totalVolumeSold = orders.reduce((sum, ord) => sum + ord.qty, 0);

  return (
    <div className="space-y-6">
      {/* Farmer Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
            <span>🌾 Farmer Seller Gateway (Producer Portal)</span>
            <span>•</span>
            <span>Zero Brokerage • 100% Escrow Protected Payouts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Direct Farmgate Produce Management & Buyer Orders
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            List your harvest lots with verified AI quality parameters, track incoming orders from verified buyers, and receive automated UPI/e-RUPI payouts the instant produce is loaded into cold-chain reefer vans.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-amber-300 font-bold">₹{totalEarningsInEscrow.toLocaleString('en-IN')}</span> Total Payout in Escrow
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-emerald-300 font-bold">{orders.length}</span> Active Buyer Orders
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-teal-300 font-bold">{totalVolumeSold} kg</span> Produce Committed
            </div>
          </div>
        </div>
      </div>

      {/* Farmer Sub-Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex gap-2">
          <button
            onClick={() => { setActiveSubTab('orders'); setShowAddForm(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'orders'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>👥</span>
            <span>Incoming Buyer Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => { setActiveSubTab('lots'); setShowAddForm(false); }}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'lots'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>📋</span>
            <span>My Active Lots ({lots.length})</span>
          </button>
        </div>

        <button
          onClick={() => { setShowAddForm(!showAddForm); setActiveSubTab('add'); }}
          className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-md transition cursor-pointer flex items-center gap-1.5"
        >
          <span>➕</span>
          <span>{showAddForm ? 'Close Entry Form' : 'List New Harvest Lot'}</span>
        </button>
      </div>

      {/* 1. INCOMING BUYER ORDERS ("WHO IS BUYING THE PRODUCT") */}
      {activeSubTab === 'orders' && !showAddForm && (
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Live Sales & Procurement Feed
              </span>
              <h3 className="font-extrabold text-lg text-slate-900">
                Who Is Buying Your Produce (Live Escrow Orders)
              </h3>
              <p className="text-xs text-slate-500">
                Real-time buyer identity, contracted quantities, cold transit dispatch, and automated escrow payout status.
              </p>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs">
              {orders.length} Verified Procurement Contracts
            </span>
          </div>

          {orders.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <div className="text-4xl">📦</div>
              <p className="font-bold text-slate-600 text-sm">No incoming orders yet</p>
              <p className="text-xs">Once retail or bulk buyers purchase your lots, their order and payment details will appear here live.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {orders.map((ord, idx) => (
                <div 
                  key={ord.orderId || idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-500 transition-all space-y-4 shadow-xs"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-xl font-bold">
                        {ord.buyerAvatar || '🏬'}
                      </div>
                      <div>
                        <span className="font-mono font-bold text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {ord.orderId || `ORD-${8800 + idx}`}
                        </span>
                        <h4 className="font-extrabold text-sm text-slate-900 leading-snug mt-0.5">
                          {ord.buyerName || 'BigBasket Fulfillment Hub'}
                        </h4>
                        <p className="text-[11px] text-slate-500">{ord.buyerType || 'Verified Retail Supermarket'} • {ord.buyerLocation || 'Bhubaneswar'}</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      {ord.status || 'Escrow Locked (100%)'}
                    </span>
                  </div>

                  {/* Order Spec Box */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Purchased Crop:</span>
                      <strong className="text-slate-900">{ord.crop} ({ord.lotId || 'LOT-8821'})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Purchased Volume:</span>
                      <strong className="text-emerald-800">{ord.qty} kg</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contracted Rate:</span>
                      <strong>₹{ord.pricePerKg} / kg</strong>
                    </div>
                    <div className="pt-1.5 border-t border-slate-100 flex justify-between font-extrabold text-sm text-emerald-950">
                      <span>Direct Farmer Payout:</span>
                      <span className="text-emerald-800">
                        ₹{(ord.farmerPayout || (ord.qty * ord.pricePerKg)).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Cold Logistics Dispatch Status */}
                  <div className="p-2.5 rounded-xl bg-teal-50 border border-teal-200 text-[11px] flex justify-between items-center text-teal-900">
                    <div className="flex items-center gap-1.5">
                      <span>🚚</span>
                      <span><strong>Dispatch:</strong> {ord.reeferId || 'Tata 709 Reefer (OD-01)'}</span>
                    </div>
                    <span className="font-bold text-teal-700">Temp: {ord.tempCelsius || '4.8°C (Optimal)'}</span>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-xs">
                    <span className="text-[11px] text-slate-400">
                      Payment Release: <strong>Instant UPI on Cold Gate</strong>
                    </span>
                    <button
                      onClick={() => alert(`Verified Dispatch for Order ${ord.orderId || `ORD-${8800 + idx}`}. Payout release triggered!`)}
                      className="px-3 py-1.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs transition cursor-pointer"
                    >
                      Confirm Dispatch
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 2. ADD PRODUCE LOT FORM */}
      {showAddForm && (
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                Produce Listing Wizard
              </span>
              <h3 className="font-extrabold text-lg text-slate-900">
                List New Harvest Lot on National Network
              </h3>
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
                🌱 Chana
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Crop Name:</label>
                  <input
                    type="text"
                    required
                    value={form.crop}
                    onChange={(e) => setForm({ ...form, crop: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Category:</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Pulses">Pulses & Grains</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Harvest Volume (kg):</label>
                  <input
                    type="number"
                    min="10"
                    required
                    value={form.qty}
                    onChange={(e) => setForm({ ...form, qty: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-emerald-800 mb-1">Your Price (₹ / kg):</label>
                  <input
                    type="number"
                    min="1"
                    step="0.5"
                    required
                    value={form.pricePerKg}
                    onChange={(e) => setForm({ ...form, pricePerKg: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-emerald-400 bg-emerald-50/50 text-emerald-900 font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-1">Mandi Offer (₹ / kg):</label>
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">AI Quality Grade:</label>
                  <select
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="Export Grade A+">Export Grade A+</option>
                    <option value="Domestic Grade A">Domestic Grade A</option>
                    <option value="Processing Grade B">Processing Grade B</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Cooling / Storage:</label>
                  <select
                    value={form.coolingStatus}
                    onChange={(e) => setForm({ ...form, coolingStatus: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                  >
                    <option value="Pre-cooled at 6°C">Pre-cooled at 6°C</option>
                    <option value="Ventilated Crate Stack">Ventilated Crate Stack</option>
                    <option value="Hermetic Solar Silo">Hermetic Solar Silo</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Farmer / FPO Name:</label>
                  <input
                    type="text"
                    required
                    value={form.farmer}
                    onChange={(e) => setForm({ ...form, farmer: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Farm Location:</label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Publish Lot to Live Marketplace
              </button>
            </div>

            {/* Real-time Valuation Card */}
            <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  📊 Real-Time Valuation Summary
                </span>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Total Lot Volume:</span>
                    <strong>{form.qty} kg</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Setu Direct Rate:</span>
                    <strong className="text-emerald-700">₹{form.pricePerKg} / kg</strong>
                  </div>
                  <div className="pt-2 border-t border-slate-100 flex justify-between font-extrabold text-sm text-emerald-950">
                    <span>Total Farmer Payout:</span>
                    <span className="text-emerald-800">₹{totalCalculatedValue.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-emerald-800 text-white text-xs space-y-1">
                  <div className="text-amber-300 font-extrabold text-base">
                    +₹{extraGainCalculated.toLocaleString('en-IN')} Extra Profit
                  </div>
                  <p className="text-[10px] text-emerald-200">
                    Direct payout guaranteed via smart escrow.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* 3. MY ACTIVE LOTS */}
      {activeSubTab === 'lots' && !showAddForm && (
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="font-extrabold text-base text-slate-900">
              Your Active Listed Harvest Lots ({lots.length} Lots)
            </h3>
            <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Live on National Network
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
      )}
    </div>
  );
}

window.FarmerPortalTab = FarmerPortalTab;
