/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xor = x ^ y
    let hamming = 0

    for(let bit of xor.toString(2)) {
        if(bit === '1') hamming++
    }

    return hamming
};