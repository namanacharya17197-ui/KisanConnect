function CertificateModal({ isOpen, onClose, preset }) {
  if (!isOpen || !preset) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl space-y-5 border border-slate-200">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📜</span>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                Farmgate Assaying Certificate
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                ISO/IEC 17025 Conformant • Cryptographic AI Hash
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Certificate Body */}
        <div className="space-y-3 text-xs bg-slate-50 p-5 rounded-2xl border border-slate-200">
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Lot Identifier:</span>
            <strong className="font-mono text-emerald-800 font-bold">{preset.lotId || 'LOT-8821'}</strong>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Commodity:</span>
            <strong className="text-slate-900 font-bold">{preset.crop}</strong>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Assigned Grade:</span>
            <strong className="text-emerald-700 font-bold">{preset.grade}</strong>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Assaying Station:</span>
            <strong className="text-slate-900">{preset.station || 'Sakhigopal RMC Lab'}</strong>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Sugar Content (Brix):</span>
            <strong className="text-slate-900">{preset.sugarBrix}° Brix</strong>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Maturity Ripeness:</span>
            <strong className="text-slate-900">{preset.ripenessPct}%</strong>
          </div>
          <div className="flex justify-between items-center border-b border-slate-200/60 pb-2">
            <span className="text-slate-500">Defect Index:</span>
            <strong className="text-slate-900">{preset.bruisingPct}%</strong>
          </div>
          <div className="flex justify-between items-center pt-1">
            <span className="text-slate-500">Blockchain Seal:</span>
            <strong className="font-mono text-emerald-700 text-[11px]">{preset.qrHash}</strong>
          </div>
        </div>

        {/* QR Representation & Security Badge */}
        <div className="p-3.5 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs">
          <div className="space-y-0.5">
            <span className="font-bold text-emerald-900 block">Digitally Signed by MobileNet-AgriV4</span>
            <span className="text-[10px] text-emerald-700 block">Immutable escrow lock enabled for bulk buyer</span>
          </div>
          <div className="w-10 h-10 bg-white rounded-lg border border-emerald-300 flex items-center justify-center text-xl shadow-xs font-mono">
            🔲
          </div>
        </div>

        {/* Modal Buttons */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs cursor-pointer shadow-md shadow-emerald-800/20 transition-colors"
        >
          Close & Return to Workspace
        </button>
      </div>
    </div>
  );
}

window.CertificateModal = CertificateModal;
