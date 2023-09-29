/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let result = ''

    for(let i=0; i<s.length;) {
        if(s[i+2] === '#') {
            result += String.fromCharCode(+(s[i] + s[i+1]) + 96)
            i+=3
        } else {
            result += String.fromCharCode(+s[i] + 96)
            i++
        }
    }

    return result
};