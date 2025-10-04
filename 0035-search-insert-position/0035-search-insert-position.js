/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const result = [...nums, target].sort((a, b) => a - b)

    return result.indexOf(target)  
};