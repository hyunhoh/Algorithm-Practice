/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((e, i) => {
        let sum = 0;

        for(let j=0; j<=i; j++) {
            sum += nums[j];
        }

        return sum;
    })
};