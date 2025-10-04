/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const result = s.trim().split(" ")

    return result[result.length - 1].length  
};