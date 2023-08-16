/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    // if(s.length % 2) return false;

    for(l of s) {
        if(l === '(' || l === '[' || l === '{') {
            stack.push(l);
        } else {
            if(l === ')' && stack[stack.length-1] === '('
            || l === ']' && stack[stack.length-1] === '['
            || l === '}' && stack[stack.length-1] === '{') {
                stack.pop();
            }
            else {
                return false;
            }
        }
    }

    return !stack.length;
};