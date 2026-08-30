# 🌾 Kisan Setu (KisanConnect) • Sovereign AI Agritech & E-Commerce Platform (v2.4)

Kisan Setu is a full-featured, AI-disintermediated agritech and e-commerce ecosystem that connects farmers, retail buyers, and institutional bulk purchasers directly—eliminating APMC mandi cartel margins and returning 72%–88% of the consumer rupee back to smallholders.

---

## 🌟 Key Ecosystem Divisions & Features

1. **🌾 Farmer Portal (`FarmerPortalTab.jsx`)**:
   - Add and customize harvest produce lots (crop name, variety, quantity in kg, price per kg, harvest date, cooling condition, photos, quality parameters).
   - Real-time AI valuation engine and net profit comparison vs APMC mandi benchmarks (+30% to +80% gain).
   - Live lot inventory dashboard with smart escrow tracking.

2. **🛒 Buyer E-Commerce Storefront (`BuyerStoreTab.jsx`)**:
   - Modern online store with search, category filtering (Fruits, Vegetables, Pulses), and price/volume sorting.
   - Farmgate-verified produce cards with Brix sugar maturity, surface defect %, and direct farmer attribution.
   - Wholesale volume discount tiers (>500kg).
   - Instant Buy & Add to Cart capabilities.

3. **🏢 Institutional Bulk B2B Desk (`BulkBuyerTab.jsx`)**:
   - Multi-ton procurement orders for supermarket chains (BigBasket, Reliance Fresh, ITC Foods, processors).
   - Forward Request for Quote (RFQ) generator with 100% smart escrow backing.

4. **📢 AI Live Rate Announcement (`RateAnnouncementBar.jsx`)**:
   - Live price ticker broadcasting real-time Setu vs Mandi commodity rates.
   - Built-in multilingual voice synthesizer (English, Hindi, Odia) powered by Web Speech API.

5. **🛒 Smart Escrow Cart Drawer (`CartDrawer.jsx`)**:
   - Slide-over cart with quantity stepper, transparent logistics fee (7%), escrow security (2%), and one-click checkout.

6. **🔬 AI Farmgate Quality Assaying (`ScannerTab.jsx`)**:
   - Simulated MobileNet-AgriV4 edge CNN camera feed with laser scanning animation.
   - Real-time Brix sugar content, ethylene ripeness, and surface defect detection.
   - Verifiable cryptographic ISO Assaying Certificate generator (`CertificateModal.jsx`).

7. **🚚 OR-Tools Cold Fleet Routing (`LogisticsTab.jsx`)**:
   - Google OR-Tools Capacitated Vehicle Routing with Time Windows (CVRPTW) cold-chain fleet management.
   - Temperature telemetry, solar battery tracking, and morning harvest window schedules.

8. **📈 Forward Contracts & Demand Forecasting (`ForecastTab.jsx`)**:
   - Pre-harvest institutional forward contracts with locked procurement prices.

9. **📊 Macroeconomic Research (`MacroTab.jsx`)**:
   - Empirical synthesis from RBI, NABARD, ICAR, and Odisha RMCs.

---

## 📂 Modular Architecture

```
kisan-setu/
├── index.html                   # Main entry point with Tailwind CDN & Babel standalone pipeline
├── server.py                    # Lightweight Python HTTP development server
├── push_to_github.bat           # 1-Click Windows batch script to sync and push changes to GitHub
├── sync_git.ps1                 # Automated PowerShell Git sync script
├── start_server.bat             # 1-Click local server launcher
├── css/
│   └── style.css                # Custom fonts, animations (laser scan, voice wave), scrollbars
└── src/
    ├── App.jsx                  # Main root state orchestrator (tabs, cart, escrow, modals, roles)
    ├── main.jsx                 # React DOM mount entry
    │
    ├── components/              # Modular UI Component Divisions
    │   ├── Header.jsx           # Top telemetry bar, persona selector & voice button
    │   ├── Navbar.jsx           # Tab navigation across all 8 ecosystem divisions
    │   ├── RateAnnouncementBar.jsx # AI live rate broadcast ticker with audio player
    │   ├── FarmerPortalTab.jsx  # Farmer Portal: Add produce lots & valuation calculator
    │   ├── BuyerStoreTab.jsx    # Buyer Storefront: E-commerce marketplace & filters
    │   ├── BulkBuyerTab.jsx     # Bulk B2B Desk: Multi-ton contracts & RFQ generator
    │   ├── CartDrawer.jsx       # Slide-over shopping cart & smart escrow checkout
    │   ├── MarketplaceTab.jsx   # RBI 16-commodity value wedge margin analysis
    │   ├── ScannerTab.jsx       # Edge MobileNet CNN spectral assaying & camera simulator
    │   ├── LogisticsTab.jsx     # Google OR-Tools CVRPTW cold fleet routing & corridor map
    │   ├── ForecastTab.jsx      # Pre-harvest institutional forward contracts
    │   ├── MacroTab.jsx         # Macroeconomic research & supply chain comparison
    │   ├── VoiceModal.jsx       # Kisan Vani AI multilingual voice assistant
    │   ├── CertificateModal.jsx # Cryptographic ISO quality assaying certificate
    │   └── Footer.jsx           # Telemetry status & platform footer
    │
    └── data/                    # Dedicated Data Modules
        ├── commodities.js       # RBI 16-commodity dataset & value wedge breakdown
        ├── cvPresets.js         # Spectral assaying presets, Brix sugar, defect % & grades
        ├── farmgateLots.js      # Live produce lots for e-commerce inventory
        ├── fleet.js             # Cold reefer van telemetry, solar battery & waypoints
        ├── forwardContracts.js  # Institutional contracts (BigBasket, ITC, Reliance, Tata)
        ├── macroStats.js        # NABARD/RBI macro indicators & supply chain comparison
        ├── rateAnnouncements.js # AI rate broadcast scripts & spoken audio texts
        └── voiceSamples.js      # Multilingual Indic dialogue samples (English, Hindi, Odia)
```

---

## 🚀 Running Locally

### Option 1: Start Server via Python
```powershell
python server.py
```
Open **[http://localhost:5173](http://localhost:5173)** in your web browser.

### Option 2: 1-Click Launch (Windows)
Double-click **`start_server.bat`** in the project folder.

---

## 🔄 Syncing Changes to GitHub
Double-click **`push_to_github.bat`** or run:
```powershell
powershell -ExecutionPolicy Bypass -File sync_git.ps1
```
