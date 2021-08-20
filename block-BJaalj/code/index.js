function binarySearch(arr, val) {
  //  Your code goes here
  let sorted = arr.sort((a, b) => {
    return a - b;
  });

  let start = 0;
  let end = sorted.length - 1;
  while (start <= end) {
    console.log('step');
    let middle = start + Math.floor((end - start) / 2);
    if (val === sorted[middle]) {
      return val;
    } else if (val < sorted[middle]) {
      end = middle - 1;
    } else if (val > sorted[middle]) {
      start = middle + 1;
    }
  }
  return -1;
}

// TEST

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
console.log(binarySearch(list, 66)); // 9
console.log(binarySearch(list, 166)); // -1
console.log(binarySearch(list, 54)); // 8
