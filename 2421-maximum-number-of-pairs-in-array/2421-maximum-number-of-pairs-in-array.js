/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    const hash = {}
    let count = 0

    for(let num of nums) {
        if(hash[num]) {
            count++
            delete hash[num]
        } else {
            hash[num] = 1
        }
    }

    return [count, Object.keys(hash).length]
};