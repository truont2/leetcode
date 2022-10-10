// valid parentheses

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