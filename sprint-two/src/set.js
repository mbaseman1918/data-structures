var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this._storage[item] === undefined) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

setPrototype.count = function(item) {
  var counter = 0;
  for (var key in this._storage) {
    if (this._storage[key] === item) {
      counter++;
    }
  }
  return counter;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
