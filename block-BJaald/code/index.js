class Queue {
  // your code goes here
  constructor(capacity = Infinity) {
    this.storage = [];
    this.capacity = capacity;
    this.isNext = null;
  }

  get length() {
    return this.storage.length;
  }
  set length(para) {}

  enqueue(ele) {
    if (this.length === this.capacity) {
      alert('Queue is overflowing');
    } else {
      this.storage.push(ele);
      return this.length;
    }
  }
  dequeue() {
    if (this.length === 0) {
      alert('stack is empty');
    } else {
      return this.storage.shift();
    }
  }
  peek() {
    return this.storage[0];
  }
  printAll() {
    this.storage.forEach((ele) => {
      console.log(ele);
    });
  }
  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

const queue2 = new Queue(4);

queue2.enqueue(10);
queue2.enqueue(12);
queue2.enqueue(120);
queue2.enqueue(1);
// queue2.enqueue(4); // alert Queue is overflowing

console.log(queue2.dequeue()); // => 10
console.log(queue2.length); // => 3
console.log(queue2.dequeue()); // => 12
console.log(queue2.length); // => 2

console.log(queue2.peek()); // 120

console.log(queue2.isEmpty()); // false

console.log(queue2.dequeue()); // => 120

console.log(queue2.peek()); // => 1

console.log(queue2.dequeue()); // => 1

console.log(queue2.isEmpty()); // true

console.log(queue2.storage);
