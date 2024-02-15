/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b) => a-b)

    for(let i = 0, j = nums.length-1; i < j;) {
        if(nums[i] + nums[j] === 0) return nums[j]

        else if(Math.abs(nums[i]) < Math.abs(nums[j])) j--
        
        else i++
    }

    return -1
};