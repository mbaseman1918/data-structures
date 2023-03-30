class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counterEnter = 0;
    this.counterExit = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.counterEnter] = value;
    this.counterEnter++;
  }

  dequeue() {
    if (this.counterExit < this.counterEnter) {
      var temp = this.storage[this.counterExit];
      delete this.storage[this.counterExit];
      this.counterExit++;
      return temp;
    }
  }

  size() {
    return this.counterEnter - this.counterExit;
  }
}
