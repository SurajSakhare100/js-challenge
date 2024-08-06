// Activity 1
// Task 1

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Task 2

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  // Add a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // Remove a node from the list
  remove(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
      }
      current.next = current.next.next;
      this.size--;
    }
  }

  // Find a node in the list
  find(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    return current;
  }

  // Convert the list to an array for easy viewing
  toArray() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    return elements;
  }

  // Print the list
  print() {
    console.log(this.toArray().join(" -> "));
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.print(); // Output: 1 -> 2 -> 3

list.prepend(0);
list.print(); // Output: 0 -> 1 -> 2 -> 3

list.remove(2);
list.print(); // Output: 0 -> 1 -> 3

console.log(list.find(1)); // Output: Node { value: 1, next: Node { value: 3, next: null } }
console.log(list.find(4)); // Output: null


// Activity 2
// Task 3,4

class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    // Push a new value onto the stack
    push(value) {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    // Pop a value off the stack
    pop() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      const poppedNode = this.top;
      this.top = this.top.next;
      this.size--;
      return poppedNode.value;
    }
  
    // Peek at the top value of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Stack is empty");
        return null;
      }
      return this.top.value;
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the stack
    getSize() {
      return this.size;
    }
  
    // Print the stack
    print() {
      let current = this.top;
      const elements = [];
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  }
  const stack = new Stack();

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.print(); // Output: 3 -> 2 -> 1
  
  console.log(stack.pop()); // Output: 3
  stack.print(); // Output: 2 -> 1
  
  console.log(stack.peek()); // Output: 2
  stack.print(); // Output: 2 -> 1
  
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.getSize()); // Output: 2
  
  stack.pop();
  stack.pop();
  console.log(stack.isEmpty()); // Output: true
  stack.print(); // Output: Stack is empty
    
// Activity 3
// Task 5,6
class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
  
    // Enqueue a new value to the end of the queue
    enqueue(value) {
      const newNode = new Node(value);
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.size++;
    }
  
    // Dequeue a value from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      const dequeuedNode = this.front;
      this.front = this.front.next;
      this.size--;
      if (this.isEmpty()) {
        this.rear = null;
      }
      return dequeuedNode.value;
    }
  
    // Peek at the front value of the queue without removing it
    peek() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
      return this.front.value;
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the size of the queue
    getSize() {
      return this.size;
    }
  
    // Print the queue
    print() {
      let current = this.front;
      const elements = [];
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      console.log(elements.join(' -> '));
    }
  }

  const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1 -> 2 -> 3

console.log(queue.dequeue()); // Output: 1
queue.print(); // Output: 2 -> 3

console.log(queue.peek()); // Output: 2
queue.print(); // Output: 2 -> 3

console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize()); // Output: 2

queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true
queue.print(); // Output: Queue is empty

// Activity 4
// Task 7,8

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a value into the binary tree
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // In-order traversal of the binary tree
    inOrder(node, callback) {
      if (node !== null) {
        this.inOrder(node.left, callback);
        callback(node.value);
        this.inOrder(node.right, callback);
      }
    }
  
    // Pre-order traversal of the binary tree
    preOrder(node, callback) {
      if (node !== null) {
        callback(node.value);
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
      }
    }
  
    // Post-order traversal of the binary tree
    postOrder(node, callback) {
      if (node !== null) {
        this.postOrder(node.left, callback);
        this.postOrder(node.right, callback);
        callback(node.value);
      }
    }
  
    // Find the minimum value in the binary tree
    findMin(node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node;
    }
  
    // Find the maximum value in the binary tree
    findMax(node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node;
    }
  
    // Find a value in the binary tree
    find(node, value) {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        return this.find(node.left, value);
      } else if (value > node.value) {
        return this.find(node.right, value);
      } else {
        return node;
      }
    }
  
    // Remove a value from the binary tree
    remove(value) {
      this.root = this.removeNode(this.root, value);
    }
  
    removeNode(node, value) {
      if (node === null) {
        return null;
      }
      if (value < node.value) {
        node.left = this.removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = this.removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        const temp = this.findMin(node.right);
        node.value = temp.value;
        node.right = this.removeNode(node.right, temp.value);
        return node;
      }
    }
  }

  const tree = new BinaryTree();

tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

// In-order traversal
console.log('In-order traversal:');
tree.inOrder(tree.root, value => console.log(value));

// Pre-order traversal
console.log('Pre-order traversal:');
tree.preOrder(tree.root, value => console.log(value));

// Post-order traversal
console.log('Post-order traversal:');
tree.postOrder(tree.root, value => console.log(value));

// Find minimum and maximum values
console.log('Minimum value:', tree.findMin(tree.root).value);
console.log('Maximum value:', tree.findMax(tree.root).value);

// Find a value
console.log('Find 6:', tree.find(tree.root, 6));

// Remove a value
tree.remove(10);
console.log('After removing 10:');
tree.inOrder(tree.root, value => console.log(value));
