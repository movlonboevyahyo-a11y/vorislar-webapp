function submitEssay() {
  if (!canWriteEssay()) {
    alert("Bugungi essay limiti tugadi!");
    return;
  }

  const text = document.getElementById("essayText").value;
  if (text.length < 50) {
    alert("Essay juda qisqa");
    return;
  }

  user.essayUsedToday++;
  const score = Math.floor(Math.random() * 30) + 70;
  document.getElementById("essayResult").innerText =
    `AI bahosi: ${score}/100`;

  addScore(score);
}
