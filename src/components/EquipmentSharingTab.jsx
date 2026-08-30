function EquipmentSharingTab({ currentUser }) {
  const { useState } = React;

  const [equipmentList, setEquipmentList] = useState([
    {
      id: 'EQP-501',
      name: 'Mahindra 575 DI Tractor (45 HP) + Rotavator',
      category: 'Tractor & Tillage',
      ownerFarmer: 'Bikash Mahapatra',
      ownerVillage: 'Pipili (4.2 km away)',
      avatar: '🚜',
      dailyRent: 850,
      hourlyRent: 150,
      rating: '4.9 ★ (32 rentals)',
      availability: 'Available Tomorrow Morning',
      condition: 'Excellent • Diesel full tank provided'
    },
    {
      id: 'EQP-502',
      name: 'Claas Crop Tiger Mini Combine Harvester',
      category: 'Harvesting Machinery',
      ownerFarmer: 'Dhiren Swain',
      ownerVillage: 'Nimapada (7.8 km away)',
      avatar: '🌾',
      dailyRent: 2200,
      hourlyRent: 350,
      rating: '4.8 ★ (19 rentals)',
      availability: 'Available This Weekend',
      condition: 'Serviced last week • Includes experienced operator'
    },
    {
      id: 'EQP-503',
      name: 'Solar DC Surface Irrigation Pump (5 HP)',
      category: 'Irrigation & Pumping',
      ownerFarmer: 'Ramesh Patra (You)',
      ownerVillage: 'Sakhigopal Ward 4',
      avatar: '⚡',
      dailyRent: 300,
      hourlyRent: 50,
      rating: '5.0 ★ (14 rentals)',
      availability: 'Listed on Network',
      condition: 'Solar PV Panels + 100m Delivery Pipe'
    },
    {
      id: 'EQP-504',
      name: 'Precision Laser Land Leveler + Transmitter',
      category: 'Land Prep',
      ownerFarmer: 'Gouranga Charan',
      ownerVillage: 'Teisipur (3.1 km away)',
      avatar: '📐',
      dailyRent: 1100,
      hourlyRent: 200,
      rating: '4.9 ★ (21 rentals)',
      availability: 'Available on Thursday',
      condition: 'Dual slope hydraulic control'
    }
  ]);

  const [bookingItem, setBookingItem] = useState(null);
  const [bookingDays, setBookingDays] = useState(1);

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!bookingItem) return;

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }

    alert(
      `🎉 Machinery Booking Confirmed!\n\n` +
      `• Equipment: ${bookingItem.name}\n` +
      `• Owner: ${bookingItem.ownerFarmer} (${bookingItem.ownerVillage})\n` +
      `• Duration: ${bookingDays} Day(s)\n` +
      `• Total Rental: ₹${(bookingDays * bookingItem.dailyRent).toLocaleString('en-IN')}\n\n` +
      `Owner notified. GPS dispatch coordinated through FPO hub.`
    );

    setBookingItem(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-indigo-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            <span>🚜 Farmer-to-Farmer Equipment & Machinery Sharing</span>
            <span>•</span>
            <span>Slash Capital Input Costs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Share Heavy Machinery: Rent Tractors, Harvesters & Solar Pumps
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            Instead of every smallholder buying a ₹7 Lakh tractor or ₹12 Lakh harvester, rent equipment on demand from nearby farmers. Reduce your cultivation expenses by up to 45%.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-300 font-bold">45% Cost Reduction</span> in Land Preparation
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-300 font-bold">Earn Extra Income</span> Renting Your Idle Machinery
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-300 font-bold">Escrow Verified</span> Safe Deposits
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Listings */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
            Nearby Available Farm Equipment ({equipmentList.length} Active Listings)
          </h3>
          <button
            onClick={() => alert('List your equipment: Enter Tractor/Harvester model & hourly rate. Your listing will go live on the cluster network.')}
            className="px-3.5 py-1.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs shadow-xs transition cursor-pointer flex items-center gap-1.5"
          >
            <span>➕</span>
            <span>List My Machinery</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {equipmentList.map((eq) => (
            <div
              key={eq.id}
              className="bg-white dark:bg-[#131d31] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-500 shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200 flex items-center justify-center text-2xl flex-shrink-0">
                    {eq.avatar}
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
                      {eq.id}
                    </span>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight mt-0.5">
                      {eq.name}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Owner: {eq.ownerFarmer} • {eq.ownerVillage}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200/80 dark:border-slate-700/60 text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500">Daily Rental:</span>
                    <strong className="text-emerald-700 dark:text-emerald-400 font-extrabold text-sm">₹{eq.dailyRent} / day</strong>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Hourly Rate:</span>
                    <span>₹{eq.hourlyRent} / hour</span>
                  </div>
                  <div className="flex justify-between text-slate-500 text-[11px]">
                    <span>Equipment Specs:</span>
                    <span className="italic">{eq.condition}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-amber-500 font-bold">{eq.rating}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full text-[11px]">
                    {eq.availability}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setBookingItem(eq)}
                className="w-full py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs shadow-sm transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>📅</span>
                <span>Rent This Equipment (₹{eq.dailyRent}/day)</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {bookingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#131d31] rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🚜</span>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                  Rent {bookingItem.name}
                </h3>
              </div>
              <button
                onClick={() => setBookingItem(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleConfirmBooking} className="space-y-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1a253c] border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-500">Owner:</span>
                  <strong>{bookingItem.ownerFarmer} ({bookingItem.ownerVillage})</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Daily Rate:</span>
                  <strong className="text-emerald-700 dark:text-emerald-400">₹{bookingItem.dailyRent} / day</strong>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  How many days do you need this equipment?
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="14"
                    value={bookingDays}
                    onChange={(e) => setBookingDays(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-sm bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
                  />
                  <span className="font-bold text-slate-500">Day(s)</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-1">
                <div className="flex justify-between text-teal-950 dark:text-teal-300 font-extrabold text-sm">
                  <span>Total Rental Escrow:</span>
                  <span>₹{(bookingDays * bookingItem.dailyRent).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-800 hover:to-emerald-900 text-white font-bold text-xs shadow-md transition cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔒</span>
                <span>Confirm Machinery Booking</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

window.EquipmentSharingTab = EquipmentSharingTab;
