/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = []

    for(letter of s) {
        if(letter === stack[stack.length-1]) stack.pop()
        else stack.push(letter)
    }

    return stack.join('')
};