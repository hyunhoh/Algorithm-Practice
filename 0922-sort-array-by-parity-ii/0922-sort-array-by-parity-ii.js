/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    const res = []
    let evenIdx = 0
    let oddIdx = 1

    for(num of nums) {
        if(num % 2 === 0) {
            res[evenIdx] = num
            evenIdx += 2
        } else {
            res[oddIdx] = num
            oddIdx += 2
        }
    }

    return res
};