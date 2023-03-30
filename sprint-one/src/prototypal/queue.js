var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.counterEnter = 0;
  newQueue.counterExit = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.counterEnter] = value;
  this.counterEnter++;
};

queueMethods.dequeue = function() {
  if (this.counterExit < this.counterEnter) {
    var temp = this.storage[this.counterExit];
    delete this.storage[this.counterExit];
    this.counterExit++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.counterEnter - this.counterExit;
};