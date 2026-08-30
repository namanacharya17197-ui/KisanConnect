function Header({
  currentUser,
  onLogout,
  userRole,
  onOpenVoice,
  cartItemCount,
  onOpenCart,
  theme,
  onToggleTheme,
  onOpenMobileSidebar,
  lang = 'en',
  onLanguageChange
}) {
  const t = (window.TRANSLATIONS && window.TRANSLATIONS[lang]) || window.TRANSLATIONS?.en || {};

  return (
    <header className="sticky top-0 z-30 bg-white/90 dark:bg-[#111928]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 sm:px-6 py-3 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Mobile Menu Trigger & Role Pill */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            ☰
          </button>

          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm text-slate-900 dark:text-white">
              {t.brandName || "Kisan Setu"}
            </span>
            <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">•</span>
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              {currentUser ? currentUser.badge : 'Sovereign Rails'}
            </span>
          </div>
        </div>

        {/* Right: Language Switcher (EN / HI / OR), Voice CTA, Cart, Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* 3-WAY LANGUAGE SWITCHER (ODIA / HINDI / ENGLISH) */}
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-2xl border border-slate-200 dark:border-slate-700">
            {[
              { id: 'en', label: 'English', short: 'EN' },
              { id: 'hi', label: 'हिंदी', short: 'हिं' },
              { id: 'or', label: 'ଓଡ଼ିଆ', short: 'ଓଡ଼ି' }
            ].map((l) => (
              <button
                key={l.id}
                onClick={() => onLanguageChange && onLanguageChange(l.id)}
                className={`px-2.5 py-1 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                  lang === l.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-emerald-700'
                }`}
                title={`Switch language to ${l.label}`}
              >
                <span className="hidden sm:inline">{l.label}</span>
                <span className="sm:hidden">{l.short}</span>
              </button>
            ))}
          </div>

          {/* Voice Assistant Trigger */}
          <button
            onClick={onOpenVoice}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-300 dark:border-amber-700 text-amber-900 dark:text-amber-300 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            title="Kisan Vani AI Voice Engine"
          >
            <span className="text-sm">🎙️</span>
            <span className="hidden md:inline">{t.voiceAssistant || "Kisan Vani AI"}</span>
          </button>

          {/* Cart Icon (For Buyers) */}
          {(userRole === 'buyer' || userRole === 'bulk') && (
            <button
              onClick={onOpenCart}
              className="relative p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition cursor-pointer"
              title="View Cart"
            >
              <span className="text-base">🛒</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] flex items-center justify-center shadow-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
          )}

          {/* Theme Switcher Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 transition cursor-pointer text-sm"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* User Profile / Logout Button */}
          {currentUser && (
            <button
              onClick={onLogout}
              className="hidden sm:flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 font-bold px-2 py-1 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 transition cursor-pointer"
              title="Sign Out"
            >
              <span>🚪</span>
              <span>{t.signOut || "Sign Out"}</span>
            </button>
          )}

        </div>
      </div>
    </header>
  );
}

window.Header = Header;
