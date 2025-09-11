/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let lower = s.toLowerCase();
    let result = "";

    for (char of lower) {
        if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) result += char;
    }

    return result.split("").reverse().join("") === result;
};