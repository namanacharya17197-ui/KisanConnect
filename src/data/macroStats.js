// Empirical Macroeconomic Research & Policy Statistics (RBI, NABARD, ICAR)
const MACRO_STATS = [
  {
    label: "Agri Workforce",
    value: "54.6%",
    subtext: "Generates only ~17% GVA (Severe productivity gap)",
    color: "slate",
    source: "NITI Aayog / MoSPI 2025-26"
  },
  {
    label: "Smallholders (<2 ha)",
    value: "> 86.2%",
    subtext: "Fragmented land holdings lacking cartel bargaining power",
    color: "amber",
    source: "Agriculture Census of India"
  },
  {
    label: "NABARD Spoilage Loss",
    value: "20% – 30%",
    subtext: "Post-harvest rot caused by broken cold chains",
    color: "rose",
    source: "NABARD / CIPHET Empirical Study"
  },
  {
    label: "DAVR Disintermediation",
    value: "+38.4%",
    subtext: "Direct net income lift across 12,000+ pilot farmgates",
    color: "emerald",
    source: "Kisan Setu Field Trial Ledger"
  }
];

const SUPPLY_CHAIN_COMPARISONS = [
  {
    stage: "Intermediaries",
    traditionalMandi: "4 to 6 tiers (Brokers, Commission Agents, Wholesalers, Sub-dealers)",
    kisanSetu: "Zero Middlemen (Direct FPO-to-Buyer Protocol)"
  },
  {
    stage: "Quality Assessment",
    traditionalMandi: "Subjective Visual Guesstimate (Trader biased deductions)",
    kisanSetu: "MobileNet-AgriV4 CNN Farmgate Assaying + Brix Spectrometry"
  },
  {
    stage: "Logistics & Spoilage",
    traditionalMandi: "Open-bed Tata 407 trucks (15-25% heat rotting & bruising)",
    kisanSetu: "OR-Tools Optimized Reefer Cold Fleet ( < 2.5% loss)"
  },
  {
    stage: "Payment Settlement",
    traditionalMandi: "15 - 45 days credit delay with informal interest deduction",
    kisanSetu: "Instant Smart Escrow Payout upon cold gate scan"
  },
  {
    stage: "Price Discovery",
    traditionalMandi: "Opaque physical cartel bidding at APMC gates",
    kisanSetu: "Transparent AI Forward Price Discovery based on National Index"
  }
];

window.MACRO_STATS = MACRO_STATS;
window.SUPPLY_CHAIN_COMPARISONS = SUPPLY_CHAIN_COMPARISONS;
