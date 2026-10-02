export type Lang = "en" | "hi";

export const PHONE = "+919717167154";
export const PHONE_DISPLAY = "97171 67154";
export const WA = "919717167154";
export const SHOP = { lat: 28.4348214, lon: 77.0839526 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

/** Approximate area centres, used only for straight-line distance from the shop. */
export const AREAS: { id: string; en: string; hi: string; lat: number; lon: number }[] = [
  { id: "s52", en: "Sector 52", hi: "सेक्टर 52", lat: 28.4352, lon: 77.0805 },
  { id: "s54", en: "Golf Course Rd", hi: "गोल्फ़ कोर्स रोड", lat: 28.4405, lon: 77.1012 },
  { id: "s43", en: "Sector 43", hi: "सेक्टर 43", lat: 28.4562, lon: 77.0893 },
  { id: "dlf5", en: "DLF Phase 5", hi: "DLF फ़ेज़ 5", lat: 28.4497, lon: 77.0995 },
  { id: "sl1", en: "Sushant Lok 1", hi: "सुशांत लोक 1", lat: 28.4636, lon: 77.0771 },
  { id: "s57", en: "Sector 57", hi: "सेक्टर 57", lat: 28.4218, lon: 77.0762 },
  { id: "s56", en: "Sector 56", hi: "सेक्टर 56", lat: 28.4212, lon: 77.1004 },
  { id: "dlf1", en: "DLF Phase 1", hi: "DLF फ़ेज़ 1", lat: 28.4716, lon: 77.0962 },
  { id: "s65", en: "Golf Course Ext.", hi: "गोल्फ़ कोर्स एक्सटेंशन", lat: 28.4025, lon: 77.0745 },
  { id: "dlf3", en: "DLF Phase 3", hi: "DLF फ़ेज़ 3", lat: 28.4928, lon: 77.0957 },
];

export function km(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const R = 6371;
  const r = (d: number) => (d * Math.PI) / 180;
  const dLat = r(b.lat - a.lat);
  const dLon = r(b.lon - a.lon);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(r(a.lat)) * Math.cos(r(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "Came within 10 minutes at my door",
  "Fixed my motor issues at late night",
  "Did not over charge, even after giving extra time… took the predecided amount",
  "came within 15 min and saved my 850 bucks",
  "Known him almost 8 years… most reliable… DLF, Golf Course Road, Extension area",
  "when no other plumber was ready to come",
  "Bhaiya did the work very well",
];

export const RATINGS = [
  { stars: 5, count: 329 },
  { stars: 4, count: 2 },
  { stars: 3, count: 0 },
  { stars: 2, count: 2 },
  { stars: 1, count: 8 },
];

export const STATUSES = ["LEAK REPORTED", "CALL ANSWERED", "ON THE WAY", "LEAK SEALED"];

const en = {
  banner: "Concept preview made for Ganesh ji by LocalLift. Not live yet.",
  brandSub: "Plumber, Gurugram",
  call: "Call Ganesh",
  callShort: "Call",
  whatsapp: "WhatsApp",
  waHello: "Hi Ganesh ji, I need a plumber.",
  heroTitle: ["Leak at 2am?", "Ganesh picks up."],
  heroProof: "4.9 stars from 341 Google reviews. Open 24 hours in Sector 52, Gurugram.",
  drag: "Drag to turn the pipe",
  beats: [
    {
      title: "You call. He answers.",
      body: "Day or night, the number on the shop sign is the one that rings.",
      quote: REVIEWS[1],
    },
    {
      title: "He is already on the way.",
      body: "From Wazirabad, Sector 52, across south Gurugram.",
      quote: REVIEWS[0],
    },
    {
      title: "Fixed at the root. Paid what was agreed.",
      body: "Customers keep writing the same two things: the leak stayed fixed, and the price stayed the price.",
      quote: REVIEWS[2],
    },
  ],
  googleReview: "Google review",
  distTitle: "How far is he from you?",
  distBody: "Pick your area. Straight-line distance from his shop near Mata Chowk, Wazirabad.",
  distUnit: "km from the shop",
  distAsk: "Ask if he can come now",
  distWa: (area: string) => `Hi Ganesh ji, I'm in ${area}. Can you come now?`,
  workTitle: "His work, photographed on the job.",
  workBody: "Every photo here is from his own Google listing.",
  services: [
    { img: "/img/p5.jpg", title: "Leaks and concealed pipework", body: "Wall-chased lines, pressure tested before the plaster goes on." },
    { img: "/img/p10.jpg", title: "Full bathroom renovation", body: "From the pipes in the wall to the last fitting." },
    { img: "/img/p4.jpg", title: "Motor, pump and tanks", body: "One review: pump fixed at 7:30pm, when no other plumber would come." },
    { img: "/img/p2.jpg", title: "Geyser and diverters", body: "One customer's geyser, fixed after three other plumbers could not." },
    { img: "/img/p7.jpg", title: "Thermal leak detection", body: "Finds the hidden leak first, then opens only what he must." },
    { img: "/img/p6.jpg", title: "Sanitary fittings", body: "Wall-hung WCs, basins, flush servicing." },
    { img: "/img/p12.jpg", title: "Shower panels and mixers", body: "Fitted, sealed and handed over working." },
  ],
  revTitle: "341 people rated him. 329 gave five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Work quality", n: 17 },
    { label: "Fair pricing", n: 12 },
    { label: "Polite", n: 11 },
    { label: "Quick solutions", n: 9 },
  ],
  stars: "stars",
  visitTitle: "Find the shop.",
  address: "Near Mata Chowk, VPO Wazirabad, Sarswati Kunj II, Sector 52, Gurugram 122003",
  hours: "Open 24 hours, 7 days",
  pay: "Pay by UPI or card",
  directions: "Directions",
  footer: "Concept by LocalLift for Ganesh Plumber Service, Gurugram. Photos and reviews from the shop's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा गणेश जी के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबर, गुरुग्राम",
  call: "गणेश जी को कॉल करें",
  callShort: "कॉल",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते गणेश जी, मुझे प्लंबर चाहिए।",
  heroTitle: ["रात 2 बजे लीकेज?", "गणेश जी फ़ोन उठाते हैं।"],
  heroProof: "341 गूगल रिव्यू में 4.9 स्टार। सेक्टर 52, गुरुग्राम में 24 घंटे खुला।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    {
      title: "आप कॉल करें। वो उठाते हैं।",
      body: "दिन हो या रात, दुकान के बोर्ड वाला नंबर ही बजता है।",
      quote: REVIEWS[1],
    },
    {
      title: "वो रास्ते में हैं।",
      body: "वज़ीराबाद, सेक्टर 52 से पूरे दक्षिण गुरुग्राम तक।",
      quote: REVIEWS[0],
    },
    {
      title: "जड़ से ठीक। उतना ही पैसा जितना तय हुआ।",
      body: "ग्राहक बार बार दो बातें लिखते हैं: लीकेज दोबारा नहीं हुई, और दाम वही रहा जो तय हुआ था।",
      quote: REVIEWS[2],
    },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "वो आपसे कितनी दूर हैं?",
  distBody: "अपना इलाका चुनें। माता चौक, वज़ीराबाद की दुकान से सीधी दूरी।",
  distUnit: "किमी दुकान से",
  distAsk: "पूछें, क्या अभी आ सकते हैं",
  distWa: (area: string) => `नमस्ते गणेश जी, मैं ${area} में हूँ। क्या आप अभी आ सकते हैं?`,
  workTitle: "उनका काम, साइट पर खींची गई तस्वीरें।",
  workBody: "यहाँ की हर फ़ोटो उनकी अपनी गूगल लिस्टिंग से है।",
  services: [
    { img: "/img/p5.jpg", title: "लीकेज और कंसील्ड पाइपलाइन", body: "दीवार के अंदर की लाइन, प्लास्टर से पहले प्रेशर टेस्ट।" },
    { img: "/img/p10.jpg", title: "पूरा बाथरूम रेनोवेशन", body: "दीवार के पाइप से आख़िरी फ़िटिंग तक।" },
    { img: "/img/p4.jpg", title: "मोटर, पंप और टंकी", body: "एक रिव्यू: शाम 7:30 बजे पंप ठीक किया, जब कोई और प्लंबर नहीं आया।" },
    { img: "/img/p2.jpg", title: "गीज़र और डाइवर्टर", body: "एक ग्राहक का गीज़र, जो तीन और प्लंबर ठीक नहीं कर पाए।" },
    { img: "/img/p7.jpg", title: "थर्मल लीक डिटेक्शन", body: "पहले छुपी लीकेज ढूँढते हैं, फिर उतना ही तोड़ते हैं जितना ज़रूरी।" },
    { img: "/img/p6.jpg", title: "सैनिटरी फ़िटिंग", body: "वॉल-हंग WC, बेसिन, फ़्लश सर्विसिंग।" },
    { img: "/img/p12.jpg", title: "शावर पैनल और मिक्सर", body: "फ़िट, सील, और चालू करके सौंपा।" },
  ],
  revTitle: "341 लोगों ने रेटिंग दी। 329 ने पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "काम की क्वालिटी", n: 17 },
    { label: "सही दाम", n: 12 },
    { label: "विनम्र", n: 11 },
    { label: "जल्दी समाधान", n: 9 },
  ],
  stars: "स्टार",
  visitTitle: "दुकान का पता।",
  address: "माता चौक के पास, VPO वज़ीराबाद, सरस्वती कुंज II, सेक्टर 52, गुरुग्राम 122003",
  hours: "24 घंटे, सातों दिन खुला",
  pay: "UPI या कार्ड से भुगतान",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा गणेश प्लंबर सर्विस, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू दुकान की गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
