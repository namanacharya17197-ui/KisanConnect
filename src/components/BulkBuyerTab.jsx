function BulkBuyerTab({ lots, onExecuteBulkContract }) {
  const { useState } = React;

  const [rfq, setRfq] = useState({
    crop: 'Alphonso Mango (Amrapali)',
    volumeTonnes: 20,
    deliveryHub: 'Bhubaneswar Metro Fulfillment Center',
    targetPricePerKg: 82,
    deliveryDate: '2026-05-15',
    buyerCompany: 'BigBasket / Tata Consumer Products',
    temperatureSla: '4°C - 6°C Reefer Unbroken'
  });

  const [submittedRfq, setSubmittedRfq] = useState(null);

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    const totalEstValue = rfq.volumeTonnes * 1000 * rfq.targetPricePerKg;
    const contract = {
      id: `RFQ-${Math.floor(100 + Math.random() * 900)}`,
      ...rfq,
      totalEstValue: `₹${(totalEstValue / 100000).toFixed(2)} Lakhs`,
      status: 'Escrow Ready',
      timestamp: 'Just now'
    };
    setSubmittedRfq(contract);
    if (window.confetti) {
      window.confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    }
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-teal-950 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            <span>🏢 B2B थोक खरीदार डेस्क (Institutional Bulk Procurement)</span>
            <span>•</span>
            <span>Multi-Ton Farmgate Contracts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            संस्थागत थोक खरीद व प्रत्यक्ष फार्मगेट एग्रीगेशन
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            सुपरमार्केट चेन, एक्सपोर्टर्स और फूड प्रोसेसर्स के लिए समर्पित B2B प्लेटफ़ॉर्म। FPO से सीधे सैकड़ों टन फसल बुक करें, Google OR-Tools रीफर फ्लीट शेड्यूल करें और 100% स्मार्ट एस्क्रो द्वारा सुरक्षित ट्रेड निष्पादित करें।
          </p>
        </div>
      </div>

      {/* Bulk Quote Generator (RFQ Builder) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              B2B Institutional RFP Generator
            </span>
            <h3 className="font-extrabold text-lg text-slate-900">
              थोक खरीद कोटेशन व फॉरवर्ड कॉन्ट्रैक्ट बनाएं (Request for Quote)
            </h3>
          </div>

          <form onSubmit={handleRfqSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">कंपनी / खरीदार का नाम:</label>
                <input
                  type="text"
                  required
                  value={rfq.buyerCompany}
                  onChange={(e) => setRfq({ ...rfq, buyerCompany: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">फसल प्रकार (Target Crop):</label>
                <select
                  value={rfq.crop}
                  onChange={(e) => setRfq({ ...rfq, crop: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-medium"
                >
                  <option value="Alphonso Mango (Amrapali)">Amrapali Mangoes (Grade A+)</option>
                  <option value="Robusta Bananas (Grand Naine)">Grand Naine Bananas</option>
                  <option value="Desi Chana (Pulse)">Desi Chana (Pulse)</option>
                  <option value="Hybrid Red Tomatoes">Processing Grade Tomatoes</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-slate-700 mb-1">मात्रा (Volume in Tonnes):</label>
                <input
                  type="number"
                  min="5"
                  max="500"
                  required
                  value={rfq.volumeTonnes}
                  onChange={(e) => setRfq({ ...rfq, volumeTonnes: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block font-bold text-teal-800 mb-1">टारगेट खरीद मूल्य (₹ / kg):</label>
                <input
                  type="number"
                  min="10"
                  required
                  value={rfq.targetPricePerKg}
                  onChange={(e) => setRfq({ ...rfq, targetPricePerKg: Number(e.target.value) })}
                  className="w-full px-3 py-2 rounded-xl border border-teal-300 bg-teal-50/50 font-bold text-teal-900"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">डिलीवरी तिथि:</label>
                <input
                  type="date"
                  required
                  value={rfq.deliveryDate}
                  onChange={(e) => setRfq({ ...rfq, deliveryDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">डिलीवरी हब / वेयरहाउस:</label>
              <input
                type="text"
                required
                value={rfq.deliveryHub}
                onChange={(e) => setRfq({ ...rfq, deliveryHub: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-teal-900 hover:bg-teal-950 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>📑</span>
              <span>थोक फॉरवर्ड कॉन्ट्रैक्ट जनरेट करें (Lock Institutional Escrow)</span>
            </button>
          </form>

          {submittedRfq && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-2 text-slate-900 animate-in fade-in">
              <div className="flex justify-between items-center">
                <strong className="text-emerald-800 font-mono">{submittedRfq.id} Created!</strong>
                <span className="px-2 py-0.5 bg-emerald-200 text-emerald-900 rounded font-bold text-[10px]">
                  Smart Escrow Locked
                </span>
              </div>
              <p>
                <strong>{submittedRfq.buyerCompany}</strong> ने <strong>{submittedRfq.volumeTonnes} टन</strong> ({submittedRfq.crop}) के लिए <strong>{submittedRfq.totalEstValue}</strong> का एस्क्रो कॉन्ट्रैक्ट जारी किया।
              </p>
            </div>
          )}
        </div>

        {/* Live Active Bulk Lots Ready for Multi-Ton Pickup */}
        <div className="lg:col-span-5 bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex justify-between items-center border-b border-slate-200 pb-2">
            <h4 className="font-extrabold text-sm text-slate-900">Live Multi-Ton Lots Available</h4>
            <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">
              Cold Chain Ready
            </span>
          </div>

          <div className="space-y-3">
            {lots.map((lot) => (
              <div key={lot.id} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1.5 shadow-xs">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-slate-900">{lot.crop}</span>
                  <span className="text-emerald-700 font-bold">₹{lot.bulkPricePerKg} / kg (Wholesale)</span>
                </div>
                <div className="flex justify-between text-slate-500 text-[11px]">
                  <span>FPO: {lot.fpo}</span>
                  <span>स्टॉक: {(lot.availableQty / 1000).toFixed(1)} Tonnes</span>
                </div>
                <button
                  onClick={() => alert(`B2B Order of ${lot.availableQty} kg locked for ${lot.crop}. Reefer fleet dispatch scheduled!`)}
                  className="w-full py-1.5 rounded-lg bg-teal-800 hover:bg-teal-900 text-white font-semibold text-[11px] transition cursor-pointer"
                >
                  Book Complete Lot ({(lot.availableQty / 1000).toFixed(1)} Tonnes)
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.BulkBuyerTab = BulkBuyerTab;
