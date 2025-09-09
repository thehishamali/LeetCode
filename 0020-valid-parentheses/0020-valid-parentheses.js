/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length > 10**4 || s.length < 1) {
        return "Length is not allowed";
    }
    for (i=0; i < s.length; i++) {
        if (!"(){}[]".includes(s[i])) {
            return false;
        }
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === ")") {
            if (stack.pop() !== "(") {
                return false;
            }
        } else if (s[i] === "}") {
            if (stack.pop() !== "{") {
                return false;
            }
        } else if (s[i] === "]") {
            if (stack.pop() !== "[") {
                return false;
            }
        }
    }
    return stack.length === 0;
}