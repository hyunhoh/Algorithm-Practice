/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const seq = [0, 1]

    if(n === 0 || n === 1) {
        return seq[n]
    }

    for(let i=2; i<=n; i++) {
        seq.push(seq[i-1] + seq[i-2])
    }

    return seq[seq.length-1]
};