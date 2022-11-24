function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    for (let j = i - 1, curr = i; j >= 0; --j) {
      if (arr[j] > arr[curr]) {
        [arr[j], arr[curr]] = [arr[curr], arr[j]];
        curr = j;
      } else {
        break;
      }
    }
  }

  return arr;
}
