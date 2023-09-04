/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    return [...String(num)].reduce((acc, cur) => num % cur ? acc : acc + 1, 0)
};