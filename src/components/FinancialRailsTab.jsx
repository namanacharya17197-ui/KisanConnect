function FinancialRailsTab({ currentUser, lots = [] }) {
  const { useState } = React;

  const [activeSubTab, setActiveSubTab] = useState('upi'); // 'upi' | 'kcc' | 'pmfby' | 'advance'
  
  // UPI Simulation State
  const [upiAmount, setUpiAmount] = useState(4820);
  const [upiVpa, setUpiVpa] = useState('kisansetu.escrow@icicibank');
  const [paymentDone, setPaymentDone] = useState(false);

  // KCC Loan Calculator State
  const [landAcres, setLandAcres] = useState(4.5);
  const [selectedCropLoan, setSelectedCropLoan] = useState('Mango & Fruit Orchard');

  // Working Capital Advance State
  const [advanceContractValue, setAdvanceContractValue] = useState(250000);
  const [advanceDisbursed, setAdvanceDisbursed] = useState(false);

  const kccScaleOfFinance = {
    'Mango & Fruit Orchard': 65000,
    'Paddy / Grains': 45000,
    'Vegetables & Cash Crops': 55000,
    'Pulses & Oilseeds': 38000
  };

  const calculatedKccLimit = Math.round(landAcres * (kccScaleOfFinance[selectedCropLoan] || 50000));
  const effectiveInterestRate = '4.0% p.a. (with prompt repayment incentive)';
  const eligibleAdvanceCash = Math.round(advanceContractValue * 0.60);

  const handleSimulateUpiPayment = (app) => {
    setPaymentDone(true);
    if (window.confetti) {
      window.confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }
    alert(`🎉 UPI Transaction of ₹${upiAmount.toLocaleString('en-IN')} Successful via ${app}!\n\nReference: UPI-RR-${Math.floor(100000000000 + Math.random() * 900000000000)}\nStatus: Deposited in Neutral Smart Escrow`);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>💳 National Agricultural Financial Rails</span>
            <span>•</span>
            <span>UPI, KCC, NABARD & PMFBY Integrated</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Real Financial Infrastructure & Working Capital Access
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            Move real money instantly. Unified payment rails with live UPI QR / Intent, 4% subsidized NABARD Kisan Credit Card loans, PMFBY crop insurance coverage, and 60% pre-harvest liquidity advances against locked institutional contracts.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-300 font-bold">UPI 2.0 & e-RUPI</span> Instant Settlement
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-300 font-bold">4% NABARD KCC</span> Subsidized Credit
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-300 font-bold">60% Advance Cash</span> Against Forward Orders
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-[#111928] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        <button
          onClick={() => setActiveSubTab('upi')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'upi'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>📲</span>
          <span>Live UPI & Escrow Rails</span>
        </button>

        <button
          onClick={() => setActiveSubTab('kcc')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'kcc'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>🌾</span>
          <span>Kisan Credit Card (4% KCC)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('pmfby')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'pmfby'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>🛡️</span>
          <span>PMFBY Crop Insurance</span>
        </button>

        <button
          onClick={() => setActiveSubTab('advance')}
          className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'advance'
              ? 'bg-emerald-900 text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a253c]'
          }`}
        >
          <span>💰</span>
          <span>Forward Contract Advances (60%)</span>
        </button>
      </div>

      {/* 1. UPI & PAYMENT RAILS */}
      {activeSubTab === 'upi' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* UPI QR & Intent Card */}
          <div className="lg:col-span-6 bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  NPCI UPI 2.0 & Auto-Escrow
                </span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Real-Time UPI Payment & Settlement Gateway
                </h3>
              </div>
              <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-full">
                Zero Surcharge
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700">
              {/* Dynamic QR Box */}
              <div className="p-3 bg-white rounded-2xl shadow-md border border-slate-200 text-center flex-shrink-0">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=upi://pay?pa=${upiVpa}&pn=KisanSetuEscrow&am=${upiAmount}&cu=INR&tn=KisanSetuEscrowDeposit`}
                  alt="UPI QR Code"
                  className="w-32 h-32 mx-auto rounded-lg"
                />
                <span className="text-[10px] font-mono font-bold text-slate-600 mt-1 block">Scan with any UPI App</span>
              </div>

              <div className="space-y-2 text-xs flex-1">
                <div>
                  <span className="text-slate-500 block">Escrow VPA Address:</span>
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400 text-xs">{upiVpa}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Deposit Amount:</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white">₹</span>
                    <input
                      type="number"
                      value={upiAmount}
                      onChange={(e) => setUpiAmount(Number(e.target.value))}
                      className="w-32 px-2.5 py-1 text-sm font-bold rounded-xl border border-slate-300 dark:border-slate-600"
                    />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400">
                  Instant smart release to farmer's UPI account upon temperature-verified cold gate delivery scan.
                </p>
              </div>
            </div>

            {/* UPI 1-Click Intent Buttons */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                Or Tap to Pay via UPI App (Mobile Intent):
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <button
                  onClick={() => handleSimulateUpiPayment('Google Pay')}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] hover:border-emerald-500 font-bold text-center cursor-pointer transition flex items-center justify-center gap-1.5"
                >
                  <span>🟢</span>
                  <span>GPay</span>
                </button>
                <button
                  onClick={() => handleSimulateUpiPayment('PhonePe')}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] hover:border-purple-500 font-bold text-center cursor-pointer transition flex items-center justify-center gap-1.5"
                >
                  <span>🟣</span>
                  <span>PhonePe</span>
                </button>
                <button
                  onClick={() => handleSimulateUpiPayment('Paytm UPI')}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] hover:border-sky-500 font-bold text-center cursor-pointer transition flex items-center justify-center gap-1.5"
                >
                  <span>🔵</span>
                  <span>Paytm</span>
                </button>
                <button
                  onClick={() => handleSimulateUpiPayment('BHIM e-RUPI')}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] hover:border-amber-500 font-bold text-center cursor-pointer transition flex items-center justify-center gap-1.5"
                >
                  <span>🇮🇳</span>
                  <span>e-RUPI</span>
                </button>
              </div>
            </div>
          </div>

          {/* Razorpay & Settlement Breakdown */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                Payment Backbone Architecture
              </h4>
              <div className="space-y-2.5 text-xs">
                <div className="p-3 bg-slate-50 dark:bg-[#1a253c] rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span>Merchant Category Code (MCC):</span>
                  <span className="font-mono font-bold text-emerald-700 dark:text-emerald-400">MCC 5499 (Agritech Escrow)</span>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-[#1a253c] rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span>Settlement Cycle:</span>
                  <strong className="text-slate-900 dark:text-white">T+0 (Instant on Reefer Loading)</strong>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-[#1a253c] rounded-2xl border border-slate-200 dark:border-slate-700 flex justify-between items-center">
                  <span>e-RUPI Offline Voucher Mode:</span>
                  <span className="text-teal-700 dark:text-teal-400 font-bold">Enabled (SMS Token for 2G phones)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-3xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-950 dark:text-teal-200 text-xs space-y-1">
              <strong>🔒 RBI Escrow Compliance:</strong> Node accounts maintained with ICICI / State Bank of India under Master Directions on Digital Payment Intermediaries.
            </div>
          </div>
        </div>
      )}

      {/* 2. KISAN CREDIT CARD (KCC) 4% LOAN DISCOVERY */}
      {activeSubTab === 'kcc' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                NABARD & SBI Institutional Credit Hook
              </span>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                Kisan Credit Card (KCC) Subsidized Loan Calculator
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Cultivated Land Size (in Acres):
                  </label>
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={landAcres}
                    onChange={(e) => setLandAcres(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-sm"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Primary Crop Category:
                  </label>
                  <select
                    value={selectedCropLoan}
                    onChange={(e) => setSelectedCropLoan(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-medium"
                  >
                    <option value="Mango & Fruit Orchard">Mango & Fruit Orchard</option>
                    <option value="Vegetables & Cash Crops">Vegetables & Cash Crops</option>
                    <option value="Paddy / Grains">Paddy / Grains</option>
                    <option value="Pulses & Oilseeds">Pulses & Oilseeds</option>
                  </select>
                </div>
              </div>

              {/* Calculated KCC Result Box */}
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-slate-600 dark:text-slate-300">Eligible Collateral-Free Credit Limit:</span>
                  <span className="text-xl font-extrabold text-emerald-800 dark:text-emerald-300">
                    ₹{calculatedKccLimit.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-teal-800 dark:text-teal-300 font-semibold">
                  <span>Government Interest Subvention:</span>
                  <span>{effectiveInterestRate}</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>Processing Turnaround:</span>
                  <span>Instant Pre-Approval via DigiLocker RoR</span>
                </div>
              </div>

              <button
                onClick={() => alert(`Pre-approval docket generated for ₹${calculatedKccLimit.toLocaleString('en-IN')} KCC Credit Limit. Transmitted to SBI / Odisha Gramya Bank.`)}
                className="w-full py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Apply for 4% Subsidized KCC Pre-Approval
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-3xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 text-xs space-y-2.5">
              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
                Why KCC Integration Beats Mandi Moneylenders:
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                APMC traders trap smallholders with informal credit charging 24%–36% annual interest, forcing distress sales. Linking verified platform sales data to NABARD 4% KCC rails frees the farmer from debt cartels completely.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. PMFBY CROP INSURANCE */}
      {activeSubTab === 'pmfby' && (
        <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Pradhan Mantri Fasal Bima Yojana (PMFBY)
            </span>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Automated Yield & Weather Risk Coverage Enrollment
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-500">Subsidized Farmer Premium:</span>
              <div className="text-lg font-extrabold text-emerald-700 dark:text-emerald-400">1.5% - 2.0%</div>
              <p className="text-[11px] text-slate-400">Rest 98% subsidized by Central & State Govt</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-500">Sum Insured Per Acre:</span>
              <div className="text-lg font-extrabold text-slate-900 dark:text-white">₹48,000 / Acre</div>
              <p className="text-[11px] text-slate-400">Cyclone, Drought, Pest & Unseasonal Rain</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="text-slate-500">Claim Settlement:</span>
              <div className="text-lg font-extrabold text-teal-700 dark:text-teal-400">Satellite-Triggered</div>
              <p className="text-[11px] text-slate-400">Direct DBT to Aadhaar Bank Account</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. PRE-HARVEST FORWARD ADVANCES */}
      {activeSubTab === 'advance' && (
        <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Working Capital Liquidity
            </span>
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Instant 60% Cash Advance Against Locked Forward Contracts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Locked Institutional Contract Value (₹):
                </label>
                <input
                  type="number"
                  value={advanceContractValue}
                  onChange={(e) => setAdvanceContractValue(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-base"
                />
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1">
                <span className="text-slate-600 dark:text-slate-300">Instant Disbursable Advance (60%):</span>
                <div className="text-2xl font-black text-amber-900 dark:text-amber-300">
                  ₹{eligibleAdvanceCash.toLocaleString('en-IN')}
                </div>
                <p className="text-[10px] text-slate-500">
                  Transferred in 5 minutes. Balance 40% cleared upon harvest delivery.
                </p>
              </div>

              <button
                onClick={() => {
                  setAdvanceDisbursed(true);
                  alert(`🎉 ₹${eligibleAdvanceCash.toLocaleString('en-IN')} Working Capital Advance Disbursed to Bank Account via UPI!`);
                }}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Disburse 60% Working Capital Advance (₹{eligibleAdvanceCash.toLocaleString('en-IN')})
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-2 leading-relaxed">
              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">How Advance Financing Works:</h4>
              <p className="text-slate-600 dark:text-slate-300">
                When an institutional buyer (like BigBasket or ITC) locks a pre-harvest contract on Kisan Setu, the contract acts as AAA-grade collateral. Farmers do not need to wait until harvest day for cash flow—they can access 60% working capital immediately for seed, organic fertilizer, and drip maintenance.
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

window.FinancialRailsTab = FinancialRailsTab;
