/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const output = [];

    arr.forEach((e, i) => {
        output.push(fn(e, i))
    })

    return output;
};