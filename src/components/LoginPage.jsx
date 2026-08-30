function LoginPage({ onLogin, onGuestAccess, lang = 'en' }) {
  const { useState } = React;
  const t = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || window.TRANSLATIONS?.en || {};

  const [activePersona, setActivePersona] = useState('farmer'); // 'farmer', 'buyer', 'bulk'
  const [phoneNumber, setPhoneNumber] = useState('9861233410');
  const [password, setPassword] = useState('kisan123');

  // Pre-configured 1-Click Demo Profiles for Seamless Testing
  const demoProfiles = [
    {
      role: 'farmer',
      name: 'Ramesh Patra',
      subtitle: 'Verified Smallholder Producer (Puri Cluster)',
      avatar: '🌾',
      badge: 'Farmgate Producer',
      location: 'Sakhigopal, Puri',
      acres: '3.5 Acres (Drip Irrigated)',
      phone: '9861233410',
      description: 'Access the Farmer Dashboard, live buyer orders, AI harvest advisor, equipment sharing, and waste-to-money marketplace.'
    },
    {
      role: 'buyer',
      name: 'Ananya Sharma',
      subtitle: 'Retail & Household Buyer',
      avatar: '🛒',
      badge: 'Verified Retail Customer',
      location: 'Bhubaneswar Metro Hub',
      acres: 'Direct Consumer Account',
      phone: '9437011882',
      description: 'Browse fresh farmgate lots, track cold reefer delivery, and buy with 100% smart escrow security.'
    },
    {
      role: 'bulk',
      name: 'ITC Foods & Agri Procurement',
      subtitle: 'Institutional B2B Processor',
      avatar: '🏢',
      badge: 'Institutional Desk',
      location: 'Cuttack Food Park',
      acres: 'Multi-Ton Commercial Buyer',
      phone: '9861055443',
      description: 'Post recurring HoReCa demands, negotiate multi-ton forward contracts, and coordinate factory supply.'
    }
  ];

  const handleCustomLogin = (e) => {
    e.preventDefault();
    const matchedProfile = demoProfiles.find((p) => p.role === activePersona) || demoProfiles[0];
    onLogin({
      ...matchedProfile,
      phone: phoneNumber
    });
  };

  return (
    <div className="min-h-screen bg-[#f7f9f6] dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col justify-between p-4 sm:p-6 transition-colors duration-200">
      
      {/* Top Brand Header */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-amber-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-emerald-950/20">
            🌾
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-xl tracking-tight text-emerald-950 dark:text-emerald-300">
                {t.brandName || "Kisan Setu"}
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 font-bold">
                Role Gateway
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t.brandSubtitle || "Sovereign Agritech Rails"}
            </p>
          </div>
        </div>

        <button
          onClick={onGuestAccess}
          className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition cursor-pointer px-3 py-1.5 rounded-xl bg-white dark:bg-[#131d31] border border-slate-200 dark:border-slate-800 shadow-2xs"
        >
          Explore as Guest ➔
        </button>
      </div>

      {/* Main Login Card Container */}
      <div className="max-w-4xl w-full mx-auto my-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: 1-Click Fast Role Selection */}
        <div className="md:col-span-7 space-y-4">
          <div className="space-y-2">
            <span className="text-xs font-extrabold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800 inline-block">
              Role-Scoped Access Control
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              Select Your Role to Access Your Dedicated Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Login to view only the tools and data relevant to your profile.
            </p>
          </div>

          {/* Role Cards List */}
          <div className="space-y-3 pt-2">
            {demoProfiles.map((p) => {
              const isSelected = activePersona === p.role;
              return (
                <div
                  key={p.role}
                  onClick={() => {
                    setActivePersona(p.role);
                    setPhoneNumber(p.phone);
                  }}
                  className={`p-4 rounded-3xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-emerald-900 text-white border-emerald-600 shadow-lg shadow-emerald-950/20 ring-2 ring-emerald-500'
                      : 'bg-white dark:bg-[#131d31] border-slate-200 dark:border-slate-800 hover:border-emerald-400 text-slate-800 dark:text-slate-200 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-3.5 min-w-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 ${
                      isSelected ? 'bg-emerald-800' : 'bg-slate-100 dark:bg-slate-800'
                    }`}>
                      {p.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-extrabold text-sm truncate">{p.name}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                          isSelected ? 'bg-amber-400 text-slate-950' : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200'
                        }`}>
                          {p.badge}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 truncate ${isSelected ? 'text-emerald-200' : 'text-slate-500 dark:text-slate-400'}`}>
                        {p.subtitle} • {p.location}
                      </p>
                      <p className={`text-[11px] mt-1.5 line-clamp-2 ${isSelected ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}`}>
                        {p.description}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onLogin(p);
                    }}
                    className={`px-3 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition cursor-pointer flex-shrink-0 ${
                      isSelected
                        ? 'bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    1-Click Login ➔
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Credential Form Box */}
        <div className="md:col-span-5 bg-white dark:bg-[#131d31] p-6 sm:p-7 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-5">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Secure OTP / Password Login
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Role: <strong className="text-emerald-600 dark:text-emerald-400 uppercase">{activePersona}</strong>
            </p>
          </div>

          <form onSubmit={handleCustomLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Mobile Number / Aadhaar UID:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">+91</span>
                <input
                  type="text"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter 10-digit mobile number"
                  className="w-full pl-12 pr-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] text-slate-900 dark:text-white font-bold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Security PIN / Password:
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-[#1a253c] text-slate-900 dark:text-white font-bold focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
            >
              <span>🔓</span>
              <span>Enter Portal as {activePersona === 'farmer' ? 'Farmer' : activePersona === 'buyer' ? 'Retail Buyer' : 'Bulk Buyer'}</span>
            </button>
          </form>

          <div className="pt-2 text-center text-[11px] text-slate-400">
            Smart Escrow & OTP Protection by UIDAI & NPCI
          </div>
        </div>

      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-4xl w-full mx-auto text-center text-xs text-slate-400 dark:text-slate-500 py-2">
        Kisan Setu • Disintermediated Sovereign Agritech Ecosystem
      </div>

    </div>
  );
}

window.LoginPage = LoginPage;
