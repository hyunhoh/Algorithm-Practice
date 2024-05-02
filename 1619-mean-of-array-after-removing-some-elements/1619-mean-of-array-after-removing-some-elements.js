/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a-b)

    const remain = arr.slice(arr.length / 100 * 5, arr.length - (arr.length / 100 * 5))

    return remain.reduce((acc, cur) => acc + cur) / remain.length
};