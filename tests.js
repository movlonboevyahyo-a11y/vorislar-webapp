// =====================
// TEST BLOKLARI (PAPKA)
// =====================
const testBlocks = [
  {
    id: 1,
    title: "Ot (10 test)",
    tests: [
      {
        question: "Ot so‘z turkumiga xos belgi qaysi?",
        options: [
          "Harakatni bildiradi",
          "Belgini bildiradi",
          "Predmetni bildiradi",
          "Holatni bildiradi"
        ],
        correct: 2
      },
      {
        question: "Qaysi so‘z ot?",
        options: ["yurdi", "chiroyli", "kitob", "tez"],
        correct: 2
      }
      // qolgan 8 ta test keyin qo‘shiladi
    ]
  },
  {
    id: 2,
    title: "Fe’l (10 test)",
    tests: [
      {
        question: "Fe’l nimani bildiradi?",
        options: [
          "Predmetni",
          "Belgini",
          "Harakat va holatni",
          "Miqdorni"
        ],
        correct: 2
      },
      {
        question: "Qaysi fe’l zamoni hozirgi zamon?",
        options: ["o‘qidi", "o‘qiyapti", "o‘qir", "o‘qimoq"],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    title: "Son (10 test)",
    tests: [
      {
        question: "Son nimani bildiradi?",
        options: [
          "Belgini",
          "Harakatni",
          "Miqdor va tartibni",
          "Holatni"
        ],
        correct: 2
      }
    ]
  }
];

// =====================
// INTERFEYS
// =====================
const container = document.getElementById("tests-container");

container.innerHTML = `
  <div class="card">
    <label><b>Test blokini tanlang:</b></label>
    <select id="blockSelect">
      <option value="">— Blokni tanlang —</option>
      ${testBlocks.map(b => `<option value="${b.id}">${b.title}</option>`).join("")}
    </select>
  </div>
  <div id="testArea"></div>
`;

let testScore = 0;

document.getElementById("blockSelect").addEventListener("change", function () {
  const blockId = parseInt(this.value);
  const area = document.getElementById("testArea");
  area.innerHTML = "";

  const block = testBlocks.find(b => b.id === blockId);
  if (!block) return;

  block.tests.forEach((test, index) => {
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

    area.appendChild(card);
  });
});
