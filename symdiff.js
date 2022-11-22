/*

Task:

  Find symmetrical difference between 2 or more arrays of integers.

*/

function sym(...args) {
  if (args.length <= 1) return args.flat();

  let diff = [];
  diff = subtract(args[0], args[1], diff);

  return sym(subtract(args[1], args[0], diff), ...args.slice(2));
}

function subtract(arr1, arr2, diff) {
  let diffCopy = [...diff];

  for (let i = 0, element; i < arr1.length; ++i) {
    element = arr1[i];

    if (!arr2.includes(element) && !diffCopy.includes(element)) {
      diffCopy.push(element);
    }
  }

  return diffCopy;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));
