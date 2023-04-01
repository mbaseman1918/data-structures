

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index)) {
    var alreadyExists = false;
    var updatedArray = [];
    var currentArray = this._storage.get(index);
    for (var i = 0; i < currentArray.length; i++) {
      if (currentArray[i][0] === k) {
        updatedArray.push([k, v]);
      } else {
        updatedArray.push(currentArray[i]);
      }
    }
    if (!alreadyExists) {
      updatedArray.push([k, v]);
    }
    this._storage.set(index, updatedArray);
  } else {
    this._storage.set(index, [[k, v]]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentArray = this._storage.get(index);
  for (var i = 0; i < currentArray.length; i++) {
    if (currentArray[i][0] === k) {
      return currentArray[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentArray = this._storage.get(index);
  var updatedArray = [];
  for (var i = 0; i < currentArray; i++) {
    if (currentArray[i][0] !== k) {
      updatedArray.push(currentArray[i]);
    }
  }
  this._storage.set(index, updatedArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


