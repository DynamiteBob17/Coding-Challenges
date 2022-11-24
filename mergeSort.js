function mergeSort(arr) {
  if (arr.length === 1) return arr;

  let firstHalf, secondHalf = arr.splice(arr.length / 2); 

  firstHalf = mergeSort(arr);
  secondHalf = mergeSort(secondHalf);

  return merge(firstHalf, secondHalf);
}

function merge(arr1, arr2) {
  const merged = [];

  while (arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      spliceAndPush(arr2, merged);
    } else if (arr2.length === 0) {
      spliceAndPush(arr1, merged);
    } else {
      if (arr1[0] > arr2[0]) {
        spliceAndPush(arr2, merged);
      } else {
        spliceAndPush(arr1, merged);
      }
    }
  }

  return merged;
}

function spliceAndPush(toSplice, pushTo) {
  pushTo.push(toSplice.splice(0, 1)[0]);
}
