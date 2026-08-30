function Header({ 
  currentUser, 
  onLogout, 
  userRole, 
  onOpenVoice, 
  cartItemCount, 
  onOpenCart,
  theme,
  onToggleTheme,
  onOpenMobileSidebar
}) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-[#111928]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-2xs transition-colors duration-200">
      <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        
        {/* Left: Mobile Menu Toggle & Active Dashboard Breadcrumb */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 font-bold text-base cursor-pointer"
            title="Open Navigation Menu"
          >
            ☰
          </button>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Sovereign AI Mesh Active
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium hidden md:inline">
              {userRole === 'farmer' ? '🌾 Farmer Operations Portal' : userRole === 'bulk' ? '🏢 Bulk B2B Procurement Desk' : '🛒 Retail Direct Storefront'}
            </span>
          </div>
        </div>

        {/* Right: Actions, Theme Toggle, Cart, Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
            <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          {/* Cart Trigger (for Buyers) */}
          {(userRole === 'buyer' || userRole === 'bulk') && (
            <button
              onClick={onOpenCart}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-50 text-slate-800 dark:text-slate-200 hover:text-emerald-900 font-bold text-xs border border-slate-200 dark:border-slate-700 transition cursor-pointer relative"
            >
              <span>🛒</span>
              <span className="hidden sm:inline">Cart</span>
              {cartItemCount > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-amber-500 text-slate-950 text-[10px] font-extrabold">
                  {cartItemCount}
                </span>
              )}
            </button>
          )}

          {/* User Signout quick trigger */}
          {currentUser && (
            <button
              onClick={onLogout}
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-600 dark:text-slate-300 hover:text-rose-600 border border-slate-200 dark:border-slate-700 text-xs font-bold transition cursor-pointer"
              title="Sign Out or Switch Account"
            >
              <span>🚪</span>
              <span>Sign Out</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}

window.Header = Header;
