/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    return s.trimEnd().length - s.trimEnd().lastIndexOf(' ') - 1;
};