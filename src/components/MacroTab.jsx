function MacroTab() {
  const statsList = window.MACRO_STATS || [];
  const comparisonsList = window.SUPPLY_CHAIN_COMPARISONS || [];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>📊 Empirical Economics Synthesis</span>
            <span>•</span>
            <span>RBI / NABARD / ICAR Data</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Macroeconomic Context & Agrarian Structural Deficits
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            Synthesized empirical research on Indian agrarian supply chain fragmentation, market power asymmetries, and how sovereign AI disintermediation shifts the value curve back to the primary producer.
          </p>
        </div>
      </div>

      {/* 4 Macro Indicator Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsList.map((st, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">
              {st.label}
            </span>
            <div className={`text-2xl sm:text-3xl font-black ${
              st.color === 'emerald' ? 'text-emerald-700' :
              st.color === 'rose' ? 'text-rose-600' :
              st.color === 'amber' ? 'text-amber-600' : 'text-slate-900'
            }`}>
              {st.value}
            </div>
            <p className="text-xs text-slate-600 font-medium leading-tight">
              {st.subtext}
            </p>
            <span className="text-[10px] text-slate-400 block pt-1 border-t border-slate-100">
              Source: {st.source}
            </span>
          </div>
        ))}
      </div>

      {/* Deep Supply Chain Structural Comparison Table */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
        <div className="border-b border-slate-100 pb-3">
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
            Architectural Paradigm Shift
          </span>
          <h3 className="font-extrabold text-base text-slate-900">
            Traditional Mandi vs. Sovereign Kisan Setu Ecosystem
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-4 font-bold">Supply Chain Dimension</th>
                <th className="py-3 px-4 font-bold text-rose-800 bg-rose-50/50 rounded-tl-lg">Traditional APMC Mandi System</th>
                <th className="py-3 px-4 font-bold text-emerald-900 bg-emerald-50/50 rounded-tr-lg">Kisan Setu AI Disintermediated Protocol</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparisonsList.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap align-top">
                    {row.stage}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 bg-rose-50/20 align-top">
                    <span className="text-rose-900/90">{row.traditionalMandi}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-800 bg-emerald-50/20 font-medium align-top">
                    <span className="text-emerald-950 font-semibold">{row.kisanSetu}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

window.MacroTab = MacroTab;
