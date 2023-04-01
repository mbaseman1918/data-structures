var BinarySearchTree = function(node) {
  var newBST = Object.create(binarySearchTreeMethods);
  newBST.value = node;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(node) {
  if (node < this.value && this.left === null) {
    this.left = BinarySearchTree(node);
  } else if (node > this.value && this.right === null) {
    this.right = BinarySearchTree(node);
  } else if (node < this.value) {
    this.left.insert(node);
  } else if (node > this.value) {
    this.right.insert(node);
  }
};

binarySearchTreeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  }
  if (this.left !== null && result === false) {
    result = this.left.contains(target);
  }
  if (this.right !== null && result === false) {
    result = this.right.contains(target);
  }
  return result;
};

binarySearchTreeMethods.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }
};

binarySearchTreeMethods.nodeCounter = function() {
  var countNode = 1;
  var countNullNode = 0;
  if (this.left !== null) {
    countNode += this.left.nodeCounter()['nodes'];
  } else {
    countNullNode++;
  }
  if (this.right !== null) {
    countNode += this.left.nodeCounter()['nodes'];
  } else {
    countNullNode++;
  }
  return {'nodes': countNode, 'empty nodes': countNullNode};
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
