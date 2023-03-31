var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  } else if (this.children.length > 0) {
    var exists = false;
    for (var i = 0; i < this.children.length; i++) {
      if (exists) {
        return true;
      }
      exists = this.children[i].contains(target);
    }
    return exists;
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
