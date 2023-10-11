/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const hash = {}
    let sum = 0;

    for(num of nums) {
        hash[num] ? hash[num] += 1 : hash[num] = 1
    }

    for(key in hash) {
        hash[key] === 1 ? sum += +key : null
    }

    return sum
};