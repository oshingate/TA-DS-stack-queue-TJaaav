function recursiveReverse(arr, newArr = []) {
  if (arr.length === 0) {
    return console.log(newArr);
  }
  newArr.push(arr.pop());

  return recursiveReverse(arr, newArr);
}

console.log(recursiveReverse([1, 3, 4, 5])); // [5, 4, 3, 1]
console.log(recursiveReverse([5, 3, 2, 1])); // [1, 2, 3, 5]
