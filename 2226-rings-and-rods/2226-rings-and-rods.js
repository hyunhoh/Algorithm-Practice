/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const hash = {};

    for(let i=0; i<rings.length; i+=2) {
        if(hash[rings[i+1]]) {
            hash[rings[i+1]] += rings[i];
        } else {
            hash[rings[i+1]] = rings[i]
        }
    }

    let result = 0;

    for(key in hash) {
        if(hash[key].includes('B') && hash[key].includes('R') && hash[key].includes('G')) {
            result++
        }
    }

    return result;
};