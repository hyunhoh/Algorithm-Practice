/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    return nums.sort((a,b) => a-b).reduce((acc, cur, idx) => cur === target ? [...acc, idx] : acc, [])
};