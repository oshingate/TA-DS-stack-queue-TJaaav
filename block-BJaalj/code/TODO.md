## Go through the tasks given below and complete

- Write a function called `linearSearch` which accepts an array and a value. Using the linear search algorithm search for the value. If you find the value return the index of the element otherwise return -1. Olso write teh

```js
function linearSearch(arr, val) {
  //  Your code goes here

  for (let i = 0; i < arr.length; i++) {
    console.log('try no', i);
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// TEST

const list = [12, 45, 48, 5, 451, 2, 34, 43, 54, 66];
console.log(linearSearch(list, 66)); // 9
console.log(linearSearch(list, 166)); // -1
console.log(linearSearch(list, 54)); // 8
```

- Write a function called `binarySearch` which accepts an array and a value. Using the binary search algorithm search for the value. If you find the value return the index of the element otherwise return -1. Make sure to use the binary search algorithm.

```js
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
```

- Compare the worst case complexity (Big O Notation) of linear search and binary search. Compare linear search and binary search

- Assume you have a list of `240,000` items and we want to search for a particular value. In the worst case situation how many times we will run the loop in the case of binary search algorithm and linear search algorithm.
