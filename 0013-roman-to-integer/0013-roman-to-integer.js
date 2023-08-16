/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    return [...s].reduce((acc, cur, idx, arr) => {
        if(cur === 'I') {
            if(arr[idx+1] === 'V' || arr[idx+1] === 'X') {
                return acc - 1;
            }
            return acc + 1;
        }
        if(cur === 'V') {
            return acc + 5;
        }
        if(cur === 'X') {
            if(arr[idx+1] === 'L' || arr[idx+1] === 'C') {
                return acc - 10;
            }
            return acc + 10;
        }
        if(cur === 'L') {
            return acc + 50;
        }
        if(cur === 'C') {
            if(arr[idx+1] === 'D' || arr[idx+1] === 'M') {
                return acc - 100;
            }
            return acc + 100;
        }
        if(cur === 'D') {
            return acc + 500;
        }
        if(cur === 'M') {
            return acc + 1000;
        }
    }, 0)  
};