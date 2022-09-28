// twoSum II

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

// let numbers = [0,0,11,15], target = 0;

// var twoSum = function(numbers, target) {
//     let right = numbers.length - 1;
//     let left = 0;

//     while(left < right) {
//         let sum = numbers[left] + numbers[right];

//         if(sum === target) {
//             return [left + 1, right + 1]
//         } else if(sum < target) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return null;
// };
// two pointers or double for loop
// console.log(twoSum(numbers, target));


// Isomorphic String 
/* 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

// Input: s = "egg", t = "add" => output true

// var isIsomorphic = function(s, t) {
//     // store everything into two map

//     let charMapS ={};
//     let charMapT = {}
//     for(let i = 0; i < s.length; i++) {
//         // if seeing for the first time
//         if(charMapS[s.charAt(i)] === undefined && charMapT[t.charAt(i)] === undefined) {
//             charMapS[s.charAt(i)] = t.charAt(i);
//             charMapT[t.charAt(i)] = s.charAt(i)
//         } 

//         // Case 2: Ether mapping doesn't exist in one of the dictionaries or Mapping exists and
//         // it doesn't match in either of the dictionaries or both 
//         if((charMapS[s.charAt(i)] !== t.charAt(i) && charMapT[t.charAt(i)] !== s.charAt(i))){
//             return false;
//         }
//     }

//     return true;
// };

// apporach: put words into separate maps
// check if its the first time encountering the character anad save it
// if it is already saved, make sure the mapping is mapping to the same character from both sides
// let s = "egg", t = "add"
// console.log(isIsomorphic(s, t));

// reverse Linked list 

// var reverseList = function(head) {
//     let current = head;
//     let nextNode = null;
//     let previousNode = null;
    
//     while(current !== null) {
//         next = current.next;
//         current.next = previousNode;
        
//         previousNode = current;
//         current = next;
//     }
    
//     return previousNode;
// };

// search Insert Position
/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity. */

// must be binary search if they want it in O9Logn);;

let nums = [1,3,5,6], target = 5;

var searchInsert = function(nums, target) {
    //     must be binary search so two pointers and mid needed
    // move pinter based on value of target
        let low = 0;
        let high = nums.length - 1;
        
        while(low < high) {
            let mid = Math.floor((low + high) / 2);
    
            if(target < nums[mid]) {
                high = mid - 1;
            } 
            
            if(target > nums[mid]){
                low = mid + 1;
            }
        
            
            if(nums[mid] === target) {
                return mid;
            } 
        }
        
    //     when low and mid land of the same spot
    // check if its lower or higher index
        if(target <= nums[low]) {
            return low;
        } else {
            return low + 1;
        }
        
        
    };