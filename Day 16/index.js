// Activity 1
// Task 1
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5)); 
// console.log(factorial(6)); 

// Task 2
function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(5)); 
// console.log(fibonacci(7)); 

// Activity 2
// Task 3

function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

// console.log(sumArray([1, 2, 3, 4, 5])); 

// Task 4

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxOfRest = findMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(findMax([3, 5, 7, 2, 8])); // Output: 8


// Activity 3
// Task 5

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

console.log(reverseString("hello")); // Output: "olleh"

// Task 6

function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
}

console.log(isPalindrome("Hello World")); // Output: false

console.log(isPalindrome("NITIN")); // Output: true



// Activity 4
// Task 7

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4));

// Task 8

function countOccurrences(arr, target, index = 0) {
  if (index >= arr.length) {
    return 0;
  }

  const currentMatch = arr[index] === target ? 1 : 0;

  return currentMatch + countOccurrences(arr, target, index + 1);
}

console.log(countOccurrences([3, 5, 7, 2, 8, 5, 5], 5)); 
console.log(countOccurrences([1, 2, 3, 4, 5], 10));      
