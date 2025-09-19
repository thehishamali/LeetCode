/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;

    const romaNums = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    for (let i = 0; i < s.length; i ++) {
        if (!s[i + 1] || romaNums[s[i]] >= romaNums[s[i + 1]]) result += romaNums[s[i]];
        else {
            result += (romaNums[s[i + 1]] - romaNums[s[i]]);
            i ++;
        }
    }

    return result;
};