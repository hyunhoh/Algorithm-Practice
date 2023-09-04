/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    // R이나 L 개수가 늘어난 만큼 R 이나 L 개수가 늘어나면 split이 가능하다.
    let count = 0;
    let r = 0;
    let l = 0;

    for(char of s) {
        if(char === 'R') r++;
        if(char === 'L') l++;
        if(r === l) {
            count++;
            r = 0;
            l = 0;
        }
    }

    return count;
};