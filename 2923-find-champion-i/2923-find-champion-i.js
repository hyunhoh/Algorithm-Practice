/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
    for(let i=0; i<grid.length; i++) {
        if(grid[i].reduce((acc, cur) => acc + cur) === grid.length-1) return i
    }
};