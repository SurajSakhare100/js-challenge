// Add Two Numbers
// LeetCode: https://leetcode.com/problems/add-two-numbers/
function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, curr = dummy;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = p !== null ? p.val : 0;
        let y = q !== null ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummy.next;
}

// ListNode Definition
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Longest Substring Without Repeating Characters
// LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]) + 1, left);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Container With Most Water
// LeetCode: https://leetcode.com/problems/container-with-most-water/
function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * currentHeight);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

// 3Sum
// LeetCode: https://leetcode.com/problems/3sum/
function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

// Group Anagrams
// LeetCode: https://leetcode.com/problems/group-anagrams/
function groupAnagrams(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}

// Test cases
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

// Sample Linked Lists: 2 -> 4 -> 3 and 5 -> 6 -> 4
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
let sumList = addTwoNumbers(l1, l2);
console.log('Add Two Numbers:');
printLinkedList(sumList);

// Test case for Longest Substring Without Repeating Characters
let str = "abcabcbb";
console.log('Longest Substring Without Repeating Characters:');
console.log(lengthOfLongestSubstring(str));

// Test case for Container With Most Water
let heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log('Container With Most Water:');
console.log(maxArea(heights));

// Test case for 3Sum
let nums = [-1, 0, 1, 2, -1, -4];
console.log('3Sum:');
console.log(threeSum(nums));

// Test case for Group Anagrams
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log('Group Anagrams:');
console.log(groupAnagrams(strs));
