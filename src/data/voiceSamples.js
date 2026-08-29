// Kisan Vani AI Multilingual Voice Dialogue Samples (Bhashini Pipeline)
const VOICE_SAMPLES = [
  {
    lang: "or",
    langName: "ଓଡ଼ିଆ (Odia)",
    query: "ଆଜି ସାକ୍ଷୀଗୋପାଳ ମଣ୍ଡି ତୁଳନାରେ ସେତୁରେ ଆମ୍ବର ମୂଲ୍ୟ କେତେ ମିଳିବ?",
    response: "ନମସ୍କାର ଭାଇ! ଆଜି ପାରମ୍ପରିକ ମଣ୍ଡିରେ ଆମ୍ବ ₹୫୨ ମିଳୁଛି, କିନ୍ତୁ କୃଷକ ସେତୁରେ AI ଯାଞ୍ଚ ପରେ A+ ଗ୍ରେଡ୍ ଆମ୍ବ ପାଇଁ ସିଧାସଳଖ ₹୮୮ ମିଳିବ। କିଲୋ ପ୍ରତି ₹୩୬ ଅଧିକ ଲାଭ!",
    english: "Mandi is ₹52/kg today, but on Kisan Setu with AI Grade A+, you receive ₹88/kg directly (+₹36/kg profit).",
    voiceTag: "Odisha Farm Advisory",
    ttsLang: "hi-IN"
  },
  {
    lang: "hi",
    langName: "हिन्दी (Hindi)",
    query: "मेरे 40 क्रेट केले के लिए सुबह 7 बजे कोल्ड रीफर वैन बुक करो।",
    response: "जी किसान भाई! Google OR-Tools द्वारा REEFER-OD-01 गाड़ी कल सुबह 7:00 बजे आपके फार्मगेट के लिए शेड्यूल हो गई है। तापमान 8°C रहेगा।",
    english: "REEFER-OD-01 scheduled for 7:00 AM at your farmgate. Temperature maintained at 8°C.",
    voiceTag: "Fleet Dispatch AI",
    ttsLang: "hi-IN"
  },
  {
    lang: "or",
    langName: "ଓଡ଼ିଆ (Odia - Quality Scan)",
    query: "ମୋ ଟମାଟୋ ଫସଲର AI ଯାଞ୍ଚ କରି ପ୍ରମାଣପତ୍ର ଜାରି କର।",
    response: "ଆପଣଙ୍କ ଟମାଟୋର MobileNet-AgriV4 ଯାଞ୍ଚ ସଫଳ ହୋଇଛି। ବ୍ରିକ୍ସ ୫.୨ ଏବଂ ୯୪% ପରିପକ୍ୱତା ସହ Processing Grade ସାର୍ଟିଫିକେଟ୍ ଏବଂ ₹୨୨/କେଜି ମୂଲ୍ୟ ସୁନିଶ୍ଚିତ ହେଲା।",
    english: "Tomatoes passed CNN assaying. Brix 5.2, 94% ripeness. Processing Grade certificate issued with locked price ₹22/kg.",
    voiceTag: "Computer Vision Assaying",
    ttsLang: "hi-IN"
  },
  {
    lang: "en",
    langName: "English (Buyer Desk)",
    query: "Lock 20 tonnes of Grade A+ Amrapali Mangoes under escrow for tomorrow morning.",
    response: "Procurement order locked! ₹17.6 Lakhs deposited in smart escrow. Direct payout will auto-release to Sakhigopal FPO upon reefer arrival.",
    english: "Escrow created for 20 tonnes. Automated release on temperature verification.",
    voiceTag: "Institutional Escrow",
    ttsLang: "en-IN"
  }
];

window.VOICE_SAMPLES = VOICE_SAMPLES;
