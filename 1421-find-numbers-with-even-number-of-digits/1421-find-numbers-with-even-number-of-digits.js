/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((acc, cur) => String(cur).length % 2 ? acc : acc + 1, 0)
};