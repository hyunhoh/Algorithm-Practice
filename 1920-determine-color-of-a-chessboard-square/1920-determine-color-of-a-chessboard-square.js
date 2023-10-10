/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    const letter = ['b', 'd', 'f', 'h']

    if(coordinates[1] % 2) {
        return letter.includes(coordinates[0]) ? true : false
    }
    return letter.includes(coordinates[0]) ? false : true
};