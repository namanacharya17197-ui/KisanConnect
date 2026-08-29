# 🌾 Kisan Setu • Sovereign AI Agricultural Ecosystem (v2.4)

Kisan Setu is an AI-disintermediated agritech platform that shifts value capture from mandi cartel intermediaries back to primary farmers (72%–88% share of consumer rupee).

---

## 📂 Architecture & Modular Divisions

The monolithic application has been decomposed into modular divisions, components, datasets, and styles:

```
kisan-setu/
├── index.html                  # Main web entry point with Tailwind CDN & Babel standalone
├── server.py                   # Lightweight Python dev server with CORS & cache control
├── css/
│   └── style.css               # Typography, animations (laser scanner, voice waves), scrollbars
└── src/
    ├── App.jsx                 # Central state orchestrator (routing, modals, roles, escrow)
    ├── main.jsx                # React DOM mount entry
    │
    ├── components/             # Modular UI Divisions
    │   ├── Header.jsx          # Sovereign telemetry strip, persona selector & voice trigger
    │   ├── Navbar.jsx          # Tab navigation across all 5 ecosystem divisions
    │   ├── MarketplaceTab.jsx  # Division 1: RBI Value Wedge comparison & live lot procurement
    │   ├── ScannerTab.jsx      # Division 2: Edge MobileNet-AgriV4 CNN spectral assaying & camera feed
    │   ├── LogisticsTab.jsx    # Division 3: Google OR-Tools CVRPTW fleet routing & cold corridor map
    │   ├── ForecastTab.jsx     # Division 4: Pre-harvest forward contracts & institutional escrow
    │   ├── MacroTab.jsx        # Division 5: Empirical macro research & supply chain comparison
    │   ├── VoiceModal.jsx      # Kisan Vani AI multilingual Indic speech synthesizer (Web Speech API)
    │   ├── CertificateModal.jsx# Cryptographic ISO farmgate assaying certificate with QR seal
    │   └── Footer.jsx          # System telemetry & platform credits
    │
    └── data/                   # Dedicated Data Modules
        ├── commodities.js      # RBI 16-commodity value wedge & margin breakdown
        ├── cvPresets.js        # Crop assaying presets, Brix sugar, defect % & spectral analysis
        ├── farmgateLots.js     # Live farmgate produce lots ready for instant escrow execution
        ├── fleet.js            # Reefer cold van telemetry, solar battery & CVRPTW waypoints
        ├── forwardContracts.js # Institutional contracts (ITC, BigBasket, Reliance, Tata)
        ├── macroStats.js       # Macro stats from RBI, NABARD, ICAR & supply chain matrix
        └── voiceSamples.js     # Indic voice dialogue samples (Odia, Hindi, Bengali, English)
```

---

## 🚀 Running the Application

### Option 1: Using the Python Server (Active)
The server is currently running at:
👉 **[http://localhost:5173](http://localhost:5173)**

To start or restart manually:
```bash
cd C:\Users\This_PC\.gemini\antigravity\scratch\kisan-setu
python server.py
```

### Option 2: Direct Browser Launch
Open `index.html` in any modern web browser.
