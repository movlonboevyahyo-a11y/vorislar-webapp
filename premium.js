let user = {
  premium: false,
  score: 0,
  essayUsedToday: 0
};

const PREMIUM_REWARDS = [40, 20, 10];

function buyPremium() {
  user.premium = true;
  updateProfile();
  alert("Premium faollashtirildi!");
}

function addScore(base) {
  if (user.premium) {
    const bonus = PREMIUM_REWARDS[Math.floor(Math.random() * 3)];
    user.score += base + bonus;
  } else {
    user.score += base;
  }
  updateProfile();
}

function canWriteEssay() {
  return user.premium || user.essayUsedToday < 1;
}

function updateProfile() {
  document.getElementById("userStatus").innerText =
    user.premium ? "Premium ✅" : "Bepul";

  document.getElementById("userScore").innerText = user.score;
  document.getElementById("essayLimit").innerText =
    user.premium ? "Cheksiz" : "1 ta / kun";
}
