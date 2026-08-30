function TrustVerificationHub({ currentUser }) {
  const { useState } = React;

  const [activeSubTab, setActiveSubTab] = useState('kyc'); // 'kyc' | 'satellite' | 'disputes' | 'spectrometer'
  
  // KYC State
  const [kycStatus, setKycStatus] = useState('verified'); // 'unverified' | 'pending' | 'verified'
  const [aadhaarNumber, setAadhaarNumber] = useState('XXXX-XXXX-4819');
  const [landRecordId, setLandRecordId] = useState('PURI-SKG-2024-8812');
  const [kycSuccessMsg, setKycSuccessMsg] = useState(true);

  // Dispute Simulation State
  const [disputes, setDisputes] = useState([
    {
      id: 'DISP-702',
      lotId: 'LOT-4410 (Alphonso Mango)',
      buyer: 'BigBasket Metro Hub',
      farmer: 'Ramesh Patra (Sakhigopal)',
      issue: 'Reefer Van Temperature Variance (+2°C above 6°C threshold for 45 mins)',
      escrowLocked: '₹44,000',
      status: 'Under FPO Review',
      assignedArbitrator: 'Puri District FPO Lead (Dr. P. Dash)',
      stage: 'Telemetry Audit Complete • Payout 95% Approved',
      timestamp: 'Today, 07:15 AM'
    },
    {
      id: 'DISP-689',
      lotId: 'LOT-1192 (Hybrid Tomatoes)',
      buyer: 'ITC Processing Plant',
      farmer: 'Ramesh Patra',
      issue: 'Transit Delay due to Highway Inundation (2 hrs delay)',
      escrowLocked: '₹28,800',
      status: 'Resolved & Payout Released',
      assignedArbitrator: 'Automated Smart Contract Escrow',
      stage: 'Full Payout Released to Farmer with Zero Deduction',
      timestamp: '2 days ago'
    }
  ]);

  const [newClaim, setNewClaim] = useState({
    lotId: 'LOT-9921',
    reason: 'Slight transit abrasion on 5 boxes',
    requestedAction: 'Minor 2% refund adjustment'
  });

  const handleCreateClaim = (e) => {
    e.preventDefault();
    const created = {
      id: `DISP-${Math.floor(700 + Math.random() * 200)}`,
      lotId: newClaim.lotId,
      buyer: currentUser ? currentUser.name : 'Verified Buyer',
      farmer: 'Ramesh Patra (Sakhigopal)',
      issue: newClaim.reason,
      escrowLocked: '₹1,980',
      status: 'Escrow Frozen (Partial)',
      assignedArbitrator: 'Automated FPO Arbitrator',
      stage: 'Evidence Under Assayer Audit',
      timestamp: 'Just now'
    };
    setDisputes([created, ...disputes]);
    alert('Dispute ticket raised. Escrow tranche held in neutral arbitration.');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>🛡️ Institutional Trust & Verification Protocol</span>
            <span>•</span>
            <span>Zero-Trust Cryptographic Assurance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Verifiable Identity, Satellite Geo-Tagging & Neutral Dispute Arbitration
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Eliminate blind trust and marketing claims. Every harvest lot is anchored to government DigiLocker/UIDAI KYC, verified with ISRO Bhuvan / Sentinel-2 satellite NDVI soil moisture overlays, and protected by a 3-way multi-sig escrow dispute resolution panel.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-400 font-bold">100% UIDAI/DigiLocker</span> KYC Verified Farmers
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-400 font-bold">Sentinel-2 / Bhuvan</span> Satellite Farm Mesh
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-400 font-bold">3-Stage Arbitration</span> Escrow Protection
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-[#111928] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <button
          onClick={() => setActiveSubTab('kyc')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'kyc'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>🪪</span>
          <span>Farmer KYC & Aadhaar</span>
        </button>

        <button
          onClick={() => setActiveSubTab('satellite')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'satellite'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>🛰️</span>
          <span>Satellite Geo-Tagging (Bhuvan)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('disputes')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'disputes'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>⚖️</span>
          <span>Dispute Resolution & Escrow</span>
        </button>

        <button
          onClick={() => setActiveSubTab('spectrometer')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'spectrometer'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>🔬</span>
          <span>Hardware Assaying Transparency</span>
        </button>
      </div>

      {/* 1. FARMER KYC & AADHAAR VERIFICATION */}
      {activeSubTab === 'kyc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  UIDAI & DigiLocker e-KYC Verification
                </span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Farmer Identity & Land Registry Verification
                </h3>
              </div>
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-full flex items-center gap-1">
                <span>✓</span> Verified Partner
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Full Legal Name:</span>
                  <strong className="text-slate-900 dark:text-white">Ramesh Kumar Patra</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Aadhaar (UIDAI Hash):</span>
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">{aadhaarNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Odisha Bhulekh RoR Land Plot:</span>
                  <span className="font-mono font-bold text-slate-800 dark:text-slate-200">{landRecordId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Registered FPO:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Sakhigopal Farmers Producer Co. Ltd</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Aadhaar-Linked Bank VPA:</span>
                  <span className="font-mono text-xs text-teal-700 dark:text-teal-400">ramesh.patra@sbi (Instant e-RUPI Ready)</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-950 dark:text-emerald-200 text-xs space-y-1">
                <div className="flex items-center gap-2 font-extrabold text-sm text-emerald-800 dark:text-emerald-300">
                  <span>🔒</span>
                  <span>Zero Marketing Copy Guarantee</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Buyers are guaranteed that every lot marked "Farmgate Verified" is tied to a KYC-authenticated grower with physical land coordinates. If a seller fails quality specs, their escrow security deposit is immediately forfeited to the buyer.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 dark:bg-[#1a253c] p-6 rounded-3xl border border-slate-200 dark:border-slate-700 space-y-4">
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
              Trust Metric & Fraud Prevention
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-white dark:bg-[#131d31] rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span>Farmer Trust Score:</span>
                <span className="font-extrabold text-emerald-700 dark:text-emerald-400 text-sm">99.4 / 100</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#131d31] rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span>Completed Escrow Lots:</span>
                <strong className="text-slate-900 dark:text-white">48 Successful Deliveries</strong>
              </div>
              <div className="p-3 bg-white dark:bg-[#131d31] rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span>Dispute Rate:</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">0.4% (All resolved)</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#131d31] rounded-2xl border border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span>DPDP Act 2023:</span>
                <span className="text-slate-500 font-mono text-[10px]">Consent Token #8819-DPDP</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. SATELLITE GEO-TAGGING (BHUVAN / SENTINEL-2) */}
      {activeSubTab === 'satellite' && (
        <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                ISRO Bhuvan & Copernicus Sentinel-2 Spectral Mesh
              </span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Farm Plot Spectral Telemetry & Soil Health Verification
              </h3>
            </div>
            <span className="font-mono text-xs text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              GPS: 20.0864° N, 85.8344° E (Sakhigopal Plot #12)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Simulated Satellite Map View */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl overflow-hidden relative aspect-16/9 border border-slate-800 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Satellite Field View"
                className="w-full h-full object-cover opacity-60"
              />
              {/* Satellite Grid Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
              
              {/* Geo-tag Target Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500/40 animate-ping absolute"></div>
                <div className="w-5 h-5 rounded-full bg-emerald-400 border-2 border-white shadow-lg relative z-10 flex items-center justify-center text-[10px]">
                  📍
                </div>
                <span className="bg-slate-900/90 backdrop-blur-xs text-emerald-300 font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/40 mt-1">
                  Lot Amrapali-4410 (4.5 Acres)
                </span>
              </div>

              {/* Spectral Telemetry HUD */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md rounded-xl p-3 border border-slate-800 text-xs text-slate-200 flex flex-wrap justify-between gap-2 font-mono">
                <div>NDVI Index: <strong className="text-emerald-400">0.78 (Healthy Canopy)</strong></div>
                <div>Soil Moisture: <strong className="text-teal-300">32% Volumetric</strong></div>
                <div>Nitrogen Stress: <strong className="text-amber-300">None (Optimal)</strong></div>
              </div>
            </div>

            {/* Satellite Analysis Explanation */}
            <div className="lg:col-span-5 space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-2">
                <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                  Why Satellite Ground-Truthing Matters:
                </h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  Traders in traditional mandis routinely mix fresh harvest with old refrigerated buffer stock. Kisan Setu uses weekly Copernicus Sentinel-2 multispectral passes to confirm the crop was physically grown on the registered acreage and harvested within the claimed 24-hour window.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200 text-xs space-y-1">
                <strong>🛰️ API Integration:</strong> Backed by ISRO Bhuvan Open Web Services & European Space Agency (ESA) Copernicus Hub.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. DISPUTE RESOLUTION & ESCROW ARBITRATION */}
      {activeSubTab === 'disputes' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  3-Way Multi-Sig Arbitration Panel
                </span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Active Dispute Cases & Escrow Tranches
                </h3>
              </div>
              <span className="text-xs bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 px-3 py-1 rounded-full font-bold">
                100% Neutral Resolution Mechanism
              </span>
            </div>

            <div className="space-y-3">
              {disputes.map((d) => (
                <div key={d.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/60 px-2 py-0.5 rounded">
                        {d.id}
                      </span>
                      <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-1">{d.lotId}</h4>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 font-bold text-[10px]">
                      {d.status}
                    </span>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 font-medium">
                    <strong>Issue:</strong> {d.issue}
                  </p>

                  <div className="flex flex-wrap justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-[#131d31] border border-slate-200 dark:border-slate-800 text-[11px]">
                    <div>Buyer: <strong>{d.buyer}</strong></div>
                    <div>Farmer: <strong>{d.farmer}</strong></div>
                    <div>Escrow Tranche: <strong className="text-emerald-700 dark:text-emerald-400">{d.escrowLocked}</strong></div>
                    <div>Stage: <strong className="text-teal-700 dark:text-teal-400">{d.stage}</strong></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 4. HARDWARE SPECTROMETER TRANSPARENCY */}
      {activeSubTab === 'spectrometer' && (
        <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              Quality Assaying Disclosure & Calibration Matrix
            </span>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Optical CNN Estimate vs. NIR Spectrometer Hardware Partner Tier
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300 text-sm">
                <span>📱</span>
                <span>Tier 1: Mobile Camera Edge CNN (Visual Estimate)</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Uses on-device MobileNet-AgriV4 convolutional neural networks for skin coloration, ethylene blush, and surface defect % detection. <strong>Clearly labeled as an optical estimate (±1.5° Brix tolerance)</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-300 text-sm">
                <span>🔬</span>
                <span>Tier 2: Portable NIR Spectrometer Hardware Partner</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                For export lots and institutional B2B contracts, calibrated portable Near-Infrared Spectrometers (NIRS) measure internal sugar, moisture %, and acidity with 99.1% lab precision at the FPO cold gate.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

window.TrustVerificationHub = TrustVerificationHub;
