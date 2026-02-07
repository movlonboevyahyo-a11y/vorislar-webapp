const testBlocks = [
  { id: 1, title: "Badiiy matn", tests: [
    { question: "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?",
      options: ["Kasb","Tasodif","Muallif qarashi","Kayfiyatni umumlashtirish"],
      correct: 3 }
  ]},

  { id: 2, title: "Ot", tests: [
    { question: "Ot nimani bildiradi?",
      options: ["Harakat","Belgi","Predmet","Holat"],
      correct: 2 }
  ]},

  { id: 3, title: "Fe’l", tests: [
    { question: "Fe’l nimani bildiradi?",
      options: ["Predmet","Belgi","Harakat","Miqdor"],
      correct: 2 }
  ]},

  { id: 4, title: "Sifat", tests: [
    { question: "Sifat nimani bildiradi?",
      options: ["Predmet","Belgi","Harakat","Miqdor"],
      correct: 1 }
  ]},

  { id: 5, title: "Ravish", tests: [
    { question: "Ravish nimani bildiradi?",
      options: ["Belgi","Harakat holati","Predmet","Shaxs"],
      correct: 1 }
  ]},

  { id: 6, title: "Olmosh", tests: [
    { question: "Olmosh qaysi so‘z turkumi o‘rnida keladi?",
      options: ["Fe’l","Ot","Ravish","Bog‘lovchi"],
      correct: 1 }
  ]},

  { id: 7, title: "Son", tests: [
    { question: "Son nimani bildiradi?",
      options: ["Belgi","Miqdor va tartib","Harakat","Holat"],
      correct: 1 }
  ]},

  { id: 8, title: "Bog‘lovchi", tests: [
    { question: "Bog‘lovchi vazifasi nima?",
      options: ["So‘z yasash","Gap bo‘lagi","So‘z va gaplarni bog‘lash","Talaffuz"],
      correct: 2 }
  ]},

  { id: 9, title: "Imlo", tests: [
    { question: "Qaysi so‘z to‘g‘ri yozilgan?",
      options: ["Muomila","Muomala","Muamola","Muomalla"],
      correct: 1 }
  ]},

  { id: 10, title: "Tinish belgisi", tests: [
    { question: "Vergul qayerda qo‘yiladi?",
      options: ["So‘roq gapda","Uyushiq bo‘laklarda","Buyruqda","Undalmada"],
      correct: 1 }
  ]}
];

// ===== INTERFEYS =====
const box = document.getElementById("tests-container");

box.innerHTML = `
  <div class="card">
    <b>Test blokini tanlang:</b>
    <select id="blockSelect">
      <option value="">— Tanlang —</option>
      ${testBlocks.map(b=>`<option value="${b.id}">${b.title}</option>`).join("")}
    </select>
  </div>
  <div id="testArea"></div>
`;

document.getElementById("blockSelect").onchange = function () {
  const id = Number(this.value);
  const area = document.getElementById("testArea");
  area.innerHTML = "";
  const block = testBlocks.find(b => b.id === id);
  if (!block) return;

  block.tests.forEach((t, i) => {
    const c = document.createElement("div");
    c.className = "card";
    c.innerHTML = `<b>${i+1}. ${t.question}</b>`;
    t.options.forEach((o, ix) => {
      const d = document.createElement("div");
      d.className = "option";
      d.innerText = String.fromCharCode(65+ix) + ") " + o;
      d.onclick = () => {
        d.classList.add(ix === t.correct ? "correct" : "wrong");
      };
      c.appendChild(d);
    });
    area.appendChild(c);
  });
};
