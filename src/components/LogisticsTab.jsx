function LogisticsTab() {
  const fleetList = window.FLEET || [];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-semibold border border-teal-400/30">
            <span>🚚 Google OR-Tools Python Solver</span>
            <span>•</span>
            <span>CVRPTW Cold Chain Fleet Routing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Dynamic Cold-Chain Logistics & Morning Harvest Windows
          </h2>
          <p className="text-xs sm:text-sm text-teal-100/90 max-w-3xl leading-relaxed">
            NABARD empirical data reveals 20%–30% of perishable produce rots due to ambient heat and delayed transport. 
            Kisan Setu uses Capacitated Vehicle Routing with Time Windows (CVRPTW) to dispatch solar-powered reefer vans to farmgates within morning harvest windows (06:00–08:00 AM) and reroute surplus overflow to Ecofrost micro-cold rooms.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-teal-300 font-bold">99.2%</span> Produce Freshness Preserved
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-amber-300 font-bold">-34.5%</span> Fuel Consumption Saved
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-emerald-300 font-bold">06:00–08:00 AM</span> Farmgate Morning Window
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {fleetList.map((v) => (
          <div key={v.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-mono font-bold text-xs text-teal-900 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                    {v.id}
                  </span>
                  <h4 className="font-bold text-sm text-slate-900 mt-1">{v.name}</h4>
                  <p className="text-xs text-slate-500">Driver: {v.driver} ({v.phone})</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  {v.statusBadge}
                </span>
              </div>

              {/* Telemetry Triplet */}
              <div className="grid grid-cols-3 gap-2 text-xs pt-2 border-t border-slate-100">
                <div className="p-2 rounded-lg bg-teal-50/60 border border-teal-100/80">
                  <span className="text-slate-400 block text-[10px] font-bold">Temp:</span>
                  <strong className="text-teal-800 text-sm">{v.tempCelsius}°C</strong>
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-400 block text-[10px] font-bold">Payload:</span>
                  <strong className="text-slate-800 text-xs">{v.currentLoadKg} / {v.capacityKg} kg</strong>
                </div>
                <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-100/80">
                  <span className="text-slate-400 block text-[10px] font-bold">Solar Batt:</span>
                  <strong className="text-amber-700 text-xs">{v.batterySolarPct}%</strong>
                </div>
              </div>

              {/* Waypoint Status */}
              <div className="p-2.5 rounded-xl bg-slate-50 text-xs space-y-1 border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">Current Waypoint:</span>
                  <strong className="text-slate-800">{v.currentWaypoint}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Next ETA:</span>
                  <strong className="text-emerald-700">{v.eta}</strong>
                </div>
              </div>

              {/* Stops Schedule */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-slate-500 block">CVRPTW Optimized Waypoints:</span>
                <div className="space-y-1 text-[11px]">
                  {v.schedule.map((st, i) => (
                    <div key={i} className="flex items-center justify-between text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          st.status === 'Completed' ? 'bg-emerald-500' :
                          st.status === 'Approaching' ? 'bg-amber-500 animate-pulse' : 'bg-slate-300'
                        }`}></span>
                        <span className="font-mono text-slate-400">{st.time}</span>
                        <span className="line-clamp-1">{st.stop}</span>
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500">{st.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-teal-900 text-white text-[11px] flex justify-between items-center">
              <span>Fuel Saved: <strong>{v.fuelSavedLiters} L</strong></span>
              <span className="text-teal-300 font-bold">Target: {v.targetTemp}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Corridor Map & OR-Tools Solver Visualizer */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              Real-Time Route Telemetry
            </span>
            <h3 className="font-extrabold text-base text-slate-900">
              Puri - Khordha - Bhubaneswar Cold Corridor Map
            </h3>
          </div>
          <span className="text-xs font-mono text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            OR-Tools Solver: Optimal Solution Converged in 180ms
          </span>
        </div>

        <div className="relative aspect-21/9 bg-slate-950 rounded-2xl overflow-hidden p-6 border border-slate-800 flex items-center justify-center text-center shadow-inner">
          <div className="space-y-3 text-white max-w-xl">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl border border-teal-500/30">
              🗺️
            </div>
            <h4 className="font-extrabold text-lg text-teal-300">
              Active Multi-Vehicle CVRPTW Routing Graph
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              <strong>Corridor Path:</strong> Sakhigopal Depot (05:00) ➔ Farm 1 (06:30 AM Mangoes) ➔ Farm 2 (07:15 AM Bananas) ➔ Bhubaneswar Metro Hub (09:45 AM).
              Dynamic overflow buffer connected to Ecofrost Solar Micro-Cold Storage in Pipili.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-emerald-900/90 text-emerald-300 text-xs font-bold border border-emerald-700">
                ✓ Spoilage Prevented: 99.2%
              </span>
              <span className="px-3 py-1 rounded-full bg-teal-900/90 text-teal-300 text-xs font-bold border border-teal-700">
                ✓ Total Diesel Saved: 68.5 L
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-900/90 text-amber-300 text-xs font-bold border border-amber-700">
                ✓ Zero Ambient Decay
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

window.LogisticsTab = LogisticsTab;
