function App() {
  const { useState, useEffect } = React;

  const initialLots = window.INITIAL_FARMGATE_LOTS || [];
  const commodities = window.COMMODITIES || [];
  const cvPresets = window.CV_PRESETS || [];

  const [tab, setTab] = useState('farmer'); // Default to Farmer Portal for easy adding, or buyer
  const [lots, setLots] = useState(initialLots);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
  }, []);

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
      `🎉 बधाई हो किसान भाई!\n\n` +
      `आपका फसल लॉट (${newLot.lot} - ${newLot.crop}) सफलतापूर्वक किसान सेतु लाइव मार्केट में जुड़ गया है।\n` +
      `• कुल मात्रा: ${newLot.qty} kg\n` +
      `• आपका तय मूल्य: ₹${newLot.pricePerKg}/kg\n` +
      `• कुल लॉट मूल्य: ₹${(newLot.qty * newLot.pricePerKg).toLocaleString('en-IN')}\n\n` +
      `अब खरीदार (Buyers & Bulk Buyers) सीधे आपकी फसल खरीद सकेंगे!`
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
    alert(
      `🎉 स्मार्ट एस्क्रो चेकआउट सफल!\n\n` +
      `• कुल जमा राशि: ₹${totalAmount.toLocaleString('en-IN')}\n` +
      `• सुरक्षा: 100% Smart Escrow Locked\n` +
      `• लॉजिस्टिक्स: Google OR-Tools द्वारा रीफर कोल्ड वैन आपके खेत के लिए शेड्यूल हो गई है।\n` +
      `• किसान को भुगतान डिलीवरी और तापमान सत्यापन के तुरंत बाद UPI/e-RUPI से मिल जाएगा।`
    );
    setCart([]);
  };

  // Instant Buy single lot
  const handleInstantBuy = (lot, qty) => {
    const total = Math.round(qty * lot.pricePerKg * 1.09);
    if (window.confetti) {
      window.confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });
    }
    alert(
      `🎉 स्मार्ट एस्क्रो खरीद सफल!\n\n` +
      `• लॉट: ${lot.lot} (${lot.crop})\n` +
      `• किसान: ${lot.farmer} (${lot.location})\n` +
      `• क्रय मात्रा: ${qty} kg\n` +
      `• कुल एस्क्रो डिपॉजिट: ₹${total.toLocaleString('en-IN')}\n` +
      `• डिलीवरी: रीफर कोल्ड वैन फार्मगेट से डिस्पैच!`
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
        u.lang = sample.ttsLang || 'hi-IN';
        u.rate = 0.95;
        window.speechSynthesis.speak(u);
      }
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f6] text-[#1e293b]">
      {/* Top Header Division */}
      {window.Header && (
        <window.Header 
          userRole={userRole} 
          setUserRole={setUserRole} 
          onOpenVoice={() => setShowVoiceModal(true)}
          onTabChange={setTab}
          cartItemCount={cart.length}
          onOpenCart={() => setIsCartOpen(true)}
        />
      )}

      {/* AI Live Rate Announcement Bar */}
      {window.RateAnnouncementBar && (
        <window.RateAnnouncementBar 
          onOpenVoice={() => setShowVoiceModal(true)}
        />
      )}

      {/* Navigation Tabs Division */}
      {window.Navbar && (
        <window.Navbar 
          activeTab={tab} 
          onTabChange={setTab} 
        />
      )}

      {/* Active Division View */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-6 sm:py-8 w-full">
        {/* Section 1: Farmer Portal (Sell / किसान पोर्टल) */}
        {tab === 'farmer' && window.FarmerPortalTab && (
          <window.FarmerPortalTab 
            lots={lots}
            onAddLot={handleAddLot}
            onOpenCertificate={() => setShowCertModal(true)}
            onOpenScanner={() => setTab('scanner')}
          />
        )}

        {/* Section 2: Buyer E-Commerce Store (Buy / खरीदार स्टोर) */}
        {tab === 'buyer' && window.BuyerStoreTab && (
          <window.BuyerStoreTab 
            lots={lots}
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
            onOpenCertificate={() => setShowCertModal(true)}
            cartItemCount={cart.length}
            onOpenCart={() => setIsCartOpen(true)}
          />
        )}

        {/* Section 3: Bulk Institutional Buyer B2B Desk */}
        {tab === 'bulk' && window.BulkBuyerTab && (
          <window.BulkBuyerTab 
            lots={lots}
            onExecuteBulkContract={(c) => alert(`Bulk contract locked for ${c.crop}!`)}
          />
        )}

        {/* Section 4: Fair Marketplace & RBI Value Wedge */}
        {tab === 'market' && window.MarketplaceTab && (
          <window.MarketplaceTab 
            selectedCrop={selectedCrop}
            setSelectedCrop={setSelectedCrop}
            onExecuteEscrow={(l) => handleInstantBuy(l, l.minOrderKg || 50)}
            userRole={userRole}
          />
        )}

        {/* Section 5: AI Quality Assaying */}
        {tab === 'scanner' && window.ScannerTab && (
          <window.ScannerTab 
            selectedPreset={selectedPreset}
            setSelectedPreset={setSelectedPreset}
            isScanning={isScanning}
            onTriggerScan={handleTriggerScan}
            onOpenCertificate={() => setShowCertModal(true)}
          />
        )}

        {/* Section 6: Cold Fleet Routing */}
        {tab === 'logistics' && window.LogisticsTab && (
          <window.LogisticsTab />
        )}

        {/* Section 7: Forward Contracts */}
        {tab === 'forecast' && window.ForecastTab && (
          <window.ForecastTab />
        )}

        {/* Section 8: Macro Research */}
        {tab === 'macro' && window.MacroTab && (
          <window.MacroTab />
        )}
      </main>

      {/* Slide-over Cart Drawer */}
      {window.CartDrawer && (
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

      {/* Footer Division */}
      {window.Footer && <window.Footer />}
    </div>
  );
}

window.App = App;
