function TransportPoolingTab({ currentUser }) {
  const { useState } = React;

  const [activePools, setActivePools] = useState([
    {
      id: 'POOL-OR-401',
      route: 'Sakhigopal ➔ Pipili ➔ Bhubaneswar Metro Hub',
      vehicleType: 'Mahindra Bolero Maxi Truck (Reefer 1.5T)',
      driverName: 'Manas Pradhan (+91 94370-11229)',
      departureTime: 'Tomorrow, 05:30 AM',
      totalCapacityKg: 1500,
      currentBookedKg: 950,
      baseSoloCostPerKg: 6.5,
      sharedPooledCostPerKg: 1.8,
      participatingFarmers: [
        { name: 'Ramesh Patra (You)', crop: 'Alphonso Mango', qty: 300, village: 'Sakhigopal Ward 4', status: 'Confirmed' },
        { name: 'Bikash Mahapatra', crop: 'Robusta Banana', qty: 400, village: 'Pipili FPO Gate', status: 'Confirmed' },
        { name: 'Gouranga Charan', crop: 'Green Papaya', qty: 250, village: 'Teisipur Junction', status: 'Confirmed' }
      ]
    },
    {
      id: 'POOL-OR-402',
      route: 'Nimapada ➔ Balianta ➔ Cuttack Food Park',
      vehicleType: 'Tata 709 Reefer Van (3.5T)',
      driverName: 'Sanjay Behera (+91 98611-88440)',
      departureTime: 'Tomorrow, 06:15 AM',
      totalCapacityKg: 3500,
      currentBookedKg: 2800,
      baseSoloCostPerKg: 5.8,
      sharedPooledCostPerKg: 1.6,
      participatingFarmers: [
        { name: 'Dhiren Swain', crop: 'Tomatoes', qty: 1200, village: 'Nimapada Mandi Bypass', status: 'Confirmed' },
        { name: 'Santosh Nayak', crop: 'Okra / Bhindi', qty: 800, village: 'Gop Block', status: 'Confirmed' },
        { name: 'Pranab Sahoo', crop: 'Brinjal / Eggplant', qty: 800, village: 'Balipatna Center', status: 'Confirmed' }
      ]
    }
  ]);

  const [myVolumeToPool, setMyVolumeToPool] = useState(150);
  const [selectedPoolId, setSelectedPoolId] = useState('POOL-OR-401');

  const handleJoinPool = (poolId) => {
    setActivePools((prev) =>
      prev.map((pool) => {
        if (pool.id === poolId) {
          const newFarmer = {
            name: currentUser ? `${currentUser.name} (You)` : 'You (Farmer Partner)',
            crop: 'Fresh Harvest Lot',
            qty: myVolumeToPool,
            village: 'Your Farmgate Location',
            status: 'Confirmed'
          };
          return {
            ...pool,
            currentBookedKg: Math.min(pool.totalCapacityKg, pool.currentBookedKg + myVolumeToPool),
            participatingFarmers: [newFarmer, ...pool.participatingFarmers]
          };
        }
        return pool;
      })
    );

    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    }

    alert(
      `🎉 Transport Pooled Successfully!\n\n` +
      `• Pool: ${poolId}\n` +
      `• Your Volume: ${myVolumeToPool} kg\n` +
      `• Freight Cost Slashed: From ₹6.50/kg ➔ ₹1.80/kg\n` +
      `• Total Transport Saved: ₹${((6.5 - 1.8) * myVolumeToPool).toFixed(0)} Saved!\n\n` +
      `The shared cold reefer truck will arrive at your farmgate during the morning route.`
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>🚚 Shared Transport Pooling Engine</span>
            <span>•</span>
            <span>Group Nearby Farmers & Cut Freight by 72%</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Consolidated Farmgate Logistics: Never Pay for an Empty Truck
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            One farmer selling 100 kg cannot afford to hire a solo ₹2,000 tempo. Our AI clustering engine groups neighboring farmers along the same highway corridor into a single temperature-controlled reefer truck.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-amber-300 font-bold">₹1.80 / kg</span> vs ₹6.50 solo tempo cost
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-emerald-300 font-bold">Zero Spoilage</span> Cold Chain Included
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/15">
              <span className="text-teal-300 font-bold">Doorstep Farmgate</span> Coordinated Pickup
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Savings Calculator */}
      <div className="bg-white dark:bg-[#131d31] p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
          Calculate Your Freight Savings with Transport Pooling
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
              Your Harvest Volume to Transport (kg):
            </label>
            <input
              type="number"
              min="20"
              max="1500"
              value={myVolumeToPool}
              onChange={(e) => setMyVolumeToPool(Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 font-bold text-sm bg-white dark:bg-[#1a253c] text-slate-900 dark:text-white"
            />
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 space-y-0.5">
            <span className="text-rose-700 dark:text-rose-300 font-bold">Solo Tempo Hire:</span>
            <div className="text-lg font-extrabold text-rose-900 dark:text-rose-200">
              ₹{(myVolumeToPool * 6.5).toFixed(0)} (₹6.50/kg)
            </div>
            <p className="text-[10px] text-rose-600 dark:text-rose-400">High per-kg cost for small loads</p>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-0.5">
            <span className="text-emerald-700 dark:text-emerald-300 font-bold">Shared Pooled Truck:</span>
            <div className="text-lg font-extrabold text-emerald-900 dark:text-emerald-200">
              ₹{(myVolumeToPool * 1.8).toFixed(0)} (₹1.80/kg)
            </div>
            <p className="text-[10px] text-emerald-600 dark:text-emerald-400">
              You save <strong>₹{((6.5 - 1.8) * myVolumeToPool).toFixed(0)}</strong> cash!
            </p>
          </div>
        </div>
      </div>

      {/* Active Corridor Pools */}
      <div className="space-y-4">
        <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
          Active Corridor Truck Pools (Join Before Cutoff)
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {activePools.map((pool) => {
            const utilizationPct = Math.round((pool.currentBookedKg / pool.totalCapacityKg) * 100);
            const availableKg = pool.totalCapacityKg - pool.currentBookedKg;

            return (
              <div
                key={pool.id}
                className="bg-white dark:bg-[#131d31] p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/40 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                        {pool.id}
                      </span>
                      <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-1">
                        {pool.route}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {pool.vehicleType} • Driver: {pool.driverName}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-bold text-xs">
                      Departs: {pool.departureTime}
                    </span>
                  </div>

                  {/* Capacity Bar */}
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">
                        Total Load: <strong>{pool.currentBookedKg} / {pool.totalCapacityKg} kg</strong> ({utilizationPct}%)
                      </span>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">
                        {availableKg > 0 ? `${availableKg} kg remaining space` : 'Pool Full'}
                      </span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-300"
                        style={{ width: `${utilizationPct}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Farmers in this pool */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Farmers Sharing This Truck ({pool.participatingFarmers.length}):
                    </span>
                    <div className="space-y-1 max-h-32 overflow-y-auto pr-1">
                      {pool.participatingFarmers.map((f, i) => (
                        <div
                          key={i}
                          className="p-2 rounded-xl bg-slate-50 dark:bg-[#1a253c] text-xs flex justify-between items-center border border-slate-200/60 dark:border-slate-700/60"
                        >
                          <div>
                            <strong className="text-slate-900 dark:text-white">{f.name}</strong>
                            <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{f.village} ({f.crop})</span>
                          </div>
                          <span className="font-extrabold text-emerald-700 dark:text-emerald-400 text-xs">
                            {f.qty} kg
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  disabled={availableKg < myVolumeToPool}
                  onClick={() => handleJoinPool(pool.id)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs transition cursor-pointer flex items-center justify-center gap-2 ${
                    availableKg >= myVolumeToPool
                      ? 'bg-emerald-800 hover:bg-emerald-900 text-white shadow-sm'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>🚚</span>
                  <span>{availableKg >= myVolumeToPool ? `Add My ${myVolumeToPool} kg to This Shared Truck (₹1.80/kg)` : 'Truck Full'}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

window.TransportPoolingTab = TransportPoolingTab;
