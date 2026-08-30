function App() {
  const { useState, useEffect } = React;

  const initialLots = window.INITIAL_FARMGATE_LOTS || [];
  const commodities = window.COMMODITIES || [];
  const cvPresets = window.CV_PRESETS || [];

  // Theme Management (Light / Dark)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('kisansetu_theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    document.body.className = `theme-${theme} antialiased selection:bg-emerald-200 selection:text-emerald-900`;
    try {
      localStorage.setItem('kisansetu_theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('kisansetu_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [tab, setTab] = useState('farmer');
  const [lots, setLots] = useState(initialLots);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Live Orders Stream (Who is Buying the Produce)
  const [orders, setOrders] = useState([
    {
      orderId: 'ORD-9104',
      buyerName: 'BigBasket Metro Fulfillment Hub',
      buyerType: 'Supermarket Chain (Retail B2B)',
      buyerLocation: 'Bhubaneswar Hub-2',
      buyerAvatar: '🏬',
      crop: 'Alphonso Mango (Amrapali)',
      lotId: 'LOT-4410',
      farmerName: 'Ramesh Patra',
      location: 'Sakhigopal, Puri',
      qty: 500,
      pricePerKg: 88,
      farmerPayout: 44000,
      totalAmount: 47960,
      status: 'Escrow Deposited (100%)',
      reeferId: 'Tata 709 Reefer (OD-02-K-9901)',
      tempCelsius: '4.8°C (Optimal)',
      timestamp: 'Today, 08:30 AM'
    },
    {
      orderId: 'ORD-8922',
      buyerName: 'Hotel Mayfair Lagoon',
      buyerType: 'HoReCa Hotel Chain',
      buyerLocation: 'Jaydev Vihar Kitchen',
      buyerAvatar: '🏨',
      crop: 'Hybrid Red Tomatoes',
      lotId: 'REQ-1082',
      farmerName: 'Ramesh Patra',
      location: 'Sakhigopal, Puri',
      qty: 250,
      pricePerKg: 28,
      farmerPayout: 7000,
      totalAmount: 7630,
      status: 'In Reefer Transit',
      reeferId: 'Mahindra Bolero Reefer (OD-02-B-1142)',
      tempCelsius: '5.2°C (Fresh)',
      timestamp: 'Today, 09:15 AM'
    },
    {
      orderId: 'ORD-8710',
      buyerName: 'KIIT University Hostel Mess',
      buyerType: 'Hostel Mega Kitchen',
      buyerLocation: 'Patia Campus',
      buyerAvatar: '🎓',
      crop: 'Fresh Potatoes & Onions',
      lotId: 'REQ-1079',
      farmerName: 'Ramesh Patra',
      location: 'Sakhigopal, Puri',
      qty: 800,
      pricePerKg: 24,
      farmerPayout: 19200,
      totalAmount: 20928,
      status: 'Escrow Locked (100%)',
      reeferId: 'Eicher Pro Reefer (OD-33-F-7788)',
      tempCelsius: '6.2°C (Optimal)',
      timestamp: 'Yesterday, 04:00 PM'
    }
  ]);

  const [selectedCrop, setSelectedCrop] = useState(commodities[0] || null);
  const [selectedPreset, setSelectedPreset] = useState(cvPresets[0] || null);
  const [isScanning, setIsScanning] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);
  const [voiceResponse, setVoiceResponse] = useState(null);
  const [voiceListening, setVoiceListening] = useState(false);
  const [userRole, setUserRole] = useState('farmer');

  useEffect(() => {
    if (lots.length === 0 && window.INITIAL_FARMGATE_LOTS) {
      setLots(window.INITIAL_FARMGATE_LOTS);
    }
    if (!selectedCrop && window.COMMODITIES && window.COMMODITIES.length > 0) {
      setSelectedCrop(window.COMMODITIES[0]);
    }
    if (!selectedPreset && window.CV_PRESETS && window.CV_PRESETS.length > 0) {
      setSelectedPreset(window.CV_PRESETS[0]);
    }
    if (currentUser) {
      setUserRole(currentUser.role);
      if (currentUser.role === 'farmer') setTab('farmer');
      else if (currentUser.role === 'buyer') setTab('buyer');
      else if (currentUser.role === 'bulk') setTab('bulk');
    }
  }, []);

  // Handle Login
  const handleLogin = (user) => {
    setCurrentUser(user);
    setUserRole(user.role);
    try {
      localStorage.setItem('kisansetu_user', JSON.stringify(user));
    } catch (e) {}

    // Strict role default routing
    if (user.role === 'farmer') {
      setTab('farmer');
    } else if (user.role === 'buyer') {
      setTab('buyer');
    } else if (user.role === 'bulk') {
      setTab('bulk');
    }

    if (window.confetti) {
      window.confetti({ 
        particleCount: 60, 
        spread: 75, 
        origin: { y: 0.6 },
        colors: ['#10b981', '#f59e0b', '#0284c7']
      });
    }
  };

  // Handle Guest Access
  const handleGuestAccess = () => {
    const guestUser = {
      role: 'buyer',
      name: 'Guest Explorer',
      subtitle: 'Open Marketplace Access',
      badge: 'Guest User',
      avatar: '🌐'
    };
    handleLogin(guestUser);
  };

  // Handle Logout / Switch Account
  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('kisansetu_user');
    } catch (e) {}
  };

  // Farmer adds new produce lot
  const handleAddLot = (newLot) => {
    setLots((prev) => [newLot, ...prev]);
    if (window.confetti) {
      window.confetti({ 
        particleCount: 70, 
        spread: 85, 
        origin: { y: 0.6 },
        colors: ['#10b981', '#f59e0b', '#0284c7']
      });
    }
    alert(
      `🎉 Congratulations Farmer Partner!\n\n` +
      `Your harvest lot (${newLot.lot} - ${newLot.crop}) is now live on the Kisan Setu National Marketplace.\n` +
      `• Total Volume: ${newLot.qty} kg\n` +
      `• Direct Price: ₹${newLot.pricePerKg}/kg\n` +
      `• Total Lot Value: ₹${(newLot.qty * newLot.pricePerKg).toLocaleString('en-IN')}\n\n` +
      `Incoming orders will appear in your "Who Is Buying Your Produce" feed!`
    );
  };

  // Buyer adds produce to cart
  const handleAddToCart = (lot, qtyToAdd) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === lot.id);
      if (existing) {
        return prev.map((item) =>
          item.id === lot.id ? { ...item, qty: item.qty + qtyToAdd } : item
        );
      }
      return [...prev, { ...lot, qty: qtyToAdd }];
    });

    if (window.confetti) {
      window.confetti({ particleCount: 30, spread: 50, origin: { y: 0.7 } });
    }
    setIsCartOpen(true);
  };

  // Cart actions
  const handleUpdateCartQty = (id, newQty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const handleRemoveCartItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = (totalAmount) => {
    if (window.confetti) {
      window.confetti({ particleCount: 80, spread: 90, origin: { y: 0.6 } });
    }

    const newOrders = cart.map((item, i) => ({
      orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerName: currentUser ? currentUser.name : 'Verified Retail Buyer',
      buyerType: currentUser ? currentUser.badge : 'Customer',
      buyerLocation: currentUser ? currentUser.location : 'Metro Hub',
      buyerAvatar: currentUser ? currentUser.avatar : '🛒',
      crop: item.crop,
      lotId: item.lot,
      farmerName: item.farmer,
      location: item.location,
      qty: item.qty,
      pricePerKg: item.pricePerKg,
      farmerPayout: item.qty * item.pricePerKg,
      totalAmount: Math.round(item.qty * item.pricePerKg * 1.09),
      status: 'Escrow Locked (100%)',
      reeferId: 'Tata 709 Reefer (OD-01)',
      tempCelsius: '4.8°C (Optimal)',
      timestamp: 'Just now'
    }));

    setOrders((prev) => [...newOrders, ...prev]);

    alert(
      `🎉 Smart Escrow Checkout Completed!\n\n` +
      `• Escrow Amount Deposited: ₹${totalAmount.toLocaleString('en-IN')}\n` +
      `• Security Guarantee: 100% Locked in Smart Escrow\n` +
      `• Logistics Dispatch: Google OR-Tools solar reefer cold van scheduled for farmgate pickup.\n` +
      `• Payout: Automated instant UPI/e-RUPI release to farmers upon cold gate quality scan.`
    );
    setCart([]);
  };

  // Instant Buy single lot
  const handleInstantBuy = (lot, qty) => {
    const total = Math.round(qty * lot.pricePerKg * 1.09);
    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
    }

    const newOrder = {
      orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      buyerName: currentUser ? currentUser.name : 'Verified Retail Buyer',
      buyerType: currentUser ? currentUser.badge : 'Customer',
      buyerLocation: currentUser ? currentUser.location : 'Metro Hub',
      buyerAvatar: currentUser ? currentUser.avatar : '🛒',
      crop: lot.crop,
      lotId: lot.lot,
      farmerName: lot.farmer,
      location: lot.location,
      qty: qty,
      pricePerKg: lot.pricePerKg,
      farmerPayout: qty * lot.pricePerKg,
      totalAmount: total,
      status: 'Escrow Locked (100%)',
      reeferId: 'Tata 709 Reefer (OD-01)',
      tempCelsius: '4.8°C (Optimal)',
      timestamp: 'Just now'
    };

    setOrders((prev) => [newOrder, ...prev]);

    alert(
      `🎉 Smart Escrow Procurement Executed!\n\n` +
      `• Lot: ${lot.lot} (${lot.crop})\n` +
      `• Producer: ${lot.farmer} (${lot.location})\n` +
      `• Purchase Volume: ${qty} kg\n` +
      `• Total Escrow Deposited: ₹${total.toLocaleString('en-IN')}\n` +
      `• Transit: Temperature-controlled Reefer Van dispatched!`
    );
  };

  // Trigger Computer Vision Farmgate Scan
  const handleTriggerScan = (preset) => {
    setSelectedPreset(preset);
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      if (window.confetti) {
        window.confetti({ 
          particleCount: 50, 
          spread: 70, 
          origin: { y: 0.65 },
          colors: ['#10b981', '#f59e0b', '#0284c7', '#16a34a']
        });
      }
    }, 1400);
  };

  // Trigger Kisan Vani Voice Speech Simulation
  const handleTriggerVoice = (sample) => {
    setVoiceListening(true);
    setTimeout(() => {
      setVoiceListening(false);
      setVoiceResponse(sample);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(sample.response);
        u.lang = sample.ttsLang || 'en-US';
        u.rate = 0.95;
        window.speechSynthesis.speak(u);
      }
    }, 900);
  };

  // IF NOT LOGGED IN, RENDER LOGIN PAGE
  if (!currentUser) {
    return window.LoginPage ? (
      <window.LoginPage 
        onLogin={handleLogin} 
        onGuestAccess={handleGuestAccess} 
      />
    ) : (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
        <div className="text-center space-y-2">
          <div className="text-4xl animate-bounce">🌾</div>
          <p className="font-bold text-sm">Loading Kisan Setu Gateway...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#f7f9f6] dark:bg-[#0b1120] text-[#1e293b] dark:text-[#f1f5f9] transition-colors duration-200">
      
      {/* 1. VERTICAL LEFT SIDEBAR */}
      {window.Sidebar && (
        <window.Sidebar
          activeTab={tab}
          onTabChange={setTab}
          userRole={userRole}
          currentUser={currentUser}
          onLogout={handleLogout}
          theme={theme}
          onToggleTheme={toggleTheme}
          cartItemCount={cart.length}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenVoice={() => setShowVoiceModal(true)}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* 2. RIGHT MAIN CONTENT AREA */}
      <div className="lg:pl-72 flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        {window.Header && (
          <window.Header 
            currentUser={currentUser}
            onLogout={handleLogout}
            userRole={userRole} 
            onOpenVoice={() => setShowVoiceModal(true)}
            cartItemCount={cart.length}
            onOpenCart={() => setIsCartOpen(true)}
            theme={theme}
            onToggleTheme={toggleTheme}
            onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          />
        )}

        {/* AI Live Rate Announcement Bar */}
        {window.RateAnnouncementBar && (
          <window.RateAnnouncementBar 
            onOpenVoice={() => setShowVoiceModal(true)}
          />
        )}

        {/* Active Section Content View */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl w-full mx-auto space-y-6">
          
          {/* ================= FARMER ROLE SECTIONS ================= */}
          {userRole === 'farmer' && (
            <>
              {tab === 'farmer' && window.FarmerPortalTab && (
                <window.FarmerPortalTab 
                  lots={lots}
                  onAddLot={handleAddLot}
                  onOpenCertificate={() => setShowCertModal(true)}
                  onOpenScanner={() => setTab('scanner')}
                  orders={orders}
                />
              )}

              {tab === 'reverse' && window.ReverseMarketplaceTab && (
                <window.ReverseMarketplaceTab 
                  currentUser={currentUser} 
                  onAcceptDemand={(d) => alert(`Supply locked for ${d.crop}!`)} 
                />
              )}

              {tab === 'pooling' && window.TransportPoolingTab && (
                <window.TransportPoolingTab currentUser={currentUser} />
              )}

              {tab === 'advisor' && window.SellNowAdvisorTab && (
                <window.SellNowAdvisorTab />
              )}

              {tab === 'waste' && window.WasteToMoneyTab && (
                <window.WasteToMoneyTab currentUser={currentUser} />
              )}

              {tab === 'equipment' && window.EquipmentSharingTab && (
                <window.EquipmentSharingTab currentUser={currentUser} />
              )}

              {tab === 'scanner' && window.ScannerTab && (
                <window.ScannerTab 
                  selectedPreset={selectedPreset}
                  setSelectedPreset={setSelectedPreset}
                  isScanning={isScanning}
                  onTriggerScan={handleTriggerScan}
                  onOpenCertificate={() => setShowCertModal(true)}
                />
              )}

              {tab === 'logistics' && window.LogisticsTab && (
                <window.LogisticsTab />
              )}

              {tab === 'market' && window.MarketplaceTab && (
                <window.MarketplaceTab 
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop}
                  onExecuteEscrow={(l) => handleInstantBuy(l, l.minOrderKg || 50)}
                  userRole={userRole}
                />
              )}
            </>
          )}

          {/* ================= RETAIL BUYER ROLE SECTIONS ================= */}
          {userRole === 'buyer' && (
            <>
              {tab === 'buyer' && window.BuyerStoreTab && (
                <window.BuyerStoreTab 
                  lots={lots}
                  onAddToCart={handleAddToCart}
                  onInstantBuy={handleInstantBuy}
                  onOpenCertificate={() => setShowCertModal(true)}
                  cartItemCount={cart.length}
                  onOpenCart={() => setIsCartOpen(true)}
                  orders={orders}
                  showOrdersOnly={false}
                />
              )}

              {tab === 'buyer-orders' && window.BuyerStoreTab && (
                <window.BuyerStoreTab 
                  lots={lots}
                  onAddToCart={handleAddToCart}
                  onInstantBuy={handleInstantBuy}
                  onOpenCertificate={() => setShowCertModal(true)}
                  cartItemCount={cart.length}
                  onOpenCart={() => setIsCartOpen(true)}
                  orders={orders}
                  showOrdersOnly={true}
                />
              )}

              {tab === 'reverse' && window.ReverseMarketplaceTab && (
                <window.ReverseMarketplaceTab 
                  currentUser={currentUser} 
                  onAcceptDemand={(d) => alert(`Supply locked for ${d.crop}!`)} 
                />
              )}

              {tab === 'market' && window.MarketplaceTab && (
                <window.MarketplaceTab 
                  selectedCrop={selectedCrop}
                  setSelectedCrop={setSelectedCrop}
                  onExecuteEscrow={(l) => handleInstantBuy(l, l.minOrderKg || 50)}
                  userRole={userRole}
                />
              )}
            </>
          )}

          {/* ================= BULK B2B DESK ROLE SECTIONS ================= */}
          {userRole === 'bulk' && (
            <>
              {tab === 'bulk' && window.BulkBuyerTab && (
                <window.BulkBuyerTab 
                  lots={lots}
                  onExecuteBulkContract={(c) => alert(`Bulk contract locked for ${c.crop}!`)}
                />
              )}

              {tab === 'reverse' && window.ReverseMarketplaceTab && (
                <window.ReverseMarketplaceTab 
                  currentUser={currentUser} 
                  onAcceptDemand={(d) => alert(`Supply locked for ${d.crop}!`)} 
                />
              )}

              {tab === 'forecast' && window.ForecastTab && (
                <window.ForecastTab />
              )}

              {tab === 'waste' && window.WasteToMoneyTab && (
                <window.WasteToMoneyTab currentUser={currentUser} />
              )}

              {tab === 'pooling' && window.TransportPoolingTab && (
                <window.TransportPoolingTab currentUser={currentUser} />
              )}

              {tab === 'logistics' && window.LogisticsTab && (
                <window.LogisticsTab />
              )}

              {tab === 'macro' && window.MacroTab && (
                <window.MacroTab />
              )}
            </>
          )}

        </main>

        {/* Footer Division */}
        {window.Footer && <window.Footer />}

      </div>

      {/* Slide-over Cart Drawer (Only for Buyers) */}
      {(userRole === 'buyer' || userRole === 'bulk') && window.CartDrawer && (
        <window.CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateQty={handleUpdateCartQty}
          onRemoveItem={handleRemoveCartItem}
          onCheckout={handleCheckout}
        />
      )}

      {/* Modals */}
      {window.VoiceModal && (
        <window.VoiceModal 
          isOpen={showVoiceModal}
          onClose={() => setShowVoiceModal(false)}
          voiceListening={voiceListening}
          voiceResponse={voiceResponse}
          onTriggerVoice={handleTriggerVoice}
        />
      )}

      {window.CertificateModal && (
        <window.CertificateModal 
          isOpen={showCertModal}
          onClose={() => setShowCertModal(false)}
          preset={selectedPreset}
        />
      )}

    </div>
  );
}

window.App = App;
