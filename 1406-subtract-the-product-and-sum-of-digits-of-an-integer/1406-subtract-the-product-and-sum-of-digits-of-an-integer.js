/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const digits = [...String(n)];

    const product = digits.reduce((acc, cur) => acc * cur, 1)
    const sum = digits.reduce((acc, cur) => acc + +cur, 0)

    return product - sum;
};