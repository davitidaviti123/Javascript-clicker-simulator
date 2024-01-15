let score = 0;

function updateScoreDisplay() {
  document.getElementById('p1').innerText = score;
}

function incrementScore() {
  score += 1;
  updateScoreDisplay();
}

function decrementScore() {
if (score > 0) {
score -= 1;
updateScoreDisplay();
}
}

document.getElementById('d1').addEventListener('click', incrementScore);
document.getElementById('d2').addEventListener('click', decrementScore);

updateScoreDisplay();