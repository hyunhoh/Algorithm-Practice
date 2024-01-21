/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let max = ''

    for(let i=0; i<num.length-2; i++) {
        if(num[i] === num[i+1] && num[i+1] === num[i+2]) {
            const sub = num[i].repeat(3)
            if(sub > max) max = sub
        }
    }

    return max
};