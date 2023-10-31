/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    const hash = {}

    for(let val of num) {
        hash[val] = (hash[val] || 0) + 1
    }

    for(let i=0; i<num.length; i++) {
        if((hash[i] || 0) !== +num[i]) {
            return false
        }
    }

    return true
};