/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    const digits = [...String(num)].map(e => +e).sort((a,b) => a-b)

    return 10 * (digits[0] + digits[1]) + digits[2] + digits[3]
};