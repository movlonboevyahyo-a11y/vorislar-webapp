const testBlocks = [
  {
    id: 1,
    title: "Badiiy matn (10 test)",
    tests: [
      {
        question: "Asar nomi orqali qanday badiiy maqsad ifoda etilgan?",
        options: [
          "Qahramon kasbini ko‘rsatish",
          "Tasodifiylik",
          "Muallif qarashi",
          "Munosabat va kayfiyatni umumlashtirish"
        ],
        correct: 3
      }
    ]
  }
];

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

document.getElementById("blockSelect").onchange = function(){
  const id = Number(this.value);
  const area = document.getElementById("testArea");
  area.innerHTML = "";
  const block = testBlocks.find(b=>b.id===id);
  if(!block) return;

  block.tests.forEach((t,i)=>{
    const c = document.createElement("div");
    c.className = "card";
    c.innerHTML = `<b>${i+1}. ${t.question}</b>`;
    t.options.forEach((o,ix)=>{
      const d = document.createElement("div");
      d.className="option";
      d.innerText = String.fromCharCode(65+ix)+") "+o;
      d.onclick=()=>{
        if(ix===t.correct){
          d.classList.add("correct");
          document.getElementById("testScore").innerText=1;
        } else d.classList.add("wrong");
      };
      c.appendChild(d);
    });
    area.appendChild(c);
  });
};
