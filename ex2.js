function calcAvg(ratings) {
  let sum = 0,
    countOfRatings = 0;
  for (let i = 1; i <= ratings.length; i++) {
    sum += ratings[i - 1] * i;
    countOfRatings += ratings[i - 1];
  }
  printResult(sum / countOfRatings);
}
function printResult(avg) {
  let output = `[${avg.toFixed(2)}]`;
  let round = Math.round(avg);
  switch (round) {
    case 1:
      output += " *";
      break;
    case 2:
      output += " **";
      break;
    case 3:
      output += " ***";
      break;
    case 4:
      output += " ****";
      break;
    case 5:
      output += " *****";
      break;

    default:
      break;
  }
  console.log(output);
}
calcAvg([55, 67, 98, 115, 61]);
calcAvg([0, 2, 0, 1, 23]);
