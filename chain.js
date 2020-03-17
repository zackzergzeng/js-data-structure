function ChainNode(value, next){
  this.value = value;
  this.next = next;
}

function Chain(chain){
  this.firstNode;
  this.listSize = 0;
  if (chain && chain.listSize > 0) {
    var sourceNode = chain.firstNode;
    this.firstNode = new ChainNode(sourceNode.value);
    this.listSize++;
    var targetNode = this.firstNode;
    sourceNode = sourceNode.next;
    while(sourceNode){
      targetNode.next = new ChainNode(sourceNode.value);
      targetNode = targetNode.next;
      sourceNode = sourceNode.next;
      this.listSize++;
    }
  }
}

Chain.prototype.get = function (index) {
  if (index < 0 || index >= this.listSize) {
    return null;
  }
  var count = 0;
  var node = this.firstNode;
  if (!node) {
    return this.firstNode.value;
  }
  do {
    if (count === index) {
      return node.value;
    } else {
      node = node.next;
      count++;
    }
  } while (node.next);
};

Chain.prototype.indexOf = function (element) {
  var count = 0;
  var node = this.firstNode;
  do {
    if (node.value === element) {
      return count;
    } else {
      node = node.next;
      count++;
    }
  } while (node);
};

Chain.prototype.insert = function (index, element) {
  if (index < 0 || index > this.listSize) {
    console.log("error");
    return;
  }
  if (index === 0) {
    this.firstNode = new ChainNode(element, this.firstNode);
  } else {
    var node;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    var nextNode = node.next;
    node.next = new ChainNode(element, nextNode);
  }
  this.listSize++;
};

Chain.prototype.delete = function (index) {
  if (index < 0 || index > this.listSize) {
    console.log("error");
    return;
  }
  if (index === 0) {
    this.firstNode = this.firstNode.next;
  } else {
    var node;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    node.next = node.next.next;
  }
  this.listSize--;
};

Chain.prototype.output = function () {
  var node = this.firstNode;
  var string = "" + node.value;
  while (node.next) {
    string += "->";
    string += node.next.value;
    node = node.next;
  }
  console.log(string);
};

Chain.prototype.clear = function () {
  this.firstNode = null;
  this.listSize = 0;
};

Chain.prototype.push = function (element) {
  var node = this.firstNode;
  while (node.next) {
    node = node.next;
  }
  node.next = new ChainNode(element);
};

//// test code
// var c = new Chain();
// c.insert(0, 1);
// c.output();
// c.insert(0, 2);
// c.output();
// c.insert(0, 3);
// c.output();
// var d = new Chain(c);
// d.output();
// console.log(d.indexOf(1));
// d.delete(0);
// d.output();