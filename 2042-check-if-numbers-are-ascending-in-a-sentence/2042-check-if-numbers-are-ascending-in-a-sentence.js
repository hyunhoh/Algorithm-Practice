/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const arr = s.split(' ').filter(e => +e)

    let tmp = 0

    for(num of arr) {
        if(+num > tmp) tmp = +num
        else return false
    }

    return true
};