/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    const eleSum = nums.reduce((acc, cur) => acc + cur, 0)
    const digitSum = nums.reduce((acc, cur) => acc + [...String(cur)].reduce((acc, cur) => acc + +cur, 0), 0)

    return Math.abs(eleSum - digitSum)
};