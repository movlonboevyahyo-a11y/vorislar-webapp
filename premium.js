function isPremium() {
  return localStorage.getItem("premium") === "true";
}

function setPremium() {
  localStorage.setItem("premium", "true");
  alert("🎉 Premium faollashtirildi");
  location.reload();
}
