/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const expected = [...heights].sort((a,b) => a-b)

    return expected.reduce((acc, cur, idx) => cur !== heights[idx] ? acc + 1 : acc, 0)
};