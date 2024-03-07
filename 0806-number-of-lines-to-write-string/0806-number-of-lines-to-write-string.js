/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let lines = 1
    let width = 0

    const arr = [...s].map(e => widths[e.charCodeAt() - 97])

    for(let i=0; i<arr.length; i++) {
        if(width + arr[i] > 100) {
            width = 0
            lines++
        }
            width += arr[i]
    }

    return [lines, width]


};