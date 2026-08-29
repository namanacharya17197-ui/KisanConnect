// Institutional Pre-Harvest Forward Contracts & Escrow Backing
const FORWARD_CONTRACTS = [
  {
    id: "FWD-091",
    crop: "Amrapali Mangoes (Grade A+)",
    buyer: "BigBasket & ITC Foods",
    buyerLogo: "🏬",
    fpo: "Sakhigopal Farmers Producer Co.",
    district: "Puri, Odisha",
    vol: "25 Tonnes",
    price: "₹86 / kg",
    mandiBenchmark: "₹52 / kg",
    escrow: "₹21.5 Lakhs (Locked in Smart Escrow)",
    deliveryWindow: "15 May - 30 May 2026",
    status: "100% Escrowed",
    qualitySpecs: "Brix > 16°, Zero anthracnose spots, Size > 220g",
    progressPct: 68
  },
  {
    id: "FWD-114",
    crop: "Desi Chana (High Protein Pulse)",
    buyer: "Tata Sampann & Patanjali",
    buyerLogo: "🏭",
    fpo: "Khordha Krushak Sangh",
    district: "Khordha, Odisha",
    vol: "40 Tonnes",
    price: "₹76 / kg",
    mandiBenchmark: "₹62 / kg",
    escrow: "₹30.4 Lakhs (Locked in Smart Escrow)",
    deliveryWindow: "01 Jun - 15 Jun 2026",
    status: "100% Escrowed",
    qualitySpecs: "Moisture < 10%, Foreign matter < 0.5%",
    progressPct: 82
  },
  {
    id: "FWD-138",
    crop: "Grand Naine Bananas (Export Grade)",
    buyer: "Reliance Fresh & Metro Cash & Carry",
    buyerLogo: "🛒",
    fpo: "Pipili Krishi Vikas Producer Co.",
    district: "Pipili, Odisha",
    vol: "50 Tonnes",
    price: "₹32 / kg",
    mandiBenchmark: "₹16 / kg",
    escrow: "₹16.0 Lakhs (Locked in Smart Escrow)",
    deliveryWindow: "10 Jun - 25 Jun 2026",
    status: "Active Assaying",
    qualitySpecs: "Stage 2 Green, Caliber 39-47mm, Length > 18cm",
    progressPct: 45
  },
  {
    id: "FWD-152",
    crop: "Processing Grade Tomatoes",
    buyer: "Kissan & Cremica Agro",
    buyerLogo: "🍅",
    fpo: "Jatni Organic Vegetable Cluster",
    district: "Khordha, Odisha",
    vol: "35 Tonnes",
    price: "₹22 / kg",
    mandiBenchmark: "₹11 / kg",
    escrow: "₹7.7 Lakhs (Locked in Smart Escrow)",
    deliveryWindow: "01 Jul - 20 Jul 2026",
    status: "100% Escrowed",
    qualitySpecs: "Brix > 4.8°, Min 90% full red color, pH 4.2-4.5",
    progressPct: 30
  }
];

window.FORWARD_CONTRACTS = FORWARD_CONTRACTS;
