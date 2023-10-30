/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const stack = []  

    for(let op of operations) {
        if(op === '+') {
            const scr = stack[stack.length-1] + stack[stack.length-2]
            stack.push(scr)
        } else if(op === 'D') {
            const scr = stack[stack.length-1] * 2
            stack.push(scr)
        } else if(op === 'C') {
            stack.pop()
        } else {
            stack.push(+op)
        }
    }

    return stack.reduce((acc, cur) => acc + cur, 0)
};