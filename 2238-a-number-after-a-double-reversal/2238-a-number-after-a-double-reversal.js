/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    const str = String(num)

    return str[str.length-1] !== '0' || str.length === 1 ? true : false
};