/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let matches = 0;

    while(n > 1) {
        if(n % 2) {
            matches += Math.floor(n / 2);
            n = Math.floor(n / 2) + 1;
        } else {
            matches += (n / 2);
            n = n / 2;
        }
    }

    return matches;
};