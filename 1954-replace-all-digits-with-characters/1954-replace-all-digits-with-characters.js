/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    const arr = [...s]

    for(let i=1; i<arr.length; i+=2) {
        arr[i] = String.fromCharCode(arr[i-1].charCodeAt() + +arr[i])
    }

    return arr.join('')
};