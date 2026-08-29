function VoiceModal({
  isOpen,
  onClose,
  voiceListening,
  voiceResponse,
  onTriggerVoice
}) {
  if (!isOpen) return null;
  const voiceSamplesList = window.VOICE_SAMPLES || [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-emerald-100 space-y-5">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-xl">
              🎙️
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 leading-tight">
                Kisan Vani AI (କୃଷକ ବାଣୀ)
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Bhashini Sovereign Indic Pipeline • Sub-190ms Latency Engine
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-sm cursor-pointer transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Central Voice Wave & Mic Button */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-50 to-emerald-50/40 border border-slate-200/80 text-center space-y-4">
          {voiceListening ? (
            <div className="flex items-center justify-center gap-1.5 h-16">
              <span className="w-1.5 bg-amber-500 rounded-full animate-voice-wave" style={{ animationDelay: '0.0s' }}></span>
              <span className="w-1.5 bg-amber-500 rounded-full animate-voice-wave" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1.5 bg-amber-600 rounded-full animate-voice-wave" style={{ animationDelay: '0.4s' }}></span>
              <span className="w-1.5 bg-amber-500 rounded-full animate-voice-wave" style={{ animationDelay: '0.1s' }}></span>
              <span className="w-1.5 bg-amber-500 rounded-full animate-voice-wave" style={{ animationDelay: '0.3s' }}></span>
            </div>
          ) : (
            <button
              onClick={() => onTriggerVoice(voiceSamplesList[0])}
              className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white text-2xl shadow-lg shadow-emerald-800/20 bg-emerald-700 hover:bg-emerald-800 active:scale-95 transition-all cursor-pointer"
            >
              🎤
            </button>
          )}

          <div>
            <p className="text-xs font-extrabold text-slate-800">
              {voiceListening ? "Listening to your Indic voice query..." : "Tap to Speak (କଥା ହୁଅନ୍ତୁ / बोलिए / Speak)"}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Supports Odia, Hindi, Bengali, Telugu, and Indian English
            </p>
          </div>
        </div>

        {/* Live Response Box */}
        {voiceResponse && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs space-y-2 text-slate-900">
            <div className="flex justify-between items-center">
              <span className="font-bold text-emerald-800 text-[11px] uppercase">
                {voiceResponse.voiceTag} Response
              </span>
              <span className="text-[10px] text-emerald-700 font-mono">Synthesized in 148ms</span>
            </div>
            <p className="font-bold text-slate-900 text-sm leading-relaxed font-odia">
              {voiceResponse.response}
            </p>
            <p className="text-[11px] text-slate-600 italic bg-white/70 p-2 rounded-lg border border-emerald-100">
              "{voiceResponse.english}"
            </p>
          </div>
        )}

        {/* Preset Farm Queries */}
        <div className="space-y-2">
          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">
            Or tap an Indic farm query sample:
          </span>
          <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
            {voiceSamplesList.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => onTriggerVoice(sample)}
                className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 text-xs transition-all cursor-pointer space-y-0.5"
              >
                <div className="flex justify-between items-center">
                  <strong className="text-emerald-800 text-[11px]">{sample.langName}</strong>
                  <span className="text-[10px] text-slate-400 font-mono">{sample.voiceTag}</span>
                </div>
                <span className="text-slate-800 line-clamp-1 font-medium font-odia">
                  "{sample.query}"
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

window.VoiceModal = VoiceModal;
