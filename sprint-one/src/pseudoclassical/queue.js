var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counterEnter = 0;
  this.counterExit = 0;
  this.storage = {};
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.counterEnter] = value;
  this.counterEnter++;
};

Queue.prototype.dequeue = function() {
  if (this.counterExit < this.counterEnter) {
    var temp = this.storage[this.counterExit];
    delete this.storage[this.counterExit];
    this.counterExit++;
    return temp;
  }
};

Queue.prototype.size = function() {
  return this.counterEnter - this.counterExit;
};