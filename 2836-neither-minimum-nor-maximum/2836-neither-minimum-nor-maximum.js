/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    return nums.sort((a,b) => a-b).length <= 2 ? -1 : nums[1]  
};