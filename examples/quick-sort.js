// Interesting note:
// Sort method in Javascript (V8) already using quicksorting and other methods for sorting depending on size etc.
// In js we can use a sort method and in majority cases don't think about performance.

// The JavaScript Array.sort() method implementation can vary across different JavaScript engines, including the one used in Chromium (V8 engine).
// In V8, the Array.sort() method generally uses a combination of insertion sort and either merge sort or quicksort, depending on factors such as the size
// of the array being sorted and the data types of the elements.

function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[0];

  let less = [];
  let greater = [];

  for (let item of arr.slice(1)) {
    if (item < pivot) less.push(item);
    if (item > pivot) greater.push(item);
  }

  return quicksort(less) + [pivot] + quicksort(greater);
}

const arrForTest = [10, 5, 2, 3];
// console.log(quicksort(arrForTest));
