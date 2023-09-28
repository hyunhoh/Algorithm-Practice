/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((ele, idx) => ({name: ele, height: heights[idx]})).sort((a, b) => b.height - a.height).map(ele => ele.name)
};