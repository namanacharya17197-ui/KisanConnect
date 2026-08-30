function LoginPage({ onLogin, onGuestAccess }) {
  const { useState } = React;

  const [activeRole, setActiveRole] = useState('farmer'); // 'farmer' | 'buyer' | 'bulk'
  const [isRegister, setIsRegister] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Farmer form state
  const [farmerForm, setFarmerForm] = useState({
    name: 'Ramesh Patra',
    phone: '9861233410',
    fpo: 'Sakhigopal Farmers Producer Co.',
    district: 'Puri, Odisha',
    cropSpecialty: 'Alphonso & Amrapali Mangoes',
    landSize: '4.5 Acres'
  });

  // Customer / Retail Buyer form state
  const [buyerForm, setBuyerForm] = useState({
    name: 'Ananya Sharma',
    phone: '9437188902',
    email: 'ananya.sharma@gmail.com',
    city: 'Bhubaneswar, Odisha',
    buyerType: 'Household / Community Group'
  });

  // Bulk Institutional Buyer form state
  const [bulkForm, setBulkForm] = useState({
    companyName: 'ITC Foods & Agri Division',
    gstin: '21AAACI1681G1ZM',
    contactPerson: 'Siddharth Patnaik',
    phone: '9861099441',
    email: 'procurement@itc.in',
    procurementHub: 'Bhubaneswar Central Cold Hub'
  });

  const [otpInput, setOtpInput] = useState('4821');

  // Pre-configured Demo Accounts for 1-Click Login
  const DEMO_PROFILES = [
    {
      role: 'farmer',
      title: 'Farmer / FPO Partner',
      name: 'Ramesh Patra',
      subtitle: 'Sakhigopal FPO (4.5 Acres)',
      phone: '+91 98612-33410',
      badge: 'Verified Producer',
      avatar: '👨‍🌾',
      bgGradient: 'from-emerald-600 to-teal-700'
    },
    {
      role: 'buyer',
      title: 'Retail Customer / Buyer',
      name: 'Ananya Sharma',
      subtitle: 'Bhubaneswar Consumer Desk',
      phone: '+91 94371-88902',
      badge: 'Verified Buyer',
      avatar: '🛒',
      bgGradient: 'from-amber-500 to-orange-600'
    },
    {
      role: 'bulk',
      title: 'Institutional Bulk Buyer',
      name: 'ITC Agri Procurement',
      subtitle: 'GSTIN Verified • 50+ Tonnes',
      phone: '+91 98610-99441',
      badge: 'Corporate Escrow',
      avatar: '🏢',
      bgGradient: 'from-slate-800 to-slate-950'
    }
  ];

  const handleQuickDemo = (profile) => {
    if (profile.role === 'farmer') {
      onLogin({
        role: 'farmer',
        name: profile.name,
        subtitle: profile.subtitle,
        phone: profile.phone,
        badge: profile.badge,
        avatar: profile.avatar,
        fpo: 'Sakhigopal Farmers Producer Co.',
        location: 'Sakhigopal, Puri'
      });
    } else if (profile.role === 'buyer') {
      onLogin({
        role: 'buyer',
        name: profile.name,
        subtitle: profile.subtitle,
        phone: profile.phone,
        badge: profile.badge,
        avatar: profile.avatar,
        location: 'Bhubaneswar, Odisha'
      });
    } else {
      onLogin({
        role: 'bulk',
        name: profile.name,
        subtitle: profile.subtitle,
        phone: profile.phone,
        badge: profile.badge,
        avatar: profile.avatar,
        company: 'ITC Foods & Agri Business',
        location: 'Bhubaneswar Metro Hub'
      });
    }
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!otpSent) {
      setOtpSent(true);
      return;
    }

    // OTP Verified
    if (activeRole === 'farmer') {
      onLogin({
        role: 'farmer',
        name: farmerForm.name,
        subtitle: `${farmerForm.fpo} (${farmerForm.district})`,
        phone: `+91 ${farmerForm.phone}`,
        badge: 'Verified Producer',
        avatar: '👨‍🌾',
        fpo: farmerForm.fpo,
        location: farmerForm.district
      });
    } else if (activeRole === 'buyer') {
      onLogin({
        role: 'buyer',
        name: buyerForm.name,
        subtitle: buyerForm.city,
        phone: `+91 ${buyerForm.phone}`,
        badge: 'Verified Buyer',
        avatar: '🛒',
        location: buyerForm.city
      });
    } else {
      onLogin({
        role: 'bulk',
        name: bulkForm.companyName,
        subtitle: `${bulkForm.contactPerson} • ${bulkForm.procurementHub}`,
        phone: `+91 ${bulkForm.phone}`,
        badge: 'Corporate B2B',
        avatar: '🏢',
        company: bulkForm.companyName,
        location: bulkForm.procurementHub
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 flex flex-col justify-between text-slate-100 p-4 sm:p-6 selection:bg-emerald-300 selection:text-emerald-950">
      
      {/* Top Sovereign Bar */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between py-2 border-b border-emerald-800/40 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-400 flex items-center justify-center text-slate-950 font-extrabold text-lg shadow-sm">
            🌾
          </div>
          <div>
            <span className="font-extrabold text-white text-sm tracking-tight">Kisan Setu</span>
            <span className="text-[10px] ml-1.5 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              v2.4 Sovereign
            </span>
          </div>
        </div>

        <button
          onClick={onGuestAccess}
          className="text-xs text-slate-400 hover:text-emerald-300 transition underline underline-offset-4 cursor-pointer"
        >
          Explore as Guest (Direct Marketplace) →
        </button>
      </div>

      {/* Main Authentication Card */}
      <div className="max-w-4xl mx-auto w-full my-6 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-9 text-slate-900 shadow-2xl border border-white/20 space-y-6">
        
        {/* Title Header */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
            <span>🛡️ Sovereign AI Agricultural Gateway</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950 tracking-tight">
            Welcome to Kisan Setu
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Direct farmer-to-buyer disintermediated agritech ecosystem. Select your persona to login or register.
          </p>
        </div>

        {/* 1-Click Quick Demo Login Switcher */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block text-center">
            ⚡ Quick 1-Click Demo Profiles (Instant Access):
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {DEMO_PROFILES.map((profile, i) => (
              <button
                key={i}
                onClick={() => handleQuickDemo(profile)}
                className="p-3.5 rounded-2xl border border-slate-200 hover:border-emerald-500 hover:shadow-md bg-slate-50/80 hover:bg-emerald-50/50 transition-all text-left flex items-start gap-3 cursor-pointer group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${profile.bgGradient} text-white flex items-center justify-center text-xl flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                  {profile.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded">
                      {profile.badge}
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-slate-900 truncate mt-0.5">
                    {profile.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 truncate">{profile.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-200 w-full"></div>
          <span className="bg-white px-3 text-[11px] text-slate-400 font-bold uppercase tracking-wider">
            Or Login with Your Custom Credentials
          </span>
        </div>

        {/* Role Tab Selector */}
        <div className="flex bg-slate-100 p-1.5 rounded-2xl max-w-md mx-auto">
          <button
            onClick={() => { setActiveRole('farmer'); setOtpSent(false); }}
            className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeRole === 'farmer'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>👨‍🌾</span>
            <span>Farmer / FPO</span>
          </button>
          <button
            onClick={() => { setActiveRole('buyer'); setOtpSent(false); }}
            className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeRole === 'buyer'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🛒</span>
            <span>Retail Buyer</span>
          </button>
          <button
            onClick={() => { setActiveRole('bulk'); setOtpSent(false); }}
            className={`flex-1 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
              activeRole === 'bulk'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🏢</span>
            <span>Bulk B2B Desk</span>
          </button>
        </div>

        {/* Custom Role Form */}
        <form onSubmit={handleCustomSubmit} className="max-w-xl mx-auto space-y-4 text-xs">
          
          {/* FARMER FORM */}
          {activeRole === 'farmer' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Farmer Full Name:</label>
                  <input
                    type="text"
                    required
                    value={farmerForm.name}
                    onChange={(e) => setFarmerForm({ ...farmerForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. Ramesh Patra"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile / Aadhaar-linked No:</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={farmerForm.phone}
                      onChange={(e) => setFarmerForm({ ...farmerForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-r-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                      placeholder="10-digit number"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Associated FPO / Collective:</label>
                  <input
                    type="text"
                    required
                    value={farmerForm.fpo}
                    onChange={(e) => setFarmerForm({ ...farmerForm, fpo: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. Sakhigopal Farmers Producer Co."
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">District / Farmgate Location:</label>
                  <input
                    type="text"
                    required
                    value={farmerForm.district}
                    onChange={(e) => setFarmerForm({ ...farmerForm, district: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. Puri, Odisha"
                  />
                </div>
              </div>
            </div>
          )}

          {/* RETAIL BUYER FORM */}
          {activeRole === 'buyer' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Buyer / Customer Name:</label>
                  <input
                    type="text"
                    required
                    value={buyerForm.name}
                    onChange={(e) => setBuyerForm({ ...buyerForm, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. Ananya Sharma"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email Address:</label>
                  <input
                    type="email"
                    required
                    value={buyerForm.email}
                    onChange={(e) => setBuyerForm({ ...buyerForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Mobile Number:</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2.5 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={buyerForm.phone}
                      onChange={(e) => setBuyerForm({ ...buyerForm, phone: e.target.value })}
                      className="w-full px-3 py-2 rounded-r-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                      placeholder="10-digit number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Delivery City / Hub:</label>
                  <input
                    type="text"
                    required
                    value={buyerForm.city}
                    onChange={(e) => setBuyerForm({ ...buyerForm, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. Bhubaneswar, Odisha"
                  />
                </div>
              </div>
            </div>
          )}

          {/* BULK B2B DESK FORM */}
          {activeRole === 'bulk' && (
            <div className="space-y-3 animate-in fade-in duration-150">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Company / Entity Name:</label>
                  <input
                    type="text"
                    required
                    value={bulkForm.companyName}
                    onChange={(e) => setBulkForm({ ...bulkForm, companyName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                    placeholder="e.g. ITC Foods / BigBasket"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Corporate GSTIN Number:</label>
                  <input
                    type="text"
                    required
                    value={bulkForm.gstin}
                    onChange={(e) => setBulkForm({ ...bulkForm, gstin: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-mono"
                    placeholder="21AAACI1681G1ZM"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Procurement Manager Name:</label>
                  <input
                    type="text"
                    required
                    value={bulkForm.contactPerson}
                    onChange={(e) => setBulkForm({ ...bulkForm, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Central Cold Hub:</label>
                  <input
                    type="text"
                    required
                    value={bulkForm.procurementHub}
                    onChange={(e) => setBulkForm({ ...bulkForm, procurementHub: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
              </div>
            </div>
          )}

          {/* OTP Verification Step if triggered */}
          {otpSent && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 animate-in fade-in slide-in-from-top-2">
              <div className="flex justify-between items-center">
                <span className="font-bold text-emerald-900 text-xs">Enter 4-Digit OTP Code:</span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Demo OTP: 4821
                </span>
              </div>
              <input
                type="text"
                maxLength="4"
                required
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-emerald-300 font-mono font-bold text-center text-base tracking-widest bg-white"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{otpSent ? '✓ Verify OTP & Enter Ecosystem' : '📲 Send OTP & Secure Login'}</span>
          </button>
        </form>

      </div>

      {/* Footer Sovereign Tag */}
      <div className="max-w-6xl mx-auto w-full text-center text-[11px] text-slate-400 py-2">
        Kisan Setu Sovereign Platform • 100% Smart Escrow Protection • Powered by Google Antigravity 2.0
      </div>

    </div>
  );
}

window.LoginPage = LoginPage;
