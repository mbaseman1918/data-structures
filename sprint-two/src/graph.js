

// Instantiate a new graph
var Graph = function(value) {
  this.nodes = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var exists = false;
  for (var key in this.nodes) {
    if (key === node.toString()) {
      exists = true;
    }
  }
  return exists;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.nodes[node]) {
    var targetNode = this.nodes[node][key];
    var currentNode = this.nodes[key][node];
    this.removeEdge(targetNode, currentNode);
  }
  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode][toNode] !== undefined;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

Graph.prototype.printCurrentNodes = function() {
  return Object.keys(this.nodes);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
graph = {
  a: [b,c,d],
  b: [a],
  c: [a,d],
  d: [a, c]
}

*/