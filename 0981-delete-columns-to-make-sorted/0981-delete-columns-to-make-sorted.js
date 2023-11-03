/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count = 0

    for(let i=0; i<strs[0].length; i++) {
        let prev = 0

        for(let str of strs) {
            if(str.charCodeAt(i) >= prev) {
                prev = str.charCodeAt(i)
            } else {
                count += 1
                break
            }
        }
    }

    return count
};