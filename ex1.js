function accumulatingArray(arr) {
  const result = [];
  arr.forEach((value, index) => {
    result[index] = index == 0 ? value : value + result[index - 1];
  });
  return result;
}
console.log(accumulatingArray([1, 2, 3, 4]));
console.log(accumulatingArray([1, 5, 7]));
console.log(accumulatingArray([1, 0, 1, 0, 1]));
console.log(accumulatingArray([]));
