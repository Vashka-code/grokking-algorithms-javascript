function binarySearch(sortedArr, value) {
  let low = 0;
  let high = sortedArr.length - 1;

  while (low <= high) {
    let middle = Math.round((low + high) / 2);
    let guess = sortedArr[middle];

    if (guess === value) {
      return middle;
    } else if (guess > value) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return null;
}

const arrayForTest = [1, 3, 5, 7, 9];
