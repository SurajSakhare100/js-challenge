// Median of Two Sorted Arrays
// LeetCode: https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1, nums2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }
    while (i < nums1.length) merged.push(nums1[i++]);
    while (j < nums2.length) merged.push(nums2[j++]);

    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

// Merge K Sorted Lists
// LeetCode: https://leetcode.com/problems/merge-k-sorted-lists/
function mergeKLists(lists) {
    if (lists.length === 0) return null;

    let compare = (a, b) => a.val - b.val;
    let minHeap = new MinHeap(compare);
    
    for (let list of lists) {
        if (list !== null) minHeap.add(list);
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (minHeap.size() > 0) {
        let node = minHeap.poll();
        current.next = node;
        current = current.next;
        if (node.next !== null) minHeap.add(node.next);
    }

    return dummy.next;
}

class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    add(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    poll() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();
        
        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        
        return root;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        let length = this.heap.length;
        while (index * 2 + 1 < length) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let smallest = index;
            if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[smallest]) < 0) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[smallest]) < 0) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}

// Trapping Rain Water
// LeetCode: https://leetcode.com/problems/trapping-rain-water/
function trap(height) {
    if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }

    return water;
}

// N-Queens
// LeetCode: https://leetcode.com/problems/n-queens/
function solveNQueens(n) {
    let results = [];
    let board = Array.from({ length: n }, () => Array(n).fill('.'));

    function isValid(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function backtrack(row) {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0);
    return results;
}

// Word Ladder
// LeetCode: https://leetcode.com/problems/word-ladder/
function ladderLength(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0) {
        let [word, length] = queue.shift();

        if (word === endWord) return length;

        for (let i = 0; i < word.length; i++) {
            let originalChar = word[i];
            for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
                let newChar = String.fromCharCode(charCode);
                if (newChar === originalChar) continue;

                let newWord = word.slice(0, i) + newChar + word.slice(i + 1);
                if (wordSet.has(newWord)) {
                    wordSet.delete(newWord);
                    queue.push([newWord, length + 1]);
                }
            }
        }
    }

    return 0;
}

// ListNode Definition (for completeness)
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Test cases
// Median of Two Sorted Arrays
let nums1 = [1, 3];
let nums2 = [2];
console.log('Median of Two Sorted Arrays:');
console.log(findMedianSortedArrays(nums1, nums2));

let nums1_2 = [1, 2];
let nums2_2 = [3, 4];
console.log(findMedianSortedArrays(nums1_2, nums2_2));

// Merge K Sorted Lists
let list1 = createLinkedList([1, 4, 5]);
let list2 = createLinkedList([1, 3, 4]);
let list3 = createLinkedList([2, 6]);
let lists = [list1, list2, list3];
let mergedList = mergeKLists(lists);
console.log('Merge K Sorted Lists:');
printLinkedList(mergedList);

// Trapping Rain Water
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log('Trapping Rain Water:');
console.log(trap(height));

// N-Queens
let n = 4;
console.log('N-Queens:');
console.log(solveNQueens(n));

// Word Ladder
let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "cog"];
console.log('Word Ladder:');
console.log(ladderLength(beginWord, endWord, wordList));

// Helper functions for linked list
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function printLinkedList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(' -> '));
}
