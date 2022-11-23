function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; ++i) {
    for (let j = 0; j < array.length - i - 1; ++j) {
      /*
        - i because on each run through the entire array the element
        with the largest value will go to the end of the subarray
        that equals the array with the last i elements 'cut off'
        because we don't need to check them
      */

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
}