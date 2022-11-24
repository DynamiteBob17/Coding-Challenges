/*

  Task:

    Write a function binarySearch that implements the binary search algorithm
    on an array, returning the path you took (each middle value comparison)
    to find the target in an array.

    The function takes a sorted array of integers and a target value as input.
    It returns an array containing (in-order) the middle value you found at
    each halving of the original array until you found the target value.
    The target value should be the last element of the return array. If value
    is not found, return the string 'Value Not Found'.

    For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4, 6, 5].

*/

function binarySearch(searchList, value) {
  let arrayPath = [];

  (function bs(items) {
    const len = items.length;

    if (len === 0) {
      arrayPath = 'Value Not Found';
      return;
    }

    let midIdx = ~~(len / 2) - (len % 2 === 0 ? 1 : 0);
    let mid = items[midIdx];
    arrayPath.push(mid);

    if (value > mid) bs(items.slice(midIdx + 1, len));
    else if (value < mid) bs(items.slice(0, midIdx));
    else return;
  })(searchList);

  return arrayPath;
}

const testArray = [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70];

console.log(binarySearch(testArray, 1));
