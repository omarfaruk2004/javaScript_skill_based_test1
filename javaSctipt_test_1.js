// Coding Challenge #1: Basketball Score
function totalBasketballScore(freeThrows, midRange, threePoints) {
  const args = Array.from(arguments);
  const argsLen = args.length;
  const points = [1, 2, 3];
  let totalScore = 0;
  for (let i = 0; i < argsLen; i++) {
    totalScore += args[i] * points[i];
  }
  return totalScore;
}
const sum = totalBasketballScore(2, 3, 4);
console.log(`Total score is ${sum}`);

// Coding Challenge #2: Computer Store
