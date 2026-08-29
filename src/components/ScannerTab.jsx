function ScannerTab({ 
  selectedPreset, 
  setSelectedPreset, 
  isScanning, 
  onTriggerScan, 
  onOpenCertificate 
}) {
  const presetsList = window.CV_PRESETS || [];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-semibold border border-emerald-400/30">
            <span>🔬 Edge Computer Vision Assaying</span>
            <span>•</span>
            <span>MobileNet-AgriV4 Quantized CNN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Objective AI Quality Grading at Farmgate
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed">
            Eliminates arbitrary mandi cartel down-grading. Lightweight edge computer vision models assess produce in under 2 seconds for surface defect percentage, Brix sugar content, and ethylene ripeness stage — generating verifiable cryptographic quality certificates.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs">
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-emerald-300 font-bold">&lt; 2.0s</span> Farmgate Assaying Latency
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-teal-300 font-bold">99.2%</span> Accuracy vs FSSAI / Agmark Labs
            </div>
            <div className="bg-white/10 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-white/15">
              <span className="text-amber-300 font-bold">+24% to +32%</span> Quality Price Premium
            </div>
          </div>
        </div>
      </div>

      {/* Preset Selector */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
          Select Crop Sample for Farmgate Edge Assaying:
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {presetsList.map((preset) => {
            const isSelected = selectedPreset && selectedPreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => onTriggerScan(preset)}
                className={`p-3.5 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-50/90 border-emerald-500 ring-2 ring-emerald-400/30 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    {preset.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{preset.confidence}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 leading-snug">{preset.crop}</h4>
                <p className="text-[11px] text-emerald-700 font-bold mt-1">{preset.priceBonus} Fair Premium</p>
              </button>
            );
          })}
        </div>
      </div>

      {selectedPreset && (
        /* Main Assaying Grid: Camera Feed vs Analytical Report */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Camera Feed Simulator */}
          <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800 uppercase flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Camera Feed (Farmgate Mobile Assayer)
              </span>
              <span className="text-slate-500 font-mono bg-slate-100 px-2 py-0.5 rounded text-[11px]">
                Latency: 42ms • FPS: 60
              </span>
            </div>

            {/* Video / Image Window */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-950 shadow-inner border border-slate-800">
              <img 
                src={selectedPreset.image} 
                alt={selectedPreset.crop} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
              />

              {/* Bounding Box Simulation */}
              <div className="absolute inset-8 border-2 border-dashed border-emerald-400/80 rounded-xl pointer-events-none flex flex-col justify-between p-3">
                <div className="flex justify-between items-start">
                  <span className="bg-emerald-950/80 text-emerald-300 font-mono text-[10px] px-2 py-0.5 rounded border border-emerald-500/40">
                    Target: {selectedPreset.crop} ({selectedPreset.confidence})
                  </span>
                  <span className="bg-slate-900/80 text-amber-300 font-mono text-[10px] px-2 py-0.5 rounded">
                    Brix: {selectedPreset.sugarBrix}°
                  </span>
                </div>
                <div className="self-end bg-slate-900/80 text-slate-200 font-mono text-[10px] px-2 py-0.5 rounded">
                  Surface Defect: {selectedPreset.bruisingPct}%
                </div>
              </div>

              {/* Scanning Laser Beam */}
              {isScanning && (
                <div className="absolute inset-x-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 animate-scan-laser shadow-[0_0_15px_#10b981]"></div>
              )}

              {/* Status Footer */}
              <div className="absolute bottom-3 left-3 right-3 bg-slate-900/85 backdrop-blur-md px-3.5 py-2.5 rounded-xl text-white text-xs flex justify-between items-center border border-white/10">
                <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <span>✓</span> AI Certified Quality Grade
                </span>
                <span className="font-mono text-slate-300 text-[11px]">{selectedPreset.qrHash}</span>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex gap-3">
              <button
                onClick={() => onTriggerScan(selectedPreset)}
                disabled={isScanning}
                className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🔄</span>
                <span>{isScanning ? 'Running CNN Spectral Inference...' : 'Re-Run Computer Vision Assaying'}</span>
              </button>
            </div>
          </div>

          {/* Right: Certified Spectral Diagnostics Report */}
          <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3 flex justify-between items-start">
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">
                    Cryptographic Lab Seal
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 leading-tight">
                    {selectedPreset.crop}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {selectedPreset.station} • {selectedPreset.inspectorModel}
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs">
                  {selectedPreset.badge}
                </span>
              </div>

              {/* Key Metrics 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Assigned Grade</span>
                  <strong className="text-slate-900 text-xs block leading-tight">{selectedPreset.grade}</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Sugar Content</span>
                  <strong className="text-emerald-700 text-sm block">{selectedPreset.sugarBrix}° Brix</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Maturity Ripeness</span>
                  <strong className="text-slate-900 text-sm block">{selectedPreset.ripenessPct}% Ripened</strong>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 space-y-0.5">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Bruising Defect</span>
                  <strong className="text-slate-900 text-sm block">{selectedPreset.bruisingPct}% (Minimal)</strong>
                </div>
              </div>

              {/* Spectral Diagnostic Note */}
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-950 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                  <span>🌱</span>
                  <span>Spectral Insight:</span>
                </div>
                <p className="text-emerald-900/90 leading-relaxed">
                  {selectedPreset.spectralAnalysis}
                </p>
              </div>

              {/* Pricing Comparison Card */}
              <div className="p-4 rounded-xl bg-emerald-800 text-white flex justify-between items-center text-xs shadow-md">
                <div>
                  <span className="text-emerald-200 block text-[10px] uppercase font-bold">
                    Guaranteed Farmgate Direct Price:
                  </span>
                  <span className="text-2xl font-extrabold text-amber-300">
                    {selectedPreset.certifiedPrice}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-emerald-200 line-through block">
                    Mandi: {selectedPreset.mandiBaseline}
                  </span>
                  <span className="text-emerald-100 font-bold bg-emerald-700 px-2 py-0.5 rounded text-[11px] inline-block mt-1">
                    {selectedPreset.priceBonus} Premium
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenCertificate}
              className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs shadow-md shadow-emerald-700/20 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>📜</span>
              <span>View Cryptographic ISO Assaying Certificate</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

window.ScannerTab = ScannerTab;
