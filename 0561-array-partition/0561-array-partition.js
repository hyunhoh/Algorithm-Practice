/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a,b) => b-a).reduce((acc, cur, idx) => idx % 2 ? acc + cur : acc, 0)
};