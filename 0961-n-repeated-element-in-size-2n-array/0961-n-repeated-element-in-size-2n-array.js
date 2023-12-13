/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    const hash = {}

    for(num of nums) {
        if(hash[num]) {
            return num
        } else {
            hash[num] = 1
        }
    }
};