/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const hash = {}

    for(num of nums) {
        for(int of num) {
            hash[int] = (hash[int] || 0) + 1
        }
    }

    const res = []

    for(key in hash) {
        if(hash[key] === nums.length) res.push(key)
    }

    return res
};