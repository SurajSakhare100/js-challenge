// Activity 1: Basic Closure
// Task 1: Define `outerFunction` to create a closure and create a closure with `outerFunction`
function outerFunction() {
    let outerVariable = "I am from the outer scope";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const myClosure = outerFunction();
  myClosure();
  
  // Activity 2: Counter
  // Task 2: Define `createCounter` to create a closure with a counter and increment the counter
  function createCounter() {
    let count = 0;
    return {
      increment: function () {
        count++;
        console.log(count);
      },
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  counter.increment();
  counter.increment();
  
  // Activity 3: Unique ID and Greeting Closure
  // Task 3: Define `createUniqueId` to create a closure with unique IDs and generate IDs
  function createUniqueId() {
    let lastId = 0;
    return function increment() {
      console.log("lastId : " + lastId++);
      console.log("Current Id : " + lastId);
    };
  }
  
  const uniqueCounterId = createUniqueId();
  uniqueCounterId();
  uniqueCounterId();
  
  // Task 4: Define `createGreet` to create a closure for greeting and use it
  function createGreet() {
    return function greet(name) {
      console.log("welcome " + name);
    };
  }
  
  const greetClosure = createGreet();
  greetClosure("Alice");
  greetClosure("Bob");
  
  // Activity 4: Function Array and Item Module
  // Task 5: Define `createFunctionArray` to create an array of closures and call them
  function createFunctionArray(size) {
    let functionArray = [];
  
    for (var i = 0; i < size; i++) {
      functionArray.push(
        (function (index) {
          return function () {
            console.log(`Function at index ${index}`);
          };
        })(i)
      );
    }
  
    return functionArray;
  }
  
  const functions = createFunctionArray(5);
  functions[0]();
  functions[1]();
  functions[2]();
  functions[3]();
  functions[4]();
  
  // Task 6: Define `ItemModule` for managing items using closures and manipulate items
  const ItemModule = (function () {
    let items = [];
    let nextId = 1;
  
    function findItemIndex(id) {
      return items.findIndex((item) => item.id === id);
    }
  
    return {
      addItem: function (name) {
        const newItem = { id: nextId++, name };
        items.push(newItem);
        console.log(`Added item: ${newItem.name} with ID: ${newItem.id}`);
        return newItem;
      },
      removeItem: function (id) {
        const index = findItemIndex(id);
        if (index !== -1) {
          const removedItem = items.splice(index, 1)[0];
          console.log(
            `Removed item: ${removedItem.name} with ID: ${removedItem.id}`
          );
          return removedItem;
        } else {
          console.log(`Item not found with ID: ${id}`);
          return null;
        }
      },
      getItem: function (id) {
        const index = findItemIndex(id);
        return index !== -1 ? items[index] : null;
      },
      listItems: function () {
        console.log("Items:", items);
        return items;
      },
    };
  })();
  
  const item1 = ItemModule.addItem('Item 1');
  const item2 = ItemModule.addItem('Item 2');
  ItemModule.listItems();
  console.log(ItemModule.getItem(1));
  ItemModule.removeItem(1);
  ItemModule.listItems();
  
  // Activity 5: Memoization
  // Task 7: Define a memoized factorial function and use it
  const memoizedFactorial = (function () {
    const cache = {};
    return function factorial(n) {
      if (n < 0) {
        return null;
      }
      if (n in cache) {
        console.log(`Fetching from cache for ${n}`);
        return cache[n];
      }
      if (n === 0 || n === 1) {
        return 1;
      }
      const result = n * factorial(n - 1);
      cache[n] = result;
      console.log(`Calculating and caching result for ${n}`);
      return result;
    };
  })();
  
  console.log(memoizedFactorial(5));
  console.log(memoizedFactorial(5));
  console.log(memoizedFactorial(6));
  
  // Task 8: Define a simple memoization function and use it with a simple add function
  function memoize(fn) {
    const cache = {};
  
    return function(...args) {
      const key = args.join(',');
      if (cache[key]) {
        console.log(`Fetching from cache for arguments: ${args}`);
        return cache[key];
      }
  
      const result = fn(...args);
      cache[key] = result;
      console.log(`Calculating and caching result for arguments: ${args}`);
      return result;
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(2, 3));
  console.log(memoizedAdd(2, 3));
  console.log(memoizedAdd(5, 7));
  