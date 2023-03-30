var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.counterEnter = 0;
  someInstance.counterExit = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
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