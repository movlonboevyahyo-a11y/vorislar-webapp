function openBlock(name) {
  if (!user.premium && name !== 'grammatika') {
    alert("Bu blok Premium uchun!");
    return;
  }
  addScore(10);
  alert(name + " bloki ochildi (testlar keyin qo‘shiladi)");
}
