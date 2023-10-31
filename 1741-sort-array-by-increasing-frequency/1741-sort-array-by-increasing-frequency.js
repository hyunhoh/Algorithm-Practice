/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const hash = {}

    for(let num of nums) {
        hash[num] = (hash[num] || 0) + 1
    }

    return nums.sort((a, b) => hash[a] === hash[b] ? b-a : hash[a] - hash[b])

};