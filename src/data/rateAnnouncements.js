// AI Live Mandi vs Kisan Setu Rate Announcements & Broadcast Feeds
const RATE_ANNOUNCEMENTS = [
  {
    id: "mango_sakhigopal",
    crop: "Alphonso / Amrapali Mango",
    market: "Sakhigopal & Pipili Cluster",
    setuRate: 88,
    mandiRate: 52,
    gainPct: "+69.2%",
    trend: "Bullish",
    unit: "kg",
    timestamp: "Live: 5 mins ago",
    audioEnglish: "Kisan Setu Live Rate Broadcast: Amrapali Mango at Sakhigopal is ₹88 per kg on Setu versus ₹52 per kg in traditional Mandi. Farmers capture +69.2% higher earnings direct to farmgate.",
    audioHindi: "किसान सेतु लाइव मंडी भाव: साखीगोपाल में आम्रपाली आम का सेतू मूल्य अट्ठासी रुपये प्रति किलो है, जबकि पारंपरिक मंडी में केवल बावन रुपये मिल रहा है। किसान भाइयों को छत्तीस रुपये प्रति किलो का सीधा अधिक लाभ मिल रहा है!",
    audioOdia: "କୃଷକ ସେତୁ ଲାଇଭ୍ ଦର ଘୋଷଣା: ସାକ୍ଷୀଗୋପାଳରେ ଆମ୍ବର ସେତୁ ମୂଲ୍ୟ ₹୮୮/କେଜି ଥିବାବେଳେ ମଣ୍ଡିରେ ₹୫୨ ମିଳୁଛି। ଚାଷୀ ଭାଇଙ୍କୁ କିଲୋ ପ୍ରତି ₹୩୬ ଅଧିକ ଲାଭ!"
  },
  {
    id: "banana_pipili",
    crop: "Robusta Banana (Grand Naine)",
    market: "Pipili FPO & Jatni",
    setuRate: 33,
    mandiRate: 16,
    gainPct: "+106.3%",
    trend: "High Demand",
    unit: "kg",
    timestamp: "Live: 12 mins ago",
    audioEnglish: "Banana Market Update: Grade A Robusta Bananas trading at ₹33 per kg on Kisan Setu compared to ₹16 per kg mandi offer. Direct +106% premium for smallholders.",
    audioHindi: "केला भाव अपडेट: पिपिली क्लस्टर में ग्रेड ए रोबस्टा केला सेतू पर तैंतीस रुपये प्रति किलो बिक रहा है, जबकि मंडी में केवल सोलह रुपये का भाव है।",
    audioOdia: "କଦଳୀ ଲାଇଭ୍ ରେଟ୍: ପିପିଲିରେ ଗ୍ରେଡ୍ ଏ ରୋବଷ୍ଟା କଦଳୀ ₹୩୩/କେଜିରେ ବିକ୍ରି ହେଉଛି।"
  },
  {
    id: "tomato_khordha",
    crop: "Hybrid Fresh Tomatoes",
    market: "Khordha Krishi Kendra",
    setuRate: 26,
    mandiRate: 12,
    gainPct: "+116.7%",
    trend: "Surge",
    unit: "kg",
    timestamp: "Live: 18 mins ago",
    audioEnglish: "Tomato Price Alert: Farmgate certified tomatoes clearing at ₹26 per kg on Setu vs ₹12 per kg distress mandi prices.",
    audioHindi: "टमाटर लाइव रेट: खोर्धा क्षेत्र में हाइब्रिड टमाटर सेतू पर छब्बीस रुपये प्रति किलो है, जबकि स्थानीय मंडी में केवल बारह रुपये दिया जा रहा है।",
    audioOdia: "ଟମାଟୋ ଦର ସୂଚନା: ଖୋର୍ଦ୍ଧାରେ ଟମାଟୋ ସେତୁରେ ₹୨୬/କେଜି।"
  },
  {
    id: "chana_jatni",
    crop: "Desi Chana (Pulse)",
    market: "Khordha Sangh Buffer",
    setuRate: 76,
    mandiRate: 62,
    gainPct: "+22.5%",
    trend: "Steady",
    unit: "kg",
    timestamp: "Live: 25 mins ago",
    audioEnglish: "Desi Chana Pulse: Trading at ₹76 per kg on Kisan Setu with zero credit delay and smart escrow protection.",
    audioHindi: "देसी चना भाव: खोर्धा फार्मगेट पर देसी चना छिहत्तर रुपये प्रति किलो पर सुरक्षित एस्क्रो में खरीदा जा रहा है।",
    audioOdia: "ଦେଶୀ ଚଣା ଦର: ଖୋର୍ଦ୍ଧାରେ ଚଣା ₹୭୬/କେଜିରେ ସ୍ମାର୍ଟ ଏସ୍କ୍ରୋ ଜରିଆରେ କ୍ରୟ ଚାଲିଛି।"
  }
];

window.RATE_ANNOUNCEMENTS = RATE_ANNOUNCEMENTS;
