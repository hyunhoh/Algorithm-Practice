/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let depth = 0;

    for(char of s) {
        if(char === '(') {
            stack.push('(')
            if(stack.length > depth) depth = stack.length;
        }
        if(char === ')') stack.pop();
    }

    return depth;
};