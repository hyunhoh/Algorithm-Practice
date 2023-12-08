/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const res = []

    for(let i=0, j=nums.length-1; i<=j;) {
        if(Math.abs(nums[i]) < Math.abs(nums[j])) {
            res.unshift(nums[j]**2)
            j--
        } else {
            res.unshift(nums[i]**2)
            i++
        }
    }

    return res
};