function FarmerPortalTab({ lots, onAddLot, onOpenCertificate, onOpenScanner, orders = [], lang = 'en', onTriggerSimulatedOrder }) {
  const { useState, useEffect } = React;
  const t = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || window.TRANSLATIONS?.en || {};

  const [activeSubTab, setActiveSubTab] = useState('lots'); // 'lots' or 'orders'
  const [showAddLotModal, setShowAddLotModal] = useState(false);
  const [livePurchaseAlert, setLivePurchaseAlert] = useState(null);

  // Auto trigger a live incoming purchase alert simulation after 3.5 seconds if none exists
  useEffect(() => {
    const timer = setTimeout(() => {
      if (orders.length > 0) {
        setLivePurchaseAlert(orders[0]);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Form State for listing new harvest produce
  const [formData, setFormData] = useState({
    crop: 'Hybrid Red Tomatoes',
    category: 'Vegetables',
    qty: 600,
    pricePerKg: 26,
    farmer: 'Ramesh Patra',
    fpo: 'Sakhigopal Farmers Producer Co.',
    location: 'Sakhigopal, Puri',
    phone: '+91 98612-33410',
    minOrderKg: 30,
    coolingStatus: 'Pre-cooled at 8°C',
    description: 'Fresh farmgate harvest packed in reusable crates.'
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'qty' || name === 'pricePerKg' || name === 'minOrderKg' ? Number(value) : value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newLot = {
      id: `lot-${Date.now()}`,
      lot: `LOT-${Math.floor(1000 + Math.random() * 9000)}`,
      crop: formData.crop,
      category: formData.category,
      farmer: formData.farmer,
      phone: formData.phone,
      fpo: formData.fpo,
      location: formData.location,
      qty: formData.qty,
      availableQty: formData.qty,
      unit: 'kg',
      pricePerKg: formData.pricePerKg,
      mandiPrice: Math.round(formData.pricePerKg * 0.58),
      farmerGain: `+₹${Math.round(formData.qty * formData.pricePerKg * 0.42).toLocaleString('en-IN')}`,
      brix: '5.2°',
      defectPct: '0.8%',
      grade: 'Grade A+',
      verifiedBadge: 'AI Certified Grade A+',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
      harvestDate: 'Just Now',
      coolingStatus: formData.coolingStatus,
      minOrderKg: formData.minOrderKg,
      bulkPricePerKg: Math.round(formData.pricePerKg * 0.92),
      description: formData.description,
      status: 'Active'
    };

    onAddLot(newLot);
    setShowAddLotModal(false);
  };

  // Trigger simulated purchase popup
  const handleSimulateNewOrder = () => {
    const buyers = [
      { name: 'BigBasket Metro Fulfillment Hub', type: 'Supermarket Chain (Retail B2B)', location: 'Bhubaneswar Hub-2', avatar: '🏬', crop: 'Alphonso Mango', qty: 250, price: 88 },
      { name: 'Hotel Mayfair Lagoon', type: 'Luxury Hotel / HoReCa', location: 'Jaydev Vihar Kitchen', avatar: '🏨', crop: 'Hybrid Red Tomatoes', qty: 180, price: 28 },
      { name: 'KIIT University Hostel Mess #4', type: 'University Mess', location: 'Patia Mega Kitchen', avatar: '🎓', crop: 'Fresh Potatoes & Onions', qty: 500, price: 24 },
      { name: 'Apollo Hospital Healthcare Kitchen', type: 'Hospital Dietary', location: 'Sainik School Road', avatar: '🏥', crop: 'Fresh Spinach & Vegetables', qty: 120, price: 32 }
    ];

    const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];
    const mockOrder = {
      orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerName: randomBuyer.name,
      buyerType: randomBuyer.type,
      buyerLocation: randomBuyer.location,
      buyerAvatar: randomBuyer.avatar,
      crop: randomBuyer.crop,
      lotId: `LOT-${Math.floor(1000 + Math.random() * 9000)}`,
      farmerName: 'Ramesh Patra (You)',
      location: 'Sakhigopal, Puri',
      qty: randomBuyer.qty,
      pricePerKg: randomBuyer.price,
      farmerPayout: randomBuyer.qty * randomBuyer.price,
      totalAmount: Math.round(randomBuyer.qty * randomBuyer.price * 1.09),
      status: 'Escrow Locked (100%)',
      reeferId: 'Mahindra Bolero Reefer (OD-02-B-1142)',
      tempCelsius: '5.2°C (Freshness Assured)',
      timestamp: 'Just Now'
    };

    setLivePurchaseAlert(mockOrder);
    if (onTriggerSimulatedOrder) onTriggerSimulatedOrder(mockOrder);

    if (window.confetti) {
      window.confetti({ particleCount: 75, spread: 85, origin: { y: 0.55 } });
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 1. REAL-TIME LIVE INCOMING PURCHASE POPUP TOAST */}
      {livePurchaseAlert && (
        <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 border-2 border-emerald-400 rounded-3xl p-5 sm:p-6 text-white shadow-2xl animate-bounce-short relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4 min-w-0">
              <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-3xl font-black shadow-lg flex-shrink-0 animate-pulse">
                🔔
              </div>
              <div className="min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-black text-[10px] uppercase tracking-wider">
                    {t.liveBuyerAlert || "Live Purchase Alert"}
                  </span>
                  <span className="text-xs text-emerald-300 font-bold">
                    • 100% Escrow Deposited
                  </span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                  {livePurchaseAlert.buyerName} just bought {livePurchaseAlert.qty} kg of {livePurchaseAlert.crop}!
                </h3>
                <p className="text-xs text-emerald-100">
                  Total Payout: <strong className="text-amber-300 text-sm">₹{livePurchaseAlert.farmerPayout.toLocaleString('en-IN')}</strong> • Vehicle: <span className="font-mono text-emerald-200">{livePurchaseAlert.reeferId}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => {
                  setActiveSubTab('orders');
                  setLivePurchaseAlert(null);
                }}
                className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold text-xs shadow-md transition cursor-pointer"
              >
                View Payout Feed ➔
              </button>
              <button
                onClick={() => setLivePurchaseAlert(null)}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>🌾 Producer Portal • Direct Farmgate</span>
            <span>•</span>
            <span>Zero Middlemen / Dalal Cut</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.farmerPortalTitle || "Direct Farmgate Produce Management & Live Buyers"}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            {t.farmerPortalSubtitle || "List your harvest lots, track incoming live buyers in real time, and get instant smart escrow payouts."}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setShowAddLotModal(true)}
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs shadow-lg shadow-emerald-900/30 transition cursor-pointer flex items-center gap-2"
            >
              <span>➕</span>
              <span>{t.addLotBtn || "List New Harvest Lot"}</span>
            </button>

            <button
              onClick={handleSimulateNewOrder}
              className="px-3.5 py-2 rounded-2xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 font-bold text-xs transition cursor-pointer flex items-center gap-2"
            >
              <span>🔔</span>
              <span>Simulate Buyer Order Popup</span>
            </button>

            <button
              onClick={onOpenScanner}
              className="px-3.5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <span>🔬</span>
              <span>AI Quality Assaying Scan</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Switcher (My Lots vs Incoming Orders) */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('lots')}
            className={`px-4 py-2 rounded-2xl font-extrabold text-xs transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'lots'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <span>🌾</span>
            <span>{t.myLotsBtn || "My Active Lots"} ({lots.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('orders')}
            className={`px-4 py-2 rounded-2xl font-extrabold text-xs transition cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'orders'
                ? 'bg-emerald-900 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            <span>🔔</span>
            <span>{t.incomingOrdersBtn || "Incoming Buyer Orders"} ({orders.length})</span>
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          </button>
        </div>

        <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
          Connected to <strong>14 Reefer Corridors</strong>
        </span>
      </div>

      {/* VIEW 1: MY ACTIVE HARVEST LOTS */}
      {activeSubTab === 'lots' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {lots.map((lot) => (
            <div
              key={lot.id}
              className="bg-white dark:bg-[#131d31] rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-emerald-400 dark:hover:border-emerald-500 shadow-sm transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
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
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                      {lot.category || 'Produce'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-xl bg-emerald-950/90 text-amber-300 font-extrabold text-xs">
                    ₹{lot.pricePerKg} / kg
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                      {lot.crop}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {lot.location} • {lot.fpo}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Available Volume:</span>
                      <strong className="text-slate-900 dark:text-white">{lot.availableQty || lot.qty} kg</strong>
                    </div>
                    <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-bold">
                      <span>Mandi Trader Price:</span>
                      <span className="line-through text-slate-400">₹{lot.mandiPrice}/kg</span>
                    </div>
                    <div className="flex justify-between text-emerald-800 dark:text-emerald-300 font-extrabold">
                      <span>Direct Farmer Value Gain:</span>
                      <span>{lot.farmerGain}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={onOpenCertificate}
                  className="w-full py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  View AI Quality Certificate ➔
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: WHO IS BUYING YOUR PRODUCE (INCOMING ORDERS FEED) */}
      {activeSubTab === 'orders' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              {t.whoIsBuyingTitle || "Who Is Buying Your Produce (Live Escrow Orders)"}
            </h3>
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              ● Live Smart Escrow Stream
            </span>
          </div>

          <div className="space-y-3">
            {orders.map((ord, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#131d31] p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-emerald-400 transition"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 flex items-center justify-center text-2xl flex-shrink-0">
                    {ord.buyerAvatar || '🛒'}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        {ord.orderId}
                      </span>
                      <span className="text-xs text-slate-400">• {ord.timestamp}</span>
                    </div>
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-0.5 truncate">
                      {ord.buyerName}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {ord.buyerType} • {ord.buyerLocation}
                    </p>
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                      Purchased: <strong className="text-emerald-700 dark:text-emerald-400">{ord.qty} kg</strong> of {ord.crop}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 space-y-0.5">
                    <span className="text-slate-500">Farmer Payout:</span>
                    <div className="text-base font-black text-emerald-700 dark:text-emerald-400">
                      ₹{ord.farmerPayout.toLocaleString('en-IN')}
                    </div>
                    <span className="text-[10px] text-emerald-600 block">Status: {ord.status}</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 space-y-0.5">
                    <span className="text-slate-500">Reefer Cold Transit:</span>
                    <div className="font-bold text-slate-800 dark:text-slate-200 text-xs">
                      {ord.reeferId}
                    </div>
                    <span className="text-[10px] text-teal-600 block">Temp: {ord.tempCelsius}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal: Add Harvest Produce Lot */}
      {showAddLotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#131d31] rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-800 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🌾</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {t.addLotBtn || "List New Harvest Lot"}
                </h3>
              </div>
              <button
                onClick={() => setShowAddLotModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Crop / Commodity:</label>
                  <select
                    name="crop"
                    value={formData.crop}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  >
                    <option value="Hybrid Red Tomatoes">🍅 Hybrid Red Tomatoes</option>
                    <option value="Chandramukhi Potatoes">🥔 Fresh Chandramukhi Potatoes</option>
                    <option value="Nashik Red Onions">🧅 Nashik Red Onions</option>
                    <option value="Tender Purple Brinjal">🍆 Tender Purple Brinjal</option>
                    <option value="Farmgate Broccoli">🥦 Farmgate Broccoli</option>
                    <option value="Green Bell Peppers (Capsicum)">🫑 Green Bell Peppers</option>
                    <option value="Fresh Spinach (Palak)">🥬 Fresh Spinach (Palak)</option>
                    <option value="English Cucumbers">🥒 English Cucumbers</option>
                    <option value="Alphonso Mango (Amrapali)">🥭 Alphonso Mango (Amrapali)</option>
                    <option value="Robusta Bananas">🍌 Robusta Bananas</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Produce Category:</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  >
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Pulses">Pulses & Grains</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Harvest Quantity (kg):</label>
                  <input
                    type="number"
                    name="qty"
                    required
                    min="20"
                    value={formData.qty}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Direct Farmgate Rate (₹/kg):</label>
                  <input
                    type="number"
                    name="pricePerKg"
                    required
                    min="5"
                    value={formData.pricePerKg}
                    onChange={handleFormChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="flex justify-between text-slate-600 dark:text-slate-300">
                  <span>Gross Lot Value:</span>
                  <span className="font-bold">₹{(formData.qty * formData.pricePerKg).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-800 dark:text-emerald-300 font-extrabold text-sm pt-1 border-t border-emerald-200 dark:border-emerald-800">
                  <span>Guaranteed Smart Escrow Payout:</span>
                  <span>₹{(formData.qty * formData.pricePerKg).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🚀</span>
                <span>Publish Produce Lot to National Marketplace</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

window.FarmerPortalTab = FarmerPortalTab;
