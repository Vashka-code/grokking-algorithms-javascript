// 4.1
function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

const arrForTest = [1, 3, 4, 8];

// console.log(sum(arrForTest));

// 4.2
function countElements(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return 1 + countElements(arr.slice(1));
  }
}

// console.log(countElements(arrForTest));

// 4.3
function max(arr) {
  if (arr.length === 2) {
    return arr[0] > arr[1] ? arr[0] : arr[1];
  }

  let subMax = max(arr.slice(1));

  return arr[0] > subMax ? arr[0] : subMax;
}

// console.log(max(arrForTest));
