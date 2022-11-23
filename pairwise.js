/*

Task:

  Given an array arr, find element pairs whose sum equal
  the second argument arg and return the sum of their indices.
  
  You may use multiple pairs that have the same numeric elements
  but different indices. Each pair should use the lowest possible
  available indices. Once an element has been used it cannot be
  reused to pair with another element.

*/

function pairwise(arr, arg) {
  const used = [];
  arr.forEach(a => { used.push(false) });
  
  let sum = 0;

  for (let i = 0; i < arr.length - 1; ++i) {
    if (used[i]) continue;

    for (let j = i + 1, add; j < arr.length; ++j) {
      if (used[j]) continue;

      add = arr[i] + arr[j];

      if (add === arg) {
        sum += i + j;
        used[i] = used[j] = true;
        break;
      }
    }
  }

  return sum;
}

console.log(pairwise([7, 9, 11, 13, 15], 20));
