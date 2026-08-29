function BuyerStoreTab({ 
  lots, 
  onAddToCart, 
  onInstantBuy, 
  onOpenCertificate, 
  cartItemCount, 
  onOpenCart 
}) {
  const { useState, useMemo } = React;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedLotForModal, setSelectedLotForModal] = useState(null);
  const [modalQty, setModalQty] = useState(50);

  const categories = ['All', 'Fruits', 'Vegetables', 'Pulses'];

  const filteredLots = useMemo(() => {
    return lots.filter((lot) => {
      const matchCat = selectedCategory === 'All' || lot.category === selectedCategory;
      const matchSearch = 
        lot.crop.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.farmer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.lot.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.pricePerKg - b.pricePerKg;
      if (sortBy === 'price-high') return b.pricePerKg - a.pricePerKg;
      if (sortBy === 'qty') return b.availableQty - a.availableQty;
      return 0; // featured
    });
  }, [lots, searchQuery, selectedCategory, sortBy]);

  const handleOpenBuyModal = (lot) => {
    setSelectedLotForModal(lot);
    setModalQty(lot.minOrderKg || 50);
  };

  return (
    <div className="space-y-6">
      {/* Buyer Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            <span>🛒 खरीदार ई-कॉमर्स बाज़ार (Buyer E-Commerce Store)</span>
            <span>•</span>
            <span>Farmgate Direct Verified Quality</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            सीधे किसान के खेत से ताज़ा, AI-प्रमाणित फसल खरीदें
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            आढ़ती कमीशन और बीच के व्यापारियों का मुनाफा खत्म। 100% फार्मगेट-असैड फल, सब्जियां व दालें सीधे FPO से रीफर कोल्ड वैन में प्राप्त करें।
          </p>

          <div className="flex flex-wrap gap-4 pt-1 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-emerald-300 font-bold">100% Escrow</span> सुरक्षित भुगतान
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-teal-300 font-bold">Cold Chain</span> बिना सड़े डिलीवरी
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-amber-300 font-bold">Bulk Discount</span> थोक खरीदारों के लिए
            </div>
          </div>
        </div>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="फसल, किसान या जिला खोजें..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-emerald-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat === 'All' ? 'सभी फसलें (All)' : cat}
            </button>
          ))}
        </div>

        {/* Sort & Cart Button */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-end">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-1.5 rounded-xl text-xs border border-slate-200 bg-slate-50 font-medium text-slate-700 focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured / लोकप्रिय</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="qty">Max Quantity</option>
          </select>

          <button
            onClick={onOpenCart}
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>🛒 कार्ट ({cartItemCount})</span>
          </button>
        </div>
      </div>

      {/* E-Commerce Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredLots.map((lot) => {
          const totalValue = lot.availableQty * lot.pricePerKg;
          return (
            <div
              key={lot.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Top: Image + Badges */}
              <div className="space-y-3 p-4">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={lot.image}
                    alt={lot.crop}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2 bg-emerald-950/80 backdrop-blur-xs text-emerald-300 text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-emerald-500/40">
                    {lot.lot}
                  </div>
                  <div className="absolute top-2 right-2 bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                    {lot.grade}
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-lg flex justify-between items-center">
                    <span className="text-emerald-400 font-bold">Brix: {lot.brix}</span>
                    <span className="text-slate-300">Defect: {lot.defectPct}</span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                    {lot.crop}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">{lot.farmer} • {lot.fpo}</p>
                  <p className="text-[11px] text-slate-400">📍 {lot.location}</p>
                </div>

                {/* Price & Quantity Box */}
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">उपलब्ध स्टॉक:</span>
                    <strong className="text-slate-900 text-xs">{lot.availableQty} {lot.unit}</strong>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">सेतू मूल्य:</span>
                    <span className="text-base font-extrabold text-emerald-800">₹{lot.pricePerKg} / {lot.unit}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 line-through text-[11px]">
                    <span>मंडी आढ़ती रेट:</span>
                    <span>₹{lot.mandiPrice} / {lot.unit}</span>
                  </div>
                  <div className="pt-1 border-t border-slate-200 text-[10px] text-teal-700 flex justify-between font-semibold">
                    <span>थोक छूट (&gt;500kg):</span>
                    <span>₹{lot.bulkPricePerKg} / kg</span>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="p-4 pt-0 space-y-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => onAddToCart(lot, lot.minOrderKg || 50)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>🛒</span>
                    <span>कार्ट में जोड़ें</span>
                  </button>

                  <button
                    onClick={() => handleOpenBuyModal(lot)}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold text-xs shadow-xs transition cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>⚡</span>
                    <span>सीधा खरीदें</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Instant Buy Modal */}
      {selectedLotForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <h3 className="font-extrabold text-base text-slate-900">
                  Instant Smart Escrow Checkout
                </h3>
              </div>
              <button
                onClick={() => setSelectedLotForModal(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex gap-3 items-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                <img src={selectedLotForModal.image} alt={selectedLotForModal.crop} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{selectedLotForModal.crop}</h4>
                  <p className="text-slate-500">{selectedLotForModal.farmer} ({selectedLotForModal.location})</p>
                  <span className="text-emerald-700 font-bold">₹{selectedLotForModal.pricePerKg} / kg</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  खरीद मात्रा चुनें (Quantity in kg):
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={selectedLotForModal.minOrderKg || 10}
                    max={selectedLotForModal.availableQty}
                    value={modalQty}
                    onChange={(e) => setModalQty(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-sm"
                  />
                  <span className="font-bold text-slate-500">kg</span>
                </div>
              </div>

              {/* Price Calculation */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5 text-xs text-slate-800">
                <div className="flex justify-between">
                  <span>फसल लागत ({modalQty} kg × ₹{selectedLotForModal.pricePerKg}):</span>
                  <strong>₹{(modalQty * selectedLotForModal.pricePerKg).toLocaleString('en-IN')}</strong>
                </div>
                <div className="flex justify-between text-teal-700">
                  <span>रीफर कोल्ड-चेन लॉजिस्टिक्स (7%):</span>
                  <span>₹{Math.round(modalQty * selectedLotForModal.pricePerKg * 0.07).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>स्मार्ट एस्क्रो सुरक्षा शुल्क (2%):</span>
                  <span>₹{Math.round(modalQty * selectedLotForModal.pricePerKg * 0.02).toLocaleString('en-IN')}</span>
                </div>
                <div className="pt-2 border-t border-emerald-200 flex justify-between font-extrabold text-sm text-emerald-950">
                  <span>कुल देय एस्क्रो राशि:</span>
                  <span className="text-base text-emerald-800">
                    ₹{Math.round(modalQty * selectedLotForModal.pricePerKg * 1.09).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                onInstantBuy(selectedLotForModal, modalQty);
                setSelectedLotForModal(null);
              }}
              className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>🔒</span>
              <span>स्मार्ट एस्क्रो लॉक करें और आर्डर कन्फर्म करें</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

window.BuyerStoreTab = BuyerStoreTab;
