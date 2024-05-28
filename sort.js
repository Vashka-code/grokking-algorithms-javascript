//  Solution from a book

function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

function selectionSort(arr) {
  const newArr = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    let smallest = findSmallest(arr);
    newArr.push(...arr.splice(smallest, 1));
  }

  return newArr;
}

// console.log(selectionSort([5, 3, 6, 2, 10]));

//  Solution with a modern syntax

function modernSelectionSort(arr) {
  return arr.sort((a, b) => a - b);
}

// console.log(modernSelectionSort([5, 3, 6, 2, 10]));
