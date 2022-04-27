function completeSquare(matrix = [[]]) {
  if (matrix.length == matrix[0].length || matrix.length == 0) {
    return matrix;
  }
  let lengthCol = matrix.length;
  let lengthRow = matrix[0].length;
  if (lengthCol > lengthRow) {
    for (let i = 0; i < lengthCol - lengthRow; i++) {
      for (let j = 0; j < lengthCol; j++) {
        matrix[j].push(0);
      }
    }
  } else {
    for (let i = 0; i < lengthRow - lengthCol; i++) {
      let temp = new Array(lengthRow).fill(0);
      matrix.push(temp);
    }
  }
  return matrix;
}
console.log(
  completeSquare([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
console.log(
  completeSquare([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
  ])
);
console.log(completeSquare([[2, 5]]));

console.log(
  completeSquare([
    [2, 5],
    [1, 7],
  ])
);
