class Stack {
  // your code goes here
  constructor(capacity = Infinity) {
    this.storage = {};
    this.capacity = capacity;
    this.isNext = null;
  }

  get length() {
    return Object.keys(this.storage).length;
  }
  set length(para) {}

  add(ele) {
    if (this.length === this.capacity) {
      alert('Queue is overflowing');
    } else {
      if (this.length === 0) {
        this.storage[0] = ele;
        this.isNext = 0;
      } else {
        let lastIndex = Object.keys(this.storage)[this.length - 1];
        this.storage[Number(lastIndex) + 1] = ele;
      }
      return this.length;
    }
  }
  remove() {
    if (this.length === 0) {
      alert('stack is empty');
    } else {
      delete this.storage[this.isNext];

      this.isNext = this.isNext + 1;
      return 'deleted';
    }
  }
  peek() {
    return this.storage[this.isNext];
  }
  printAll() {
    let arr = Object.keys(this.storage);
    arr.forEach((ele) => {
      console.log(this.storage[ele]);
    });
  }
  isEmpty() {
    return Object.keys(this.storage).length === 0 ? true : false;
  }
}

const stack = new Stack();

stack.add(10);
stack.add(12);
stack.add(120);
stack.add(1);
stack.add(4);

console.log(stack.remove()); // => 4
// console.log(stack.length); // => 4
// console.log(stack.remove()); // => 1
// console.log(stack.length); // => 3

// console.log(stack.peek()); // 120

// console.log(stack.isEmpty()); // false

// console.log(stack.remove()); // => 120

// console.log(stack.add(100)); // 3

// console.log(stack.peek()); // => 100

// console.log(stack.remove()); // => 100
// console.log(stack.remove()); // => 12
// console.log(stack.remove()); // => 10

// console.log(stack.isEmpty()); // true

console.log(stack.storage);
console.log(stack.peek());
