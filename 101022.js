// valid parentheses

const e = require("express");

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


const example = "}}}}";
var isVlaid = function(s) {
    let stack = [];

    for(let i = 0; i < s.length; i++) {
        let current = s.charAt(i);
        if(current === "[" || current === "{" || current === "(") {
            stack.push(current);
        }

        if(stack.length === 0) return false;

        if(current === "}") {
            if(stack.pop() !== "{"){
                return false;
            }
        }

        if(current === ")") {
            if(stack.pop() !== "("){
                return false;
            }
        }
        if(current === "]") {
            if(stack.pop() !== "["){
                return false;
            }
        }
    }
    // if all the pairs were not found
    if(stack.length > 0) return false;

    return true;
}

console.log(isVlaid(example));

// valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// input two strings
// task: check if both of the strings contain the same characters
// output: boolean

var isAnagram = function(s, t) {
    // can use two objects and can compare the count or add one string to an object, compare the keys and check if they exist

    let sMap = {};

    for(let char of s) {
        if(sMap[char] === undefined) {
            sMap[char] = 1;
        } else {
            sMap[char]++;
        }
    }

    for(let i = 0; i < t.length; i++) {
        let current = t.charAt(i);
        if(sMap[current] !== undefined && sMap[current] > 0) {
            sMap[current]--;
        } else {
            return false;
        }
    }

    return true;
}
