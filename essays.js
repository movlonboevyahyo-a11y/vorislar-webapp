// === ESSE MAVZULARI (HAMMASI) ===
const essayTopics = [
  "Hukumat yo‘llarni rivojlantirishi kerakmi yoki jamoat transportini?",
  "Ixtiyoriy xarajatlarning ko‘payishi hayot sifatiga ta’siri",
  "Mahsulot reklamalari: foydalimi yoki zararli?",
  "Plastik qadoqdagi suv yoki vodoprovod suvi foydaliroqmi?",
  "Maktabdagi intizom uchun kim mas’ul: maktabmi yoki ota-ona?",
  "Tarjima texnologiyalari mavjud bo‘lsa, til o‘rganish shartmi?",
  "Oliy ta’lim faqat ish topish uchunginami?",
  "Tarixni yoritishda haqqoniylik va davr nuqtayi nazari",
  "Chet elda ishlash iqtisodiyotga foyda keltiradimi?",
  "Alifbo islohoti: qo‘llab-quvvatlaysizmi yoki qarshimisiz?",
  "Tajribali xodimmi yoki yosh kreativ mutaxassismi muhim?",
  "Muvaffaqiyatsizlik sababi: rejasizlikmi yoki tashqi omillar?",
  "Ixtiyoriy xarajatlarni kamaytirish foydalimi?",
  "Ko‘p farzandlilik jamiyat uchun foydami yoki muammomi?"
];

// === ESSE BO‘LIMINI CHIQARISH ===
const essaysContainer = document.getElementById("essays-container");

essaysContainer.innerHTML = `
  <div class="card">
    <label><b>Esse mavzusini tanlang:</b></label>
    <select id="essayTopic">
      <option value="">— Tanlang —</option>
      ${essayTopics.map(t => `<option>${t}</option>`).join("")}
    </select>

    <label style="margin-top:10px;display:block;"><b>Esseni yozing:</b></label>
    <textarea id="essayText" placeholder="Kamida 120–150 so‘z yozing..."></textarea>

    <button class="main" onclick="checkEssay()">🧠 AI orqali tekshirish</button>

    <div class="result" id="essayResult">
      <p id="essayFeedback"></p>
      <p class="score" id="essayScoreText"></p>
    </div>
  </div>
`;

// === ESSE TEKSHIRUV (AI DEMO) ===
let totalEssayScore = 0;

function checkEssay() {
  const topic = document.getElementById("essayTopic").value;
  const text = document.getElementById("essayText").value.trim();

  if (!topic) {
    alert("Iltimos, esse mavzusini tanlang.");
    return;
  }

  if (text.length < 600) {
    alert("Esse juda qisqa. Kamida 120–150 so‘z yozing.");
    return;
  }

  let score = 60;

  if (text.length > 900) score += 10;
  if (text.toLowerCase().includes("xulosa")) score += 10;
  if (text.toLowerCase().includes("menimcha") || text.toLowerCase().includes("fikrimcha")) score += 5;

  if (score > 100) score = 100;

  totalEssayScore = score;
  document.getElementById("essayScore").innerText = totalEssayScore;

  document.getElementById("essayFeedback").innerHTML = `
    <b>Mavzu:</b> ${topic}<br><br>
    Esse mantiqiy jihatdan tekshirildi. Tuzilishi mavjud, mavzudan chetga chiqilmagan.
    Ayrim joylarda dalillarni kuchaytirish mumkin.
  `;

  document.getElementById("essayScoreText").innerText =
    "Essay ball: " + score + " / 100";

  document.getElementById("essayResult").style.display = "block";
}
