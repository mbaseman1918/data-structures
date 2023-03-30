var Queue = function() {
  var someInstance = {};
  var counterEnter = 0;
  var counterExit = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counterEnter] = value;
    counterEnter++;
  };

  someInstance.dequeue = function() {
    if (counterExit < counterEnter) {
      var temp = storage[counterExit];
      delete storage[counterExit];
      counterExit++;
      return temp;
    }
  };

  someInstance.size = function() {
    return counterEnter - counterExit;
  };

  return someInstance;
};
