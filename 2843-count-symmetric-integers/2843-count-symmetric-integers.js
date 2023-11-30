/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0

    for(low; low <= high; low++) {
        const str = [...(low + '')]

        if(str.length % 2) continue

        else {
        const n = str.length / 2

        str.slice(0, n).reduce((acc, cur) => acc + +cur, 0)
        === str.slice(n).reduce((acc, cur) => acc + +cur, 0) ? count++ : null

        }
    }

    return count
};