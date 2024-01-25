/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const hash = {}
    let max = -1

    for(let i=0; i<s.length; i++) {
        if(Object.hasOwn(hash, s[i])) {
            if((i - hash[s[i]] - 1) > max) {
                max = i - hash[s[i]] - 1
            }
        } else {
            hash[s[i]] = i
        }
    }

    return max
};