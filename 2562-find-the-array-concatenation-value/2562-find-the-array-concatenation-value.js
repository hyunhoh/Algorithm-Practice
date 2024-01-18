/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let ans = 0

    for(let i=0, j=nums.length-1; i<=j; i++, j--) {
        ans += (i !== j) ? +('' + nums[i] + nums[j]) : nums[i]
    }

    return ans
};