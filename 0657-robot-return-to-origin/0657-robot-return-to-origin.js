/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let hor = 0
    let ver = 0

    for(const move of moves) {
        if(move === 'U') ver++
        if(move === 'D') ver--
        if(move === 'L') hor++
        if(move === 'R') hor--
    }

    return hor === 0 && ver === 0
};