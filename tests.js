// =====================
// TEST BLOKLARI (1–5)
// Har blok = 10 ta test
// =====================

const testBlocks = [
  // ===== 1-BLOK =====
  {
    block: 1,
    title: "1-blok: Badiiy matn tahlili",
    tests: [
      {
        question: "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?",
        options: [
          "Qahramonlarning tashqi ko‘rinishi",
          "Voqealarning bir xilligi",
          "Muallif munosabatini ochish",
          "Tasodifiy holatni ko‘rsatish"
        ],
        correct: 2
      },
      {
        question: "Tish doktori obraziga mos ta’rifni aniqlang.",
        options: [
          "Shoshqoloq va beparvo",
          "Bemehr va sovuqqon",
          "Ishiga yarasha munosabat bildiruvchi",
          "Manman va mag‘rur"
        ],
        correct: 2
      },
      {
        question: "Mayor obrazining asosiy xususiyati qaysi?",
        options: [
          "Sabrli va muloyim",
          "Muomalaga qarab munosabat qiluvchi",
          "Hamma bilan bir xil muomala qiluvchi",
          "Doim xushchaqchaq"
        ],
        correct: 1
      },
      {
        question: "Matnda kinoya qaysi gapda ifodalangan?",
        options: [
          "1-gapda",
          "2-gapda",
          "3-gapda",
          "4-gapda"
        ],
        correct: 1
      },
      {
        question: "Doktorning xatti-harakati nimani anglatadi?",
        options: [
          "Qo‘rquvni",
          "Achinishni",
          "Kasbiy sovuqqonlikni",
          "Beparvolikni"
        ],
        correct: 2
      },
      {
        question: "Mayorning oxirgi gapi qanday ma’no ifodalaydi?",
        options: [
          "Minnatdorlik",
          "Istehzo",
          "Quvonch",
          "Achinish"
        ],
        correct: 1
      },
      {
        question: "Asarda voqealar qayerda kechadi?",
        options: [
          "Kasallikxonada",
          "Doktor kabinetida",
          "Uy sharoitida",
          "Ko‘chada"
        ],
        correct: 1
      },
      {
        question: "Asarning asosiy g‘oyasi nimaga qaratilgan?",
        options: [
          "Insoniylikka",
          "Kasb mas’uliyatiga",
          "Adolatga",
          "Sabr-toqatga"
        ],
        correct: 1
      },
      {
        question: "Doktor va mayor o‘rtasidagi munosabat qanday?",
        options: [
          "Do‘stona",
          "Rasmiy va sovuqqon",
          "Samimiy",
          "Qarindoshlik"
        ],
        correct: 1
      },
      {
        question: "Asar qaysi janrga mansub?",
        options: [
          "She’r",
          "Hikoya",
          "Roman",
          "Drama"
        ],
        correct: 1
      }
    ]
  },

  // ===== 2-BLOK =====
  {
    block: 2,
    title: "2-blok: Leksikologiya",
    tests: [
      {
        question: "Sinonim so‘zlar qaysi qatorda berilgan?",
        options: [
          "tez – sekin",
          "katta – ulkan",
          "oq – qora",
          "kun – tun"
        ],
        correct: 1
      },
      {
        question: "Antonim so‘zlar berilgan qatorda belgilang.",
        options: [
          "go‘zal – chiroyli",
          "tez – chaqqon",
          "yaxshi – yomon",
          "katta – ulkan"
        ],
        correct: 2
      },
      {
        question: "Ko‘chma ma’noda qo‘llangan so‘zni toping.",
        options: [
          "temir eshik",
          "oltin kuz",
          "oq qog‘oz",
          "sovuq suv"
        ],
        correct: 1
      },
      {
        question: "Paronim so‘zlar qaysi?",
        options: [
          "asar – kitob",
          "tub – asos",
          "abonent – abonement",
          "katta – kichik"
        ],
        correct: 2
      },
      {
        question: "Bir ma’noli so‘z qaysi?",
        options: [
          "bosh",
          "ko‘z",
          "kitob",
          "yuz"
        ],
        correct: 2
      },
      {
        question: "Omonim so‘z qatnashgan gapni aniqlang.",
        options: [
          "Yuzing oqarib ketdi",
          "Yuz metr masofa",
          "Yuzingni yuv",
          "Yuzta savol"
        ],
        correct: 1
      },
      {
        question: "Frazeologik birikmani toping.",
        options: [
          "tez yurmoq",
          "ko‘z yummoq",
          "katta uy",
          "oq daftar"
        ],
        correct: 1
      },
      {
        question: "Atama so‘z qaysi?",
        options: [
          "shamol",
          "daraxt",
          "fe’l",
          "ko‘l"
        ],
        correct: 2
      },
      {
        question: "So‘zning lug‘aviy ma’nosi nima?",
        options: [
          "Ko‘chma ma’no",
          "Asosiy ma’no",
          "Yasalma ma’no",
          "Tasviriy ma’no"
        ],
        correct: 1
      },
      {
        question: "Qaysi so‘z eskirgan so‘z hisoblanadi?",
        options: [
          "telefon",
          "arg‘umoq",
          "kompyuter",
          "internet"
        ],
        correct: 1
      }
    ]
  },

  // ===== 3-BLOK =====
  {
    block: 3,
    title: "3-blok: Morfologiya",
    tests: [
      {
        question: "Ot so‘z turkumiga xos belgi qaysi?",
        options: [
          "Harakat bildiradi",
          "Belgini bildiradi",
          "Predmetni bildiradi",
          "Holatni bildiradi"
        ],
        correct: 2
      },
      {
        question: "Sifat qaysi so‘zni aniqlaydi?",
        options: [
          "Fe’lni",
          "Otni",
          "Ravishni",
          "Olmoshni"
        ],
        correct: 1
      },
      {
        question: "Fe’l qaysi savollarga javob bo‘ladi?",
        options: [
          "Qanday? Qaysi?",
          "Kim? Nima?",
          "Nima qildi? Nima qiladi?",
          "Qancha?"
        ],
        correct: 2
      },
      {
        question: "Ravish nimani bildiradi?",
        options: [
          "Harakat belgisini",
          "Predmetni",
          "Belgini",
          "Miqdorni"
        ],
        correct: 0
      },
      {
        question: "Olmosh qaysi so‘z o‘rnida keladi?",
        options: [
          "Faqat sifat",
          "Faqat fe’l",
          "Ot, sifat, son",
          "Faqat ravish"
        ],
        correct: 2
      },
      {
        question: "Son so‘z turkumi nimani bildiradi?",
        options: [
          "Harakatni",
          "Belgini",
          "Miqdor va tartibni",
          "Holatni"
        ],
        correct: 2
      },
      {
        question: "Yordamchi so‘zlarni toping.",
        options: [
          "ot, sifat",
          "fe’l, ravish",
          "bog‘lovchi, yuklama",
          "son, olmosh"
        ],
        correct: 2
      },
      {
        question: "Fe’l zamonlari nechta?",
        options: [
          "2",
          "3",
          "4",
          "5"
        ],
        correct: 1
      },
      {
        question: "Buyruq-istak mayli qaysi gapda?",
        options: [
          "U kitob o‘qiydi",
          "Kitob o‘qi!",
          "Kitob o‘qimoqda",
          "Kitob o‘qirdi"
        ],
        correct: 1
      },
      {
        question: "Ko‘makchi so‘z qaysi?",
        options: [
          "uchun",
          "katta",
          "o‘qimoq",
          "besh"
        ],
        correct: 0
      }
    ]
  },

  // ===== 4-BLOK =====
  {
    block: 4,
    title: "4-blok: Gap va sintaksis",
    tests: [
      {
        question: "Gapning asosi nimadan iborat?",
        options: [
          "To‘ldiruvchi va aniqlovchi",
          "Ega va kesim",
          "Hol va aniqlovchi",
          "Kesim va hol"
        ],
        correct: 1
      },
      {
        question: "Sodda gap nechta grammatik asosga ega?",
        options: [
          "1",
          "2",
          "3",
          "4"
        ],
        correct: 0
      },
      {
        question: "Qo‘shma gapda nechta grammatik asos bo‘ladi?",
        options: [
          "1",
          "2 yoki undan ortiq",
          "Faqat 3",
          "Faqat 2"
        ],
        correct: 1
      },
      {
        question: "Undalma qaysi gap bo‘lagi?",
        options: [
          "Ega",
          "Kesim",
          "Gap bo‘lagi emas",
          "To‘ldiruvchi"
        ],
        correct: 2
      },
      {
        question: "Kirish so‘z nimani bildiradi?",
        options: [
          "Harakatni",
          "Predmetni",
          "Gapga munosabatni",
          "Belgini"
        ],
        correct: 2
      },
      {
        question: "Aniqlovchi qaysi savollarga javob bo‘ladi?",
        options: [
          "Qayerda? Qachon?",
          "Qanday? Qaysi?",
          "Kim? Nima?",
          "Nima qildi?"
        ],
        correct: 1
      },
      {
        question: "Hol qaysi so‘zni aniqlaydi?",
        options: [
          "Otni",
          "Sifatni",
          "Fe’lni",
          "Sonni"
        ],
        correct: 2
      },
      {
        question: "To‘ldiruvchi nimani bildiradi?",
        options: [
          "Harakatni",
          "Harakat ob’ektini",
          "Belgini",
          "Miqdorni"
        ],
        correct: 1
      },
      {
        question: "Kesim qaysi so‘z turkumidan bo‘ladi?",
        options: [
          "Faqat ot",
          "Faqat sifat",
          "Asosan fe’l",
          "Faqat ravish"
        ],
        correct: 2
      },
      {
        question: "Gap oxirida qaysi tinish belgisi qo‘yiladi?",
        options: [
          "Vergul",
          "Nuqta",
          "Tire",
          "Ikki nuqta"
        ],
        correct: 1
      }
    ]
  },

  // ===== 5-BLOK =====
  {
    block: 5,
    title: "5-blok: Imlo va tinish belgisi",
    tests: [
      {
        question: "Qo‘shib yoziladigan so‘zni toping.",
        options: [
          "har xil",
          "ko‘pdan-ko‘p",
          "hech kim",
          "hammasi"
        ],
        correct: 3
      },
      {
        question: "Ajratib yoziladigan so‘z qaysi?",
        options: [
          "ertalab",
          "birpas",
          "hech qachon",
          "kechqurun"
        ],
        correct: 2
      },
      {
        question: "Qaysi so‘zda imlo xatosi bor?",
        options: [
          "mehnatkash",
          "asqatmoq",
          "dazmol",
          "muomila"
        ],
        correct: 3
      },
      {
        question: "Vergul qaysi gapda to‘g‘ri qo‘yilgan?",
        options: [
          "U keldi lekin ketdi",
          "U keldi, lekin ketdi",
          "U keldi lekin, ketdi",
          "U keldi lekinketdi"
        ],
        correct: 1
      },
      {
        question: "Tire qachon qo‘yiladi?",
        options: [
          "Ega va kesim orasida",
          "Har doim",
          "So‘z oxirida",
          "Faqat undalmada"
        ],
        correct: 0
      },
      {
        question: "Nuqtali vergul qaysi gapda ishlatiladi?",
        options: [
          "Oddiy gapda",
          "Murakkab uyushiq gapda",
          "Faqat dialogda",
          "Faqat she’rda"
        ],
        correct: 1
      },
      {
        question: "Qo‘shtirnoq qachon qo‘yiladi?",
        options: [
          "Sarlavhada",
          "Ko‘chirma gapda",
          "Har doim",
          "Gap oxirida"
        ],
        correct: 1
      },
      {
        question: "Qavs nimani izohlash uchun ishlatiladi?",
        options: [
          "Asosiy fikrni",
          "Qo‘shimcha fikrni",
          "Harakatni",
          "Belgini"
        ],
        correct: 1
      },
      {
        question: "Ko‘p nuqta qaysi holatda ishlatiladi?",
        options: [
          "Gap tugaganda",
          "Fikr uzilganda",
          "Savol berilganda",
          "Buyruq berilganda"
        ],
        correct: 1
      },
      {
        question: "So‘roq belgisi qayerda qo‘yiladi?",
        options: [
          "Undalmada",
          "So‘roq gap oxirida",
          "Faqat boshida",
          "Faqat dialogda"
        ],
        correct: 1
      }
    ]
  }
];

// =====================
// TESTLARNI CHIQARISH
// =====================
const testsContainer = document.getElementById("tests-container");
let testScore = 0;

testBlocks.forEach(block => {
  const blockTitle = document.createElement("h2");
  blockTitle.innerText = block.title;
  testsContainer.appendChild(blockTitle);

  block.tests.forEach((test, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<b>${block.block}.${index + 1}. ${test.question}</b>`;

    test.options.forEach((opt, i) => {
      const div = document.createElement("div");
      div.className = "option";
      div.innerText = String.fromCharCode(65 + i) + ") " + opt;

      div.onclick = () => {
        if (div.classList.contains("correct") || div.classList.contains("wrong")) return;

        if (i === test.correct) {
          div.classList.add("correct");
          testScore++;
          document.getElementById("testScore").innerText = testScore;
        } else {
          div.classList.add("wrong");
        }
      };

      card.appendChild(div);
    });

    testsContainer.appendChild(card);
  });
});
