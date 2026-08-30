function EquipmentSharingTab({ currentUser, lang = 'en' }) {
  const { useState, useMemo } = React;
  const t = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || window.TRANSLATIONS?.en || {};

  const [selectedRadius, setSelectedRadius] = useState(15); // max km filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allEquipment = [
    {
      id: 'EQP-501',
      name: 'Mahindra 575 DI Tractor (45 HP) + Rotavator',
      category: 'Tractor & Tillage',
      ownerFarmer: 'Bikash Mahapatra',
      ownerVillage: 'Sakhigopal Ward 2',
      distanceKm: 1.8,
      estimatedArrival: '15 mins delivery',
      avatar: '🚜',
      dailyRent: 850,
      hourlyRent: 150,
      rating: '4.9 ★ (32 rentals)',
      availability: 'Available Immediately',
      condition: 'Excellent • Diesel full tank provided'
    },
    {
      id: 'EQP-504',
      name: 'Precision Laser Land Leveler + Transmitter',
      category: 'Land Prep',
      ownerFarmer: 'Gouranga Charan',
      ownerVillage: 'Teisipur Junction',
      distanceKm: 3.1,
      estimatedArrival: '25 mins delivery',
      avatar: '📐',
      dailyRent: 1100,
      hourlyRent: 200,
      rating: '4.9 ★ (21 rentals)',
      availability: 'Available Today',
      condition: 'Dual slope hydraulic control'
    },
    {
      id: 'EQP-503',
      name: 'Solar DC Surface Irrigation Pump (5 HP)',
      category: 'Irrigation & Pumping',
      ownerFarmer: 'Ramesh Patra (You)',
      ownerVillage: 'Sakhigopal Ward 4',
      distanceKm: 0.5,
      estimatedArrival: 'Immediate (Your Cluster)',
      avatar: '⚡',
      dailyRent: 300,
      hourlyRent: 50,
      rating: '5.0 ★ (14 rentals)',
      availability: 'Listed on Network',
      condition: 'Solar PV Panels + 100m Delivery Pipe'
    },
    {
      id: 'EQP-502',
      name: 'Claas Crop Tiger Mini Combine Harvester',
      category: 'Harvesting Machinery',
      ownerFarmer: 'Dhiren Swain',
      ownerVillage: 'Pipili FPO Center',
      distanceKm: 4.8,
      estimatedArrival: '40 mins delivery',
      avatar: '🌾',
      dailyRent: 2200,
      hourlyRent: 350,
      rating: '4.8 ★ (19 rentals)',
      availability: 'Available Tomorrow Morning',
      condition: 'Serviced last week • Includes experienced operator'
    },
    {
      id: 'EQP-505',
      name: 'Power Tiller (13 HP) with Wet Puddling Blades',
      category: 'Tractor & Tillage',
      ownerFarmer: 'Santosh Nayak',
      ownerVillage: 'Balipatna Border',
      distanceKm: 7.4,
      estimatedArrival: '1 hour transit',
      avatar: '⚙️',
      dailyRent: 550,
      hourlyRent: 90,
      rating: '4.7 ★ (16 rentals)',
      availability: 'Available on Thursday',
      condition: 'Compact size, ideal for small paddy plots'
    },
    {
      id: 'EQP-506',
      name: 'Boom Sprayer (Tractor Mounted 400L Tank)',
      category: 'Spraying & Crop Care',
      ownerFarmer: 'Pranab Sahoo',
      ownerVillage: 'Nimapada Bypass',
      distanceKm: 9.6,
      estimatedArrival: '1.5 hours transit',
      avatar: '🚿',
      dailyRent: 700,
      hourlyRent: 120,
      rating: '4.9 ★ (28 rentals)',
      availability: 'Available Tomorrow',
      condition: 'Uniform micron droplet nozzles for bio-pesticides'
    }
  ];

  // Filter nearby only
  const filteredEquipment = useMemo(() => {
    return allEquipment.filter((item) => {
      const matchDistance = item.distanceKm <= selectedRadius;
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchDistance && matchCategory;
    }).sort((a, b) => a.distanceKm - b.distanceKm); // Nearest first
  }, [selectedRadius, selectedCategory]);

  const [bookingItem, setBookingItem] = useState(null);
  const [bookingDays, setBookingDays] = useState(1);

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!bookingItem) return;

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }

    alert(
      `🎉 Nearby Machinery Booking Confirmed!\n\n` +
      `• Equipment: ${bookingItem.name}\n` +
      `• Owner: ${bookingItem.ownerFarmer} (${bookingItem.ownerVillage})\n` +
      `• Distance: 📍 ${bookingItem.distanceKm} km away (${bookingItem.estimatedArrival})\n` +
      `• Duration: ${bookingDays} Day(s)\n` +
      `• Total Rental: ₹${(bookingDays * bookingItem.dailyRent).toLocaleString('en-IN')}\n\n` +
      `Direct farmgate dispatch coordinated. Zero long-distance transit fees!`
    );

    setBookingItem(null);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            <span>📍 Nearby-Only Equipment Sharing Protocol</span>
            <span>•</span>
            <span>Hyperlocal Cluster Radius (&lt; 15 km)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.equipmentTitle || "Nearby Farm Machinery & Equipment Sharing"}
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            {t.equipmentSubtitle || "Rent tractors, harvesters, and solar pumps strictly from nearby farmers within your immediate village cluster. Low mobilization distance means fast delivery and zero heavy road haulage charges."}
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-300 font-bold">📍 Strictly Hyperlocal</span> Fast 15-40 min Delivery
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-300 font-bold">45% Savings</span> vs Commercial Aggregators
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-300 font-bold">Neighbor Escrow</span> Secure Farmer Verification
            </div>
          </div>
        </div>
      </div>

      {/* Distance Radius Filter Bar */}
      <div className="bg-white dark:bg-[#131d31] p-4 sm:p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">
            {t.distanceFilterLabel || "Filter by Distance:"}
          </span>
          <div className="flex gap-1.5 overflow-x-auto w-full sm:w-auto">
            {[
              { label: t.within3km || 'Within 3 km (Nearest)', km: 3 },
              { label: t.within5km || 'Within 5 km', km: 5 },
              { label: t.within10km || 'Within 10 km', km: 10 },
              { label: t.allNearby || 'All Nearby (< 15 km)', km: 15 }
            ].map((dist) => (
              <button
                key={dist.km}
                onClick={() => setSelectedRadius(dist.km)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  selectedRadius === dist.km
                    ? 'bg-teal-900 text-white shadow-sm ring-1 ring-teal-600'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                {dist.label}
              </button>
            ))}
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-full border border-teal-200 dark:border-teal-800">
          Showing {filteredEquipment.length} Machinery Units within {selectedRadius} km
        </span>
      </div>

      {/* Nearby Equipment Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredEquipment.length === 0 ? (
          <div className="col-span-2 py-16 text-center text-slate-400 space-y-2 bg-white dark:bg-[#131d31] rounded-3xl border border-slate-200 dark:border-slate-800">
            <div className="text-4xl">🚜</div>
            <p className="font-bold text-slate-600 dark:text-slate-300 text-sm">No equipment found within {selectedRadius} km</p>
            <p className="text-xs">Try increasing the distance radius to 5 km or 10 km to find neighboring machinery.</p>
          </div>
        ) : (
          filteredEquipment.map((eq) => (
            <div
              key={eq.id}
              className="bg-white dark:bg-[#131d31] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-500 shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-950/80 text-teal-900 dark:text-teal-200 flex items-center justify-center text-2xl flex-shrink-0">
                      {eq.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded border border-teal-200 dark:border-teal-800">
                          {eq.id}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          📍 {eq.distanceKm} km away
                        </span>
                      </div>
                      <h4 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight mt-1">
                        {eq.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Owner: {eq.ownerFarmer} • {eq.ownerVillage}
                      </p>
                    </div>
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
                  <div className="flex justify-between text-teal-700 dark:text-teal-400 font-semibold">
                    <span>Estimated Transit Time:</span>
                    <span>⚡ {eq.estimatedArrival}</span>
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
                <span>{t.rentBtn || "Rent This Equipment"} (₹{eq.dailyRent}/day)</span>
              </button>
            </div>
          ))
        )}
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
                  <span className="text-slate-500">Nearby Owner:</span>
                  <strong>{bookingItem.ownerFarmer} ({bookingItem.ownerVillage})</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Distance:</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">📍 {bookingItem.distanceKm} km away</span>
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
                <span>Confirm Hyperlocal Machinery Booking</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

window.EquipmentSharingTab = EquipmentSharingTab;
