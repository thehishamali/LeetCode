/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = String(x);

    return str.split("").reverse().join("") === str;
};