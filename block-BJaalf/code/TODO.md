## Read this article

Read the article https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea to better understand recursion.

## Solve the following problems using recursion:

- Write a function named `repeater` that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

```js
function repeater(char, output = '') {
  if (output.length === 5) {
    return output;
  }

  output = output + char;

  return repeater(char, output);
}

// Test
console.log(repeater('g')); // 'ggggg'
console.log(repeater('j')); // 'jjjjj'
```

- Write a function named `loop` that loops through the numbers n down to 0. Each time it will log the value.

```js
function loop(val) {
  if (val === 0) {
    return console.log(0);
  }
  console.log(val);
  val--;

  return loop(val);
}

// Test
console.log(loop(10)); // 10 9 8 7 6 5 4 3 2 1 0
console.log(loop(4)); // 4 3 2 1 0
```

- Write a function `countTo` that takes one argument limit and logs the number from 0 to limit

```js
function countTo(val, start = 0) {
  if (start === val) {
    return console.log(start);
  }
  console.log(start);
  start++;

  return countTo(val, start);
}

// Test
console.log(countTo(10)); // 0 1 2 3 4 5 6 7 8 9 10
console.log(countTo(4)); // 0 1 2 3 4
```

- Write a function `exponent` that takes two arguments base, and expo. Using a while loop return the exponent value of the base. For example if the base if `4` and expo is `3` the output will be `4 * 4 * 4` i.e 64.

```js
function exponent(b, e, times = 1, ans = 1) {
  if (times === e) {
    return console.log(ans * b);
  }
  ans = ans * b;

  times++;

  return exponent(b, e, times, ans);
}

// Test
console.log(exponent(2, 3)); // 8
console.log(exponent(3, 3)); // 27
```

- Write a function factorial that take 1 argument 'number' and gives the factorial of the number. For example if the number of 4 the output will be `4 * 3 * 2 * 1` i.e 24.

```js
function factorial(num, ans = 1) {
  if (num === 1) {
    return console.log(ans);
  }
  ans = ans * num;

  num--;

  return factorial(num, ans);
}

// Test
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120
```

- Write a function `recursiveExponent` that takes two arguments base, and expo. It will return the output using recursion. For example if the base if `4` and expo is `3` the output will be `4 * 4 * 4` i.e 64.

```js
function recursiveExponent(b, e, times = 1, ans = 1) {
  if (times === e) {
    return console.log(ans * b);
  }
  ans = ans * b;

  times++;

  return recursiveExponent(b, e, times, ans);
}

// Test
console.log(recursiveExponent(2, 3)); // 8
console.log(recursiveExponent(3, 3)); // 27
```

- Write a function `recursiveReverse` that takes an array and uses recursion to return its contents in reverse

```js
function recursiveReverse(arr, newArr = []) {
  if (arr.length === 0) {
    return console.log(newArr);
  }
  newArr.push(arr.pop());

  return recursiveReverse(arr, newArr);
}

// Test
console.log(recursiveReverse([1, 3, 4, 5])); // [5, 4, 3, 1]
console.log(recursiveReverse([5, 3, 2, 1])); // [1, 2, 3, 5]
```
