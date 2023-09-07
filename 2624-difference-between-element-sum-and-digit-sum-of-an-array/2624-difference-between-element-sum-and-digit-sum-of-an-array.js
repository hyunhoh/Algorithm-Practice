/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const eleSum = nums.reduce((acc, cur) => acc + cur, 0)
    const digitSum = nums.join('').split('').reduce((acc, cur) => acc + +cur, 0)

    return Math.abs(eleSum - digitSum)
};