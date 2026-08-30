function RateAnnouncementBar({ onOpenVoice }) {
  const announcements = window.RATE_ANNOUNCEMENTS || [];
  const { useState, useEffect } = React;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lang, setLang] = useState('en');
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Auto-cycle announcements every 8 seconds
  useEffect(() => {
    if (announcements.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const currentItem = announcements[currentIndex] || announcements[0];

  const handleSpeakAnnouncement = () => {
    if (!currentItem) return;
    setIsSpeaking(true);

    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      let text = currentItem.audioEnglish;
      let speechLang = 'en-US';

      if (lang === 'hi') {
        text = currentItem.audioHindi;
        speechLang = 'hi-IN';
      } else if (lang === 'or') {
        text = currentItem.audioOdia;
        speechLang = 'hi-IN';
      }

      const u = new SpeechSynthesisUtterance(text);
      u.lang = speechLang;
      u.rate = 0.95;
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
    } else {
      setTimeout(() => setIsSpeaking(false), 2000);
    }
  };

  if (!currentItem) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-amber-950 text-white border-b border-emerald-500/20 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Live AI Announcer Badge & Crop Ticker */}
        <div className="flex items-center gap-2.5 flex-1 min-w-[280px]">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>📢 AI Live Rate Announcement</span>
          </div>

          <div className="flex items-center gap-2 overflow-hidden text-slate-200">
            <strong className="text-white font-bold whitespace-nowrap">{currentItem.crop}:</strong>
            <span className="text-emerald-400 font-extrabold whitespace-nowrap">
              Setu ₹{currentItem.setuRate}/{currentItem.unit}
            </span>
            <span className="text-slate-400 line-through whitespace-nowrap text-[11px]">
              Mandi ₹{currentItem.mandiRate}
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[11px] whitespace-nowrap border border-emerald-500/30">
              {currentItem.gainPct} Extra Gain
            </span>
            <span className="text-slate-400 text-[11px] hidden sm:inline">
              ({currentItem.market})
            </span>
          </div>
        </div>

        {/* Right: Audio Playback & Language Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Lang Selector */}
          <div className="flex bg-slate-800/80 rounded-lg p-0.5 border border-slate-700 text-[11px]">
            <button
              onClick={() => setLang('en')}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                lang === 'en' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                lang === 'hi' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Hindi
            </button>
            <button
              onClick={() => setLang('or')}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                lang === 'or' ? 'bg-amber-500 text-slate-950 shadow-xs' : 'text-slate-300 hover:text-white'
              }`}
            >
              Odia
            </button>
          </div>

          {/* Broadcast Voice Trigger */}
          <button
            onClick={handleSpeakAnnouncement}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer ${
              isSpeaking
                ? 'bg-amber-500 text-slate-950 animate-pulse ring-2 ring-amber-300'
                : 'bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white'
            }`}
            title="Listen to Live AI Rate Announcement"
          >
            <span>{isSpeaking ? '🔊 Speaking...' : '🎙️ Listen Rate Broadcast'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}

window.RateAnnouncementBar = RateAnnouncementBar;
