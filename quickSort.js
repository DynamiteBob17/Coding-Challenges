function quickSort(arr) {
  (function qs(start, end) {
    if (start >= end) return;

    const pivot = partition(start, end);
    qs(start, pivot - 1);
    qs(pivot + 1, end);
  })(0, arr.length - 1);

  function partition(start, end) {
    let pivot = start;

    for (let i = start + 1, spliced; i <= end; ++i) {
      if (arr[i] <= arr[pivot]) {
        spliced = arr.splice(i, 1)[0];
        arr.splice(pivot, 0, spliced);
        ++pivot;
      }
    }

    return pivot;
  }

  return arr;
}
