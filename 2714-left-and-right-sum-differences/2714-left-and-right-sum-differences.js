/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let rightSum = nums.reduce((acc, cur) => acc + cur, 0)
    let leftSum = 0;

    return nums.map(e => {
        rightSum -= e;
        let res = rightSum - leftSum;
        leftSum += e;
        return Math.abs(res);
    })
};