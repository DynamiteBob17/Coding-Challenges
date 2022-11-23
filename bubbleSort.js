function bubbleSort(array) {
  const arr = [...array];

  for (let i = 0; i < arr.length - 1; ++i) {
    for (let j = 0; j < arr.length - i - 1; ++j) {
      /*
        - i because on each run through the entire array the element
        with the largest value will go to the end of the subarray
        that equals the array with the last i elements 'cut off'
        because we don't need to check them
      */

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}
