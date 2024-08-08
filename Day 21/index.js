// Two Sum
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// Reverse Integer
function reverse(x) {
    const sign = Math.sign(x);
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''), 10);
    if (reversed > 2 ** 31 - 1) return 0;
    return sign * reversed;
}

// Palindrome Number
function isPalindrome(x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}

// Valid Parentheses
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Definition for singly-linked list.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Merge Two Sorted Linked Lists
function mergeTwoLists(l1, l2) {
    // Create a dummy node to simplify the merging process
    let dummy = new ListNode();
    let current = dummy;

    // Traverse both lists
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining elements from either list
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next;
}

// Example usage for Two Sum
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log('Two Sum:', twoSum(nums1, target1)); // Output: [0, 1]

// Example usage for Reverse Integer
const num = 123;
console.log('Reverse Integer:', reverse(num)); // Output: 321

// Example usage for Palindrome Number
const num1 = 121;
console.log('Palindrome Number:', isPalindrome(num1)); // Output: true
const num2 = -121;
console.log('Palindrome Number:', isPalindrome(num2)); // Output: false

// Example usage for Valid Parentheses
const str1 = "()[]{}";
console.log('Valid Parentheses:', isValid(str1)); // Output: true
const str2 = "(]";
console.log('Valid Parentheses:', isValid(str2)); // Output: false

// Example usage for Merge Two Sorted Linked Lists
const l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const l2 = new ListNode(2, new ListNode(4, new ListNode(6)));
const mergedList = mergeTwoLists(l1, l2);

function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + ' ');
        current = current.next;
    }
    console.log();
}

console.log('Merged Linked List:');
printList(mergedList);
