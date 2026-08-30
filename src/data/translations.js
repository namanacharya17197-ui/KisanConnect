// Complete Multilingual Localization Dictionary for Kisan Setu (English, Hindi, Odia)
const TRANSLATIONS = {
  en: {
    brandName: "Kisan Setu",
    brandSubtitle: "Sovereign Agritech Rails",
    tagline: "Sovereign AI-Disintermediated Agritech & E-Commerce",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    signOut: "Sign Out",
    cart: "Cart",
    voiceAssistant: "Kisan Vani AI",
    
    // Sidebar Section Titles
    producerHub: "PRODUCER REVENUE",
    logisticsHub: "LOGISTICS & MACHINERY",
    buyerHub: "BUYER STORE",
    b2bHub: "B2B INSTITUTIONAL",
    
    // Tabs
    tabFarmer: "Farmer Dashboard",
    tabFarmerDesc: "Listings & Live Buyers",
    tabReverse: "Reverse Orders (HoReCa)",
    tabReverseDesc: "Hotels & Mess Demands",
    tabAdvisor: "Sell Now AI & Profit",
    tabAdvisorDesc: "Net In-Hand Calculator",
    tabWaste: "Waste to Money",
    tabWasteDesc: "Sell B-Grade / Puree",
    tabPooling: "Shared Transport",
    tabPoolingDesc: "Group Nearby Trucks",
    tabEquipment: "Nearby Equipment",
    tabEquipmentDesc: "Tractors & Machinery",
    tabScanner: "AI Quality Assaying",
    tabScannerDesc: "Brix & Defect Scan",
    tabMarket: "Mandi Price Index",
    tabMarketDesc: "Value Wedge Margins",
    
    tabBuyer: "Produce Storefront",
    tabBuyerDesc: "Browse Fresh Lots",
    tabBuyerOrders: "My Orders & Escrow",
    tabBuyerOrdersDesc: "Cold Transit Tracking",
    tabBulk: "Bulk B2B Desk",
    tabBulkDesc: "Multi-Ton RFQ Contracts",
    tabForecast: "Forward Contracts",
    tabForecastDesc: "Pre-Harvest Locks",
    tabMacro: "Macro Research",
    tabMacroDesc: "RBI & NABARD Data",
    
    // Farmer Portal
    farmerPortalTitle: "Direct Farmgate Produce Management & Live Buyers",
    farmerPortalSubtitle: "List your harvest lots, track who is buying your crops, and get instant smart escrow payouts.",
    addLotBtn: "List New Harvest Lot",
    myLotsBtn: "My Active Lots",
    incomingOrdersBtn: "Incoming Buyer Orders",
    liveBuyerAlert: "Live Incoming Purchase Alert",
    newOrderPopupTitle: "🎉 New Buyer Purchased Your Produce!",
    whoIsBuyingTitle: "Who Is Buying Your Produce (Live Escrow Orders)",
    
    // Equipment
    equipmentTitle: "Nearby Farm Machinery & Equipment Sharing",
    equipmentSubtitle: "Rent tractors, harvesters, and solar pumps from nearby farmers within your village cluster.",
    distanceFilterLabel: "Filter by Distance:",
    allNearby: "All Nearby (< 15 km)",
    within3km: "Within 3 km (Nearest)",
    within5km: "Within 5 km",
    within10km: "Within 10 km",
    rentBtn: "Rent This Equipment",
    
    // Buyer
    buyerStoreTitle: "Procure Fresh Farmgate Produce Directly From Farmers",
    searchPlaceholder: "Search vegetables, fruits, pulses, or district...",
    allCommodities: "All Commodities",
    vegetables: "Vegetables",
    fruits: "Fruits",
    pulses: "Pulses & Grains",
    addToCart: "Add to Cart",
    instantBuy: "Instant Buy"
  },
  
  hi: {
    brandName: "किसान सेतु",
    brandSubtitle: "आत्मनिर्भर कृषि तकनीक",
    tagline: "बिचौलिया-मुक्त AI कृषि एवं ई-कॉमर्स इकोसिस्टम",
    lightMode: "लाइट मोड",
    darkMode: "डार्क मोड",
    signOut: "लॉग आउट",
    cart: "कार्ट",
    voiceAssistant: "किसान वाणी AI",
    
    // Sidebar Section Titles
    producerHub: "किसान आय व बिक्री",
    logisticsHub: "परिवहन एवं कृषि यंत्र",
    buyerHub: "खरीदार स्टोर",
    b2bHub: "थोक B2B संस्थान",
    
    // Tabs
    tabFarmer: "किसान डैशबोर्ड",
    tabFarmerDesc: "फसल लिस्टिंग व लाइव खरीदार",
    tabReverse: "मांग पहले (होटल/हॉस्टल)",
    tabReverseDesc: "होटल व मेस की मांग",
    tabAdvisor: "कब बेचें AI व मुनाफा",
    tabAdvisorDesc: "शुद्ध मुनाफा कैलकुलेटर",
    tabWaste: "कचरे से कमाई",
    tabWasteDesc: "B-ग्रेड फसल व प्यूरी बेचें",
    tabPooling: "साझा ट्रक परिवहन",
    tabPoolingDesc: "पास के किसानों का साझा ट्रक",
    tabEquipment: "पास के कृषि यंत्र",
    tabEquipmentDesc: "ट्रैक्टर व कंबाइन किराया",
    tabScanner: "AI गुणवत्ता जांच",
    tabScannerDesc: "ब्रिक्स व खराबी स्कैन",
    tabMarket: "मंडी भाव तुलना",
    tabMarketDesc: "मंडी vs सेतु मुनाफा",
    
    tabBuyer: "सब्जी व फल स्टोर",
    tabBuyerDesc: "ताज़ी फसलें खरीदें",
    tabBuyerOrders: "मेरे ऑर्डर्स व एस्क्रो",
    tabBuyerOrdersDesc: "कोल्ड वैन ट्रैकिंग",
    tabBulk: "थोक B2B डेस्क",
    tabBulkDesc: "मल्टी-टन फॉरवर्ड कॉन्ट्रैक्ट",
    tabForecast: "फॉरवर्ड एस्क्रो लॉक",
    tabForecastDesc: "कटाई से पहले दाम तय",
    tabMacro: "कृषि रिसर्च डेटा",
    tabMacroDesc: "RBI व नाबार्ड आंकड़े",
    
    // Farmer Portal
    farmerPortalTitle: "फार्मगेट फसल प्रबंधन एवं लाइव खरीदार",
    farmerPortalSubtitle: "अपनी फसल लिस्ट करें, देखें कौन खरीद रहा है, और सुरक्षित स्मार्ट एस्क्रो से तुरंत भुगतान पाएं।",
    addLotBtn: "नई फसल लॉट जोड़ें",
    myLotsBtn: "मेरी सक्रिय फसलें",
    incomingOrdersBtn: "आए हुए खरीदार ऑर्डर्स",
    liveBuyerAlert: "लाइव खरीदार खरीदारी अलर्ट",
    newOrderPopupTitle: "🎉 नए खरीदार ने आपकी फसल खरीदी!",
    whoIsBuyingTitle: "आपकी फसल कौन खरीद रहा है (लाइव एस्क्रो ऑर्डर्स)",
    
    // Equipment
    equipmentTitle: "पास के किसानों से कृषि यंत्र साझा करें",
    equipmentSubtitle: "अपने गांव या पास के किसानों से ट्रैक्टर, हार्वेस्टर व सोलर पंप किराए पर लें।",
    distanceFilterLabel: "दूरी अनुसार फ़िल्टर:",
    allNearby: "सभी पास के (< 15 किमी)",
    within3km: "3 किमी के अंदर (सबसे पास)",
    within5km: "5 किमी के अंदर",
    within10km: "10 किमी के अंदर",
    rentBtn: "यह यंत्र किराए पर लें",
    
    // Buyer
    buyerStoreTitle: "किसानों से सीधे ताज़ी फसलें व सब्जियां खरीदें",
    searchPlaceholder: "सब्जी, फल, दाल या जिला खोजें...",
    allCommodities: "सभी फसलें",
    vegetables: "सब्जियां",
    fruits: "फल",
    pulses: "दालें व अनाज",
    addToCart: "कार्ट में जोड़ें",
    instantBuy: "तुरंत खरीदें"
  },
  
  or: {
    brandName: "କୃଷକ ସେତୁ",
    brandSubtitle: "ସ୍ୱାଧୀନ କୃଷି ପ୍ରଯୁକ୍ତି",
    tagline: "ଦଲାଲ-ମୁକ୍ତ AI କୃଷି ଏବଂ ଇ-କମର୍ସ ଇକୋସିଷ୍ଟମ",
    lightMode: "ଲାଇଟ୍ ମୋଡ୍",
    darkMode: "ଡାର୍କ ମୋଡ୍",
    signOut: "ଲଗ୍ ଆଉଟ୍",
    cart: "କାର୍ଟ",
    voiceAssistant: "କୃଷକ ବାଣୀ AI",
    
    // Sidebar Section Titles
    producerHub: "ଚାଷୀ ଆୟ ଓ ବିକ୍ରୟ",
    logisticsHub: "ପରିବହନ ଓ କୃଷି ଯନ୍ତ୍ରପାତି",
    buyerHub: "କ୍ରେତା ଷ୍ଟୋର",
    b2bHub: "ହୋଲସେଲ B2B",
    
    // Tabs
    tabFarmer: "ଚାଷୀ ଡ୍ୟାସବୋର୍ଡ",
    tabFarmerDesc: "ଫସଲ ତାଲିକା ଓ ଲାଇଭ୍ କ୍ରେତା",
    tabReverse: "ହୋଟେଲ/ମେସ୍ ଚାହିଦା",
    tabReverseDesc: "ପ୍ରତ୍ୟକ୍ଷ ଅର୍ଡର",
    tabAdvisor: "କେବେ ବିକିବେ AI",
    tabAdvisorDesc: "ନିଟ୍ ଲାଭ କାଲକୁଲେଟର",
    tabWaste: "ଅବଶିଷ୍ଟରୁ ରୋଜଗାର",
    tabWasteDesc: "B-ଗ୍ରେଡ୍ ଫସଲ ବିକ୍ରୟ",
    tabPooling: "ମିଳିତ ଟ୍ରକ୍ ପରିବହନ",
    tabPoolingDesc: "ଭଡ଼ା ଖର୍ଚ୍ଚ କମାନ୍ତୁ",
    tabEquipment: "ନିକଟସ୍ଥ କୃଷି ଯନ୍ତ୍ର",
    tabEquipmentDesc: "ଟ୍ରାକ୍ଟର ଓ ହାର୍ଭେଷ୍ଟର",
    tabScanner: "AI ଗୁଣବତ୍ତା ଯାଞ୍ଚ",
    tabScannerDesc: "ବ୍ରିକ୍ସ ଓ ମାନ ନିର୍ଣ୍ଣୟ",
    tabMarket: "ମଣ୍ଡି ଦର ତୁଳନା",
    tabMarketDesc: "ସେତୁ vs ମଣ୍ଡି ଲାଭ",
    
    tabBuyer: "ପନିପରିବା ଓ ଫଳ ଷ୍ଟୋର",
    tabBuyerDesc: "ଚାଷୀଙ୍କଠାରୁ ସିଧା କିଣନ୍ତୁ",
    tabBuyerOrders: "ମୋର ଅର୍ଡର ଓ ଏସ୍କ୍ରୋ",
    tabBuyerOrdersDesc: "ଗାଡ଼ି ଟ୍ରାକିଂ",
    tabBulk: "ହୋଲସେଲ B2B ଡେସ୍କ",
    tabBulkDesc: "ବଲ୍କ କଣ୍ଟ୍ରାକ୍ଟ",
    tabForecast: "ଫରୱାର୍ଡ ଚୁକ୍ତି",
    tabForecastDesc: "ଅଗ୍ରୀମ ଦର ସୁରକ୍ଷା",
    tabMacro: "କୃଷି ତଥ୍ୟ ରିପୋର୍ଟ",
    tabMacroDesc: "RBI ଓ ନାବାର୍ଡ ତଥ୍ୟ",
    
    // Farmer Portal
    farmerPortalTitle: "ଫାର୍ମଗେଟ୍ ଫସଲ ପ୍ରବନ୍ଧନ ଓ ଲାଇଭ୍ କ୍ରେତା",
    farmerPortalSubtitle: "ନିଜ ଫସଲ ଲିଷ୍ଟ କରନ୍ତୁ, କିଏ କିଣୁଛି ଦେଖନ୍ତୁ ଏବଂ ସ୍ମାର୍ଟ ଏସ୍କ୍ରୋରେ ତୁରନ୍ତ ଟଙ୍କା ପାଆନ୍ତୁ।",
    addLotBtn: "ନୂଆ ଫସଲ ଯୋଡ଼ନ୍ତୁ",
    myLotsBtn: "ମୋର ସକ୍ରିୟ ଫସଲ",
    incomingOrdersBtn: "ଆସିଥିବା କ୍ରେତା ଅର୍ଡର",
    liveBuyerAlert: "ଲାଇଭ୍ କ୍ରେତା କ୍ରୟ ସୂଚନା",
    newOrderPopupTitle: "🎉 ନୂଆ କ୍ରେତା ଆପଣଙ୍କ ଫସଲ କିଣିଲେ!",
    whoIsBuyingTitle: "ଆପଣଙ୍କ ଫସଲ କିଏ କିଣୁଛି (ଲାଇଭ୍ ଏସ୍କ୍ରୋ ଅର୍ଡର)",
    
    // Equipment
    equipmentTitle: "ପାଖ ଚାଷୀଙ୍କଠାରୁ ଯନ୍ତ୍ରପାତି ଭଡ଼ାରେ ନିଅନ୍ତୁ",
    equipmentSubtitle: "ନିଜ ଗାଁ ବା ପାଖ ଚାଷୀଙ୍କଠାରୁ ଟ୍ରାକ୍ଟର, ହାର୍ଭେଷ୍ଟର ଓ ସୌର ପମ୍ପ କମ୍ ଖର୍ଚ୍ଚରେ ନିଅନ୍ତୁ।",
    distanceFilterLabel: "ଦୂରତା ଅନୁସାରେ ଫିଲ୍ଟର:",
    allNearby: "ସମସ୍ତ ପାଖ (< ୧୫ କିମି)",
    within3km: "୩ କିମି ମଧ୍ୟରେ (ସବୁଠାରୁ ପାଖ)",
    within5km: "୫ କିମି ମଧ୍ୟରେ",
    within10km: "୧୦ କିମି ମଧ୍ୟରେ",
    rentBtn: "ଭଡ଼ାରେ ନିଅନ୍ତୁ",
    
    // Buyer
    buyerStoreTitle: "ଚାଷୀଙ୍କଠାରୁ ସିଧାସଳଖ ତାଜା ପନିପରିବା କିଣନ୍ତୁ",
    searchPlaceholder: "ପନିପରିବା, ଫଳ, ଡାଲି ଖୋଜନ୍ତୁ...",
    allCommodities: "ସମସ୍ତ ଫସଲ",
    vegetables: "ପନିପରିବା",
    fruits: "ଫଳ",
    pulses: "ଡାଲି ଓ ଶସ୍ୟ",
    addToCart: "କାର୍ଟରେ ଯୋଡ଼ନ୍ତୁ",
    instantBuy: "ତୁରନ୍ତ କିଣନ୍ତୁ"
  }
};

window.TRANSLATIONS = TRANSLATIONS;
