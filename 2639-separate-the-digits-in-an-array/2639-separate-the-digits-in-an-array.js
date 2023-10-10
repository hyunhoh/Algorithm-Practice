/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    return nums.reduce((acc, cur) => [...acc, ...String(cur).split('')], [])
};