// Reverse a String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Solution
// - use two pointers
// - traverse the array starting at the end and start. then swap the values 
// - return the string array at the end

let s = ["h","e","l","l","o"];

var reverseString = function (s) {
  // input character array
  // return the reversed array]

  let r = s.length - 1;
  let l = 0

  while(l < r) {
    let temp = s[l]
    s[l] = s[r];
    s[r] = temp;
    r--;
    l++;
  }

  return s;
};

console.log(reverseString(s));

// Binary Search
// key: usually, the array is already sorted and asking for O9log n) time complexity

/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

/*
Solution:
- create three pointers high, low, mid
- using a while loop, ajust the pointer based on where the target is
- return -1 if target is not found


*/

let nums = [-1,0,3,5,9,12], target = 2
var search = function(nums, target) {
    let high = nums.length - 1;
    let low = 0;
    let mid = 0;

    while(low <= high){
        mid = Math.floor(high + low / 2);
        if(target === nums[mid]){
            return mid;
        }

        if(target < nums[mid]) {
            high = mid - 1;
        }

        if(target > nums[mid]){
            low = mid + 1;
        }
    }

    return -1;
};


console.log(search(nums, target))


// move zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// example
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]\

// input array of numbers 
// output, all the zeroes are moved to the end of the array
// apporach: use two pointers, one to check the element in the input and the other for the index of the non zero elements

const num = [0,1,0,3,12]
var moveZeroes = function(nums) {
    let zeroIndex = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[zeroIndex];
            nums[zeroIndex] = nums[i];
            nums[i] = temp;
            zeroIndex++;
        }
    }

    return nums;
}
// how the solution works
// every time you find a non zero value, you swap the values with where you would put it in the front of the array
// example 
/* 
[0,1,0,3,12]
zeroIndex = 0;
i = 0; 

skip bc nums[i] === 0

[0,1,0,3,12]
zeroIndex = 0;
i = 1; 

swap => [1,0,0,3,12]
zeroIndex = 1;


[1,0,0,3,12]
zeroIndex = 1;
i = 3; when i = 3 swap
[1,3,0,0,12]

then continue ... 
*/
console.log(moveZeroes(num));