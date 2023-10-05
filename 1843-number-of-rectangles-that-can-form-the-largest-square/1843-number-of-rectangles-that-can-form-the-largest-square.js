/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    const squares = rectangles.map(e => Math.min(...e))

    return squares.filter(e => e === Math.max(...squares)).length
};