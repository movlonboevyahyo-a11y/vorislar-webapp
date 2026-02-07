// === TESTLAR MA'LUMOTI ===
const tests = [
  {
    question: "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?",
    options: [
      "Har doim bir xil munosabat",
      "Kuni mijozlarga bog‘liq",
      "Faqat ish jarayoni tasviri",
      "Tasodifiy holat"
    ],
    correct: 1
  },
  {
    question: "Tish doktori obraziga mos javobni aniqlang.",
    options: [
      "Shoshqoloq inson",
      "Bemehr ota",
      "Ishiga yarasha munosabat bildiruvchi",
      "Manman shaxs"
    ],
    correct: 2
  }
];

// === TESTLARNI SAHIFAGA CHIQARISH ===
const testsContainer = document.getElementById("tests-container");
let testScore = 0;

tests.forEach((test, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `<b>${index + 1}. ${test.question}</b>`;

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
