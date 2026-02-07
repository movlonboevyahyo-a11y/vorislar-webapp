const testBlocks = [
  // ===== 1-BLOK =====
  {
    id: 1,
    title: "Badiiy matn tahlili (10 test)",
    tests: [
      { question: "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?", options: ["Qahramon kasbini ko‘rsatish","Tasodifiylik","Muallif qarashi","Munosabat va kayfiyatni umumlashtirish"], correct: 3 },
      { question: "Tish doktori obraziga mos ta’rifni aniqlang.", options: ["Shoshqoloq","Bemehr ota","Qilgan ishiga yarasha munosabat","Manman"], correct: 2 },
      { question: "Mayor obrazining asosiy xususiyati qaysi?", options: ["Muloyim","Muomalaga qarab yondashadi","Sabrli","Bir xil muomala"], correct: 1 },
      { question: "[2] bilan ajratilgan gapda qanday ma’no bor?", options: ["Lol qolish","Kinoya","Shikoyat","Achinish"], correct: 1 },
      { question: "Doktorning xatti-harakati nimani bildiradi?", options: ["Qo‘rquv","Achinish","Kasbiy sovuqqonlik","Beparvolik"], correct: 2 },
      { question: "Mayorning oxirgi gapi nimani ifodalaydi?", options: ["Minnatdorlik","Istehzo","Quvonch","Pushaymonlik"], correct: 1 },
      { question: "Ko‘chma ma’nodagi so‘zni toping.", options: ["Temir eshik","Oltin kuz","Oq qog‘oz","Sovuq suv"], correct: 1 },
      { question: "Sinonim so‘zlar qaysi qatorda?", options: ["Katta–kichik","Tez–sekin","Go‘zal–chiroyli","Kun–tun"], correct: 2 },
      { question: "Kinoya qatnashgan gapni toping.", options: ["U keldi.","“A’lo” ishlabsiz.","Bugun iliq.","U o‘qiyapti."], correct: 1 },
      { question: "Asar janri qaysi?", options: ["Roman","Drama","Hikoya","Qissa"], correct: 2 }
    ]
  },

  // ===== 2-BLOK =====
  {
    id: 2,
    title: "Ot (10 test)",
    tests: [
      { question: "Ot nimani bildiradi?", options: ["Harakat","Belgi","Predmet","Holat"], correct: 2 },
      { question: "Qaysi so‘z ot?", options: ["Yurdi","Chiroyli","Kitob","Tez"], correct: 2 },
      { question: "Otlarga xos qo‘shimcha qaysi?", options: ["-di","-lik","-roq","-cha"], correct: 1 },
      { question: "Ko‘plik qo‘shimchasi?", options: ["-ni","-lar","-da","-ga"], correct: 1 },
      { question: "Egalik qo‘shimchasi qaysi?", options: ["-ning","-im","-da","-lar"], correct: 1 },
      { question: "Ot qaysi savolga javob?", options: ["Qanday?","Qancha?","Kim? Nima?","Qayerda?"], correct: 2 },
      { question: "Turdosh otni toping.", options: ["Kitob","Kitobcha","Daraxt","Uy"], correct: 1 },
      { question: "Mavhum ot qaysi?", options: ["Stol","Baxt","Qalam","Uy"], correct: 1 },
      { question: "Aniq otni toping.", options: ["Sevgi","Baxt","Stol","Do‘stlik"], correct: 2 },
      { question: "Otlarda kelishiklar soni?", options: ["5","6","7","8"], correct: 1 }
    ]
  },

  // ===== 3-BLOK =====
  {
    id: 3,
    title: "Fe’l (10 test)",
    tests: [
      { question: "Fe’l nimani bildiradi?", options: ["Predmet","Belgi","Harakat va holat","Miqdor"], correct: 2 },
      { question: "Hozirgi zamon fe’lini toping.", options: ["O‘qidi","O‘qiyapti","O‘qir","O‘qimoq"], correct: 1 },
      { question: "O‘tgan zamon qo‘shimchasi?", options: ["-yapti","-di","-ar","-moq"], correct: 1 },
      { question: "Buyruq-istak mayli qaysi?", options: ["O‘qidi","O‘qir","O‘qi!","O‘qimoq"], correct: 2 },
      { question: "Fe’l nisbatlari nechta?", options: ["3","4","5","6"], correct: 2 },
      { question: "Majhul nisbat qo‘shimchasi?", options: ["-dir","-il","-ar","-moq"], correct: 1 },
      { question: "Fe’lning boshlang‘ich shakli?", options: ["O‘qidi","O‘qiydi","O‘qimoq","O‘qir"], correct: 2 },
      { question: "Bo‘lishsiz fe’lni toping.", options: ["O‘qidi","O‘qimadi","O‘qiydi","O‘qir"], correct: 1 },
      { question: "Shaxs-son qo‘shimchasi?", options: ["-ni","-di","-man","-da"], correct: 2 },
      { question: "Fe’l qaysi gap bo‘lagi bo‘ladi?", options: ["Ega","Kesim","Aniqlovchi","Hol"], correct: 1 }
    ]
  },

  // ===== 4-BLOK =====
  {
    id: 4,
    title: "Sifat (10 test)",
    tests: [
      { question: "Sifat nimani bildiradi?", options: ["Predmet","Belgi","Harakat","Miqdor"], correct: 1 },
      { question: "Qaysi so‘z sifat?", options: ["Kitob","Yurdi","Chiroyli","O‘qimoq"], correct: 2 },
      { question: "Daraja sifatini toping.", options: ["Yaxshi","Yaxshiroq","Yaxshi edi","Yaxshilik"], correct: 1 },
      { question: "Rang bildirgan sifat?", options: ["Katta","Oq","Tez","Yangi"], correct: 1 },
      { question: "Sifat qaysi so‘zni aniqlaydi?", options: ["Fe’l","Ot","Ravish","Olmosh"], correct: 1 },
      { question: "Sifat yasalish qo‘shimchasi?", options: ["-chi","-li","-di","-lar"], correct: 1 },
      { question: "Qiyosiy daraja?", options: ["Eng katta","Katta","Kattaroq","Kattalik"], correct: 2 },
      { question: "Orttirma daraja?", options: ["Katta","Kattaroq","Eng katta","Kattalik"], correct: 2 },
      { question: "Sifatdosh qaysi?", options: ["O‘qigan","O‘qimoq","O‘qiydi","O‘qir"], correct: 0 },
      { question: "Sifatning vazifasi?", options: ["Harakat","Belgi","Miqdor","Holat"], correct: 1 }
    ]
  },

  // ===== 5-BLOK =====
  {
    id: 5,
    title: "Imlo va tinish belgisi (10 test)",
    tests: [
      { question: "Qo‘shib yoziladigan so‘z?", options: ["Har xil","Hech kim","Hammasi","Ko‘pdan-ko‘p"], correct: 2 },
      { question: "Ajratib yoziladigan so‘z?", options: ["Ertalab","Birpas","Hech qachon","Kechqurun"], correct: 2 },
      { question: "Imlo xatosi bor so‘z?", options: ["Mehnatkash","Asqatmoq","Dazmol","Muomila"], correct: 3 },
      { question: "Vergul to‘g‘ri qo‘yilgan gap?", options: ["U keldi lekin ketdi","U keldi, lekin ketdi","U keldi lekin, ketdi","U keldi lekinketdi"], correct: 1 },
      { question: "Tire qachon qo‘yiladi?", options: ["Ega–kesim orasida","Har doim","So‘z oxirida","Faqat undalmada"], correct: 0 },
      { question: "Nuqtali vergul qayerda?", options: ["Oddiy gapda","Murakkab uyushiqda","Dialogda","She’rda"], correct: 1 },
      { question: "Qo‘shtirnoq qayerda?", options: ["Sarlavhada","Ko‘chirma gapda","Har doim","Oxirida"], correct: 1 },
      { question: "Qavs nimani izohlaydi?", options: ["Asosiy fikr","Qo‘shimcha fikr","Harakat","Belgi"], correct: 1 },
      { question: "Ko‘p nuqta qachon?", options: ["Gap tugaganda","Fikr uzilganda","Savolda","Buyruqda"], correct: 1 },
      { question: "So‘roq belgisi qayerda?", options: ["Undalmada","So‘roq gap oxirida","Boshlanishida","Dialogda"], correct: 1 }
    ]
  }
];
