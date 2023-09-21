/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rods = '0123456789'

    let count = 0;

    for(rod of rods) {
        if(rings.includes(`B${rod}`) &&
        rings.includes(`G${rod}`) &&
        rings.includes(`R${rod}`)) {
            count++;
        }
    }

    return count
};