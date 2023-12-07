/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const sorted1 = target.sort((a,b) => a-b)
    const sorted2 = arr.sort((a,b) => a-b)

    for(let i=0; i<sorted1.length; i++) {
        if(sorted1[i] !== sorted2[i]) return false
    }

    return true
};