/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash = {}

    for(num of arr) {
        hash[num] = (hash[num] || 0) + 1
    }

    return Object.values(hash).sort((a,b) => a-b).every((e, i, arr) => e !== arr[i+1])
};