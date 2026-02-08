const testBlocks = {
  "1-blok (Ot)": [
    {
      q: "Ot so‘z turkumi nimani bildiradi?",
      a: "Predmetni",
      b: "Harakatni",
      c: "Belgini",
      d: "Holatni",
      correct: "a"
    },
    {
      q: "Qaysi biri ot?",
      a: "tez",
      b: "kitob",
      c: "o‘qimoq",
      d: "yashil",
      correct: "b"
    }
  ],

  "2-blok (Fe‘l)": [
    {
      q: "Fe‘l nimani bildiradi?",
      a: "Predmet",
      b: "Belgi",
      c: "Harakat",
      d: "Miqdor",
      correct: "c"
    }
  ]
};

// SELECT ni to‘ldirish
const select = document.querySelector("select");
for (let block in testBlocks) {
  const opt = document.createElement("option");
  opt.value = block;
  opt.textContent = block;
  select.appendChild(opt);
}

// Testlarni chiqarish
select.addEventListener("change", () => {
  const container = document.getElementById("tests-container");
  container.innerHTML = "";

  const tests = testBlocks[select.value];
  if (!tests) return;

  tests.forEach((t, i) => {
    container.innerHTML += `
      <div class="card">
        <p><b>${i + 1}. ${t.q}</b></p>
        <label><input type="radio" name="q${i}"> A) ${t.a}</label><br>
        <label><input type="radio" name="q${i}"> B) ${t.b}</label><br>
        <label><input type="radio" name="q${i}"> C) ${t.c}</label><br>
        <label><input type="radio" name="q${i}"> D) ${t.d}</label>
      </div>
    `;
  });
});
