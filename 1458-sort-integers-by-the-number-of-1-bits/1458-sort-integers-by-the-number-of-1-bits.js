/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a,b) => {
        const abit = a.toString(2).replaceAll('0', '').length
        const bbit = b.toString(2).replaceAll('0', '').length

        return abit === bbit ? a - b : abit - bbit
    })
};