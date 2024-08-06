// Activity 1
// Task 1,2,3
function bubbleSort(arr) {
    let n = arr.length;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Reduce the number of elements to check
    }

    return arr;
}

// Example usage
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble Sort: " + bubbleSort(array));


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Example usage
console.log("Selection Sort: " + selectionSort(array));

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[Math.floor(arr.length / 2)];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue; // Skip the pivot element
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage
console.log("Quick Sort: " + quickSort(array));


// Activity 2
// Task 4,5

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the target element
        }
    }
    return -1; // Target element not found
}

// Example usage
let newarray = [10, 20, 30, 40, 50];
let target = 30;
console.log("Linear Search: " + linearSearch(newarray, target)); // Output: 2

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the target element
        } else if (arr[mid] < target) {
            left = mid + 1; // Narrow the search to the upper half
        } else {
            right = mid - 1; // Narrow the search to the lower half
        }
    }

    return -1; // Target element not found
}

// Example usage
let sortedArray = [10, 20, 30, 40, 50];
let targetValue = 40;
console.log("Binary Search: " + binarySearch(sortedArray, targetValue)); // Output: 3

// Activity 3
// Task 6,7

function countOccurrences(text, substring) {
    let count = 0;
    let pos = text.indexOf(substring);

    while (pos !== -1) {
        count++;
        pos = text.indexOf(substring, pos + 1);
    }

    return count;
}

// Example usage
let text = "hello world, hello universe";
let substring = "hello";
console.log("Count Occurrences: " + countOccurrences(text, substring)); // Output: 2



function longestSubstringWithoutRepeatingCharacters(s) {
    let n = s.length;
    let seen = new Map();
    let start = 0;
    let maxLength = 0;
    let maxSubstring = '';

    for (let end = 0; end < n; end++) {
        if (seen.has(s[end])) {
            start = Math.max(seen.get(s[end]) + 1, start);
        }
        seen.set(s[end], end);
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            maxSubstring = s.slice(start, end + 1);
        }
    }

    return maxSubstring;
}

// Example usage
let str = "abcabcbb";
console.log("Longest Substring Without Repeating Characters: " + longestSubstringWithoutRepeatingCharacters(str)); // Output: "abc"

function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n; // Handle cases where k is greater than the length of the array
    if (k < 0) {
        k = k + n; // Handle negative rotation
    }
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// Example usage
let arrays = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
console.log("Rotated Array: " + rotateArray(arrays, k)); // Output: [5, 6, 7, 1, 2, 3, 4]


function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1 or arr2
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

// Example usage
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
console.log("Merged Sorted Arrays: " + mergeSortedArrays(array1, array2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
