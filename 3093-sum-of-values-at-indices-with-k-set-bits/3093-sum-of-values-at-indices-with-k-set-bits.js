/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    return nums.reduce((acc, cur, i) => i.toString(2).replaceAll('0', '').length === k ? acc + cur : acc, 0)
};