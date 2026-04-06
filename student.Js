function calculateAverage(scores) {
  if (!scores || scores.length === 0) return 0;

  const total = scores.reduce((sum, score) => sum + score, 0);
  return total / scores.length;
}

function getGrade(score) {
  if (score >= 80) return 'A';
  if (score >= 60) return 'B';
  if (score >= 40) return 'C';
  return 'F';
}

function isPassed(score) {
  return score >= 50;
}

module.exports = { calculateAverage, getGrade, isPassed };