/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const countSetBits = num => num.toString(2).replaceAll('0', '').length

    const prime = [2, 3, 5, 7, 11, 13, 17, 19]

    let count = 0

    for(left; left <= right; left++) {
        const bits = countSetBits(left)

        if(prime.includes(bits)) count++
    }

    return count
};