// valid parentheses

const e = require("express");

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const example = "}}}}";
var isVlaid = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i);
    if (current === "[" || current === "{" || current === "(") {
      stack.push(current);
    }

    if (stack.length === 0) return false;

    if (current === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    }

    if (current === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    }
    if (current === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    }
  }
  // if all the pairs were not found
  if (stack.length > 0) return false;

  return true;
};

console.log(isVlaid(example));

// valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// input two strings
// task: check if both of the strings contain the same characters
// output: boolean

var isAnagram = function (s, t) {
  // can use two objects and can compare the count or add one string to an object, compare the keys and check if they exist
  // need to verify lengths are not the same because it does not say that the length are equal

  if (s.length !== t.length) return false;
  let sMap = {};

  for (let char of s) {
    if (sMap[char] === undefined) {
      sMap[char] = 1;
    } else {
      sMap[char]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let current = t.charAt(i);
    if (sMap[current] !== undefined && sMap[current] > 0) {
      sMap[current]--;
    } else {
      return false;
    }
  }

  return true;
};

// ransom note
var canConstruct = function (ransomNote, magazine) {
  //     basically magazine contains certain number of characters
  //     the ransom note can only use characters from the magazien
  //     wil want to make a map of the character frequency of magazine then reconstruct the ransom note
  //     or opposite works too but better space complexity since magazine most likely is greater lenght
  //     since each character from magazine can only be used once in ransome note
  //     maybe consider using a set?

  if (ransomNote.length > magazine.length) return false;

  let magazineMap = {};

  for (const char of magazine) {
    if (magazineMap[char] !== undefined) {
      magazineMap[char]++;
    } else {
      magazineMap[char] = 1;
    }
  }

  for (const char of ransomNote) {
    if (magazineMap[char] !== undefined && magazineMap[char] > 0) {
      magazineMap[char]--;
    } else {
      return false;
    }
  }

  return true;
};

//     time Complexity: O(m) since worst case m is going to be the longest since we create a map
// Spacce Complexity: O(1) since there are never over 26 characters in the alphabet

// climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// example: takes 1 step to go one step up, 2 steps for 2 stairs
// 3 stairs = 3 steps
// basically approave like fibonacci

let stairMap = {
    1: 1, 
    2: 2
}
var climbStairs = function(n) {
//     recursive problem like for fibonacci's number
//     can use a hashmap that is created globally or use iterative bottom up approach
// Time complexity: O(n);
// Space: O(n) because recusrion call stack
    if(stairMap[n] !== undefined) return stairMap[n]
    
    let answer = climbStairs(n - 1) + climbStairs(n - 2);
    stairMap[n] = answer;
    
    return stairMap[n];


    // iterative with no space compexity;


    if(n <=3) {
        return n;
    }

    let prev = 3;
    let prevPrev = 2;
    for(let i = 4; i <= n; i++) {
        let answer = prev + prevPrev;
        prevPrev = prev;
        prev = answer;
    }

    return prev;
    // Time Complexity: O(n);
    // Space: constant
};